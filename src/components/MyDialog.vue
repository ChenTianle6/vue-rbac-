<template>
  <el-dialog :show-close='false' :title='title' :visible='diglogVisible' center width='500px'>
    <slot></slot>
    <div slot='footer'>
      <el-button size='small' @click='diglogVisible=false'>取消</el-button>
      <el-button size='small' type='success' @click='$emit("determine")'>确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'MyDialog',
  data () {
    return {
      diglogVisible: false
    }
  },
  props: {
    title: {
      type: String,
      default: '分配角色'
    }
  },
  methods: {
    show () {
      this.diglogVisible = true
    },
    hide () {
      this.diglogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
