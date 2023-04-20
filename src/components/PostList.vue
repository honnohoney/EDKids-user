<template>
  <q-card class="q-a-md q-mb-md">
    <q-card-section>
      <div class="flex">
        <q-avatar size="80px">
          <img
            style="object-fit: cover; object-position: center"
            :src="entityItem?.image?.thumbnail"
            alt=""
          />
        </q-avatar>

        <div class="flex column q-ml-md justify-center items-around">
          <p class="no-margin">
            {{ entityItem?.first_name + " " + entityItem?.last_name }}
          </p>
          <p class="text-grey-6">{{ post?.upload_time }}</p>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section class="q-pa-xs">
      <p class="no-margin q-px-xl q-py-md">
        {{ post?.msg }}
      </p>
    </q-card-section>
    <q-card-section class="q-px-xl q-py-xs">
      <div
        class="wrapper1 self-stretch"
        v-if="checkPictureAmount(imageAmount.length) === 1"
      >
        <div class="grid-item self-stretch">
          <q-img
            :src="image[0]"
            class="fit"
            style="image-rendering: crisp-edges; cursor: pointer"
            @click="one = true"
          ></q-img>
        </div>

        <q-dialog v-model="one">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[0]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- end dialog -->
      </div>

      <div
        class="wrapper2 self-stretch"
        v-if="checkPictureAmount(imageAmount.length) === 2"
      >
        <div class="grid-item self-streth">
          <q-img :src="image[0]" class="fit" @click="one = true"></q-img>
        </div>
        <q-dialog v-model="one">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[0]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>

        <!-- end dialog box picture 1 -->

        <div class="grid-item self-stretch">
          <q-img :src="image[1]" class="fit" @click="two = true"></q-img>
        </div>
        <q-dialog v-model="two">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[1]" class="fit" @click="icon = true" />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>

      <div
        class="wrapper3 self-stretch"
        v-if="checkPictureAmount(imageAmount.length) === 3"
        style="cursor: pointer"
      >
        <!-- start dialog box picture 1 -->
        <div class="grid-item grid-item1 self-stretch">
          <q-img :src="image[0]" class="fit" @click="one = true"></q-img>
        </div>
        <q-dialog v-model="one">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[0]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>

        <!-- end dialog box picture 1 -->

        <!-- start dialog box picture 2 -->

        <div class="grid-item self-stretch">
          <q-img :src="image[1]" class="fit" @click="two = true"></q-img>
        </div>
        <q-dialog v-model="two">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[1]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>

        <!-- end dialog box picture 2 -->

        <!-- start dialog box picture 3 -->

        <div class="grid-item self-stretch">
          <q-img :src="image[2]" class="fit" @click="three = true"></q-img>
        </div>

        <q-dialog v-model="three">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[2]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- end dialog box picture 3 -->
      </div>
      <div
        class="wrapper4 self-stretch"
        v-if="checkPictureAmount(imageAmount.length) === 4"
        style="cursor: pointer"
      >
        <!-- start dialog box picture 1 -->
        <div class="grid-item self-stretch">
          <q-img :src="image[0]" class="fit" @click="one = true"></q-img>
        </div>
        <q-dialog v-model="one">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[0]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>

        <!-- end dialog box picture 1 -->

        <!-- start dialog box picture 2 -->

        <div class="grid-item self-stretch">
          <q-img :src="image[1]" class="fit" @click="two = true"></q-img>
        </div>
        <q-dialog v-model="two">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[1]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>

        <!-- end dialog box picture 2 -->

        <!-- start dialog box picture 3 -->

        <div class="grid-item self-stretch">
          <q-img :src="image[2]" class="fit" @click="three = true"></q-img>
        </div>
        <q-dialog v-model="three">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[2]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- end dialog box picture 3 -->
        <!-- start dialog box picture 4 -->

        <div class="grid-item self-stretch">
          <q-img :src="image[3]" class="fit" @click="four = true"></q-img>
        </div>
        <q-dialog v-model="four">
          <q-card class="fit">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ post?.msg }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="fit">
              <q-img :src="image[3]" class="fit" />
            </q-card-section>
          </q-card>
        </q-dialog>
        <!-- end dialog box picture 4 -->
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { TeacherApi } from "src/api/TeacherApi";
import { PostApi } from "src/api/PostApi";

const one = ref(false);
const two = ref(false);
const three = ref(false);
const four = ref(false);
const toolbar = ref(false);

const { getOneTeacher } = TeacherApi();
const { getImagePost } = PostApi();

const post = defineProps({
  id: Number,
  upload_time: String,
  msg: String,
  create_by: Number,
  img_name: String,
  upload_by: Number,
  post_id: Number,
});

const teacherId = ref(post.create_by);
const entityItem = ref(false);
const image = ref([]);
let imageAmount = ref([]);

onMounted(() => {
  fetchData();
  listImage();
});
const listImage = async () => {
  const respone = await getImagePost(post.id);
  if (respone) {
    for (let i of respone.entity) {
      image.value.push(i.image.thumbnail);
      imageAmount.value.push(Number(image.value.length));
    }
  }
};

const fetchData = async () => {
  const response = await getOneTeacher(teacherId.value);

  if (response) {
    response.entity.forEach((element) => {
      entityItem.value = element;
    });
  }
};

function checkPictureAmount(imageAmount) {
  const amount = imageAmount;
  return amount;
}
</script>

<style scoped>
.wrapper1 {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 450px;
  padding: none;
}
.wrapper2 {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 400px;
  padding: none;
}
.wrapper3 {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 300px 300px;
  padding: none;
}
.wrapper4 {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 300px 300px;
  padding: none;
}
.grid-item1 {
  grid-column: 1/3;
}
</style>
