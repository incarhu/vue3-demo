import Tabs from './src/tabs.vue'

/* 使用插件 */
Tabs.install = function(App) {
    App.component(Tabs.name, Tabs)
}

export default Tabs