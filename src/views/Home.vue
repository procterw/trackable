<template>
  <div class="home-view">
    <TrackableList />
  </div>
</template>

<script>
// @ is an alias to /src
import TrackableList from "@/components/TrackableList/TrackableList.vue";

export default {
  name: "home",
  components: {
    TrackableList
  }
};
</script>
