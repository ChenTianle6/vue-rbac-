<template>
  <div class='header-container'>
    <div class='left-container'>
      <div class='left-icon' @click='changeCollapse'>
        <i :class='icon'></i>
      </div>
      <div class='tags-view-container'>
        <tags-view></tags-view>
      </div>
    </div>
    <ToolTip class='tool-tip'></ToolTip>
    <MyDropdown></MyDropdown>
  </div>
</template>

<script>

import MyDropdown from '@/components/MyDropdown'
import { mapMutations } from 'vuex'
import TagsView from '@/components/TagsView'
import ToolTip from '@/components/ToolTip'

export default {
  components: {
    ToolTip,
    TagsView,
    MyDropdown
  },
  methods: {
    ...mapMutations({
      changeCollapse: 'menu/changeCollapse'
    })

  },
  computed: {
    icon () {
      return this.$store.getters.Collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  }
}
</script>

<style lang='scss' scoped>
.header-container {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-container {
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    .left-icon {
      color: #fff;
      font-size: 30px;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .tags-view-container {
      margin-left: 10px;
    }
  }

  .tool-tip {
    position: absolute;
    right: 150px;
  }
}
</style>
