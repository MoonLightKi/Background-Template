<template>
<div id="header">
  <div class="Bar">
    <a-icon :style="{fontSize: '24px'}" type="search" />
    <a-icon :style="{fontSize: '24px'}" type="fullscreen" />
    <a-icon :style="{fontSize: '24px'}" type="font-size" />
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-button :style="{width: '24px'}" shape="circle" icon="user"></a-button>
    </a-dropdown>
  </div>

</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#header {
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}

#header .Bar {
  padding-right: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>