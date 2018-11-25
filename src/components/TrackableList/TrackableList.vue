<template>
  <div class="trackable-list-component">
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