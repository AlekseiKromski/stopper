<template>
  <div class="col-12">
    <div class="stop-location row p-0 m-0 justify-content-center">
      <div class="row p-0">
        <div class="col-6 p-0">
          <form class="pe-2">
            <div class="form-group">
              <label for="regionName">Region name:</label>
              <input type="text" class="form-control mt-1" id="regionName" placeholder="Enter region name">
            </div>
          </form>
        </div>
        <div class="col-6 p-0">
          <form class="ps-2">
            <div class="form-group">
              <label for="stopName">Stop name:</label>
              <input type="text" class="form-control mt-1" id="stopName" placeholder="Enter stop name">
            </div>
          </form>
        </div>
      </div>
      <div class="row align-items-end info p-0">
        <div class="col-6 p-0 info-text">Narva, paul kerese 13</div>
        <div class="col-6 p-0 d-flex justify-content-end">
          <button-main>
            Next step
          </button-main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/elements/Button"
export default {
  name: "StopLocation",
  components: {
    "button-main": Button
  }
}
</script>

<style scoped>
.stop-location{
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(24, 25, 28, 0.25);
  border-radius: 16px;
  padding: 34px!important;
  margin-top: 22px!important;
}
input:focus{
  color: #212529;
  background-color: #fff;
  border-color: #ffb80000;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(255 184 0 / 57%);
}
.info{
  margin-top: 27px;
}
.info-text{
  font-weight: 300;
  color: #000000;
}
</style>