<!-- 组件说明 -->
<template>
    <div class='tab-control'>
        <div v-for="(item,index) in titles" class="tab-control-item" @click="itemClick(index)">
            <span :class = "{active: index === currentIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabControl',
        props:{
            titles:{
                type:Array,
                defualt(){
                    return []
                }
            }
        },
        components: {

        },
        data () {
            return {
                currentIndex: 0
            };
        },
        computed: {

        },
        methods: {
            itemClick(index){
                this.currentIndex = index;
                this.$emit('tabClick',index);
            }
        },
    }
</script>

<style scoped>
    .tab-control{
        display:flex;
        text-align: center;
        font-size:15px;
        height: 40px;
        line-height: 40px;
    }

    .tab-control-item{
        flex: 1;
    }

    .active {
        color:var(--color-theme);
        padding: 5px;
        border-bottom:2px solid var(--color-theme);
    }
</style>