<template>
  <div class="row justify-content-between p-0 m-0 geo-location-position">
    <div class="col-6 align-items-center d-flex">
      <span class="nearest-stop">Nearest stop: <b>Narva, Paul Kerese</b></span>
    </div>
    <div class="col-4 justify-content-end d-flex">
      <button-main>
        <BIconArrowRepeat/>
      </button-main>
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/elements/Button";
export default {
  name: "GeoLocation",
  components: {
    "button-main": Button,
  }
}
</script>

<style scoped>
.geo-location-position{
  margin-top: 82px!important;
}
.nearest-stop{
  font-weight: 300;
  font-size: 18px;
  color: #000000;
}
.nearest-stop b {
  font-weight: 400;
  color: red;
  font-size: 16px;
  color: #000000;
}
</style>