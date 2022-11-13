<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <n-button>naive-ui</n-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {NButton} from 'naive-ui'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NButton
  }
}
</script>
