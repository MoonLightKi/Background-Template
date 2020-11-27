<template>
  <div id="user">
    <a-row>
      <a-col :span="17">
        <div class="searchOther">
          <div class="searchBar">
            <a-input placeholder="输入名称或者邮箱搜索" style="width: 200px"  />
            <Timepicker></Timepicker>
            <a-dropdown>
              <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
                <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
                <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px"> Button <a-icon type="down" /> </a-button>
          </a-dropdown>
          <a-button type="primary" icon="search">
            搜索
          </a-button>
          <a-button type="primary" icon="reload">
            重置
          </a-button>
          </div>
          <div class="searchBar table">
            <a-button type="primary" icon="plus">新增</a-button>
            <a-button type="primary" icon="edit">修改</a-button>
            <a-button type="primary" icon="delete">删除</a-button>
            <a-button type="primary" icon="download">导出</a-button>
          </div>
          <a-card title="角色列表">
            <Table></Table>
          </a-card>
        </div>
    </a-col>
    <a-col :span="7">
      <div class="searchDept">
      <a-card title="菜单分配">
        <a slot="extra" href="#">保存</a>
        <Tree></Tree>
      </a-card>
      </div>
    </a-col>
  </a-row>

  </div>
</template>

<script>
import Timepicker from '../utils/TimePicker'
import Table from '../utils/Table'
import Tree from '../utils/Tree'

export default {
  components: { Timepicker, Table, Tree }
}
</script>

<style scoped>
#user {
  height: 100%;
  width: 100%;
  background: #ffffff;
  padding: 20px;
}

.searchBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding-left: 20px;
}

.searchBar.table {
  width: 40%;
  margin: 10px 0px;
}
</style>