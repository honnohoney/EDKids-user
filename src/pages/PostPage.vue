<template>
  <q-page class="fit">
    <div class="row justify-center" style="height: 620px">
      <div class="col-sm-10">
        <!-- post reload -->

        <div
          class="q-pa-md bg-white q-mb-md"
          v-if="loading == true"
          style="border-radius: 4px"
        >
          <div class="q-gutter-md">
            <q-skeleton type="circle" size="100px" />
            <q-skeleton width="150px" />
            <q-skeleton height="350px" />
          </div>
        </div>

        <div @scroll="handleScroll" style="overflow-y: scroll; height: 90vh">
          <post v-for="item in entityItem" :key="item" v-bind="item" />
        </div>

        <q-spinner
          v-if="loading == true"
          color="secondary"
          class="absolute-center"
          size="3em"
        />

        <!-- <div
          class="text-h5 text-center q-pa-xl text-secondary"
          :v-if="postEntityItem == ''"
          style="background-color: whitesmoke; border-radius: 4px"
        >
          ไม่มี Post ในขณะนี้
        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, defineAsyncComponent } from "vue";
import { useMeta } from "quasar";
import { SocialApi } from "src/api/SocialApi";
import { useRoute } from "vue-router";
import { PostApi } from "src/api/PostApi";
import { teacherKey } from "src/utils/config";

const route = { useRoute };
const { getPost } = PostApi();
const { getImagePost } = PostApi();

const id = localStorage.getItem(teacherKey);
const teacherId = ref(id);
const entityItem = ref(false);
const imageId = ref([]);
const imageEntity = ref([]);
const loading = ref(false);

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  loading.value = true;
  const response = await getPost(teacherId.value);

  if (response) {
    entityItem.value = response.dataList;
  }

  loading.value = false;
};

const post = defineAsyncComponent(() => import("../components/PostList.vue"));
</script>

<style scoped></style>
