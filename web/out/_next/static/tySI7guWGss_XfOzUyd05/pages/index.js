(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("apO0"),c=(n("qsEy"),n("p0XB")),s=n.n(c);var l=n("d04V"),i=n.n(l),u=n("yLu3"),m=n.n(u);function d(e){return function(e){if(s()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(m()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=n("buZk"),b=n("9PIS"),p=n("gix7"),w=r.a.createElement,v=function(e){Object(f.a)(e);var t=Object(p.e)({variables:{skip:0,take:12},notifyOnNetworkStatusChange:!0}),n=t.data,r=(t.loading,t.fetchMore);t.networkStatus,t.refetch;if(!n)return w("div",null,"\ub85c\ub529\uc911...");var o=Object(a.useCallback)((function(){window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-10&&r({variables:{skip:n.selectRooms.length,take:n.selectRooms.length+4},updateQuery:function(e,t){var n=t.fetchMoreResult;return n?{selectRooms:[].concat(d(e.selectRooms),d(n.selectRooms))}:e}})}),[n.selectRooms.length]);return Object(a.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[n.selectRooms.length]),w("div",{className:"container mx-auto pb-10"},w("div",{className:"rounded-xl -mx-40 h-50vh mb-24 bg-cover bg-center"},w("div",{className:"flex flex-wrap mx-5 my-16 mb-10 mt-24"},n.selectRooms.map((function(e,t){return w(b.a,{room:e,key:e.id})})))))},x=r.a.createElement;t.default=function(){return x(o.a,null,x(v,null))}},"9PIS":function(e,t,n){"use strict";var a=n("q1tI"),r=a.createElement;t.a=function(e){var t=e.room;return r("div",{className:"w-1/4 mb-10 px-2 overflow-hidden"},r("a",{href:""},r("div",{className:"w-full h-64 bg-cover bg-center rounded-lg mb-2 ",style:{backgroundImage:'url("'.concat(t.photoConnection[0].file,'")')}}),r("div",{className:"flex justify-between mb-2 truncate"},r("div",{className:"w-4/5 overflow-hidden flex"},t.name,r("span",{className:"mr-2 uppercase font-medium text-xs border border-black text-black rounded py-px px-1"},"\uc9d1\uc8fc\uc778"),r("span",{className:"text-sm text-gray-600 block truncate"},"".concat(t.city," ").concat(t.address))),r("span",{className:"text-sm flex items-center"},r("i",{className:"fas fa-star text-red-500 text-xs mr-1"})," ",t.price)),r("span",{className:"text-black w-11/12 block truncate"},t.description)))}}},[["/EDR",1,0,11]]]);