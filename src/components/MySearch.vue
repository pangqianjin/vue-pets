<template>
    <mt-search v-model="value" @keyup.enter.native="search"></mt-search>
</template>
<script>
import {reqPets, showResult} from '../utils'
export default {
    data(){
        return {
            value: ''
        }
    },
    methods:{
			search:function(){
				const promise = reqPets({name:this.value})
				promise.then(value=>{
					showResult(value.data)
                    this.$router.push('/results')	
				}).catch(err=>{
					Toast(err.toString());
				})	
			}
	}
}
</script>
<style>
    .mint-search{
		position: fixed;
		top: 50px;
		width: 95%;
	}
</style>