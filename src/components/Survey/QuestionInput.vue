<template>
  <div>
    <div v-if="item.type==='bool'">
      <label for="yes">Yes</label>
      <input
        type="radio"
        id="yes"
        value="1"
        v-model="item.value"
        v-on:change="handleBoolValueChange"
      />
      <label for="no">No</label>
      <input
        type="radio"
        id="no"
        value="0"
        v-model="item.value"
        v-on:change="handleBoolValueChange"
      />
    </div>
    <div v-if="item.type==='number'">
      <input
        type="number"
        v-model="item.value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionInput",
  props: ["item"],
  methods: {
    handleBoolValueChange(e) {
      console.log(Number(e.target.value));
    }
  }
};
</script>
