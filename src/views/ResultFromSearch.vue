<template>
	<div>
		<div class="content">
			<a :href="result.url">
				<img class="avatar" :src="result.coverURL" :alt="result.name">
			</a>
			<div>宠物类型:   {{pettype}}</div>
			<div>宠物名字:   {{result.name}}</div>
			<div>宠物英文名:   {{result.engName}}</div>
			<div>性格特点:   {{result.characters}}</div>
			<div>祖籍:   {{result.nation}}</div>
			<div>易患病:   {{result.easyOfDisease}}</div>
			<div>寿命:   {{result.life}}</div>
			<div>价格:   {{result.price?result.price:'未知'}}</div>
			<span>描述: </span><p>{{result.desc}}</p>
			<span>体态特征: </span><p>{{result.feature}}</p>
			<span>特点: </span><p>{{result.characterFeature}}</p>
			<span>照顾须知: </span><p>{{result.careKnowledge}}</p>
			<span>喂养注意: </span><p>{{result.feedPoints}}</p>
		</div>		
	</div>
</template>

<script>
	import Pubsub from 'pubsub-js'

	const pettypes = {0:'猫科', 1:'犬科', 2:'爬行类', 3:'小宠物类', 4:'水族类'}
	export default{
		data(){
			return {
				value: '',
				show: false,
				result:{}
			}
		},
		computed:{
			pettype:function(){
				return pettypes[this.result.pettype]
			}
		},
		mounted(){
			Pubsub.subscribe('result', (_, newslist)=>{
				this.result = newslist[0]
			})
		},
		beforeDestroy(){
			Pubsub.unsubscribe('result')
		}
	}
</script>

<style>
	.content{
		position: absolute;
		top: 50px;
	}

	.avatar{
		width: 300px;
		height: 200px;
	}
</style>
