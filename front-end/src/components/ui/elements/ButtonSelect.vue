<template>
  <div class="button d-flex justify-content-center align-items-center text-center">
    <BIconCaretDownFill class="arrow"/>
  </div>
</template>

<script>
export default {
  name: "ButtonSelect"
}
</script>

<style scoped>
.button{
  background: white;
  border-radius: 16px;
  color: #FFB800;
  font-weight: 300;
  border-radius: 16px;
  padding: 6px 8px 6px 8px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  border: 2px solid #FFB800;
  transition: 0.3s;

}

.button:hover{
  transition: 0.3s;
  background: white;
  color: #FFB800;
  border: 2px solid #FFB800;
}

.arrow{
  font-size: 23px;
  transform: rotate(180deg);
}
</style>