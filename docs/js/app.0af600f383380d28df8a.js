!function(t){function e(e){for(var i,a,s=e[0],o=e[1],u=e[2],h=0,f=[];h<s.length;h++)a=s[h],r[a]&&f.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);for(c&&c(e);f.length;)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(i=!1)}i&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={0:0},l=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=o;l.push(["C2Ph",1]),n()}({"1/vb":function(t,e,n){"use strict";var i=n("nVpQ");n.n(i).a},C2Ph:function(t,e,n){"use strict";n.r(e);n("55Il");var i=n("oCYn"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("ul",{staticClass:"list"},t._l(t.items,function(e){return n("ul",{key:e,ref:"listGroup",refInFor:!0,staticClass:"list-group"},[n("div",{staticClass:"list-group-header"},[t._v(t._s(e))]),t._v(" "),t._l(8,function(e){return n("li",{key:e,staticClass:"list-item"},[t._v("data"+t._s(e))])})],2)}),0),t._v(" "),n("alphabet-index",{staticClass:"alphabet",attrs:{init:!0,items:t.items},on:{change:t.change}})],1)};r._withStripped=!0;var l={name:"Index",data:()=>({items:[]}),created(){for(let t=65;t<91;t++)this.items[t-65]=String.fromCharCode(t)},methods:{change(t){console.log(t);let e=this.$refs.listGroup&&this.$refs.listGroup[t.index];e&&e.scrollIntoView(!0)}}},a=(n("1/vb"),n("KHd+")),s=Object(a.a)(l,r,[],!1,null,null,null);s.options.__file="demo/App.vue";var o=s.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alphabet-index"},[n("ul",{ref:"list",class:["alphabet-index-list",t.listClass],on:{touchmove:function(e){return e.preventDefault(),t.handleMove(e)},click:t.handleClick}},t._l(t.items,function(e){return n("li",{key:e,ref:"items",refInFor:!0,class:["alphabet-index-item",t.itemClass]},[t._v(t._s(e))])}),0)])};u._withStripped=!0;var c={name:"alphabet-index",props:{items:{type:Array,default:function(){return[]}},init:{type:Boolean},throttleTime:{type:Number,default:80},itemClass:String,listClass:String},data:function(){return{boundingTop:0,itemHeight:0,timer:null}},methods:{handleChange:function(t){if(this.init){var e=t-this.boundingTop,n=Math.floor(e/this.itemHeight);n<0?n=0:n>this.items.length-1&&(n=this.items.length-1),this.$emit("change",{index:n,value:this.items[n]})}},handleMove:function(t){this.handleChange(t.touches[0].clientY)},handleClick:function(t){this.handleChange(t.clientY)},handleInit:function(){this.items.length&&(this.boundingTop=this.$refs.list.getBoundingClientRect().top,this.$refs.items&&(this.itemHeight=this.$refs.items[0].clientHeight))}},created:function(){var t,e,n,i;this.throttleTime&&(this.handleMove=(t=this.handleMove,e=this.throttleTime,function(){var r=this;(function l(){for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];i&&clearTimeout(i);var u=+new Date;!n||u>=n+e?(t.call.apply(t,[r].concat(s)),n=u):i=setTimeout(function(){return l.apply(void 0,s)},n+e-u)}).apply(void 0,arguments)}))},mounted:function(){var t=this;this.init&&this.handleInit(),this.$watch("init",function(){t.init&&t.handleInit()})}},h=(n("kjKm"),Object(a.a)(c,u,[],!1,null,null,null));h.options.__file="src/alphabet-index.vue";var f=h.exports;i.a.component("alphabet-index",f),new i.a({el:"#app",render:t=>t(o)})},Yr7Z:function(t,e,n){},kjKm:function(t,e,n){"use strict";var i=n("Yr7Z");n.n(i).a},nVpQ:function(t,e,n){}});
//# sourceMappingURL=app.0af600f383380d28df8a.js.map