<template>
  <div class="question-view">
    <ViewQuestion />
  </div>
</template>

<script>
import ViewQuestion from '@/components/ViewQuestion/ViewQuestion.vue';
import * as ac from '@/store/modules/selectedQuestion/actionTypes';

export default {
  name: "Question",
  components: { ViewQuestion },
  created() {
    this.$store.dispatch(
      ac.GET_SELECTED_QUESTION,
      this.$route.params.questionId
    );
  },
  destroyed() {
    this.$store.dispatch(ac.CLEAR_SELECTED_QUESTION)
  }
}
</script>
