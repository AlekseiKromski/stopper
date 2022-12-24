<template>
  <div class="row justify-content-center icon-block">
    <div class="col-12 d-flex justify-content-center">
      <BIconArrowDownCircle class="icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextStep"
}
</script>

<style scoped>
.icon{
  color: #FFB800;
  height: 37px;
  width: 37px;
  transition: 0.3s;
}
.icon-block{
  margin: 37px 0px 37px 0px;
  animation-name: show-animation;
  animation-duration: 0.6s;
}
.icon:hover{
  height: 47px;
  width: 47px;
  transition: 0.3s;
}

</style>