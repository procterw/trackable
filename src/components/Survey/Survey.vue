<template>
  <div class="question-list">
    <h1 class="date">
      {{ date }}
    </h1>
    <ul>
      <Question
        v-for="item in surveyQuestions"
        :key="item.id"
        :item="item"
      />
    </ul>
    {{surveyQuestions}}
  </div>
</template>

<script>
import Question from './Question.vue';

export default {
  name: "Survey",
  components: {
    Question
  },
  computed: {
    surveyQuestions () {
      return this.$store.getters.surveyQuestions;
    },
    date () {
      return this.$store.state.survey.date;
    }
  },
} 
</script>

<style scoped>
  .question-list {
    margin-top: 15px;  
  }

  .question-list ul {
    padding: 0;
    margin: 0;
  }

  .date {
    font-size: 18px;
    margin: 5px 0 10px 0;
  }
</style>

