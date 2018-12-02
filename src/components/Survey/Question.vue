<template>
  <div>
    <router-link :to="`/question/${item.id}`">
      {{ item.name }}
    </router-link>
    <QuestionInput :item="item"/>
  </div>
</template>

<script>
import QuestionInput from './QuestionInput';

export default {
  name: "Question",
  components: {
    QuestionInput
  },
  props: ['item']
};
</script>

<style scoped>
  .name {
    font-size: 16px;
    font-weight: 600;
  }
</style>
