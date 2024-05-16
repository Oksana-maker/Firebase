<template>
  <div>
    <ul>
      <li style="nodecoration" v-for="item in items" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.like }}</p>
      <button @click="incrementLikes(item)">Like</button>
      <button @click="decrementLikes(item)">Dislike</button>
    </li>
    </ul>
  </div>
</template>

<script>
import { query, collection, getDocs, orderBy, updateDoc, doc } from "firebase/firestore"
import { db } from "./firebase.js"

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    async getItems() {
      const q = query(collection(db, 'meaning'), orderBy('like', 'desc'));
      const querySnap = await getDocs(q);
      querySnap.forEach((doc) => {
        this.items.push({ id: doc.id, ...doc.data() });
      });
      console.log(this.items);
    },
    async incrementLikes(item) {
      const docRef = doc(db, 'meaning', item.id);
      const newLikeCount = (item.like || 0) + 1; // Ensure item.like is a number
      await updateDoc(docRef, {
        like: newLikeCount
      });
      item.like = newLikeCount; // Update the local item like count
      this.items.sort((a, b) => b.like - a.like); // Sort the items based on like count
    },
    async decrementLikes(item) {
      const docRef = doc(db, 'meaning', item.id);
      const newLikeCount = (item.like || 0) - 1;
      await updateDoc(docRef, {
        like: newLikeCount
      });
      item.like = newLikeCount
      this.items.sort((a,b)=>b.like-a.like)
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
