<script>
import Create from "./Create.vue";
import Update from "./Update.vue";

export default {
  data() {
    return {
      value: [],
    };
  },

  methods: {
    isEdit() {
      $emit("clicked", alert("siemanko wszystkim"));
    },
  },

  components: {
    Create,
    Update,
  },
};
</script>
