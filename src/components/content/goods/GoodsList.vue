<!-- 组件说明 -->
<template>
    <div class='goods'>
        <goods-list-item  v-for="item in goods" :goods-item="item"/>
    </div>
</template>

<script>
    import GoodsListItem from './GoddsListItem.vue'

    export default {
        name:'GoodsList',
        props:{
            goods :{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components: {
            GoodsListItem
        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>