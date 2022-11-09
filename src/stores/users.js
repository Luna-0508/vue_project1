import { getBaseTransformPreset } from "@vue/compiler-core";
import { defineStore } from "pinia";

export const useUsers = defineStore("user", {
  state: () => {
    return {
      userName: "",
    };
  },
  actions: {
    setName(name) {
      this.userName = name;
    },

    getName() {
      return this.userName;
    },
  },
});
