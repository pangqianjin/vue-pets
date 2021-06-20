<template>
	<div id="app">
		<MyHeader />
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		Search,
		Header,
		Button,
		Cell,
		Toast,
		InfiniteScroll 
	} from 'mint-ui';
	import router from './router'
	import MyHeader from './components/MyHeader.vue'

	Vue.use(InfiniteScroll)
	Vue.component(Search.name, Search)
	Vue.component(Header.name, Header)
	Vue.component(Button.name, Button)
	Vue.component(Cell.name, Cell)
	Vue.component(Toast.name, Toast)


	export default {
		name: 'app',
		components: {
			MyHeader
		},
		router
	}
</script>

<style>
</style>
