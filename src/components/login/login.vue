<template>
    <div>
        <p>这里是登录界面</p>
        <p>{{msg}}</p>
        <router-link to="/home">登录</router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: '我是Login组件'
        }
    }
}
</script>