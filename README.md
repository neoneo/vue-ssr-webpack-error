# Vue SSR error using Vue.extend and Webpack

Background:

- I want to use Typescript and for proper type information, I need to export the components using Vue.extend.
- I want to serve static HTML, with hydration by Vue. So something in between SSR and prerendering. This is based on the example here: https://ssr.vuejs.org/en/basic.html

## To reproduce:

**Build:**

		yarn
		yarn webpack

App.vue uses `Vue.extend`. Without `Vue.extend` the example works.

**SSR:**

		node render

**Result:**

		[Vue warn]: Property or method "_ssrNode" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

		found in

		---> <App> at src/components/App.vue
					<Root>
		[Vue warn]: Property or method "_ssrEscape" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

		found in

		---> <App> at src/components/App.vue
					<Root>
		[Vue warn]: Error in render: "TypeError: _vm._ssrEscape is not a function"

		found in

		---> <App> at src/components/App.vue
					<Root>
		TypeError: _vm._ssrEscape is not a function
				at Proxy.render (/.../build/js/components.js:10967:37)
				at VueComponent.Vue._render (/.../build/js/components.js:4618:22)
				at renderComponentInner (/.../node_modules/vue-server-renderer/build.js:7356:25)
				at renderComponent (/.../node_modules/vue-server-renderer/build.js:7326:5)
				at RenderContext.renderNode (/.../node_modules/vue-server-renderer/build.js:7242:5)
				at RenderContext.next (/.../node_modules/vue-server-renderer/build.js:2382:14)
				at cachedWrite (/.../node_modules/vue-server-renderer/build.js:2242:9)
				at renderElement (/.../node_modules/vue-server-renderer/build.js:7463:5)
				at renderNode (/.../node_modules/vue-server-renderer/build.js:7244:5)
				at render (/.../node_modules/vue-server-renderer/build.js:7571:5)

## Without Webpack

**Run:**

	node render-node

This works. It uses `Vue.extend`, but no build step using Webpack.

I could not reproduce this error with Nuxt, but I'm at a loss where to look for the fix.