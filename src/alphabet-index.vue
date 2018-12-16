<template>
    <!-- A-Z字母排序导航栏 -->
    <div class="alphabet-index">
        <ul :class="['alphabet-index-list', listClass]"
        ref="list"
        @touchmove.prevent="handleMove"
        @click="handleClick"
        >
            <li :class="['alphabet-index-item', itemClass]" ref="items" v-for="item in items" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import throttle from './throttle.js';
export default {
    name: "alphabet-index",
    props: {
        /**
         * items: Array<String> 字母数组
         * eg. items: ['A', 'B', 'C']
         */
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        /**
         * init: Boolean
         * 当init设为true, 组件开始获取DOM位置数据
         */
        init: {
            type: Boolean
        },
        /**
         * throttleTime: Number 
         * touchmove throttle 间隔时间
         */
        throttleTime: {
            type: Number,
            default: 80
        },
        itemClass: String,
        listClass: String,
    },
    data() {
        return {
            boundingTop: 0, //列表顶端离页面顶端的距离
            itemHeight: 0, //每一个字母项的高度
            timer: null //throttle timer
        };
    },
    methods: {
        handleChange(cliengY) {
            if (!this.init) return;
            let offsetHeight = cliengY - this.boundingTop;
            let index = Math.floor(offsetHeight / this.itemHeight);
            if (index < 0) {
                index = 0;
            } else if (index > this.items.length - 1) {
                index = this.items.length - 1;
            }
            this.$emit("change", {
                index,
                value: this.items[index]
            });
        },
        handleMove(e) {
            this.handleChange(e.touches[0].clientY);
        },
        handleClick(e) {
            this.handleChange(e.clientY);
        },
        handleInit() {
            if (!this.items.length) return;
            this.boundingTop = this.$refs.list.getBoundingClientRect().top;
            if (this.$refs.items) this.itemHeight = this.$refs.items[0].clientHeight;
        }
    },
    created(){
        if(this.throttleTime) this.handleMove = throttle(this.handleMove, this.throttleTime)
    },
    mounted(){
        this.init && this.handleInit();
        this.$watch('init', ()=>{
            this.init && this.handleInit();
        })
    }
};
</script>

<style>
.alphabet-index{
    font-family: sans-serif;
    -webkit-tap-highlight-color: transparent;
}
.alphabet-index-list {
    box-sizing: content-box;
    width: 14px;
    padding: 0 6px 0 18px;
    text-align: center;
}
.alphabet-index-item {
    list-style: none;
    height: 18px;
    overflow: hidden;
    line-height: 18px;
    font-weight: bold;
}
</style>
