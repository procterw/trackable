<template>
  <div>
    <h1 v-if="loading">
      LOADING...
    </h1>
    <h1 v-if="!loading">
      {{ selectedQuestion }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "ViewQuestion",
  computed: {
    selectedQuestion () {
      return this.$store.state.selectedQuestion.properties;
    },
    loading () {
      return this.$store.state.selectedQuestion.loading;
    }
  }
}
</script>
