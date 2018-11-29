<template>
    <!-- A-Z字母排序导航栏 -->
    <div class="alphabet-index">
        <ul class="alphabet-index-list"
        ref="list"
        @touchmove.prevent="handleMove"
        @click="handleClick"
        >
            <li class="alphabet-index-item" ref="items" v-for="item in items" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
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
         * init: Boolean 是否触发初始化
         * 当init设为true, 组件开始获取自身的DOM位置数据
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
            default: 16
        }
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
            if (!this.init) return -1;
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
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.handleChange(e.touches[0].clientY);
            }, this.throttleTime);
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
    watch: {
        init(init) {
            init && this.handleInit();
        }
    }
};
</script>

<style scoped>
.alphabet-index-list {
    box-sizing: content-box;
    width: 0.93rem;
    padding: 0 0.29rem 0 1.14rem;
    text-align: center;
}
.alphabet-index-item {
    height: 1.14rem;
    font-weight: bold;
}
</style>
