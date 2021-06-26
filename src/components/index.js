import Button from './button/index.js'
import Tabs from './tabs/index.js'
import SlideBlock from './slider-block/index.js'
import Cascade from './cascade/index.js'
import Navbar from './navbar/index.js'

const components = [
	Button,
	Tabs,
	SlideBlock,
	Cascade,
	Navbar
]

const install = function(Vue) {
	components.forEach(component => {
		Vue.component(component.name, component);
	});
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export {
	Button,
	Tabs,
	SlideBlock,
	Cascade,
	Navbar
}

export default { install }