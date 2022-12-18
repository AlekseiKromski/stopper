<template>
  <div class="container-custom">
    <div class="row">
      <navbar/>
      <geo-location/>
      <stop-location/>
      <next-step/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/ui/Navbar";
import GeoLocation from "@/components/ui/GeoLocation";
import StopLocation from "@/components/ui/StopLocation";
import NextStep from "@/components/ui/elements/NextStep";
export default {
  name: "index.vue",
  components: {
    "navbar": Navbar,
    "geo-location": GeoLocation,
    "stop-location": StopLocation,
    "next-step": NextStep
  }
}
</script>

<style scoped>
.container-custom{
  max-width: 960px;
  margin: auto;
}

@media (max-width: 600px) {
  .container-custom {
    margin: 0px 18px 0px 18px;
  }
}

@media (min-width: 600px) {
  .container-custom {
    width: 450px;
  }
}

@media (min-width: 768px) {
  .container-custom {
    width: 550px;
  }
}
@media (min-width: 992px) {
  .container-custom {
    width: 750px;
  }
}
@media (min-width: 1200px) {
  .container-custom {
    width: 750px;
  }
}

</style>