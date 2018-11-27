<template>
  <div class="home-view">
    <TrackableList />
  </div>
</template>

<script>
// @ is an alias to /src
import TrackableList from "@/components/TrackableList/TrackableList.vue";
import * as aT from '@/store/modules/trackableList/actionTypes';

export default {
  name: "home",
  components: {
    TrackableList
  },
  created() {
    this.$store.dispatch(aT.GET_TRACKABLE_LIST);
  },
};
</script>
