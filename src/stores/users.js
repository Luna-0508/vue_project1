import { getBaseTransformPreset } from "@vue/compiler-core";
import { defineStore } from "pinia";

export default useUsers = defineStore("user", {
  state: () => {
    return {
      user: userName,
    };
  },
  actions: {
    setName() {
      userName = prompt("Podaj swoje imię:");
    },

    displayName() {},
  },
});
