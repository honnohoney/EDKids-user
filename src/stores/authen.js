import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
import { authenKey, studentKey, teacherKey } from "src/utils/config";
export const useAuthenStore = defineStore("authenStore", {
  state: () => ({
    auth: undefined,
  }),
  getters: {},
  actions: {
    setAuthen(userData) {
      if (userData && userData.apiKey) {
        LocalStorage.set(authenKey, userData.apiKey);
        LocalStorage.set(studentKey, userData.std_id);
        LocalStorage.set(teacherKey, userData.teacher_id);
      }

      this.auth = userData;
    },
    logout() {
      this.auth = undefined;
      LocalStorage.remove(authenKey);
    },
  },
});
