<template>
  <div>
    <span class="name">{{ item.name }}</span>
    <router-link :to="`/trackable/${item.id}`">
      More!!!!
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TrackableListItem",
  props: ['item']
};
</script>

<style scoped>
  .name {
    font-size: 16px;
    font-weight: 600;
  }
</style>
