(this["webpackJsonpgif-expert-app-remember"]=this["webpackJsonpgif-expert-app-remember"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),i=n(2),o=n(9),s=n(0),u=function(e){var t=e.setCategories,n=function(e){e.preventDefault(),console.log("Submit realizado"),u.trim().length>2&&(t((function(e){return[u].concat(Object(o.a)(e))})),j(""))},c=Object(r.useState)(""),a=Object(i.a)(c,2),u=a[0],j=a[1];return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsx)("input",{type:"text",value:u,onChange:function(e){console.log(e.target.value),j(e.target.value)}}),Object(s.jsx)("button",{onClick:n,children:"A\xf1adir"}),Object(s.jsx)("hr",{})]})},j=n(10),l=n(6),d=n.n(l),b=n(8),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"jmhwNA5EszXBjSUWhADWrXjWp6LrRd1X",n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(encodeURI(t),"&api_key=jmhwNA5EszXBjSUWhADWrXjWp6LrRd1X"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){e.id;var t=e.title,n=e.url;return console.log(n),Object(s.jsx)("div",{className:"card  animate__animated animate__bounce ",children:Object(s.jsx)("img",{src:n,alt:t})})},h=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){m(e).then((function(e){setTimeout((function(){a({data:e,loading:!1})}),1e3)}))}),[e]),c}(t),c=n.data,a=n.loading;return console.log(c),console.log(a),Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)("h3",{children:t}),a&&Object(s.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(s.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(s.jsx)(p,Object(j.a)({},e),e.id)}))})]})},f=function(){var e=Object(r.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)("hr",{}),Object(s.jsx)(u,{setCategories:c}),Object(s.jsx)("ol",{children:n.map((function(e,t){return Object(s.jsx)(h,{category:e},e)}))})]})};n(17);a.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.66638e0a.chunk.js.map