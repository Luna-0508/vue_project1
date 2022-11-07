<script>
import Create from "./Create.vue";
import Update from "./Update.vue";

import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      value: [],
    };
  },

  props: {
    isEdit: {
      required: true,
    },
  },

  // methods: {
  //   isEdit() {
  //     $emit("clicked", alert("siemanko wszystkim"));
  //   },
  // },

  components: {
    Create,
    Update,
  },
};
</script>
