!function(n){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],d=0,m=[];d<s.length;d++)a=s[d],o[a]&&m.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(l&&l(t);m.length;)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],r=!0,s=1;s<e.length;s++){var u=e[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),n=a(a.s=e[0]))}return n}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=r,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)a.d(e,r,function(t){return n[t]}.bind(null,r));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/v-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([60,1]),e()}({113:function(n,t,e){"use strict";var r=e(23);e.n(r).a},114:function(n,t,e){(n.exports=e(21)(!1)).push([n.i,'\n* {\n    box-sizing: border-box\n}\n*:before,\n*:after {\n    box-sizing: border-box\n}\nhtml,\nbody {\n    height: 100%;\n}\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n}\ndiv {\n    text-align: center;\n}\nbutton {\n    font-size: 0.3rem;\n    vertical-align: middle;\n}\n.title {\n    font-size: 0.6rem;\n    color: #57bb8a;\n    margin: 0;\n    line-height: 1;\n    font-weight: bold;\n}\na {\n    text-decoration: none;\n    font-size: 0.6rem;\n    color: #57bb8a;\n    margin: 0;\n    line-height: 2;\n    font-weight: bold;\n}\na.active {\n    color: #35495e;\n}\nimg {\n    max-width: 100%;\n}\np {\n    padding: 0;\n    margin: 0;\n}\nbutton {\n    color: #35495e;\n}\n.fz40 {\n    font-size: 0.4rem;\n    color: #35495e;\n}\n.main {\n    width: 100%;\n}\n.hello {\n    font-size: 0;\n}\n.hello img {\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  display: inline-block;\n}\n.hello img:after {\n  content: attr(alt) " Loading ...";\n  display: block;\n  box-sizing: border-box;\n  padding-top: 1rem;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #f5f5f5;\n  text-align: center;\n  font-size: 0.24rem;\n  color: rgb(100, 100, 100);\n}\n.router {\n  font-size: 0.5rem\n}\n.router_img {\n  font-size: 0;\n  text-align: center;\n}\n.router_img img{\n  width: 2rem;\n  height: 0.8rem;\n}\n.vuex {\n    line-height: 1\n}\n.increment {\n    margin-top: 0.2rem\n}\n',""])},115:function(n,t,e){"use strict";var r=e(24);e.n(r).a},116:function(n,t,e){(n.exports=e(21)(!1)).push([n.i,"\n.mlra {\n  margin-left: auto;\n  margin-right: auto;\n}\n",""])},117:function(n,t,e){n.exports=e.p+"static/assets/hld.e58f898.png"},118:function(n,t,e){"use strict";var r=e(25);e.n(r).a},119:function(n,t,e){(n.exports=e(21)(!1)).push([n.i,"\n.timeline-item {\n  background: #000;\n  border: 0.1rem solid;\n  border-color: #e5e6e9 #dfe0e4 #d0d1d5;\n  border-radius: 0.03rem;\n  padding: 0.12rem;\n  margin: 0 auto;\n  max-width: 100%;\n}\n@-webkit-keyframes placeHolderShimmer {\n0% {\n    background-position: -4.68rem 0;\n}\n100% {\n    background-position: 4.68rem 0;\n}\n}\n@keyframes placeHolderShimmer {\n0% {\n    background-position: -4.68rem 0;\n}\n100% {\n    background-position: 4.68rem 0;\n}\n}\n.animated-background {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #f6f7f8;\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 8rem 1.04rem;\n  height: 0.4rem;\n  position: relative;\n}\n.background-masker {\n  background: #fff;\n  position: absolute;\n}\n\n/* Every thing below this is just positioning */\n.background-masker.header-top,\n.background-masker.header-bottom,\n.background-masker.subheader-bottom {\n  top: 0;\n  left: 0.4rem;\n  right: 0;\n  height: 0.1rem;\n}\n.background-masker.header-left,\n.background-masker.subheader-left,\n.background-masker.header-right,\n.background-masker.subheader-right {\n  top: 0.1rem;\n  left: 0.4rem;\n  height: 0.08rem;\n  width: 0.1rem;\n}\n.background-masker.header-bottom {\n  top: 0.18rem;\n  height: 0.06rem;\n}\n.background-masker.subheader-left,\n.background-masker.subheader-right {\n  top: 0.24rem;\n  height: 0.06rem;\n}\n.background-masker.header-right,\n.background-masker.subheader-right {\n  width: auto;\n  left: 3rem;\n  right: 0;\n}\n.background-masker.subheader-right {\n  left: 2.3rem;\n}\n.background-masker.subheader-bottom {\n  top: 0.3rem;\n  height: 0.1rem;\n}\n.background-masker.content-top,\n.background-masker.content-second-line,\n.background-masker.content-third-line,\n.background-masker.content-second-end,\n.background-masker.content-third-end,\n.background-masker.content-first-end {\n  top: 0.4rem;\n  left: 0;\n  right: 0;\n  height: 0.06rem;\n}\n.background-masker.content-top {\n  height: 0.2rem;\n}\n.background-masker.content-first-end,\n.background-masker.content-second-end,\n.background-masker.content-third-end {\n  width: auto;\n  left: 3.8rem;\n  right: 0;\n  top: 0.6rem;\n  height: 0.08rem;\n}\n.background-masker.content-second-line {\n  top: 0.68rem;\n}\n.background-masker.content-second-end {\n  left: 4.2rem;\n  top: 0.74rem;\n}\n.background-masker.content-third-line {\n  top: 0.82rem;\n}\n.background-masker.content-third-end {\n  left: 3rem;\n  top: 0.88rem;\n}\n",""])},120:function(n,t,e){"use strict";var r=e(26);e.n(r).a},121:function(n,t,e){(n.exports=e(21)(!1)).push([n.i,"\n.axios {\n  font-size: 0;\n}\n.axios_text {\n  color: #35495e;\n  font-size: 0.4rem;\n  display: inline-block;\n  padding: 0 0.1rem;\n}\n",""])},122:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"getRouter",function(){return J}),e.d(r,"getText",function(){return V}),e.d(r,"getCount",function(){return X});var o={};e.r(o),e.d(o,"getRouter",function(){return B}),e.d(o,"getText",function(){return F}),e.d(o,"loadings",function(){return G}),e.d(o,"increment",function(){return K}),e.d(o,"decrement",function(){return Q});var i={};e.r(i),e.d(i,"ROUTER_LIST",function(){return W}),e.d(i,"TEXT_LIST",function(){return Y}),e.d(i,"COUNT_LIST",function(){return Z}),e.d(i,"increment",function(){return nn}),e.d(i,"decrement",function(){return tn});e(63),e(80),e(49),e(92);var a=e(8),s=e.n(a),u=e(5),c=e.n(u),l=e(1),d=e(59),m=e(9),f=e.n(m),h={props:{data:{type:Object,default:function(){return{avatar:""}}}}},g=e(0),p=Object(g.a)(h,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"hello"},[t("p",{staticClass:"logo"},[t("img",{attrs:{src:this.data.avatar,alt:"logo"}})])])},[],!1,null,null,null);p.options.__file="hello.vue";var b=p.exports,v=Object(g.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"router"},[e("div",{staticClass:"title"},[n._v("Ecosystem")]),n._v(" "),e("router-link",{attrs:{to:"/vr1"}},[n._v("router")]),n._v(" "),e("router-link",{attrs:{to:"/axios"}},[n._v("axios")]),n._v(" "),e("router-link",{attrs:{to:"/vuex"}},[n._v("vuex")]),n._v(" "),e("router-view",{staticClass:"fz40"})],1)},[],!1,null,null,null);v.options.__file="router.vue";var k={components:{hello:b,router:v.exports},data:function(){return{data:{}}},created:function(){var n=this;f.a.get("https://i-cut.cc/axios.json").then(function(t){n.data=t.data.logo})}},_=(e(113),e(115),Object(g.a)(k,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("hello",{attrs:{data:this.data}}),this._v(" "),t("router")],1)},[],!1,null,null,null));_.options.__file="App.vue";var x=_.exports,y=e(37),w=[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"router_img"},[t("img",{attrs:{src:e(117),alt:""}})])}],C=function(n){return n.dispatch("getRouter")},T={prefetch:C,computed:s()({},Object(l.c)({RouterData:"getRouter"})),mounted:function(){C(this.$store)}},O=Object(g.a)(T,function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"vue-router"},[this._v("\n  "+this._s(this.RouterData.value)+"\n  "),this._m(0)])},w,!1,null,null,null);O.options.__file="Vr1.vue";var j=O.exports,E=(e(118),Object(g.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"timeline-item"},[t("div",{staticClass:"animated-background"},[t("div",{staticClass:"background-masker header-top"}),this._v(" "),t("div",{staticClass:"background-masker header-left"}),this._v(" "),t("div",{staticClass:"background-masker header-right"}),this._v(" "),t("div",{staticClass:"background-masker header-bottom"}),this._v(" "),t("div",{staticClass:"background-masker subheader-left"}),this._v(" "),t("div",{staticClass:"background-masker subheader-right"}),this._v(" "),t("div",{staticClass:"background-masker subheader-bottom"})])])}],!1,null,null,null));E.options.__file="loading.vue";var S=function(n){return n.dispatch("getText")},z={components:{loading:E.exports},prefetch:S,computed:s()({},Object(l.c)({TextData:"getText"})),mounted:function(){S(this.$store)}},I=(e(120),Object(g.a)(z,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"axios"},[""==n.TextData?e("div",[e("loading")],1):n._l(n.TextData,function(t){return e("div",{key:t.value,staticClass:"axios_text"},[n._v("\n    "+n._s(t.value)+"\n  ")])})],2)},[],!1,null,null,null));I.options.__file="Axios.vue";var $=I.exports,R={computed:Object(l.c)(["getCount"])},D=Object(g.a)(R,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"display"},[t("div",{staticClass:"fz40"},[this._v("Count is "+this._s(this.getCount))])])},[],!1,null,null,null);D.options.__file="display.vue";var L=D.exports,A={methods:Object(l.b)(["loadings","increment","decrement"])},P=Object(g.a)(A,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"increment"},[e("button",{on:{click:n.loadings}},[n._v("加载初始值")]),n._v(" "),e("button",{on:{click:n.increment}},[n._v("增加 1")]),n._v(" "),e("button",{on:{click:n.decrement}},[n._v("减少 1")])])},[],!1,null,null,null);P.options.__file="increment.vue";var M={components:{Display:L,Increment:P.exports}},H=Object(g.a)(M,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"vuex"},[t("Display"),this._v(" "),t("Increment")],1)},[],!1,null,null,null);H.options.__file="Vuexs.vue";var N=H.exports;c.a.use(y.a);var U=new y.a({mode:"history",routes:[{path:"/",redirect:"/vr1"},{path:"/vr1",component:j},{path:"/axios",component:$},{path:"/vuex",component:N}],linkActiveClass:"active"}),J=function(n){return n.router},V=function(n){return n.text},X=function(n){return n.count},q="https://i-cut.cc/axios.json",B=function(n){var t=n.commit;return f.a.get(q).then(function(n){t("ROUTER_LIST",n.data)})},F=function(n){var t=n.commit;return f.a.get(q).then(function(n){t("TEXT_LIST",n.data)})},G=function(n){var t=n.commit;return f.a.get(q).then(function(n){t("COUNT_LIST",n.data)})},K=function(n){return(0,n.commit)("increment")},Q=function(n){return(0,n.commit)("decrement")},W=function(n,t){n.router=t.router},Y=function(n,t){n.text=t.text},Z=function(n,t){n.count=t.number.count},nn=function(n){"空"===n.count?n.count="点击加载初始化值":"点击加载初始化值"===n.count?n.count="点击加载初始化值":n.count+=1},tn=function(n){"空"===n.count?n.count="点击加载初始化值":"点击加载初始化值"===n.count?n.count="点击加载初始化值":n.count-=1};c.a.use(l.a);var en=new l.a.Store({state:{router:{},text:{},count:"空"},getters:r,actions:o,mutations:i});c.a.config.productionTip=!1,c.a.use(l.a),Object(d.sync)(en,U);var rn=new c.a(s()({router:U,store:en},x));window.__INITIAL_STATE__&&en.replaceState(window.__INITIAL_STATE__),U.onReady(function(){U.beforeResolve(function(n,t,e){var r=U.getMatchedComponents(n),o=U.getMatchedComponents(t),i=!1,a=r.filter(function(n,t){return i||(i=o[t]!==n)});if(!a.length)return e();Promise.all(a.map(function(t){if(t.asyncData)return t.asyncData({store:en,route:n})})).then(function(){e()}).catch(e)}),rn.$mount("#app")})},23:function(n,t,e){var r=e(114);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(22).default)("0de36a8a",r,!0,{})},24:function(n,t,e){var r=e(116);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(22).default)("3c3f6501",r,!0,{})},25:function(n,t,e){var r=e(119);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(22).default)("03d7d5ab",r,!0,{})},26:function(n,t,e){var r=e(121);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(22).default)("0ba1811f",r,!0,{})},60:function(n,t,e){e(61),n.exports=e(122)}});