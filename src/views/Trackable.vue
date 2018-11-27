<template>
  <div class="trackable-view">
    <ViewTrackable />
  </div>
</template>

<script>
import ViewTrackable from '@/components/ViewTrackable/ViewTrackable.vue';
import * as ac from '@/store/modules/selectedTrackable/actionTypes';

export default {
  name: "Trackable",
  components: { ViewTrackable },
  created() {
    this.$store.dispatch(
      ac.GET_SELECTED_TRACKABLE,
      this.$route.params.trackableId
    );
  },
  destroyed() {
    this.$store.dispatch(ac.CLEAR_SELECTED_TRACKABLE)
  }
}
</script>
