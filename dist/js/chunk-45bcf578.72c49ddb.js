(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45bcf578"],{"02fa":function(t,e,r){"use strict";r("4b99")},"04d1":function(t,e,r){var s=r("342f"),a=s.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},3565:function(t,e,r){t.exports=r.p+"img/empty.0a20cf70.png"},"4b99":function(t,e,r){},"4e82":function(t,e,r){"use strict";var s=r("23e7"),a=r("e330"),o=r("59ed"),i=r("7b0b"),n=r("07fa"),c=r("577e"),l=r("d039"),d=r("addb"),u=r("a640"),p=r("04d1"),f=r("d998"),v=r("2d00"),h=r("512c"),m=[],C=a(m.sort),g=a(m.push),_=l((function(){m.sort(void 0)})),w=l((function(){m.sort(null)})),b=u("sort"),O=!l((function(){if(v)return v<70;if(!(p&&p>3)){if(f)return!0;if(h)return h<603;var t,e,r,s,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(s=0;s<47;s++)m.push({k:e+s,v:r})}for(m.sort((function(t,e){return e.v-t.v})),s=0;s<m.length;s++)e=m[s].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),y=_||!w||!b||!O,x=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:c(e)>c(r)?1:-1}};s({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&o(t);var e=i(this);if(O)return void 0===t?C(e):C(e,t);var r,s,a=[],c=n(e);for(s=0;s<c;s++)s in e&&g(a,e[s]);d(a,x(t)),r=a.length,s=0;while(s<r)e[s]=a[s++];while(s<c)delete e[s++];return e}})},"512c":function(t,e,r){var s=r("342f"),a=s.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},5650:function(t,e,r){"use strict";r("7bf2")},"65a8":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-order-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.orders.length,expression:"orders.length == 0"}]},[s("div",{staticClass:"w-full flex flex-col items-center p-8"},[s("img",{staticClass:"w-full max-w-xs h-auto mx-auto",attrs:{src:r("3565")}}),s("p",{staticClass:"text-xl md:text-2xl font-medium py-8"},[t._v(" You don't have any orders yet. ")]),s("router-link",{attrs:{to:"/shop"}},[s("button",{staticClass:"px-8 py-3 text-base uppercase text-white font-bold bg-gold-500",staticStyle:{"box-shadow":"rgba(255, 201, 40, 0.6) 0px 12px 10px -10px"}},[t._v(" Buy now ")])])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.orders.length,expression:"orders.length != 0"}],staticClass:"order-filter"},[s("div",{staticClass:"filter"},[s("div",{staticClass:"select-box"},[s("svg",{staticClass:"select-box-icon",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M4 7.39038H10C10.5523 7.39038 11 6.94267 11 6.39038C11 5.8381 10.5523 5.39038 10 5.39038H4C3.44772 5.39038 3 5.8381 3 6.39038C3 6.94267 3.44772 7.39038 4 7.39038Z",fill:"currentColor"}}),s("path",{attrs:{d:"M4 13.2804H6C6.46352 14.2043 7.5012 14.6886 8.50704 14.4504C9.51288 14.2122 10.2232 13.314 10.2232 12.2804C10.2232 11.2467 9.51288 10.3486 8.50704 10.1104C7.5012 9.87222 6.46352 10.3565 6 11.2804H4C3.44772 11.2804 3 11.7281 3 12.2804C3 12.8327 3.44772 13.2804 4 13.2804Z",fill:"currentColor"}}),s("path",{attrs:{d:"M13.7198 8.46034C14.4937 8.45919 15.2106 8.05332 15.6098 7.39034H19.9998C20.5521 7.39034 20.9998 6.94262 20.9998 6.39034C20.9998 5.83806 20.5521 5.39034 19.9998 5.39034H15.7798C15.3573 4.35131 14.2288 3.7878 13.1444 4.07435C12.0599 4.36089 11.3571 5.40832 11.503 6.52044C11.6489 7.63255 12.5982 8.46323 13.7198 8.46034Z",fill:"currentColor"}}),s("path",{attrs:{d:"M10 17.4904H4C3.44772 17.4904 3 17.9381 3 18.4904C3 19.0426 3.44772 19.4904 4 19.4904H10C10.5523 19.4904 11 19.0426 11 18.4904C11 17.9381 10.5523 17.4904 10 17.4904Z",fill:"currentColor"}}),s("path",{attrs:{d:"M20.0001 17.4903H16.0601C15.6705 16.5276 14.6703 15.9589 13.6438 16.1165C12.6172 16.2742 11.8337 17.1167 11.7508 18.152C11.668 19.1872 12.3077 20.1436 13.2961 20.4625C14.2845 20.7813 15.3624 20.3789 15.9001 19.4903H16.0001H20.0001C20.5524 19.4903 21.0001 19.0426 21.0001 18.4903C21.0001 17.938 20.5524 17.4903 20.0001 17.4903Z",fill:"currentColor"}}),s("path",{attrs:{d:"M20 11.2804H12C11.4477 11.2804 11 11.7281 11 12.2804C11 12.8327 11.4477 13.2804 12 13.2804H20C20.5523 13.2804 21 12.8327 21 12.2804C21 11.7281 20.5523 11.2804 20 11.2804Z",fill:"currentColor"}})]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStatus,expression:"selectedStatus"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedStatus=e.target.multiple?r:r[0]}}},[s("option",{attrs:{value:"All"}},[t._v("All")]),s("option",{attrs:{value:"Pending"}},[t._v("Pending")]),s("option",{attrs:{value:"Approved"}},[t._v("Approved")]),s("option",{attrs:{value:"Pick-up"}},[t._v("Pick-up")]),s("option",{attrs:{value:"Delivering"}},[t._v("Delivering")]),s("option",{attrs:{value:"Received"}},[t._v("Received")]),s("option",{attrs:{value:"Cancel"}},[t._v("Cancel")])])])]),s("div",{staticClass:"filter"},[s("div",{staticClass:"select-box"},[s("svg",{staticClass:"select-box-icon",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M22.2939 13.08L17.6439 8.44001C17.4593 8.2516 17.2077 8.14377 16.9439 8.14001C16.6766 8.14112 16.421 8.24916 16.2339 8.44001L11.5839 13.08C11.3946 13.2678 11.2881 13.5234 11.2881 13.79C11.2881 14.0567 11.3946 14.3122 11.5839 14.5C11.7717 14.6893 12.0272 14.7958 12.2939 14.7958C12.5605 14.7958 12.8161 14.6893 13.0039 14.5L15.9439 11.56V20C15.9439 20.5523 16.3916 21 16.9439 21C17.4962 21 17.9439 20.5523 17.9439 20V11.56L20.8739 14.5C21.266 14.8921 21.9018 14.8921 22.2939 14.5C22.686 14.1079 22.686 13.4721 22.2939 13.08Z",fill:"currentColor"}}),s("path",{attrs:{d:"M12.0041 9.29C11.8163 9.10069 11.5607 8.9942 11.2941 8.9942C11.0275 8.9942 10.7719 9.10069 10.5841 9.29L7.65409 12.23V4C7.65409 3.44772 7.20638 3 6.65409 3C6.10181 3 5.65409 3.44772 5.65409 4V12.23L2.71409 9.29C2.32197 8.89788 1.68621 8.89788 1.29409 9.29C0.901969 9.68212 0.901969 10.3179 1.29409 10.71L5.94409 15.35C6.33413 15.7377 6.96405 15.7377 7.35409 15.35L12.0041 10.71C12.1934 10.5222 12.2999 10.2666 12.2999 10C12.2999 9.73336 12.1934 9.47777 12.0041 9.29Z",fill:"currentColor"}})]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSort,expression:"selectedSort"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedSort=e.target.multiple?r:r[0]}}},[s("option",{attrs:{value:"newest"}},[t._v("Newest")]),s("option",{attrs:{value:"oldest"}},[t._v("Oldest")]),s("option",{attrs:{value:"price-low-to-high"}},[t._v("Price: Low to High")]),s("option",{attrs:{value:"price-high-to-low"}},[t._v("Price: High to Low")])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.orders.length&&0!=t.myOrders.length,expression:"orders.length != 0 && myOrders.length != 0"}],staticClass:"list-order"},t._l(t.myOrders,(function(e){return s("Order",{key:e._id,attrs:{order:e},on:{"update-order":t.filterOrders}})})),1),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.orders.length&&0==t.myOrders.length,expression:"orders.length != 0 && myOrders.length == 0"}],staticClass:"w-full flex flex-col items-center p-8"},[s("img",{staticClass:"w-full max-w-xs h-auto mx-auto",attrs:{src:r("3565")}}),s("p",{staticClass:"text-xl md:text-2xl font-medium py-8"},[t._v(" There is nothing here. ")])])])},a=[],o=r("5530"),i=(r("4de4"),r("d3b7"),r("4e82"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order"},[r("div",{staticClass:"order-header"},[r("div",{staticClass:"order-code-date"},[r("p",{staticClass:"order-code"},[t._v("Order "+t._s(t._f("toCODE")(t.order._id)))]),r("p",{staticClass:"order-date"},[t._v("Order at: "+t._s(t._f("toDateTime")(t.order.date)))])]),r("p",{staticClass:"order-status"},[t._v(t._s(t.order.status))])]),r("hr",{staticClass:"order-break-line"}),r("div",{staticClass:"order-list-item"},t._l(t.order.orderItems,(function(t){return r("OrderItem",{key:t._id,attrs:{item:t}})})),1),r("p",{staticClass:"order-price"},[t._v("Total: "),r("span",[t._v(t._s(t._f("toVND")(t.order.total_price)))])]),r("hr",{staticClass:"order-break-line"}),r("div",{staticClass:"order-footer"},[r("p",[t._v("Fullname: "+t._s(t.order.full_name))]),r("p",[t._v("Address: "+t._s(t.order.address))]),r("p",[t._v("Phone: "+t._s(t.order.phone))])]),"Pending"==t.order.status?r("a",{staticClass:"order-action",on:{click:function(e){return t.updateOrderStatus("Cancel")}}},[t._v(" Cancel ")]):t._e(),"Delivering"==t.order.status?r("a",{staticClass:"order-action",on:{click:function(e){return t.updateOrderStatus("Received")}}},[t._v(" Received ")]):t._e()])}),n=[],c=r("1da1"),l=(r("96cf"),r("fb6a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group-item-wrapper"},[r("div",{staticClass:"group-item"},[r("img",{staticClass:"group-item-image",attrs:{src:t.imageProduct(t.item.product.image)}}),r("div",{staticClass:"group-item-spec"},[r("div",{staticClass:"product-spec"},[r("p",{staticClass:"product-category"},[t._v(t._s(t.item.product.category))]),r("p",{staticClass:"product-name"},[t._v(t._s(t.item.product.name))]),r("div",{staticClass:"product-price-unit"},[r("p",{staticClass:"product-price"},[t._v(t._s(t._f("toVND")(t.item.price)))]),r("p",{staticClass:"product-unit"},[t._v("/ 1 kg")])]),r("p",{staticClass:"product-qty"},[t._v("x "+t._s(t.item.quantity))])])])])])}),d=[],u={props:["item"],filters:{toVND:function(t){"number"!==typeof t&&(t=parseInt(t));var e=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0});return e.format(t)}},methods:{imageProduct:function(t){try{var e="/products/"+t;return e}catch(r){console.log(r)}}}},p=u,f=(r("5650"),r("2877")),v=Object(f["a"])(p,l,d,!1,null,"9d42975a",null),h=v.exports,m=r("535e"),C=r("2f62"),g={props:["order"],components:{OrderItem:h},data:function(){return{}},computed:{},filters:{toCODE:function(t){return"#O"+t.slice(-5)},toVND:function(t){"number"!==typeof t&&(t=parseInt(t));var e=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0});return e.format(t)},toDateTime:function(t){var e=new Date(t),r={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"Asia/Ho_Chi_Minh"};return new Intl.DateTimeFormat("en-BG",r).format(e)}},methods:Object(o["a"])(Object(o["a"])({},Object(C["b"])(["getOrders","start_load","stop_load"])),{},{imageProduct:function(t){try{var e="/products/"+t;return e}catch(r){console.log(r)}},updateOrderStatus:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.start_load(),s=JSON.parse(sessionStorage.getItem("user_login")),a={headers:{Authorization:"bearer "+s}},r.next=5,m["a"].updateStatus(e.order._id,t,a).then((function(r){console.log(r),e.$swal.fire("Success!","You have successfully ".concat(t," order"),"success"),e.getOrders().then((function(){e.$emit("update-order"),e.stop_load()}))})).catch((function(t){console.log(t),e.stop_load(),e.$swal.fire("Oh no!","Something went wrong. Double check your work.","fail")}));case 5:case"end":return r.stop()}}),r)})))()}})},_=g,w=(r("c045"),Object(f["a"])(_,i,n,!1,null,"619aa07c",null)),b=w.exports,O={components:{Order:b},data:function(){return{myOrders:[],selectedStatus:"All",selectedSort:"newest"}},watch:{selectedStatus:function(){this.filterOrders()},selectedSort:function(){this.filterOrders()}},created:function(){var t=this;this.start_load(),this.getOrders().then((function(){t.myOrders=t.orders,t.stop_load()}))},computed:Object(o["a"])({},Object(C["c"])(["orders"])),methods:Object(o["a"])(Object(o["a"])({},Object(C["b"])(["getOrders","start_load","stop_load"])),{},{filterOrders:function(){var t=this;switch(this.start_load(),this.selectedStatus){case"All":this.myOrders=this.orders,this.sortOrders(),this.stop_load();break;default:this.myOrders=this.orders.filter((function(e){return e.status==t.selectedStatus})),this.sortOrders(),this.stop_load();break}},sortOrders:function(){switch(this.selectedSort){case"oldest":this.myOrders=this.myOrders.sort((function(t,e){return new Date(t.date)-new Date(e.date)}));break;case"price-low-to-high":this.myOrders=this.myOrders.sort((function(t,e){return parseInt(t.total_price)-parseInt(e.total_price)}));break;case"price-high-to-low":this.myOrders=this.myOrders.sort((function(t,e){return parseInt(e.total_price)-parseInt(t.total_price)}));break;default:this.myOrders=this.myOrders.sort((function(t,e){return new Date(e.date)-new Date(t.date)}));break}}})},y=O,x=(r("02fa"),Object(f["a"])(y,s,a,!1,null,"37fed926",null));e["default"]=x.exports},"7bf2":function(t,e,r){},"8ee4":function(t,e,r){},addb:function(t,e,r){var s=r("4dae"),a=Math.floor,o=function(t,e){var r=t.length,c=a(r/2);return r<8?i(t,e):n(t,o(s(t,0,c),e),o(s(t,c),e),e)},i=function(t,e){var r,s,a=t.length,o=1;while(o<a){s=o,r=t[o];while(s&&e(t[s-1],r)>0)t[s]=t[--s];s!==o++&&(t[s]=r)}return t},n=function(t,e,r,s){var a=e.length,o=r.length,i=0,n=0;while(i<a||n<o)t[i+n]=i<a&&n<o?s(e[i],r[n])<=0?e[i++]:r[n++]:i<a?e[i++]:r[n++];return t};t.exports=o},c045:function(t,e,r){"use strict";r("8ee4")},d998:function(t,e,r){var s=r("342f");t.exports=/MSIE|Trident/.test(s)},fb6a:function(t,e,r){"use strict";var s=r("23e7"),a=r("da84"),o=r("e8b5"),i=r("68ee"),n=r("861d"),c=r("23cb"),l=r("07fa"),d=r("fc6a"),u=r("8418"),p=r("b622"),f=r("1dde"),v=r("f36a"),h=f("slice"),m=p("species"),C=a.Array,g=Math.max;s({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var r,s,a,p=d(this),f=l(p),h=c(t,f),_=c(void 0===e?f:e,f);if(o(p)&&(r=p.constructor,i(r)&&(r===C||o(r.prototype))?r=void 0:n(r)&&(r=r[m],null===r&&(r=void 0)),r===C||void 0===r))return v(p,h,_);for(s=new(void 0===r?C:r)(g(_-h,0)),a=0;h<_;h++,a++)h in p&&u(s,a,p[h]);return s.length=a,s}})}}]);
//# sourceMappingURL=chunk-45bcf578.72c49ddb.js.map