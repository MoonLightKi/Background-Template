<template>
    <div id="login">
        <div id="loginCard">
            <Form></Form>
        </div>
    </div>
</template>

<script>

import Form from '../utils/Form'

export default {
    components: { Form },
    data () {
        return {
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
    width: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.99);
    padding: 30px;
    border-radius: 5px;
}
</style>