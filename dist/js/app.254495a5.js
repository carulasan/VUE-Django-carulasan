(function(e){function t(t){for(var s,r,c=t[0],i=t[1],u=t[2],f=0,d=[];f<c.length;f++)r=c[f],a[r]&&d.push(a[r][0]),a[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r=n("2877"),c={},i=Object(r["a"])(c,a,o,!1,null,null,null),u=i.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary",glossy:"mat"===e.$q.theme,inverted:"ios"===e.$q.theme}},[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        Quasar App\n        "),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("Running on Quasar v"+e._s(e.$q.version))])])],1)],1),n("q-layout-drawer",{attrs:{"content-class":"mat"===e.$q.theme?"bg-grey-2":null},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list-header",[e._v("Navigation")]),n("q-item",{attrs:{to:"/",exact:""}},[n("q-item-side",{attrs:{icon:"home"}}),n("q-item-main",{attrs:{label:"Home"}})],1),n("q-item",{attrs:{to:"/about"}},[n("q-item-side",{attrs:{icon:"info_outline"}}),n("q-item-main",{attrs:{label:"About"}})],1),n("q-item-separator"),n("q-list-header",[e._v("Essential Links")]),n("q-item",{nativeOn:{click:function(t){return e.openURL("http://quasar-framework.org")}}},[n("q-item-side",{attrs:{icon:"school"}}),n("q-item-main",{attrs:{label:"Docs",sublabel:"quasar-framework.org"}})],1),n("q-item",{nativeOn:{click:function(t){return e.openURL("https://discord.gg/5TDhbDg")}}},[n("q-item-side",{attrs:{icon:"chat"}}),n("q-item-main",{attrs:{label:"Discord Chat Channel",sublabel:"https://discord.gg/5TDhbDg"}})],1),n("q-item",{nativeOn:{click:function(t){return e.openURL("http://forum.quasar-framework.org")}}},[n("q-item-side",{attrs:{icon:"forum"}}),n("q-item-main",{attrs:{label:"Forum",sublabel:"forum.quasar-framework.org"}})],1),n("q-item",{nativeOn:{click:function(t){return e.openURL("https://twitter.com/quasarframework")}}},[n("q-item-side",{attrs:{icon:"rss feed"}}),n("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},d=[],p=n("96a1"),b={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:p["a"]}},m=b,g=Object(r["a"])(m,f,d,!1,null,null,null),h=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("img",{attrs:{alt:"Quasar logo",src:"https://camo.githubusercontent.com/3fc3112c5d6c06b3c9527dcc9ec25ea7bf7a89d8/68747470733a2f2f63646e2e7261776769742e636f6d2f7175617361726672616d65776f726b2f7175617361722d6172742f38363363313462642f646973742f7376672f7175617361722d6c6f676f2d66756c6c2d696e6c696e652e737667"}})])},v=[],w={name:"PageHome"},q=w,I=Object(r["a"])(q,O,v,!1,null,null,null),D=I.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("p",[e._v("This is an about page")])])},k=[],L={name:"PageAbout"},_=L,U=Object(r["a"])(_,y,k,!1,null,null,null),R=U.exports;s["a"].use(l["a"]);var Q=new l["a"]({routes:[{path:"/",component:h,children:[{path:"",name:"home",component:D},{path:"/about",name:"about",component:R}]}]}),j=n("2f62");s["a"].use(j["a"]);var x=new j["a"].Store({state:{},mutations:{},actions:{}}),S=n("9483");Object(S["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("a4ac"),n("4a91"),n("2826"),n("7e57");var B=n("e84f"),T=n("482e"),z=n("7051"),P=n("2040"),$=n("cf12"),E=n("32a1"),M=n("46a9"),A=n("f30c"),C=n("ce67"),N=n("1180"),F=n("1e55"),H=n("91c8"),J=n("506f"),X=n("7d43"),Y=n("b8d9");s["a"].use(B["a"],{config:{},components:{QBtn:T["a"],QLayout:z["a"],QLayoutHeader:P["a"],QLayoutDrawer:$["a"],QPage:E["a"],QPageContainer:M["a"],QToolbar:A["a"],QToolbarTitle:C["a"],QList:N["a"],QListHeader:F["a"],QItemSeparator:H["a"],QItem:J["a"],QItemSide:X["a"],QItemMain:Y["a"]},directives:{},plugins:{}}),s["a"].config.productionTip=!1,new s["a"]({router:Q,store:x,render:function(e){return e(u)}}).$mount("#app")},"97cb":function(e,t,n){var s={"./bounce.css":"3d49","./bounceIn.css":"0a58","./bounceInDown.css":"a4a9","./bounceInLeft.css":"5965","./bounceInRight.css":"da80","./bounceInUp.css":"b60e","./bounceOut.css":"f39d","./bounceOutDown.css":"a9b5","./bounceOutLeft.css":"06dd","./bounceOutRight.css":"66bc","./bounceOutUp.css":"908f","./fadeIn.css":"1070","./fadeInDown.css":"1625","./fadeInDownBig.css":"9338","./fadeInLeft.css":"0c2e","./fadeInLeftBig.css":"f357","./fadeInRight.css":"ef8f","./fadeInRightBig.css":"747a","./fadeInUp.css":"e7fb","./fadeInUpBig.css":"b8af","./fadeOut.css":"25cd","./fadeOutDown.css":"93ea","./fadeOutDownBig.css":"c888","./fadeOutLeft.css":"5f1d","./fadeOutLeftBig.css":"a555","./fadeOutRight.css":"8934","./fadeOutRightBig.css":"9438","./fadeOutUp.css":"351b","./fadeOutUpBig.css":"23a5","./flash.css":"58a5","./flip.css":"bda0","./flipInX.css":"58b8","./flipInY.css":"5902","./flipOutX.css":"72c5","./flipOutY.css":"b8ad","./headShake.css":"2289","./hinge.css":"085e","./jello.css":"8014","./lightSpeedIn.css":"eb7d","./lightSpeedOut.css":"d043","./pulse.css":"ab98","./rollIn.css":"dc73","./rollOut.css":"592c","./rotateIn.css":"487d","./rotateInDownLeft.css":"bf6b","./rotateInDownRight.css":"7b96","./rotateInUpLeft.css":"89f8","./rotateInUpRight.css":"cb8c","./rotateOut.css":"de65","./rotateOutDownLeft.css":"8134","./rotateOutDownRight.css":"1ea7","./rotateOutUpLeft.css":"63d1","./rotateOutUpRight.css":"fcc3","./rubberBand.css":"aab2","./shake.css":"15f1","./slideInDown.css":"79ea","./slideInLeft.css":"a963","./slideInRight.css":"3b76","./slideInUp.css":"21e3","./slideOutDown.css":"abed","./slideOutLeft.css":"f857","./slideOutRight.css":"0a43","./slideOutUp.css":"5706","./swing.css":"b968","./tada.css":"3391","./wobble.css":"ed5b","./zoomIn.css":"38f3","./zoomInDown.css":"2577","./zoomInLeft.css":"1992","./zoomInRight.css":"ef68","./zoomInUp.css":"97a1","./zoomOut.css":"cc15","./zoomOutDown.css":"2ac6","./zoomOutLeft.css":"1fd4","./zoomOutRight.css":"fa2f","./zoomOutUp.css":"91e5"};function a(e){var t=o(e);return n(t)}function o(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id="97cb"},a4ac:function(e,t,n){}});
//# sourceMappingURL=app.254495a5.js.map