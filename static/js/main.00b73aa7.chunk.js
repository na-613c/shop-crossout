(this["webpackJsonpshop-crossout"]=this["webpackJsonpshop-crossout"]||[]).push([[0],{122:function(n,t,e){},123:function(n,t,e){},171:function(n,t,e){"use strict";e.r(t);var c=e(0),r=e.n(c),a=e(14),o=e.n(a),i=(e(122),e(115)),s=e(32),u=e(65),j=(e(123),e(83)),l=e.n(j),f=e(99),d="https://crossoutdb.com",b=function(){var n=Object(f.a)(l.a.mark((function n(t){var e,c,r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(d,"/api/v1/item/").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return c=n.sent,r=Object(u.a)(c,1),a=r[0],n.abrupt("return",{name:a.name,img:"".concat(d).concat(a.imagePath),sell:a.formatSellPrice,craftVsBuy:a.craftVsBuy,min:"Craft"===a?a.formatCraftingBuySum:a.formatBuyPrice});case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=e(176),h=e(177),p=e(175),O=e(178),x=e(113),g=e(179),v=e(180),y=e(5),S=function(n){var t=n.item,e=n.add,c=n.remove;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(m.a,{justify:"space-around",align:"middle",style:{background:0!==t.count?"white":"rgba(255, 255, 255, .5)",fontSize:20},gutter:[0,32],children:[Object(y.jsx)(h.a,{span:4,children:t.name}),Object(y.jsx)(h.a,{span:4,children:Object(y.jsx)(p.a,{shape:"square",size:64,src:t.img})}),Object(y.jsx)(h.a,{span:4,children:Object(y.jsxs)(O.b,{children:[Object(y.jsx)(g.a,{onClick:function(){return e(t.name)},style:{color:"#52c41a"}}),Object(y.jsx)("span",{style:{color:0===t.count?"gray":"black"},children:t.count}),Object(y.jsx)(v.a,{onClick:function(){return c(t.name)},style:{color:"#f5222d"}})]})}),Object(y.jsx)(h.a,{span:4,children:t.sell}),Object(y.jsx)(h.a,{span:4,children:"".concat(t.craftVsBuy," ").concat(t.min)})]}),Object(y.jsx)("br",{})]})},B=function(n){var t=n.items,e=n.add,c=n.remove,r=t.map((function(n,t){return Object(y.jsx)(S,{item:n,add:e,remove:c},t)}));return Object(y.jsx)("div",{margin:20,children:Object(y.jsx)(x.a,{component:"div",type:["right","left"],leaveReverse:!0,children:r})})},C=e(67),k=e(111),z=e.n(k);C.a.plugins.push(z.a);var P=function(){var n=Object(c.useState)([]),t=Object(u.a)(n,2),e=t[0],r=t[1],a=e.reduce((function(n,t){return+t.min*t.count+n}),0),o=e.reduce((function(n,t){return+t.sell*t.count+n}),0);Object(c.useEffect)((function(){Promise.all([b(372),b(1123),b(1124),b(47),b(33),b(560),b(1315),b(1058)]).then((function(n){return r(n.map((function(n){return Object(s.a)(Object(s.a)({},n),{},{count:0})})))})).then((function(n){return a=e.reduce((function(n,t){return+t.min*t.count+n}),0)})).then((function(n){return o=e.reduce((function(n,t){return+t.sell*t.count+n}),0)}))}),[]);var j=function(n){return{Children:{value:n,floatLength:2,formatMoney:!1},duration:1e3}};return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)(m.a,{justify:"space-around",align:"top",children:[Object(y.jsxs)(h.a,{span:8,children:[Object(y.jsx)("span",{style:{fontSize:56},children:"\u0426\u0435\u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}),Object(y.jsx)(C.a,{animation:j(o),style:{fontSize:56,marginBottom:12},children:"0"})]}),Object(y.jsxs)(h.a,{span:8,children:[Object(y.jsx)("span",{style:{fontSize:56},children:"\u041c\u0438\u043d \u0446\u0435\u043d\u0430"}),Object(y.jsx)(C.a,{animation:j(a),style:{fontSize:56,marginBottom:12},children:"0"})]})]}),Object(y.jsx)(B,{items:Object(i.a)(e),add:function(n){r((function(t){return t.map((function(t){return n===t.name?Object(s.a)(Object(s.a)({},t),{},{count:t.count+1}):t}))}))},remove:function(n){r((function(t){return t.map((function(t){return n===t.name?Object(s.a)(Object(s.a)({},t),{},{count:t.count>0?t.count-1:0}):t}))}))}})]})},w=(e(170),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,181)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),a(n),o(n)}))});o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root")),w()}},[[171,1,2]]]);
//# sourceMappingURL=main.00b73aa7.chunk.js.map