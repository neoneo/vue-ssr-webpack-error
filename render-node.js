const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const components = {
	app: Vue.extend({
		data() {
			return {
				name: 'world'
			}
		},
		template: '<h1>Hello {{ name }}</h1>'
	})
}

const app = new Vue({
	template: '<div id="app"><app></app></div>',
	components: {
		app: components.app
	}
})

renderer.renderToString(app).then(html => {
	console.log(html)
}).catch(err => {
	console.error(err)
})
