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
      <div class="row justify-content-between info p-0">
        <div class="col-6 d-flex justify-content-start align-items-end p-0 info-text" >
          <span v-if="getRegion != null" :class="{
            'show': getRegion != null,
            'path': true
          }">{{ getRegion.name }},

            <span v-if="getStop != null" :class="{
              'show': getStop != null,
              'path stop ms-1': true,
            }"> {{ getStop.stop_name }}</span>

          </span>

        </div>
        <div class="col-6 p-0 d-flex justify-content-end">
          <button-main
            :action="preNextAction"
          >
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
    ...mapGetters(["getAxios", "getRegion", "getStop"])
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
    ...mapActions(["setForm", 'nextStep']),
    preNextAction(){
      this.nextStep({
        stepName: 'bus',
        value: false
      })
      this.nextStep({
        stepName: 'times',
        value: false
      })

      setTimeout(() => {
        if(this.getRegion != undefined && this.getStop != undefined && this.getRegion != null && this.getStop != null ){
          this.nextStep({
            stepName: 'bus',
            value: true
          })
        }
      }, 150)
    }
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
  position: relative;
}
.show{
  transition: 0.2s;
  animation-name: show-animation;
  animation-duration: 0.6s;
}
.path{
  position: absolute;
  z-index: 1;
  width: 250px;
}
</style>