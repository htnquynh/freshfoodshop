(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-409459bd"],{"00b4":function(t,e,r){"use strict";r("ac1f");var s=r("23e7"),o=r("da84"),i=r("c65b"),a=r("e330"),n=r("1626"),c=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=o.Error,d=a(/./.test);s({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!n(e))return d(this,t);var r=i(e,this,t);if(null!==r&&!c(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},"04d1":function(t,e,r){var s=r("342f"),o=s.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"1acd":function(t,e,r){},"23b6":function(t,e,r){},"328a":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group-item-wrapper"},[r("div",{staticClass:"group-item"},[r("img",{staticClass:"group-item-image",attrs:{src:t.imageProduct(t.product.image)}}),r("div",{staticClass:"group-item-spec"},[r("div",{staticClass:"product-spec"},[r("p",{staticClass:"product-category"},[t._v(t._s(t.product.category))]),r("p",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),r("div",{staticClass:"product-price-unit"},[r("p",{staticClass:"product-price"},[t._v(t._s(t._f("toVND")(t.product.price)))]),r("p",{staticClass:"product-unit"},[t._v("/ 1 kg")])])]),r("div",{staticClass:"product-action"},[r("button",{directives:[{name:"show",rawName:"v-show",value:t.product.quantity_remaining>0,expression:"product.quantity_remaining > 0"}],staticClass:"btn-small-icon btn-add-to-cart",on:{click:function(e){return t.addItemToCart()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"}})])]),r("button",{staticClass:"btn-small-icon btn-add-to-wishlist",on:{click:function(e){return t.addToWishlist(t.product)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}})])])])])])])},o=[],i=r("1da1"),a=r("5530"),n=(r("7db0"),r("d3b7"),r("96cf"),r("2f62")),c=r("8840"),u={props:["product"],created:function(){},computed:Object(a["a"])({},Object(n["c"])(["is_login","wishlist"])),filters:{toVND:function(t){"number"!==typeof t&&(t=parseInt(t));var e=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0});return e.format(t)}},methods:Object(a["a"])(Object(a["a"])({},Object(n["b"])(["getUserCart","addItemToWishlist","addItemsToWishlist","start_load","stop_load"])),{},{imageProduct:function(t){try{var e="/products/"+t;return e}catch(r){console.log(r)}},addItemToCart:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.is_login){e.next=9;break}return t.start_load(),r=JSON.parse(sessionStorage.getItem("user_login")),s={headers:{Authorization:"bearer "+r}},o=[{product:t.product._id,quantity:1,price:t.product.price}],e.next=7,c["a"].add(o,s).then((function(e){console.log(e.data),t.stop_load(),t.$swal.fire("Oh great!","Add product to cart successfully!","success"),t.getUserCart()})).catch((function(e){console.log(e),t.stop_load(),t.$swal.fire("Oh no!","Something went wrong. Double check your work.","fail")}));case 7:e.next=12;break;case 9:t.stop_load(),t.$swal.fire("Login to your account","You must be logged in to be able to add products to your cart.","warning"),t.$router.push({name:"Login"});case 12:case"end":return e.stop()}}),e)})))()},addToWishlist:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(s=e.wishlist.find((function(e){return e._id==t._id})),!s){r.next=4;break}return e.$swal.fire("Uh oh!","Product already exists in wishlist!","info"),r.abrupt("return");case 4:return e.start_load(),r.next=7,e.addItemToWishlist(t).then((function(t){console.log(t),e.stop_load(),e.addItemsToWishlist(),e.$swal.fire("Great!","Added product to wishlist successfully!","success")}));case 7:case"end":return r.stop()}}),r)})))()}})},l=u,d=(r("6c35"),r("2877")),p=Object(d["a"])(l,s,o,!1,null,"b39188f0",null);e["a"]=p.exports},"36df":function(t,e,r){t.exports=r.p+"img/banner-small-2.3959acda.gif"},"4df4":function(t,e,r){"use strict";var s=r("da84"),o=r("0366"),i=r("c65b"),a=r("7b0b"),n=r("9bdd"),c=r("e95a"),u=r("68ee"),l=r("07fa"),d=r("8418"),p=r("9a1f"),h=r("35a1"),f=s.Array;t.exports=function(t){var e=a(t),r=u(this),s=arguments.length,v=s>1?arguments[1]:void 0,g=void 0!==v;g&&(v=o(v,s>2?arguments[2]:void 0));var m,C,w,b,_,k,x=h(e),y=0;if(!x||this==f&&c(x))for(m=l(e),C=r?new this(m):f(m);m>y;y++)k=g?v(e[y],y):e[y],d(C,y,k);else for(b=p(e,x),_=b.next,C=r?new this:[];!(w=i(_,b)).done;y++)k=g?n(b,v,[w.value,y],!0):w.value,d(C,y,k);return C.length=y,C}},"4e82":function(t,e,r){"use strict";var s=r("23e7"),o=r("e330"),i=r("59ed"),a=r("7b0b"),n=r("07fa"),c=r("577e"),u=r("d039"),l=r("addb"),d=r("a640"),p=r("04d1"),h=r("d998"),f=r("2d00"),v=r("512c"),g=[],m=o(g.sort),C=o(g.push),w=u((function(){g.sort(void 0)})),b=u((function(){g.sort(null)})),_=d("sort"),k=!u((function(){if(f)return f<70;if(!(p&&p>3)){if(h)return!0;if(v)return v<603;var t,e,r,s,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(s=0;s<47;s++)g.push({k:e+s,v:r})}for(g.sort((function(t,e){return e.v-t.v})),s=0;s<g.length;s++)e=g[s].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),x=w||!b||!_||!k,y=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:c(e)>c(r)?1:-1}};s({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&i(t);var e=a(this);if(k)return void 0===t?m(e):m(e,t);var r,s,o=[],c=n(e);for(s=0;s<c;s++)s in e&&C(o,e[s]);l(o,y(t)),r=o.length,s=0;while(s<r)e[s]=o[s++];while(s<c)delete e[s++];return e}})},"512c":function(t,e,r){var s=r("342f"),o=s.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},"51c1":function(t,e,r){},"5e21":function(t,e,r){},"5ea9":function(t,e,r){t.exports=r.p+"img/banner-13.7640a6c3.png"},6930:function(t,e,r){t.exports=r.p+"media/Welcome.e449f5de.mp4"},"6c35":function(t,e,r){"use strict";r("23b6")},"7a4c":function(t,e,r){t.exports=r.p+"img/banner-small-1.a45f9047.gif"},"9bdd":function(t,e,r){var s=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(s(r)[0],r[1]):e(r)}catch(a){o(t,"throw",a)}}},"9c95":function(t,e,r){"use strict";r("c756")},"9e7e":function(t,e,r){t.exports=r.p+"img/video-placeholder.b53eda4d.jpg"},a630:function(t,e,r){var s=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:a},{from:o})},addb:function(t,e,r){var s=r("4dae"),o=Math.floor,i=function(t,e){var r=t.length,c=o(r/2);return r<8?a(t,e):n(t,i(s(t,0,c),e),i(s(t,c),e),e)},a=function(t,e){var r,s,o=t.length,i=1;while(i<o){s=i,r=t[i];while(s&&e(t[s-1],r)>0)t[s]=t[--s];s!==i++&&(t[s]=r)}return t},n=function(t,e,r,s){var o=e.length,i=r.length,a=0,n=0;while(a<o||n<i)t[a+n]=a<o&&n<i?s(e[a],r[n])<=0?e[a++]:r[n++]:a<o?e[a++]:r[n++];return t};t.exports=i},b85c:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("fb6a"),r("b0c0"),r("a630"),r("ac1f"),r("00b4");function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}function o(t,e){if(t){if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function i(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=o(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return n=t.done,t},e:function(t){c=!0,a=t},f:function(){try{n||null==r["return"]||r["return"]()}finally{if(c)throw a}}}}},bacd:function(t,e,r){"use strict";r("51c1")},bb51:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home relative"},[s("TheHeader",{staticClass:"header-page"}),s("MiniCart"),s("div",{staticClass:"hero"},[s("video",{attrs:{playsinline:"",autoplay:"",muted:"",loop:"",poster:r("9e7e")},domProps:{muted:!0}},[s("source",{attrs:{src:r("6930"),type:"video/mp4"}})]),t._m(0)]),s("div",{staticClass:"page-content"},[s("div",{staticClass:"section-service"},[s("TheService")],1),s("div",{staticClass:"section-featured-product"},[s("div",{staticClass:"section-product"},[s("div",{staticClass:"section-product-title"},[s("h2",{staticClass:"section-title"},[t._v("Trending Product.")]),s("router-link",{attrs:{to:"/shop"}},[s("a",{staticClass:"hover:text-gold-500"},[t._v(" Show All "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[s("rect",{attrs:{fill:"none",height:"24",width:"24"}}),s("path",{attrs:{d:"M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"}})])])])],1),s("div",{staticClass:"section-list-product"},t._l(t.featured,(function(t){return s("Product",{key:t._id,staticClass:"product",attrs:{product:t}})})),1)])]),s("div",{staticClass:"section-best-seller"},[s("div",{staticClass:"section-product"},[s("div",{staticClass:"section-product-title"},[s("h2",{staticClass:"section-title"},[t._v("Best Seller.")]),s("router-link",{attrs:{to:"/shop"}},[s("a",{staticClass:"hover:text-gold-500"},[t._v(" Show All "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[s("rect",{attrs:{fill:"none",height:"24",width:"24"}}),s("path",{attrs:{d:"M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"}})])])])],1),s("div",{staticClass:"section-list-product"},t._l(t.best_seller,(function(t){return s("Product",{key:t._id,attrs:{product:t}})})),1)]),t._m(1)]),s("div",{staticClass:"section-best-seller"},[s("div",{staticClass:"section-product"},[s("div",{staticClass:"section-product-title"},[s("h2",{staticClass:"section-title"},[t._v("New Arrival.")]),s("router-link",{attrs:{to:"/shop"}},[s("a",{staticClass:"hover:text-gold-500"},[t._v(" Show All "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[s("rect",{attrs:{fill:"none",height:"24",width:"24"}}),s("path",{attrs:{d:"M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"}})])])])],1),s("div",{staticClass:"section-list-product"},t._l(t.new_arrival,(function(t){return s("Product",{key:t._id,attrs:{product:t}})})),1)]),t._m(2)]),s("div",{staticClass:"section-recommend-menu"},[s("div",{staticClass:"section-product"},[s("div",{staticClass:"section-product-title"},[s("h2",{staticClass:"section-title"},[t._v("Recommend menu.")]),s("router-link",{attrs:{to:"/recommend-menu"}},[s("a",{staticClass:"hover:text-gold-500"},[t._v(" Show All "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[s("rect",{attrs:{fill:"none",height:"24",width:"24"}}),s("path",{attrs:{d:"M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"}})])])])],1),s("div",{staticClass:"section-list-product"},t._l(t.groups.slice(0,3),(function(t){return s("Group",{key:t._id,attrs:{group:t}})})),1)])])]),t._m(3),s("TheSubscribe"),s("TheFooter")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-msg"},[r("h2",[t._v("Fresh Food")]),r("p",[t._v("Fresh every time")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ads-banner"},[s("img",{attrs:{src:r("36df")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ads-banner"},[s("img",{attrs:{src:r("7a4c")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner-full"},[s("img",{attrs:{src:r("5ea9")}})])}],i=r("5530"),a=r("1da1"),n=(r("96cf"),r("fb6a"),r("4e82"),r("227e")),c=r("07a3"),u=r("6e2f"),l=r("7e30"),d=r("be6f"),p=r("dbec"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-service"},[r("div",{staticClass:"service free-shipping"},[r("div",{staticClass:"service-image"},[r("svg",{attrs:{width:"49",height:"49",viewBox:"0 0 49 49",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M24.5 28.0312H26.5C28.7 28.0312 30.5 26.2312 30.5 24.0312V4.03125H12.5C9.5 4.03125 6.88002 5.69123 5.52002 8.13122",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M4.5 34.0312C4.5 37.3512 7.18 40.0312 10.5 40.0312H12.5C12.5 37.8312 14.3 36.0312 16.5 36.0312C18.7 36.0312 20.5 37.8312 20.5 40.0312H28.5C28.5 37.8312 30.3 36.0312 32.5 36.0312C34.7 36.0312 36.5 37.8312 36.5 40.0312H38.5C41.82 40.0312 44.5 37.3512 44.5 34.0312V28.0312H38.5C37.4 28.0312 36.5 27.1312 36.5 26.0312V20.0312C36.5 18.9312 37.4 18.0312 38.5 18.0312H41.08L37.66 12.0513C36.94 10.8113 35.6201 10.0312 34.1801 10.0312H30.5V24.0312C30.5 26.2312 28.7 28.0312 26.5 28.0312H24.5",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M16.5 44.0312C18.7091 44.0312 20.5 42.2404 20.5 40.0312C20.5 37.8221 18.7091 36.0312 16.5 36.0312C14.2909 36.0312 12.5 37.8221 12.5 40.0312C12.5 42.2404 14.2909 44.0312 16.5 44.0312Z",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M32.5 44.0312C34.7091 44.0312 36.5 42.2404 36.5 40.0312C36.5 37.8221 34.7091 36.0312 32.5 36.0312C30.2909 36.0312 28.5 37.8221 28.5 40.0312C28.5 42.2404 30.2909 44.0312 32.5 44.0312Z",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M44.5 24.0312V28.0312H38.5C37.4 28.0312 36.5 27.1313 36.5 26.0312V20.0312C36.5 18.9312 37.4 18.0312 38.5 18.0312H41.08L44.5 24.0312Z",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M4.5 16.0312H16.5",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M4.5 22.0312H12.5",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M4.5 28.0312H8.5",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._m(0)]),r("div",{staticClass:"service secure-payments"},[r("div",{staticClass:"service-image"},[r("svg",{attrs:{width:"49",height:"49",viewBox:"0 0 49 49",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12.5 20.0312V16.0312C12.5 9.41125 14.5 4.03125 24.5 4.03125C34.5 4.03125 36.5 9.41125 36.5 16.0312V20.0312",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M24.5 37.0312C27.2614 37.0312 29.5 34.7927 29.5 32.0312C29.5 29.2698 27.2614 27.0312 24.5 27.0312C21.7386 27.0312 19.5 29.2698 19.5 32.0312C19.5 34.7927 21.7386 37.0312 24.5 37.0312Z",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M34.5 44.0313H14.5C6.5 44.0313 4.5 42.0313 4.5 34.0313V30.0313C4.5 22.0313 6.5 20.0312 14.5 20.0312H34.5C42.5 20.0312 44.5 22.0313 44.5 30.0313V34.0313C44.5 42.0313 42.5 44.0313 34.5 44.0313Z",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._m(1)]),r("div",{staticClass:"service support-help"},[r("div",{staticClass:"service-image"},[r("svg",{attrs:{width:"49",height:"49",viewBox:"0 0 49 49",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M44.44 36.6912C44.44 37.4112 44.28 38.1513 43.94 38.8713C43.6 39.5913 43.16 40.2713 42.58 40.9113C41.6 41.9913 40.52 42.7713 39.3 43.2713C38.1 43.7713 36.8 44.0312 35.4 44.0312C33.36 44.0312 31.18 43.5513 28.88 42.5713C26.58 41.5913 24.28 40.2713 22 38.6113C19.7 36.9313 17.52 35.0712 15.44 33.0112C13.38 30.9312 11.52 28.7513 9.86 26.4713C8.22 24.1913 6.9 21.9113 5.94 19.6513C4.98 17.3713 4.5 15.1912 4.5 13.1112C4.5 11.7512 4.74 10.4513 5.22 9.25125C5.7 8.03125 6.46 6.91125 7.52 5.91125C8.8 4.65125 10.2 4.03125 11.68 4.03125C12.24 4.03125 12.8 4.15125 13.3 4.39125C13.82 4.63125 14.28 4.99125 14.64 5.51125L19.28 12.0513C19.64 12.5513 19.9 13.0113 20.08 13.4513C20.26 13.8713 20.36 14.2913 20.36 14.6713C20.36 15.1513 20.22 15.6312 19.94 16.0912C19.68 16.5512 19.3 17.0312 18.82 17.5112L17.3 19.0912C17.08 19.3112 16.98 19.5713 16.98 19.8913C16.98 20.0513 17 20.1912 17.04 20.3512C17.1 20.5112 17.16 20.6312 17.2 20.7512C17.56 21.4112 18.18 22.2713 19.06 23.3113C19.96 24.3513 20.92 25.4113 21.96 26.4713C23.04 27.5313 24.08 28.5112 25.14 29.4112C26.18 30.2912 27.04 30.8912 27.72 31.2512C27.82 31.2912 27.94 31.3512 28.08 31.4112C28.24 31.4712 28.4 31.4912 28.58 31.4912C28.92 31.4912 29.18 31.3713 29.4 31.1513L30.92 29.6513C31.42 29.1513 31.9 28.7712 32.36 28.5312C32.82 28.2512 33.28 28.1112 33.78 28.1112C34.16 28.1112 34.56 28.1913 35 28.3713C35.44 28.5513 35.9 28.8113 36.4 29.1513L43.02 33.8512C43.54 34.2112 43.9 34.6312 44.12 35.1312C44.32 35.6312 44.44 36.1312 44.44 36.6912Z",stroke:"currentColor","stroke-width":"3","stroke-miterlimit":"10"}}),r("path",{attrs:{d:"M37.5 18.0312C37.5 16.8312 36.56 14.9913 35.16 13.4913C33.88 12.1113 32.18 11.0312 30.5 11.0312",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),r("path",{attrs:{d:"M44.5 18.0313C44.5 10.2913 38.24 4.03125 30.5 4.03125",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._m(2)])])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service-content"},[r("div",{staticClass:"service-title"},[t._v("Free Shipping")]),r("div",{staticClass:"service-subtitle"},[t._v("Order over 250.000đ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service-content"},[r("div",{staticClass:"service-title"},[t._v("Secure Payments")]),r("div",{staticClass:"service-subtitle"},[t._v("100% Secure & Safe")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service-content"},[r("div",{staticClass:"service-title"},[t._v("24/7 Support Help")]),r("div",{staticClass:"service-subtitle"},[t._v("Dedicated Support")])])}],v=(r("c62a"),r("2877")),g={},m=Object(v["a"])(g,h,f,!1,null,"6d884174",null),C=m.exports,w=r("2f62"),b={components:{TheHeader:n["a"],TheFooter:c["a"],TheSubscribe:u["a"],TheService:C,MiniCart:l["a"],Product:d["a"],Group:p["a"]},data:function(){return{featured:[],best_seller:[],new_arrival:[]}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.start_load(),t.getProducts().then((function(e){console.log(e),t.featured=t.products.slice(0,8),t.best_seller=t.sortProductBySold(t.products).slice(0,2),t.new_arrival=t.featured.slice(0,2),t.getGroups().then((function(){t.stop_load()}))}));case 2:case"end":return e.stop()}}),e)})))()},computed:Object(i["a"])({},Object(w["c"])(["products","groups"])),methods:Object(i["a"])(Object(i["a"])({},Object(w["b"])(["getProducts","getGroups","start_load","stop_load"])),{},{sortProductBySold:function(t){return t.sort((function(t,e){return e.quantity_sold-t.quantity_sold}))}})},_=b,k=(r("bacd"),Object(v["a"])(_,s,o,!1,null,"c9ebbc60",null));e["default"]=k.exports},be6f:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrapper"},[r("div",{staticClass:"product"},[r("img",{staticClass:"product-image",attrs:{src:t.imageProduct(t.product.image)},on:{click:function(e){return t.detailProduct()}}}),r("div",{staticClass:"product-action"},[r("a",{staticClass:"btn-compare",on:{click:function(e){return t.compare(t.product._id)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V14zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.31.85.09.85-.36z"}})])]),r("a",{directives:[{name:"show",rawName:"v-show",value:t.product.quantity_remaining>0,expression:"product.quantity_remaining > 0"}],staticClass:"btn-add-to-cart",on:{click:function(e){return t.addItemToCart()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"}})])]),r("a",{staticClass:"btn-add-to-wishlist",on:{click:function(e){return t.addToWishlist(t.product)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}})])])]),r("div",{staticClass:"product-spec"},[r("p",{staticClass:"product-category"},[t._v(t._s(t.product.category))]),r("p",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),r("div",{staticClass:"product-price-unit"},[r("p",{staticClass:"product-price"},[t._v(t._s(t._f("toVND")(t.product.price)))]),r("p",{staticClass:"product-unit"},[t._v("/ 1 kg")])])])])])},o=[],i=r("1da1"),a=r("b85c"),n=r("5530"),c=(r("7db0"),r("d3b7"),r("96cf"),r("2f62")),u=r("8840"),l={props:["product"],data:function(){return{}},computed:Object(n["a"])({},Object(c["c"])(["is_login","compareProducts","wishlist"])),filters:{toVND:function(t){"number"!==typeof t&&(t=parseInt(t));var e=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0});return e.format(t)}},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])(["start_load","stop_load","getSelectedProduct","getCompareProducts","getUserCart","addItemToWishlist","addItemsToWishlist","getWishlist"])),{},{imageProduct:function(t){try{var e="/products/"+t;return e}catch(r){console.log(r)}},detailProduct:function(){this.getSelectedProduct(this.product._id);var t=this.product._id,e="/product/".concat(t);this.$route.path!==e&&this.$router.push(e)},compare:function(t){if(0==this.compareProducts.length&&this.$swal.fire("One more!","Please choose 1 more product to compare","success"),0!=this.compareProducts.length){var e,r=Object(a["a"])(this.compareProducts);try{for(r.s();!(e=r.n()).done;){var s=e.value;if(s._id===t)return void this.$swal.fire("You have already selected this product!","Please choose another product to compare!","warning")}}catch(o){r.e(o)}finally{r.f()}this.$router.push({name:"Compare"})}this.getCompareProducts(t)},addItemToCart:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.is_login){e.next=9;break}return t.start_load(),r=JSON.parse(sessionStorage.getItem("user_login")),s={headers:{Authorization:"bearer "+r}},o=[{product:t.product._id,quantity:1,price:t.product.price}],e.next=7,u["a"].add(o,s).then((function(e){console.log(e.data),t.getUserCart().then((function(){t.stop_load(),t.$swal.fire("Oh great!","Add product to cart successfully!","success")}))})).catch((function(e){console.log(e),t.stop_load(),t.$swal.fire("Oh no!","Something went wrong. Double check your work.","fail")}));case 7:e.next=11;break;case 9:t.$swal.fire("Login to your account","You must be logged in to be able to add products to your cart.","warning"),t.$router.push({name:"Login"});case 11:case"end":return e.stop()}}),e)})))()},addToWishlist:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(s=e.wishlist.find((function(e){return e._id==t._id})),!s){r.next=4;break}return e.$swal.fire("Uh oh!","Product already exists in wishlist!","info"),r.abrupt("return");case 4:return e.start_load(),r.next=7,e.addItemToWishlist(t).then((function(t){console.log(t),e.addItemsToWishlist().then((function(){e.stop_load()})),e.$swal.fire("Great!","Added product to wishlist successfully!","success")}));case 7:case"end":return r.stop()}}),r)})))()}})},d=l,p=(r("f8d8"),r("2877")),h=Object(p["a"])(d,s,o,!1,null,"e5c5ccac",null);e["a"]=h.exports},c62a:function(t,e,r){"use strict";r("5e21")},c756:function(t,e,r){},d28b:function(t,e,r){var s=r("746f");s("iterator")},d998:function(t,e,r){var s=r("342f");t.exports=/MSIE|Trident/.test(s)},dbec:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group-wrapper"},[r("div",{staticClass:"group"},[r("img",{staticClass:"group-image",attrs:{src:t.imageGroup(t.group.image)},on:{click:function(e){return t.detailGroup()}}}),r("div",{staticClass:"group-spec"},[r("p",{staticClass:"group-name"},[t._v(t._s(t.group.title))]),r("div",{staticClass:"group-calo-price"},[r("div",{staticClass:"group-calo"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[r("g",[r("rect",{attrs:{fill:"none",height:"24",width:"24",y:"0"}})]),r("g",[r("path",{attrs:{d:"M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z"}})])]),r("p",[r("span",{staticClass:"value"},[t._v(t._s(t.group.calo))]),t._v(" kcal")])]),r("div",{staticClass:"group-price"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[r("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),r("path",{attrs:{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}}),r("circle",{attrs:{cx:"6.5",cy:"6.5",r:"1.5"}})]),r("p",[r("span",{staticClass:"value"},[t._v(t._s(t._f("toVND")(t.group.price)))])])])]),r("div",{staticClass:"group-ingredients"},[r("p",[t._v("Ingredients")]),r("div",{staticClass:"group-list-item"},t._l(t.group.material,(function(t){return r("GroupItem",{key:t._id,attrs:{product:t.product}})})),1)])])])])},o=[],i=r("5530"),a=r("328a"),n=r("2f62"),c={props:["group"],components:{GroupItem:a["a"]},filters:{toVND:function(t){"number"!==typeof t&&(t=parseInt(t));var e=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0});return e.format(t)}},methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])(["setSelectedGroup"])),{},{imageGroup:function(t){try{var e="/group/"+t;return e}catch(r){console.log(r)}},detailGroup:function(){this.setSelectedGroup(this.group._id);var t=this.group._id,e="/group/".concat(t);this.$route.path!==e&&this.$router.push(e)}})},u=c,l=(r("9c95"),r("2877")),d=Object(l["a"])(u,s,o,!1,null,"0d051108",null);e["a"]=d.exports},e01a:function(t,e,r){"use strict";var s=r("23e7"),o=r("83ab"),i=r("da84"),a=r("e330"),n=r("1a2d"),c=r("1626"),u=r("3a9b"),l=r("577e"),d=r("9bf2").f,p=r("e893"),h=i.Symbol,f=h&&h.prototype;if(o&&c(h)&&(!("description"in f)||void 0!==h().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(f,this)?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};p(g,h),g.prototype=f,f.constructor=g;var m="Symbol(test)"==String(h("test")),C=a(f.toString),w=a(f.valueOf),b=/^Symbol\((.*)\)[^)]+$/,_=a("".replace),k=a("".slice);d(f,"description",{configurable:!0,get:function(){var t=w(this),e=C(t);if(n(v,t))return"";var r=m?k(e,7,-1):_(e,b,"$1");return""===r?void 0:r}}),s({global:!0,forced:!0},{Symbol:g})}},f8d8:function(t,e,r){"use strict";r("1acd")},fb6a:function(t,e,r){"use strict";var s=r("23e7"),o=r("da84"),i=r("e8b5"),a=r("68ee"),n=r("861d"),c=r("23cb"),u=r("07fa"),l=r("fc6a"),d=r("8418"),p=r("b622"),h=r("1dde"),f=r("f36a"),v=h("slice"),g=p("species"),m=o.Array,C=Math.max;s({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var r,s,o,p=l(this),h=u(p),v=c(t,h),w=c(void 0===e?h:e,h);if(i(p)&&(r=p.constructor,a(r)&&(r===m||i(r.prototype))?r=void 0:n(r)&&(r=r[g],null===r&&(r=void 0)),r===m||void 0===r))return f(p,v,w);for(s=new(void 0===r?m:r)(C(w-v,0)),o=0;v<w;v++,o++)v in p&&d(s,o,p[v]);return s.length=o,s}})}}]);
//# sourceMappingURL=chunk-409459bd.4b8a36a0.js.map