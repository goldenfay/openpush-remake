(this["webpackJsonpopenpush-remake"]=this["webpackJsonpopenpush-remake"]||[]).push([[11],{192:function(e,t,n){"use strict";var a=n(2),c=(n(0),n(73)),i=n(41),r=n(174),s=n(103),o=n(198),l=n.n(o),j=Object(c.a)((function(e){return{paper:{padding:e.spacing(2),marginTop:e.spacing(2)},carousel:{width:"100%"},indicator:{"&.active":{color:e.palette.secondary.main}}}}));t.a=function(e){var t=j(),n=e.items;return Object(a.jsx)(i.a,{item:!0,sm:12,component:r.a,width:1,children:Object(a.jsx)(r.a,{display:"flex",flexDirection:"row",justifyContent:"center",className:t.box,children:Object(a.jsx)(l.a,{className:t.carousel,indicatorProps:{className:t.indicator},children:n&&n.map((function(e,t){return Object(a.jsx)(s.a,{src:e,component:"img"},t)}))})})})}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(12),c=n(2),i=n(42),r=(n(0),n(174)),s=n(17);function o(e){var t=e.children,n=e.value,o=e.index,l=Object(i.a)(e,["children","value","index"]);return Object(c.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:n!==o,id:"wrapped-tabpanel-".concat(o),"aria-labelledby":"wrapped-tab-".concat(o)},l),{},{children:n===o&&Object(c.jsx)(r.a,{p:3,children:Object(c.jsx)(s.a,{component:"span",children:t})})}))}},194:function(e,t,n){"use strict";var a=n(2),c=(n(0),n(41)),i=n(17),r=n(168),s=n(73),o=Object(s.a)((function(e){return{}}));t.a=function(e){var t=o();return Object(a.jsxs)(c.a,{container:!0,justify:"center",direction:"column",spacing:4,className:t.container,children:[Object(a.jsx)(c.a,{item:!0,xs:!0,container:!0,direction:"row",justify:"center",children:Object(a.jsx)(i.a,{variant:"h4",children:" Stay connected"})}),Object(a.jsxs)(c.a,{item:!0,xs:!0,container:!0,direction:"row",justify:"center",spacing:5,children:[Object(a.jsx)(c.a,{item:!0,children:Object(a.jsx)(r.a,{href:"#",children:Object(a.jsx)("img",{src:"/assets/imgs/facebook_logo.png",alt:""})})}),Object(a.jsx)(c.a,{item:!0,children:Object(a.jsx)(r.a,{href:"#",children:Object(a.jsx)("img",{src:"/assets/imgs/youtube_logo.png",alt:""})})}),Object(a.jsx)(c.a,{item:!0,children:Object(a.jsx)(r.a,{href:"#",children:Object(a.jsx)("img",{src:"/assets/imgs/twitter_logo.png",alt:""})})}),Object(a.jsx)(c.a,{item:!0,children:Object(a.jsx)(r.a,{href:"#",children:Object(a.jsx)("img",{src:"/assets/imgs/instagram_logo.png",alt:""})})})]})]})}},252:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(60),i=n(0),r=n(73),s=n(41),o=n(174),l=n(192),j=n(12),d=n(183),b=n(17),u=n(168),m=n(177),h=n(134),p=n(247),x=n(240),O=n(94),g=n.n(O),f=n(88),v=n(82),y=n(193),w=Object(r.a)((function(e){return{root:{flexGrow:1},bglight:{backgroundColor:e.palette.primary.light}}})),k=["All","Food & Drins","Health & Beauty","Sport"],C=["Redeem your ticket for 0 Rabbits","Go to your favourite supermarket and spent minimum 25 leva on Groceries","Activate your golden ticket","Take a picture of your bill within 2 hours of purchase (maximum once a day) to enter the Tombola"];var N=function(e){var t=w(),n=Object(i.useState)(k[0]),c=Object(d.a)(n,2),r=c[0],l=c[1],O=Object(i.useState)(!1),N=Object(d.a)(O,2),W=N[0],A=N[1];return Object(a.jsxs)(s.a,{container:!0,direction:"column",spacing:2,children:[Object(a.jsx)(s.a,{item:!0,xs:!0,children:Object(a.jsxs)(o.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[Object(a.jsx)(b.a,{component:"span",variant:"h5",children:"Categories"}),Object(a.jsx)(u.a,{href:"#",underline:"none",color:"inherit",component:"button",onClick:function(){return A(!W)},children:Object(a.jsx)(b.a,{component:"span",variant:"caption",children:"Show on map"})})]})}),Object(a.jsxs)(s.a,{item:!0,xs:!0,container:!0,direction:"row",children:[Object(a.jsx)(s.a,{item:!0,xs:10,children:Object(a.jsx)(m.a,{fullWidth:!0,id:"filled-search",label:"Search",type:"search",variant:"filled"})}),Object(a.jsx)(s.a,{item:!0,xs:2,container:!0,justify:"center",children:Object(a.jsx)(h.a,{className:t.bglight,children:Object(a.jsx)(g.a,{})})})]}),Object(a.jsx)(s.a,{item:!0,xs:!0,container:!0,children:Object(a.jsx)(s.a,{item:!0,xs:!0,children:Object(a.jsx)(p.a,{value:r,onChange:function(e,t){l(t)},indicatorColor:"secondary",variant:"fullWidth","aria-label":"categories filters tabs",children:k.map((function(e,t){return Object(a.jsx)(x.a,Object(j.a)({value:e,label:e},{id:"wrapped-tab-".concat(n=e),"aria-controls":"wrapped-tabpanel-".concat(n)}),t);var n}))})})}),!W&&Object(a.jsxs)(s.a,{container:!0,justify:"center",children:[Object(a.jsx)(y.a,{value:r,index:"All",children:Object(a.jsxs)(s.a,{container:!0,spacing:2,children:[Object(a.jsx)(s.a,{item:!0,sm:12,md:6,lg:4,children:Object(a.jsx)(f.a,{title:"Instruction",withMoreAction:!0,body:Object(a.jsxs)("ol",{children:[C.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))," "]}),actions:Object(a.jsxs)(h.a,{fullWidth:!0,color:"primary",variant:"contained",children:[" ",Object(a.jsx)(b.a,{color:"textPrimary",children:"Redeem product"})]})})}),[1,2,3,4,5].map((function(e){return"Voucher for Burger King BGN Foodpanda Voucher For All Users"})).map((function(e,t){return Object(a.jsx)(s.a,{item:!0,sm:12,md:6,lg:4,children:Object(a.jsx)(v.a,{withMoreAction:!0,title:e,subheader:e,price:1e5*Math.random(),image:"/assets/dummy/main/burger_king.png"})},t)}))]})}),Object(a.jsx)(y.a,{value:r,index:"Food & Drinks",children:"Item two"}),Object(a.jsx)(y.a,{value:r,index:"Health & Beauty",children:"Item three"})]})]})},W=n(194),A=[1,2,3,4].map((function(e){return"/assets/dummy/main/categories.png"})),S=Object(r.a)((function(e){var t;return{paper:{padding:e.spacing(2),marginTop:e.spacing(2)},carousel:{minWidth:"100%"},indicator:{"&.active":{color:e.palette.primary.main}},box:(t={},Object(c.a)(t,e.breakpoints.down("sm"),{minwidth:e.breakpoints.values.sm,maxWidth:e.breakpoints.values.sm}),Object(c.a)(t,e.breakpoints.up("md"),{width:e.breakpoints.values.md,maxWidth:e.breakpoints.values.md}),Object(c.a)(t,e.breakpoints.up("lg"),{width:e.breakpoints.values.lg,maxWidth:e.breakpoints.values.lg}),t)}}));t.default=function(e){var t=S();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s.a,{container:!0,className:t.content,component:o.a,justifyContent:"center",children:Object(a.jsx)(l.a,{items:A})}),Object(a.jsx)(N,{}),Object(a.jsx)(W.a,{})]})}}}]);
//# sourceMappingURL=11.bd60e846.chunk.js.map