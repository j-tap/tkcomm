(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{475:function(t,n,e){"use strict";var r=e(3),o=e(476);r({target:"String",proto:!0,forced:e(477)("link")},{link:function(t){return o(this,"a","href",t)}})},476:function(t,n,e){var r=e(21),o=/"/g;t.exports=function(t,n,e,c){var f=String(r(t)),d="<"+n;return""!==e&&(d+=" "+e+'="'+String(c).replace(o,"&quot;")+'"'),d+">"+f+"</"+n+">"}},477:function(t,n,e){var r=e(4);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},533:function(t,n,e){"use strict";e.r(n);e(138),e(27);var r=e(2),o=e(473),c={components:{Heading1:e(472).a},mixins:[o.a],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$strapi,n.next=3,e.find("about");case 3:return data=n.sent,n.abrupt("return",{data:data});case 5:case"end":return n.stop()}}),n)})))()},data:function(){return{}}},f=e(53),component=Object(f.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"page-content page-about"},[n("Heading1",{attrs:{title:this.data.title}}),this._v(" "),n("div",{domProps:{innerHTML:this._s(this.$md.render(this.data.text))}})],1)}),[],!1,null,"0ea39de4",null);n.default=component.exports}}]);