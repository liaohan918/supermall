<!-- 组件说明 -->
<template>
    <div class='wrapper' ref="swiper">
        <div class="content">
            <slot></slot>
        </div>        
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    export default {
        name:'Scroll',
        props:{
            probeType:{
                type:Number,
                default:0
            }
        },
        components: {

        },
        data () {
            return {
                scroll:null
            };
        },
        computed: {

        },
        methods: {
            scrollTo(x,y,time=300){
                this.scroll && this.scroll.scrollTo(x,y,time);
            },
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp();
            },
            refresh(){
                console.log('-----------');                
                this.scroll && this.scroll.refresh();
            }
        },
        mounted(){
            //1.创建BScroll对象
            this.scroll = new BScroll(this.$refs.swiper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
            })            
            //2.监听滚动的位置
            this.scroll.on('scroll',(position) =>{
                this.$emit('scroll',position)
            })
        }
    }
</script>

<style scoped>

</style>