<template>
  <div class="home-view">
    <Survey />
  </div>
</template>

<script>
// @ is an alias to /src
import Survey from "@/components/Survey/Survey.vue";
import * as aT from '@/store/modules/survey/actionTypes';

export default {
  name: "home",
  components: {
    Survey
  },
  created() {
    this.$store.dispatch(aT.GET_SURVEY);
  },
};
</script>
