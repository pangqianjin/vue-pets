<template>
	<div id="list">
		<mt-cell v-for="item in pettypes" :key="item.id" :value="item.title"
		  :title="item.title" @click.native="handleClick(item.id)" is-link>
		</mt-cell>
	</div>
</template>

<script>
	import {reqPets, showResult} from '../utils'
	import {Toast} from 'mint-ui'

	export default{
		data(){
			return {
				pettypes:[
					{id:'0', title:'猫科'},
					{id:'1', title:'犬科'},
					{id:'2', title:'爬行类'},
					{id:'3', title:'小宠物类'},
					{id:'4', title:'水族类'}
				]
			}
		},
		methods:{
			handleClick:function(id){
				if(this.$route.path!=='/types/'+id){
					const promise = reqPets({type: id})
					promise.then(value=>{
						showResult(value.data)
						this.$router.push('/types/'+id)	
					}).catch(err=>{
						Toast(err.toString());
					})
				}	
			}
		}
	}
</script>

<style>
	#list{
		position: relative;
		top: 50px;
	}
</style>
