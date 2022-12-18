<template>
  <div class="row p-0 m-0 justify-content-between py-3">
    <div class="col-6">
      <h1 class="d-flex flex-column">
        <span>
          Sto<span>pp</span>er
        </span>
        <small>
          Estonian bus stations
        </small>
      </h1>
    </div>
    <div class="col-4 d-flex justify-content-end align-items-center">
      <button-main>Need help?</button-main>
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/elements/Button"
export default {
  name: "Navbar",
  components: {
    'button-main': Button
  }
}
</script>

<style scoped>
h1{
  font-size: 38px;
  margin: 0px;
  padding: 0px;
}
h1 span span{
  color: #FFB800;
  font-weight: 500;
}
h1 small{
  font-weight: 300;
  font-size: 16px;
}
</style>