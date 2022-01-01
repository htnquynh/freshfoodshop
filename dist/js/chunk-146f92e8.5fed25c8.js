(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-146f92e8"],{1405:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home relative"},[s("TheHeader",{staticClass:"header-page"}),s("MiniCart"),s("div",{staticClass:"page-content"},[s("div",{staticClass:"shop-page"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.compareProducts.length,expression:"compareProducts.length == 0"}],staticClass:"table-compare-wrapper"},[s("div",{staticClass:"w-full flex flex-col items-center p-8"},[s("img",{staticClass:"w-full max-w-xs h-auto mx-auto",attrs:{src:a("3565")}}),s("p",{staticClass:"text-xl md:text-2xl font-medium py-8"},[t._v("Nothing to Compare")]),s("router-link",{attrs:{to:"/shop"}},[s("button",{staticClass:"px-8 py-3 text-base uppercase text-white font-bold bg-gold-500",staticStyle:{"box-shadow":"rgba(255, 201, 40, 0.6) 0px 12px 10px -10px"}},[t._v(" Add now ")])])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.compareProducts.length,expression:"compareProducts.length != 0"}],staticClass:"table-compare-wrapper"},[s("table",{staticClass:"table-compare"},[t._m(0),s("tbody",{staticClass:"tbody-table"},t._l(t.compareProducts,(function(e){return s("tr",{key:e._id,staticClass:"row-product"},[s("td",{staticClass:"td-table"},[s("div",{staticClass:"col-product"},[s("img",{staticClass:"group-item-image",attrs:{src:t.imageProduct(e.image)}}),s("div",{staticClass:"product-spec"},[s("p",{staticClass:"product-category"},[t._v(t._s(e.category))]),s("p",{staticClass:"product-name"},[t._v(t._s(e.name))])])])]),s("td",{staticClass:"td-table"},[s("div",{staticClass:"product-price-unit"},[s("p",{staticClass:"product-price"},[t._v(t._s(t._f("toVND")(e.price)))]),s("p",{staticClass:"product-unit"},[t._v("/ 1 kg")])])]),s("td",{staticClass:"td-table"},[s("div",{staticClass:"product-calo"},[s("p",[s("span",{staticClass:"value"},[t._v(t._s(e.calo))]),t._v(" kcal")])])]),s("td",{staticClass:"td-table"},[s("div",{staticClass:"product-status"},["0"==e.quantity_remaining?s("p",{staticClass:"text-sm font-bold text-fail uppercase"},[t._v("Out of stock")]):s("p",{staticClass:"text-sm font-bold text-secondary uppercase"},[t._v("In stock")])])]),s("td",{staticClass:"td-table"},["0"!=e.quantity_remaining?s("a",{staticClass:"btn-add-to-cart",on:{click:function(a){return t.addItemToCart(e)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"}})]),s("span",[t._v("Add to cart")])]):t._e()]),s("td",{staticClass:"td-table"},[s("button",{staticClass:"btn-remove-item",on:{click:function(a){return t.deleteProduct(e._id)}}},[s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])})),0)])])])]),s("TheSubscribe"),s("TheFooter")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-table"},[a("tr",[a("th",{staticClass:"th-table"},[t._v("Product")]),a("th",{staticClass:"th-table"},[t._v("Price")]),a("th",{staticClass:"th-table"},[t._v("Calo")]),a("th",{staticClass:"th-table"},[t._v("Status")]),a("th",{staticClass:"th-table"}),a("th",{staticClass:"th-table"})])])}],r=a("1da1"),c=a("5530"),i=(a("96cf"),a("227e")),n=a("07a3"),l=a("6e2f"),u=a("7e30"),d=a("2f62"),p=a("8840"),h={components:{TheHeader:i["a"],TheFooter:n["a"],TheSubscribe:l["a"],MiniCart:u["a"]},data:function(){return{}},computed:Object(c["a"])({},Object(d["c"])(["is_login","compareProducts"])),filters:{toVND:function(t){"number"!==typeof t&&(t=parseInt(t));var e=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0});return e.format(t)}},watch:{},created:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(d["b"])(["deleteCompareProduct","getUserCart","start_load","stop_load"])),{},{imageProduct:function(t){try{var e="/products/"+t;return e}catch(a){console.log(a)}},addItemToCart:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,o,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.is_login){a.next=9;break}return e.start_load(),s=JSON.parse(sessionStorage.getItem("user_login")),o={headers:{Authorization:"bearer "+s}},r=[{product:t._id,quantity:1,price:t.price}],a.next=7,p["a"].add(r,o).then((function(t){console.log(t.data),e.getUserCart().then((function(){e.stop_load(),e.$swal.fire("Oh great!","Add product to cart successfully!","success")}))})).catch((function(t){console.log(t),e.stop_load(),e.$swal.fire("Oh no!","Something went wrong. Double check your work.","fail")}));case 7:a.next=11;break;case 9:e.$swal.fire("Login to your account","You must be logged in to be able to add products to your cart.","warning"),e.$router.push({name:"Login"});case 11:case"end":return a.stop()}}),a)})))()},deleteProduct:function(t){var e=this;this.$swal.fire({title:"Are you sure you want to remove this product?",showCancelButton:!0,confirmButtonText:"Remove"}).then((function(a){a.isConfirmed&&(e.start_load(),e.deleteCompareProduct(t).then((function(){e.stop_load(),e.$swal.fire("Done!","Remove Successfully!","success")})))}))}})},m=h,f=(a("4305"),a("2877")),v=Object(f["a"])(m,s,o,!1,null,"0b98733b",null);e["default"]=v.exports},4305:function(t,e,a){"use strict";a("a3fc")},a3fc:function(t,e,a){}}]);
//# sourceMappingURL=chunk-146f92e8.5fed25c8.js.map