# vue-alphabet-index

> 移动端竖排字母索引组件（类似微信地址栏右侧索引）

##Demo
[demo](https://deswan.github.io/vue-alphabet-index/)

## Install
```bash
$ npm install vue-alphabet-index
```

```js
import AlphabetIndex from 'vue-alphabet-index'
Vue.Component('vue-alphabet-index', AlphabetIndex)
```

## Usage


```html
<alphabet-index :init="true" :items="['A','B','C']" @change="handleChange"></alphabet-index>
```

#### parameters

| Option | type | Description |
| ------ | ----------- | ----------- |
| init   | Boolean     | 是否初始化。当init设为`true`, 组件开始获取DOM位置数据，默认为`false` |
| items | Array<String>     | 字母数组，如`items: ['A', 'B', 'C']`，默认为`[]` |
| throttleTime    | Number     | 节流间隔(ms)，默认为80 |
| itemClass    | String     | 列表项样式 |
| listClass    | String     | 列表样式 |

#### events

| Option | parameters | Description |
| ------ | ----------- | ----------- |
| change   | {index: 数组索引, value: 选中的字母} | 选中某个字母时触发 |

