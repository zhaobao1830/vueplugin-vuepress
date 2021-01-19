<template>
  <div @click="button">button</div>
</template>

<script>
  export default {
    name: 'button-demo-01',
    methods: {
      button() {
        console.log('点击')
      }
    }
  }
</script>

<style scoped>

</style>
