<template>
  <div class="row justify-content-between p-0 m-0 geo-location-position">
    <div class="col-6 align-items-center d-flex">
      <span class="nearest-stop">Nearest stop: <b class="auto-fill">Narva, Paul Kerese</b></span>
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
.auto-fill{
  font-weight: 400;
  color: red;
  font-size: 16px;
  color: #000000;
  cursor: pointer;

  position: relative;
  line-height: 1; /*задаём высоту строки*/
  text-decoration: none; /*убираем подчёркивание*/
}
.auto-fill:after {
  display: block;
  position: absolute;
  left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
  width: 0;/*задаём длинну линии до наведения курсора*/
  height: 2px; /*задаём ширину линии*/
  background-color: #FFB800; /*задаём цвет линии*/
  content: "";
  transition: width 0.3s ease-out; /*задаём время анимации*/
}

.auto-fill:hover:after,
.auto-fill:focus:after {
  width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
}
</style>