<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
    <a-menu-item @click="handleMenuClick('/home')">
      <a-icon type="dashboard" /><span>首页</span>
    </a-menu-item>
      <a-sub-menu v-for="(menuItem, index) in MenuList" :key="index">
        <span slot="title"><a-icon :type="menuItem.IconInfo" /><span>{{menuItem.Name}}</span></span>
        <a-menu-item v-for="(childItem, childIndex) in menuItem.child" :key="childIndex" @click="handleMenuClick(childItem.url, childItem.Name)">
          {{childItem.Name}}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row style="display: flex">
          <a-col :span="20">
            <div class="headerBar">
              <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)"
              />
              <a-breadcrumb :routes="routes">
                <template slot="itemRender" slot-scope="{route, routes, paths}">
                  <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{route.breadcrumbName}}
                  </span>
                  <router-link v-else :to="paths.join('/')">
                    {{route.breadcrumbName}}
                  </router-link>
                </template>
              </a-breadcrumb>
            </div>
          </a-col>
          <a-col :span="4">
            <div class="headerBar">
              <Header></Header>
            </div>
          </a-col>
        </a-row>
      </a-layout-header>

      <div id="tooltip">
        <template v-for="(tag, index) in tags">
          <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
            <a-tag :key="tag" :closable="index !== 0" @close="handleClose(tag)">
              {{ `${tag.slice(0, 20)}...` }}
            </a-tag>
          </a-tooltip>
          <a-tag v-else :key="tag" :closable="index !== 0" @close="handleClose(tag)">
            {{ tag }}
          </a-tag>
        </template>
      </div>

      <a-layout-content class="content"
        :style="{minHeight: '280px' }"
      >
      <transition class="Router" :name="transitionName">
        <router-view></router-view>
      </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

import Header from '../header/header'

let MenuList = [
  {key: 2, Name: '系统管理', IconInfo: 'setting', child: [
    {key: 8, Name: '用户管理', url: '/home/userM'},
    {key: 9, Name: '角色管理', url: '/home/roleM'},
    {key: 10, Name: '菜单管理', url: '/home'}
  ]},
  {key: 3, Name: '系统监控', IconInfo: 'desktop'},
  {key: 4, Name: '运维管理', IconInfo: 'exception'},
  {key: 5, Name: '系统工具', IconInfo: 'laptop'},
  {key: 6, Name: '组件管理', IconInfo: 'bars'},
  {key: 7, Name: '多级菜单', IconInfo: 'menu'},

]

const routes =  [
          {
            path: 'index',
            breadcrumbName: 'home',
          },
          {
            path: 'first',
            breadcrumbName: 'first',
            children: [
              {
                path: '/general',
                breadcrumbName: 'General',
              },
              {
                path: '/layout',
                breadcrumbName: 'Layout',
              },
              {
                path: '/navigation',
                breadcrumbName: 'Navigation',
              },
            ],
          },
          {
            path: 'second',
            breadcrumbName: 'second',
          },
]

export default {
  components: {Header},
  data() {
    return {
      tags: ['首页'],
      collapsed: false,
      tagBar: {
        width: '100%', height:'30px', margin: '10px', background: '#ffffff'
      },
      tagName: 'phone',
      MenuList: MenuList,
      routes: routes,
      transitionName: 'slide-right'
    };
  },
  methods: {
    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      this.tags = tags
      if(tags.length == 1){
        this.$router.push('/home/phone')
      }else {
        this.$router.go(-1)
      }
    },
    setTagName(key) {
      let tags = this.tags
      if (key && tags.indexOf(key) === -1) {
        tags = [...tags, key]
        this.tags = tags
      }
    },
    handleMenuClick(url, tagName){
      this.$router.push(url)
      this.setTagName(tagName)
    }
  },
  mounted() {

  },
  watch: {
    '$route' (to, from) {
      const toIndex = to.meta.index
      const fromIndex = from.meta.index
      this.transitionName = toIndex > fromIndex ? 'slide-right' : 'slide-left'
    }
  }
};


</script>

<style>
#components-layout-demo-custom-trigger {
    height: 100%;
    background-color: #EFF1F4;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: rgba(255, 255, 255)
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

#components-layout-demo-custom-trigger .content {
  height: 100%;
  background-color: #EFF1F4;
}

#tooltip {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  padding-left: 20px;
  background: #ffffff;
  border-bottom: 1px solid #d8dce5;
}

.headerBar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.Router{
position: relative;
}
.Router>*{
position: absolute;
width: 100%;
text-align: center;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
will-change: transform;
transition: all .5s;
}

.slide-right-enter {
transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-right-leave-active {
opacity: 0.64;
transform: translateX(100%);
}

.slide-left-enter {
opacity: 0.64;
transform: translateX(100%);
}

.slide-left-leave-active {
opacity: 0.64;
transform: translateX(-100%);
}
</style>
