<template>
  <div class="trackable-list">
    <ul>
      <TrackableListItem
        v-for="item in trackableListItems"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import TrackableListItem from './TrackableListItem.vue';

export default {
  name: "TrackableList",
  components: {
    TrackableListItem
  },
  computed: {
    trackableListItems () {
      return this.$store.getters.trackableListItems;
    }
  },
} 
</script>

<style scoped>
  .trackable-list {
    margin-top: 15px;  
  }

  .trackable-list ul {
    padding: 0;
    margin: 0;
  }
</style>

