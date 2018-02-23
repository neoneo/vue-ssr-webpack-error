const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const components = require('./build/js/components').default

const app = new Vue({
	template: '<div id="app"><app></app></div>',
	components: {
		app: components.App
	}
})

renderer.renderToString(app).then(html => {
	console.log(html)
}).catch(err => {
	console.error(err)
})
