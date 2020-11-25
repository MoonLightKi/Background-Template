<template>
    <div id="login">
        <a-card id="loginCard" title="登录界面" style="width: 450px">
            <div class="components-input-demo-presuffix">
                <a-input ref="userNameInput" v-model="userName" placeholder="用户名">
                    <a-icon slot="prefix" type="user" />
                </a-input>
                <br />
                <br />
                <a-input v-model="password" placeholder="用户名">
                    <a-icon slot="prefix" type="lock" />
                </a-input>
                <br />
                <br />
                <a-input v-model="vcode" placeholder="验证码">
                    <a-icon slot="prefix" type="safety" />
                </a-input>
            </div>
                <br />
                <br />
                <a-button type="primary" block @click="checkUser">
                    登录
                </a-button>
        </a-card>
    </div>
</template>

<script>

export default {
    data () {
        return {
            msg: '我是Login组件'
        }
    },
    methods: {
        checkUser() {
            this.$router.replace('/home')
        } 
    }
}
</script>

<style scoped>
#login {
    width: 100%;
    height: 100%;
    background-image: url(../../assets/background.jpg);
    
}

#loginCard {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>