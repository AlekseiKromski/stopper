<template>
  <div class="row p-0 m-0 justify-content-between py-3">
    <div class="col-6">
      <h1 class="d-flex flex-column">
        <span class="d-flex">
          Sto<span class="word">p<div class="animation"><img src="../../assets/bus.gif" class="animation" alt=""></div>p</span>er</span>
        <small>
          Estonian bus stations
        </small>
      </h1>

    </div>
    <div class="col-4 d-flex justify-content-end align-items-center">
      <button-main :action="clearAll">Clear all</button-main>
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/elements/Button"
import {mapActions} from "vuex";

export default {
  name: "Navbar",
  components: {
    'button-main': Button
  },
  methods: {
    ...mapActions(['clearAll'])
  }
}
</script>

<style scoped>
h1{
  font-size: 38px;
  margin: 0px;
  cursor: pointer;
  padding: 0px;
  transition: 0.4s;
}
h1 span span{
  color: #FFB800;
  font-weight: 500;
}
h1 small{
  font-weight: 300;
  font-size: 16px;
}
.word{
  display: contents;
}
.animation{
  position: relative;
  width: 0%;
  overflow: hidden;
  transition: 0.3s;
}
h1:hover .animation{
  width: 60px!important;
  transition: 0.3s;
}

@keyframes example {
  from {
    width: 40%;
  }
  to {
    width: 60px;
  }
}



</style>