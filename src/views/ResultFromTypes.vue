<template>
    <ul class="results" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="result in newslist" :key="result.name">
            <a :href="result.url">
                <img class="avatar" :src="result.coverURL" :alt="result.name">
            </a>
            <div>宠物类型:   {{result.pettype|pettypeFilter}}</div>
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
        </li>
        <p></p>
    </ul>
</template>

<script>
import Pubsub from 'pubsub-js'
import {reqPets, showResult} from '../utils'
import Vue from 'vue'
const pettypes = {0:'猫科', 1:'犬科', 2:'爬行类', 3:'小宠物类', 4:'水族类'}

Vue.filter('pettypeFilter', value=>{
    return pettypes[value]
})

export default {
    data(){
        return {
            newslist: [],
            pettype: '0'
        }
    },
    computed:{
        page:function(){
            const {length} = this.newslist
            return Math.ceil(length/5)
        }
    },
    methods:{
        loadMore:function(){
            const promise = reqPets({type: this.pettype, page: this.page+1})
            promise.then(value=>{
                showResult(value.data)
            }).catch(err=>{
                Toast(err.toString());
            })
        }
    },
    mounted(){
        this.pettype = this.$route.params.id
        Pubsub.subscribe('result', (_, newslist)=>{
            this.newslist.push(...newslist)
        })
    },
    beforeDestroy(){
        Pubsub.unsubscribe('result')
    }
}
</script>

<style>
    .results{
        position: relative;
        top: 50px;
        list-style: none;
    }
</style>