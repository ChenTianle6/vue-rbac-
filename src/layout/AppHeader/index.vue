<template>
  <div class="layout-header-bar">
    <div class="left">
      <button class="my-button"><i class="el-icon-s-fold"></i></button>
    </div>
    <div class="right">
      <Tooltip content="全屏" placement="bottom">
        <Icon :type="iconType" @click="screenfull"/>
      </Tooltip>
      <Tooltip content="关闭所有标签" placement="bottom">
        <Icon type="ios-close-circle-outline" @click="delAllTags"/>
      </Tooltip>
      <Avatar :src="userInfo.avatar" shape="square"/>
      <Dropdown style="margin-left: 20px" trigger="click" @on-click="handlerDropdown">
        <a class="username" href="javascript:void(0)">
          {{ userInfo.username }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="toIndex">控制台</DropdownItem>
          <DropdownItem name="logout">退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.my-button{
  border: none;
  background-color: transparent;
}
i{
  color: white;
  font-size: 26px;
  margin-top: 16px;
}
</style>
