import Vue from 'vue'
import Router from 'vue-router'
import SearchByTypes from '../views/SearchByTypes.vue'
import ResultFromSearch from '../views/ResultFromSearch.vue'
import ResultFromTypes from '../views/ResultFromTypes.vue'
import MySearch from '../components/MySearch.vue'

Vue.use(Router)
export default new Router({
	routes: [
		{
			path:'/types',
			component: SearchByTypes
		},
		{
			path:'/types/:id',
			component: ResultFromTypes
		},
		{
			path: '/results',
			component: ResultFromSearch
		},
		{
			path: '/',
			component: MySearch
		}
	]
})