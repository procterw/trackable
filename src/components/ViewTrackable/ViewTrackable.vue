<template>
  <div>
    <h1 v-if="loading">
      LOADING...
    </h1>
    <h1 v-if="!loading">
      {{ selectedTrackable }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "ViewTrackable",
  computed: {
    selectedTrackable () {
      return this.$store.state.selectedTrackable.properties;
    },
    loading () {
      return this.$store.state.selectedTrackable.loading;
    }
  }
}
</script>
