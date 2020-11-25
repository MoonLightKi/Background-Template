import Vue from 'vue'
import {Button, Card, Input, Icon, Layout, Menu} from 'ant-design-vue'

Vue.component(Button.name, Button, Card, Input, Icon, Layout, Menu)

Vue.use(Card)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(Menu)

export default {
    
}