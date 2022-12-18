<template>
  <div class="button d-flex justify-content-center align-items-center text-center">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>
.button{
  background: #FFB800;
  border-radius: 16px;
  color: white;
  font-weight: 300;
  border-radius: 16px;
  padding: 13px 18px 13px 18px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  border: 2px solid #FFB800;
  transition: 0.3s;
  box-shadow: 2px 2px 8px #ffb8008f;
}

.button:hover{
  transition: 0.3s;
  background: white;
  color: #FFB800;
  border: 2px solid #FFB800;
  box-shadow: 2px 2px 8px #ffb8008f;
}
</style>