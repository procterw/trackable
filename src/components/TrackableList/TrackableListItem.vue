<template>
  <div v:on>
    {{ item }}
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

