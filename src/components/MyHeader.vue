<template>
	<mt-header :title="title" fixed>
		<mt-button icon="back" slot="left" @click.native="back">返回</mt-button>
		<mt-button icon="more" slot="right" @click.native="more"></mt-button>
	</mt-header>
</template>

<script>
	export default{
		computed:{
			title:function(){
				const {path} = this.$route
				return path==='/'? '搜索':
						path.includes('results')? '搜索结果':
						path.includes('types')?'分类':
						'找不到页面'
			}
		},
		methods:{
			back:function(){
				this.$router.back()
			},
			more:function(){
				if(this.$route.path!=='/types'){
					this.$router.push('/types')
				}	
			}
		}
	}
</script>

<style>
</style>
