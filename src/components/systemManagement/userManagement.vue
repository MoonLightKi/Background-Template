<template>
  <div id="user">
    <a-row>
      <a-col :span="4">
        <div class="searchDept">
          <SearchTree></SearchTree>
        </div>
      </a-col>
      <a-col :span="20">
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
              <a-button style="margin-left: 8px"> 状态 <a-icon type="down" /> </a-button>
          </a-dropdown>
          <a-button type="primary" icon="search" style="background: #13CE66; border-color: #13CE66">
            搜索
          </a-button>
          <a-button type="primary" icon="reload" style="background: #FFBA00; border-color: #FFBA00">
            重置
          </a-button>
          </div>
          <div class="searchBar table">
            <a-button type="primary" icon="plus" @click="changeState()">新增</a-button>
            <a-button type="primary" icon="edit" style="background: #89E7B3; border-color: #89E7B3">修改</a-button>
            <a-button type="primary" icon="delete" style="background: #FFA4A4; border-color: #FFA4A4">删除</a-button>
            <a-button type="primary" icon="download" style="background: #FFBA00; border-color: #FFBA00">导出</a-button>
            <Modal :visible1="addCount"></Modal>
          </div>
          <Table></Table>
        </div>
    </a-col>
  </a-row>
  </div>
  
</template>

<script>
import Timepicker from '../utils/TimePicker'
import SearchTree from '../utils/SearchTree'
import Table from '../utils/Table'
import Modal from '../utils/Modal'

export default {
  components: { Timepicker, SearchTree, Table, Modal },
  data() {
    return {
      addCount: 0
    }
  },
  methods: {
    changeState() {
      this.addCount += 1
    }
  }
  
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