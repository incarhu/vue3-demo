import Navbar from './src/main.vue'

/* 使用插件 */
Navbar.install = function(App) {
    App.conponent(Navbar.component, Navbar)
}

export default Navbar