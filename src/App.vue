<template>
  <router-view />
</template>

<script setup>
import { defineComponent } from "vue";
import { useMeta } from "quasar";
import { onMounted } from "vue";
import { useAuthenStore } from "./stores/authen";
import { AuthenApi } from "./api/AuthenApi";
const { getUserDataByAuth } = AuthenApi();
const authenStore = useAuthenStore();

onMounted(() => {
  fetchUserData();
});

const fetchUserData = async () => {
  const response = await getUserDataByAuth();
  if (response && response.userData) {
    authenStore.setAuthen(response.userData);
  }
};
</script>
