(function(t){function e(e){for(var r,s,i=e[0],c=e[1],o=e[2],v=0,p=[];v<i.length;v++)s=i[v],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(l.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},l=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var u=c;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d6d":function(t,e,a){},1602:function(t,e,a){t.exports=a.p+"img/logo.08cf3638.png"},"2e58":function(t,e,a){"use strict";var r=a("5500"),n=a.n(r);n.a},3152:function(t,e,a){"use strict";var r=a("d494"),n=a.n(r);n.a},"3a20":function(t,e,a){"use strict";var r=a("dd67"),n=a.n(r);n.a},4600:function(t,e,a){"use strict";var r=a("a431"),n=a.n(r);n.a},5500:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("img",{staticClass:"header-img",attrs:{src:t.baseUrl}}),a("img",{staticClass:"header-gif",attrs:{src:"http://hbimg.b0.upaiyun.com/3a79b9621ec11645340b15b091868af1eaa539c4fdf4-ajLkdI_fw658"}}),a("aplayer",{staticClass:"header-music",attrs:{audio:t.audio,lrcType:1}}),a("ul",{staticClass:"header-nav"},[a("router-link",{attrs:{to:"/home"}},[a("li",{staticClass:"header-list"},[t._v("首页")])]),a("router-link",{attrs:{to:"/learn"}},[a("li",{staticClass:"header-list"},[t._v("笔记")])]),a("router-link",{attrs:{to:"/solve"}},[a("li",{staticClass:"header-list"},[t._v("问题日志")])]),a("router-link",{attrs:{to:"/structure"}},[a("li",{staticClass:"header-list"},[t._v("UI 框架")])]),a("router-link",{attrs:{to:"/plug"}},[a("li",{staticClass:"header-list"},[t._v("npm库")])]),a("router-link",{attrs:{to:"/case"}},[a("li",{staticClass:"header-list"},[t._v("网站案例")])]),a("router-link",{attrs:{to:"/routine"}},[a("li",{staticClass:"header-list"},[t._v("套路")])]),a("router-link",{attrs:{to:"/test"}},[a("li",{staticClass:"header-list"},[t._v("测试栏")])])],1)],1)},i=[],c={data:function(){return{baseUrl:a("1602"),audio:[{name:"一曲肝肠断",artist:"背着琴的俩兄弟",url:"https://sharefs.yun.kugou.com/201911072012/c486fd1c54d32c35892733b60c44a1dd/G177/M00/10/14/UYcBAF2Li2KAezcrACE9j3JX0Fg585.mp3"}]}}},o=c,u=(a("d1e0"),a("2877")),v=Object(u["a"])(o,s,i,!1,null,"50f7822b",null),p=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"})},b=[],d={},m=d,_=(a("812d"),Object(u["a"])(m,f,b,!1,null,"7e4b6e21",null)),h=_.exports,g={name:"app",components:{Header:p,Footer:h}},y=g,C=(a("e936"),Object(u["a"])(y,n,l,!1,null,null,null)),x=C.exports,k=a("8c4f"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("iframe",{staticClass:"home-iframe",attrs:{target:"_blank",src:"https://www.baidu.com",frameborder:"0",scrolling:"no"}})])}],w={},E=w,$=(a("2e58"),Object(u["a"])(E,j,O,!1,null,"27c540b0",null)),N=$.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history"},[a("div",{staticClass:"txt"},[t._v("暂不开放")])])}],I={},M=I,S=(a("3152"),Object(u["a"])(M,P,U,!1,null,"1f70fe50",null)),T=S.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-collapse-item",{attrs:{title:"element(全栈框架)",name:"1"}},[t._v(" main.js: "),a("br"),t._v("import ElementUI from 'element-ui' "),a("br"),t._v("import 'element-ui/lib/theme-chalk/index.css' "),a("br"),t._v("Vue.use(ElementUI) "),a("br"),t._v("组件:只需要template,不需要script "),a("br"),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/installation"}},[t._v("我要去官网")])])],1)],1)},z=[],A={},J=A,H=Object(u["a"])(J,F,z,!1,null,"1c4b2d0a",null),L=H.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lern"},[a("el-collapse",{on:{change:t.handleChange},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("el-collapse-item",{staticClass:"collapse-item",attrs:{title:"清除浮动",name:"1"}},[t._v(" .clearfix:after { "),a("br"),t._v("content: '.'; "),a("br"),t._v("//height: 0; "),a("br"),t._v("display: block; "),a("br"),t._v("clear: both; "),a("br"),t._v("} ")]),a("el-collapse-item",{staticClass:"collapse-item",attrs:{title:"自动打开浏览器"}},[t._v(" 文件:package.json "),a("br"),t._v('"scripts": { '),a("br"),t._v('"serve": "vue-cli-service serve --open", '),a("br"),t._v('"build": "vue-cli-service build", '),a("br"),t._v('"lint": "vue-cli-service lint" '),a("br"),t._v("}, ")]),a("el-collapse-item",{staticClass:"collapse-item",attrs:{title:"浏览器新的页面打开"}},[t._v(' target="_blank" ')])],1)],1)},G=[],K={},V=K,X=(a("3a20"),Object(u["a"])(V,B,G,!1,null,null,null)),Y=X.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"上线图片路径",name:"first"}},[t._v(" ①目录创建(src同级目录): "),a("br"),t._v("vue.config.js "),a("br"),t._v("内 容: "),a("br"),t._v("module.exports = "),a("br"),t._v("{ "),a("br"),t._v('publicPath: "./" '),a("br"),t._v("} "),a("br"),a("br"),t._v("②打包成:bese64 "),a("a",{attrs:{href:"http://imgbase64.duoshitong.com/ ",target:"_blank"}},[t._v("进入")])]),a("el-tab-pane",{attrs:{label:"上线刷新404"}},[t._v(" ①上线刷新报404 "),a("br"),t._v("{ "),a("br"),t._v("path: '/:id', "),a("br"),t._v("redirect: '/home' "),a("br"),t._v("}, "),a("br"),t._v("{ "),a("br"),t._v("path: '/', "),a("br"),t._v("redirect: '/home' "),a("br"),t._v("} "),a("br"),t._v("刷新之后找不到原网页 需要重新匹配 ")]),a("el-tab-pane",{attrs:{label:"stylus唯一性"}},[t._v("<style lang='stylus' rel='stylesheet/stylus' scoped>")])],1)],1)},D=[],Q={data:function(){return{activeName:"first"}}},R=Q,W=Object(u["a"])(R,q,D,!1,null,null,null),Z=W.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v("css预处理器: npm install stylus stylus-loader "),a("br"),a("br"),t._v("路由: npm install vue-router "),a("br"),a("br"),t._v("http库: npm install axios "),a("br"),a("br"),t._v("轮播图: npm install swiper "),a("br"),a("br"),t._v("状态管理: npm install vuex "),a("br"),a("br")])}],at={},rt=at,nt=Object(u["a"])(rt,tt,et,!1,null,null,null),lt=nt.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"test"},[a("div",{staticClass:"txt"},[t._v("暂不开放")])])}],ct={data:function(){return{activeName:"first"}}},ot=ct,ut=(a("4600"),Object(u["a"])(ot,st,it,!1,null,null,null)),vt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"UI设计图"}},[a("ul",[a("li",[a("a",{attrs:{href:"http://www.zhonglinglh.com/case-12-1.html",target:"_blank"}},[t._v("众领联合")])])])]),a("el-tab-pane",{attrs:{label:"成功网站"}})],1)],1)},ft=[],bt={},dt=bt,mt=Object(u["a"])(dt,pt,ft,!1,null,"5b532456",null),_t=mt.exports,ht=[{path:"/home",component:N},{path:"/case",component:_t},{path:"/routine",component:T},{path:"/structure",component:L},{path:"/learn",component:Y},{path:"/solve",component:Z},{path:"/plug",component:lt},{path:"/test",component:vt},{path:"/:id",redirect:"/home"},{path:"/",redirect:"/home"}];r["default"].use(k["a"]);var gt=new k["a"]({mode:"hash",routes:ht}),yt=a("5c96"),Ct=a.n(yt),xt=(a("0fae"),a("cf0d")),kt=a.n(xt);r["default"].use(Ct.a),r["default"].use(kt.a,{defaultCover:"https://github.com/u3u.png",productionTip:!0}),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(x)},router:gt}).$mount("#app")},"812d":function(t,e,a){"use strict";var r=a("0d6d"),n=a.n(r);n.a},"876d":function(t,e,a){},"96ac":function(t,e,a){},a431:function(t,e,a){},d1e0:function(t,e,a){"use strict";var r=a("96ac"),n=a.n(r);n.a},d494:function(t,e,a){},dd67:function(t,e,a){},e936:function(t,e,a){"use strict";var r=a("876d"),n=a.n(r);n.a}});
//# sourceMappingURL=app.ef2e2a58.js.map