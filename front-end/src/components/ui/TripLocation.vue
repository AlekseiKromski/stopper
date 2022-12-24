<template>
  <div class="col-12">
    <div class="stop-location row p-0 m-0 justify-content-center">
      <div class="row p-0">
        <div class="col-12 p-0">
          <form class="ps-2">
            <div class="mb-1">
              <label for="stopName">Trips:</label>
            </div>
            <div class="form-group d-flex justify-content-between align-items-center">
              <input type="text" class="form-control w-100 me-3" id="stopName">
              <button-select/>
            </div>
          </form>
        </div>
      </div>
      <div class="row align-items-end info p-0">
        <div class="col-6 p-0 info-text">#Trip name#</div>
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
import ButtonSelect from "@/components/ui/elements/ButtonSelect";
export default {
  name: "TripLocation",
  components: {
    "button-main": Button,
    "button-select": ButtonSelect
  }
}
</script>

<style scoped>
.stop-location{
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(24, 25, 28, 0.25);
  border-radius: 16px;
  padding: 34px!important;
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