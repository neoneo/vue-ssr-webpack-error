<template>
	<h1>Hello {{ name }}</h1>
</template>

<script>
	import Vue from "vue"

	export default Vue.extend({
		data() {
			return {
				name: "world"
			}
		}
	})

	// This works:
	// export default {
	// 	data() {
	// 		return {
	// 			name: "world"
	// 		}
	// 	}
	// }
</script>
