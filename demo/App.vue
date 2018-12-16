<template>
    <div class="index">
        <ul class="list">
            <ul v-for="item in items" :key="item" class="list-group" ref="listGroup">
                <div class="list-group-header">{{item}}</div>
                <li v-for="n in 8" :key="n" class="list-item">data{{n}}</li>
            </ul>
        </ul>
        <alphabet-index class="alphabet" :init="true" :items="items" @change="change"></alphabet-index>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return {
            items: []
        }
    },
    created(){
        let start = 65;
        for(let i = start; i < start + 26; i++){
            this.items[i - start] = String.fromCharCode(i);
        }
    },
    methods:{
        change(e){
            console.log(e)
            let item = this.$refs.listGroup && this.$refs.listGroup[e.index];
            item && item.scrollIntoView(true);
        }
    }
}
</script>

<style>
body, ul{
    padding: 0;
    margin: 0;
}
.alphabet{
    position: fixed;
    right: 0;
    top: 100px;
}
.list-group-header {
    background: #f2f2f2;
    height: 30px;
    padding: 0 20px;
    line-height: 30px;
}
.list-item{
    border-bottom: solid 1px #f2f2f2;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
}
.list-item:last-child{
    border-bottom: none;
}
</style>
