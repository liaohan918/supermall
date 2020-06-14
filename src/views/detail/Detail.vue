<!-- 组件说明 -->
<template>
    <div class=''>
        <detail-nav-bar/>
    </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar.vue";

    export default {
        name:'Detail',
        components: {
            DetailNavBar
        },
        data () {
            return {
                iid:null
            };
        },
        created(){
            this.iid = this.$route.params.iid
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>

</style>