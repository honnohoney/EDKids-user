<template>
  <div class="row justify-center items-center">
    <div class="col-sm-8 text-center">
      <q-img width="150px" src="../assets/logo_edkids.png"></q-img>
    </div>
  </div>
  <div class="row q-mt-sm justify-start q-pl-lg">
    <div class="col-sm-5">
      <q-tabs v-model="tab" indicator-color="white" class="text-teal">
        <q-tab class="q-px-sm" name="mails" label="นักเรียน" />
        <q-tab class="q-px-sm" name="alarms" label="คุณครู" />
      </q-tabs>
    </div>
  </div>

  <div class="row justify-center items-start">
    <div class="col-sm-12">
      <q-tab-panels class="transparent no-padding fit" v-model="tab" animated>
        <q-tab-panel name="mails">
          <div class="row fit justify-center">
            <div class="col-sm-11">
              <q-input
                dark
                mask="######"
                color="white"
                label="รหัสนักศึกษา"
                v-model="email"
              ></q-input>
            </div>
            <div class="col-sm-11">
              <!-- v-model="id" -->
              <q-input
                label="วัน/เดือน/ปี เกิด"
                mask="##/##/####"
                fill-mask
                color="white"
                dark
                v-model="password"
                class="text-h6"
                hint="หากวันเกิดหรือเดือนเกิดเป็นเลขเดียวให้เติมเลข '0'"
              />
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="alarms">
          <div class="row fit justify-center">
            <div class="col-sm-11">
              <q-input
                dark
                label="ชื่อผู้ใช้"
                color="white"
                mask="NNNNNNNNNNNNNNN"
              ></q-input>
            </div>
            <div class="col-sm-11">
              <q-input
                dark
                label="รหัสผ่าน"
                color="white"
                mask="NNNNNNNNNNNNNNN"
              ></q-input>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div class="col-sm-10 q-mt-md">
      <q-btn
        unelevated
        :loading="loading"
        style="background-color: #60f4a0"
        class="fit text-blue-grey-14 text-weight-bold"
        label="เข้าสู่ระบบ"
        type="submit"
        @click="onSubmit"
      ></q-btn>
    </div>
  </div>
  <div class="row justify-center q-mt-md">
    <div class="col-sm-10 text-center text-white">
      <p>
        หากท่านพบปัญหาการใช้งานหรือต้องการสมัครการเข้าใช้งานสำหรับครูผู้ควบคุม
        โปรด
        <a href="https://line.me/ti/p/9MYGyI-W25" class="text-primary">
          คลิ๊ก</a
        >
        เพื่อติดต่อ
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMeta, useQuasar } from "quasar";

import { AuthenApi } from "src/api/AuthenApi";
import { useAuthenStore } from "src/stores/authen";

useMeta({ title: "Login Page" });

const { loginProcess } = AuthenApi();

const tab = ref("mails");
const $q = useQuasar();
const authenStore = useAuthenStore();

const email = ref("");
const password = ref("");
const loading = ref(false);
// const showPassword = ref(false);

const onSubmit = async () => {
  // cut / in password

  const day = password.value.substring(0, 2);
  const month = password.value.substring(3, 5);
  const year = password.value.substring(6, 10);
  const result = year + month + day;

  loading.value = true;

  const response = await loginProcess({
    _u: email.value,
    _p: result,
  });

  loading.value = false;

  // if logined success
  if (response && response.userData && response.userData.apiKey) {
    authenStore.setAuthen(response.userData);
    // $q.notify({
    //   message: "Login Success!!",
    //   // avatar: response.userData.picture.path,
    // });

    setTimeout(() => {
      window.location.replace("/#/home");
    }, 500);
  }
};
</script>

<style scoped></style>
