(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{L97S:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"section"},[t.loading?n("p",{staticClass:"notification is-info"},[t._v("\n    Loading\n  ")]):[n("h1",{staticClass:"title"},[t._v(t._s(t.page.title))]),n("article",{staticClass:"box"},[n("div",{staticClass:"content"},[t._v("\n        "+t._s(t.page.body)+"\n      ")]),n("p",[t._v("Posted by user "+t._s(t.page.userId))])])]],2)},s=[],e=n("yUrU"),o={data:function(){return{page:null,loading:!0}},watch:{$route:{immediate:!0,handler:function(t){var a=this;e["a"].getPost(t.params.id).then(function(t){a.page=t.data,a.loading=!1}).catch(function(){alert("ERROR"),a.loading=!1})}}}},c=o,l=n("KHd+"),r=Object(l["a"])(c,i,s,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=0.c3f23575.js.map