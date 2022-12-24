<template>
  <div class="col-12">
    <div class="stop-location row p-0 m-0 justify-content-center">
      <div class="row p-0">
        <div class="col-6 p-0">
          <input-select
              title="Region name"
              placeholder="Enter region name"
              :tool="regionTool"
              fieldName="name"
          />
        </div>
        <div class="col-6 p-0">
          <input-select
              title="Stop name"
              placeholder="Enter stop name"
              :tool="stopTool"
              fieldName="stop_name"
          />
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
import InputSelect from "@/components/ui/elements/InputSelect";
import {mapGetters, mapActions} from "vuex";
export default {
  name: "StopLocation",
  components: {
    "button-main": Button,
    "input-select": InputSelect
  },
  computed:{
    ...mapGetters(["getAxios", "getRegion"])
  },
  data(){
    return {
      regionTool: {
        search: (item) => {
          if(item != ""){
            this.getAxios.get(`/api/search/region/${item}`).then(
                response => {
                  this.regionTool.dataList = response.data
                }
            )
          }
        },
        save: (item) => this.setForm({
          field: "region",
          value: item
        }),
        dataList: []
      },
      stopTool: {
        search: (item) => {
          if(item != "" && (this.getRegion != null || this.getRegion != undefined)){
            this.getAxios.post(`/api/search/stops/${item}`, {
              region: this.getRegion.id
            }).then(
                response => {
                  this.stopTool.dataList = response.data
                }
            )
          }
        },
        save: (item) => this.setForm({
          field: "stop",
          value: item
        }),
        dataList: []
      }
    }
  },
  methods: {
    ...mapActions(["setForm"])
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
.info{
  margin-top: 27px;
}
.info-text{
  font-weight: 300;
  color: #000000;
}
</style>