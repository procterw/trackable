<template>
  <h1>
    {{ $route.params.trackableId }}
    {{ selectedTrackable }}
  </h1>
</template>

<script>
export default {
  name: "ViewTrackable",
  computed: {
    selectedTrackable () {
      // const params = 
      // return 'testset';
      return this.$store.getters.selectedTrackable;
    }
  }
}
</script>
