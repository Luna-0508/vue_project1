<script>
import Create from "./Create.vue";
import Update from "./Update.vue";

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
