<template>
  <h3 class="heading-2">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  .heading-2 {
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    color: #313131;
    margin-bottom: 60px;
  }
</style>
