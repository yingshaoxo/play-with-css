<script lang="ts" setup>
import { reactive, withDefaults, computed } from 'vue'

// type Props = {
//   operationType: OperationType
//   whichToOperateOn: WhichToOperateOn
// }

// const props = withDefaults(defineProps<Props>(), {
//   operationType: OperationType.Add,
//   whichToOperateOn: WhichToOperateOn.LeafNode,
// })

const dict = reactive({
  data: {
  },
  functions: {},
})

</script>

<template>
  <div class="fatherBox">
    hi
  </div>
</template>

<style lang="scss">
.fatherBox {}
</style>