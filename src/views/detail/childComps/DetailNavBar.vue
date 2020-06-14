<!-- 组件说明 -->
<template>
    <div class=''>
        <nav-bar>
            <div slot="left" class="back" @click="back">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div class="title-item"  v-for="(item,index) in titles" 
                :key="index" 
                :class="{active: index === currentIndex}"
                @click="titleClick(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'

    export default {
        name:'DetailNavBar',
        components: {
            NavBar
        },
        data () {
            return {
                titles:['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        computed: {

        },
        methods: {
            titleClick(index){
                this.currentIndex = index
            },
            back(){
                this.$router.back()
            }
        },
    }
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }

    .title-item{
        flex: 1;
    }

    .active{
        color: var(--color-theme)
    }

    .back img{
        margin-top: 12px;
    }
</style>