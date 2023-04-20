<template>
  <!-- <tbody> -->
  <tr>
    <td class="text-center">{{ res.date }}</td>
    <td class="text-center">{{ res.nick_name }}</td>
    <td class="text-center">{{ res.first_name + " " + res.last_name }}</td>
    <td class="text-center">{{ res.result }}</td>
    <td class="text-center">
      {{ res.note != "" ? res.note : "-" }}
    </td>
  </tr>
  <!-- </tbody> -->

  <!-- <div
    class="text-red text-h5 text-center absolute-center"
    style="transform: translateY(-25%); transform: translateX(-50%)"
  >
    ไม่มีข้อมูลคะแนนความประพฤติในขณะนี้
  </div> -->

  <!-- <div class="text-secondary text-h5 fit q-pa-lg text-center" v-if="res == ''">
    ไม่มีข้อมูลคะแนนความประพฤติในขณะนี้
  </div> -->
</template>

<script setup>
import { ref } from "vue";
// const check = ref(false);
// const stdData = ref({});
const res = defineProps({
  date: String,
  first_name: String,
  last_name: String,
  nick_name: String,
  note: String,
  result: String,
});
// onMounted(() => {
//   if (res) {
//     stdData.value = res;
//     console.log(stdData.value);
//   }
//   if (stdData.value) {
//     check.value = true;
//   } else if (stdData.value != "" || stdData.value != null) {
//     check.value = false;
//   }
// });
</script>

<style scoped></style>
