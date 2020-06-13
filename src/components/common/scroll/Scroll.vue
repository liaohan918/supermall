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

        },
        mounted(){
            this.scroll = new BScroll(this.$refs.swiper,{

            })
        }
    }
</script>

<style scoped>

</style>