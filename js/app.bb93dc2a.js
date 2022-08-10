(function(){"use strict";var t={2883:function(t,e,a){var n=a(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],r=a(1001),i={},d=(0,r.Z)(i,s,o,!1,null,null,null),l=d.exports,u=a(2631),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard"},[e("div",{staticClass:"dashboard-content"},t._l(t.componentList,(function(t){return e("BaseComponent",{key:t.id,attrs:{size:t.size,interval:t.interval}},[e(t.componentName,{tag:"component",attrs:{headerData:t.headerData,extData:t.extData}})],1)})),1)])},h=[],f=function(){var t=this,e=t._self._c;return e("div",{class:`component component-${t.size||"default"}`},[t._t("default",null,{headerData:t.headerData,extData:t.extData})],2)},p=[],m={name:"BaseComponent",props:["size","interval","headerData","extData"],data(){return{}},mounted(){},created(){const t=this.interval;this.timer=t?setInterval((()=>{this.refresh()}),t):setInterval((()=>{"00-00"===this.$dayjs().format("HH-mm")&&this.refresh()}),5e3)},methods:{refresh:function(){this.$children.forEach((t=>{t.refresh&&t.refresh()}))}},beforeDestroy(){clearTimeout(this.timer)}},v=m,D=(0,r.Z)(v,f,p,!1,null,null,null),_=D.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",[t._v(t._s(t.extData.title))]),e("div",{staticClass:"day"},[e("span",{staticClass:"day-value"},[t._v(t._s(t.days))]),e("span",{staticClass:"day-text"},[t._v("天")])]),e("div",{staticClass:"footer"},[t._v(t._s(t.deadline))])])])},x=[],y={name:"CountDown",components:{},props:["extData"],data(){return{today:"",nextDate:""}},computed:{deadline:function(){return this.nextDate?this.nextDate:this.extData.date},days:function(){const t=this.$dayjs().format("YYYY-MM");if(this.extData.date)return this.$dayjs(this.extData.date).diff(this.today,"hour")/24;{let e=Number.MAX_SAFE_INTEGER;return this.extData.dayList.forEach(((a,n)=>{if(a){const n=t+"-"+a,s=this.$dayjs(n,"YYYY-MM-DD").diff(this.today,"hour")/24;s>=0&&s<e&&(e=s,this.nextDate=n)}})),e}}},mounted(){},created(){this.refresh()},methods:{refresh:function(){this.today=this.$dayjs().format("YYYY-MM-DD")}}},O=y,T=(0,r.Z)(O,C,x,!1,null,"6518982a",null),b=T.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("Header",{attrs:{headerData:t.headerConfig}}),e("div",{staticClass:"content"},[e("div",{staticClass:"item"},[t._v(" 视频:"),e("span",{staticClass:"value"},[t._v(t._s(t.status.VIDEO_COUNT))]),t._v("个 ")]),e("div",{staticClass:"item"},[t._v(" 图片:"),e("span",{staticClass:"value"},[t._v(t._s(t.status.PHOTO_COUNT))]),t._v("张 ")]),e("div",{staticClass:"item"},[t._v(" 耗时:"),e("span",{staticClass:"value"},[t._v(t._s((t.status.DOWNLOAD_TIME_COST/60).toFixed(0))+"分钟")])])]),e("Footer",[e("span",[t._v(t._s(t.status.IMP_TIME))])])],1)},N=[],g=function(){var t=this,e=t._self._c;return t.headerData.title?e("div",{staticClass:"title"},[e("img",{attrs:{src:t.headerData.iconUrl,alt:""}}),e("span",{style:{color:t.headerData.titleColor}},[t._v(t._s(t.headerData.title))])]):t._e()},E=[],M={name:"DashboardHeader",props:["headerData"],data(){return{}},mounted(){},methods:{}},Y=M,F=(0,r.Z)(Y,g,E,!1,null,"e8e780c6",null),I=F.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[t._t("default")],2)},Z=[],j={name:"DashboardFooter",data(){return{}},mounted(){},methods:{}},$=j,z=(0,r.Z)($,L,Z,!1,null,"c26405cc",null),P=z.exports,k={name:"DashboardTikTokDownloadStatus",components:{Header:I,Footer:P},props:["headerData","extData"],data(){return{headerConfig:{title:"抖音增量下载",iconUrl:"https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico"},status:{PHOTO_COUNT:"12",VIDEO_COUNT:"11",DOWNLOAD_TIME_COST:"111",IMP_TIME:"2020-12-11"}}},created(){this.refresh()},mounted(){},methods:{refresh:function(){this.$http.get(this.extData.api).then((t=>{const{data:e}=t;this.status=e}),(t=>{}))}}},U=k,H=(0,r.Z)(U,w,N,!1,null,"393714c3",null),S=H.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",[t._v(t._s(t.extData.title))]),e("div",{staticClass:"day"},[e("span",{staticClass:"day-value"},[t._v(t._s(t.days))]),e("span",{staticClass:"day-text"},[t._v("天")])]),e("div",{staticClass:"footer"},[t._v(t._s(t.extData.date))])])])},A=[],R={name:"CommemorationDate",components:{},props:["extData"],data(){return{today:""}},created(){this.refresh()},computed:{days:function(){return this.$dayjs(this.$dayjs(this.today).format("YYYY-MM-DD")).diff(this.extData.date,"hour")/24}},mounted(){},methods:{refresh:function(){this.today=this.$dayjs().format("YYYY-MM-DD")}}},B=R,G=(0,r.Z)(B,W,A,!1,null,"9cd4bcee",null),X=G.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("Header",{attrs:{headerData:{title:"关注者 "+t.changeText,iconUrl:"https://s3.bmp.ovh/imgs/2022/04/04/8bdbff42330cef61.png"}}}),e("div",{staticClass:"content"},[e("div",[e("span",{staticClass:"value"},[t._v(t._s(t.status.FOLLOWERS_COUNT_TEXT))])])]),e("Footer",[e("span",[t._v(" "+t._s(t.status.IMP_TIME)+" ")])])],1)},q=[],J={name:"TwitterFollowers",props:["headerData","extData"],components:{Header:I,Footer:P},data(){return{status:{FOLLOWERS_COUNT:"1",FOLLOWERS_COUNT_TEXT:"111",FOLLOWERS_COUNT_CHANGE:"11",IMP_TIME:"2022-08-10 10:10:10"}}},computed:{changeText:function(){const t=this.status.FOLLOWERS_COUNT_CHANGE,e=parseInt(t)>0?"↑":"↓";let a="";const n=Math.abs(t);return 0!==n&&(a=e+n),a}},created(){this.refresh()},mounted(){},methods:{refresh:function(){this.$http.get(this.extData.api).then((t=>{const{data:e}=t;this.status=e}),(t=>{}))}}},K=J,Q=(0,r.Z)(K,V,q,!1,null,"8b1f21b2",null),tt=Q.exports,et={name:"DashBoard",components:{BaseComponent:_,CountDown:b,TikTokDownloadStatus:S,CommemorationDate:X,TwitterFollowers:tt},created(){},data(){return{componentList:[{id:"1",componentName:"CountDown",size:"small",extData:{title:"域名到期",date:"2024-03-08"}},{id:"3",componentName:"CountDown",size:"small",extData:{title:"下一次学费还款",dayList:["01","19","22"]}},{id:"9",componentName:"CountDown",size:"small",extData:{title:"域名到期",date:"2022-11-28"}},{id:"8",componentName:"TikTokDownloadStatus",interval:5e3,extData:{api:"http:xxx"}},{id:"7",componentName:"TwitterFollowers",interval:5e3,extData:{api:"http:xxx"}},{id:"10",componentName:"CountDown",size:"default-long",extData:{title:"域名到期",date:"2022-11-28"}},{id:"11",componentName:"CountDown",size:"small",extData:{title:"域名到期",date:"2022-11-28"}},{id:"12",componentName:"CountDown",size:"small",extData:{title:"域名到期",date:"2022-11-28"}},{id:"13",componentName:"CountDown",size:"small",extData:{title:"域名到期",date:"2022-11-28"}},{id:"14",componentName:"CountDown",size:"small-long",extData:{title:"域名到期",date:"2022-11-28"}},{id:"15",componentName:"CountDown",size:"big",extData:{title:"域名到期",date:"2022-11-28"}}]}},beforeDestroy(){},mounted(){},methods:{}},at=et,nt=(0,r.Z)(at,c,h,!1,null,"7611fc09",null),st=nt.exports;n.ZP.use(u.Z);const ot=[{path:"/",name:"dashboard",component:st}],rt=new u.Z({routes:ot});var it=rt,dt=a(5743),lt=a.n(dt),ut=a(6265),ct=a.n(ut);n.ZP.config.productionTip=!1,n.ZP.prototype.$dayjs=lt(),n.ZP.prototype.$http=ct(),new n.ZP({router:it,render:t=>t(l)}).$mount("#app")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,o){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],o=t[u][2];for(var i=!0,d=0;d<n.length;d++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[d])}))?n.splice(d--,1):(i=!1,o<r&&(r=o));if(i){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,r=n[0],i=n[1],d=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(d)var u=d(a)}for(e&&e(n);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},n=self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2883)}));n=a.O(n)})();
//# sourceMappingURL=app.bb93dc2a.js.map