(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(5),a=c.n(s),i=(c(17),c(11)),o=c(7),d=(c(18),c(19),c(9)),j=c.n(d),u=c(1);var l=function(e){var t=e.cart,c=e.changePage;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"header__left",style:{border:""},children:[Object(u.jsx)("h1",{children:"JustBuy \ud83c\udfaf "}),Object(u.jsx)("button",{onClick:function(){return c("products")},children:"Products"})]}),Object(u.jsx)("div",{className:"header__right",style:{fontSize:"large",border:""},children:Object(u.jsxs)("button",{onClick:function(){return c("carts")},children:["Product in Cart",Object(u.jsx)(j.a,{})," ",t.length]})})]})};c(29);var h=function(e){var t=e.products,c=e.addToCart;return Object(u.jsx)("div",{className:"body",children:Object(u.jsx)("div",{className:"items",children:Object(u.jsx)("div",{className:"cards",children:t&&t.map((function(e){return Object(u.jsxs)("div",{className:"item__info",children:[Object(u.jsx)("img",{src:"https://secureservercdn.net/160.153.137.99/6z6.eb8.myftpupload.com/wp-content/uploads/2021/03/img_4861.jpeg?time=1623395444",style:{width:"100%",height:"50%"},alt:"not found"}),Object(u.jsxs)("p",{children:[" ",Object(u.jsx)("strong",{children:"Product Name:"})," ",e.name]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Price $: "}),e.price.current.value]}),Object(u.jsxs)("div",{className:"cards__button",children:[Object(u.jsx)("button",{onClick:function(){return c(e)},children:"Add to cart"}),Object(u.jsx)("button",{onClick:function(){return function(e){var t="Name : ".concat(e.name,"\nPrice : ").concat(e.price.current.text,"\nBrand Name : ").concat(e.brandName,"\nCode : ").concat(e.productCode);alert(t)}(e)},children:"Buy Now"})]})]},e.id)}))})})})};c(30);var b=function(e){var t=e.cart,c=e.removeFromCart;console.log(t);var n=t.reduce((function(e,t){return e+t.price.current.value}),0);return Object(u.jsxs)("div",{className:"body",style:{},children:[Object(u.jsx)("div",{className:"items",children:Object(u.jsx)("div",{className:"cards",children:t&&t.map((function(e){return Object(u.jsxs)("div",{className:"item__info",children:[Object(u.jsx)("img",{src:"https://secureservercdn.net/160.153.137.99/6z6.eb8.myftpupload.com/wp-content/uploads/2021/03/img_4861.jpeg?time=1623395444",style:{width:"100%",height:"50%"},alt:"not found"}),Object(u.jsxs)("p",{children:[" ",Object(u.jsx)("strong",{children:"Product Name:"})," ",e.name]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Price $: "}),e.price.current.value]}),Object(u.jsx)("div",{className:"cards__button",children:Object(u.jsx)("button",{onClick:function(){return c(e)},children:"Remove"})})]},e.id)}))})}),Object(u.jsx)("div",{className:"cart__total",style:{margin:"20px",padding:"20px",color:"gray"},children:Object(u.jsxs)("h5",{children:["\ud83d\uded2 Total Price $ : ",n]})})]})};var p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(o.a)(s,2),d=a[0],j=a[1],p=Object(n.useState)("products"),m=Object(o.a)(p,2),O=m[0],x=m[1];return Object(n.useEffect)((function(){fetch("https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",{method:"GET",headers:{"x-rapidapi-key":"543abe539dmshe8a43e180ee7ca0p18dc84jsn93d25aa337c5","x-rapidapi-host":"asos2.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){console.log(e.products),r(e.products)})).catch((function(e){console.error(e)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{cart:d,changePage:function(e){return x(e)}}),"products"===O&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{products:c,addToCart:function(e){return j([].concat(Object(i.a)(d),[e]))}})}),"carts"===O&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b,{cart:d,removeFromCart:function(e){return j(d.filter((function(t){return t!==e})))}})})]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e63106f4.chunk.js.map