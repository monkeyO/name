<template>
 <header>
        <button @click="ADD_NOTE" :disabled="showBtn" :class="{disabled: showBtn}" class="new">
          <router-link :to="{name:'edit'}">new</router-link>
        </button>
        <button @click="SAVE_NOTE" :disabled="!showBtn" :class="{disabled: !showBtn}" class="save">
          <router-link :to="{name:'save'}">save</router-link>
        </button>
        <button @click="CLEAR_NOTE" class="clear">
          <router-link :to="{name:'save'}">Clear</router-link>
        </button>
  </header>
</template>
<script>
import { mapState , mapMutations } from 'vuex';
export default {
	computed: {
   ...mapState(['showBtn','noetes']),
  },
  methods: {
    ...mapMutations(['ADD_NOTE','SAVE_NOTE','CLEAR_NOTE']),
    },
}
</script>
<style scoped>
	header {
  padding: 30px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
}
header button {
  margin-right: 20px;
  border: 0;
  border-radius: 5px;
}
button.disabled a{
  background-color: #ec971f;
  opacity: 0.2;
  cursor: not-allowed;
}
button.clear a{
  background-color: #540e0c;
}
</style>
