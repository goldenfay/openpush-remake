(this["webpackJsonpopenpush-remake"]=this["webpackJsonpopenpush-remake"]||[]).push([[9],{181:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(181);function n(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a.a)(e,t):void 0}}},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(181);var n=r(182);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var a=r(2),n=r(42),i=r(12),o=r(60),s=r(184),c=r(0),l=r(1),d=r(3),m=(r(6),r(4)),g=r(5),b=r(9),f=c.forwardRef((function(e,t){var r=e.anchorOrigin,a=void 0===r?{vertical:"top",horizontal:"right"}:r,n=e.badgeContent,i=e.children,o=e.classes,s=e.className,g=e.color,f=void 0===g?"default":g,u=e.component,p=void 0===u?"span":u,h=e.invisible,j=e.max,O=void 0===j?99:j,v=e.overlap,y=void 0===v?"rectangle":v,x=e.showZero,w=void 0!==x&&x,C=e.variant,S=void 0===C?"standard":C,E=Object(d.a)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),F=h;null==h&&(0===n&&!w||null==n&&"dot"!==S)&&(F=!0);var R="";return"dot"!==S&&(R=n>O?"".concat(O,"+"):n),c.createElement(p,Object(l.a)({className:Object(m.a)(o.root,s),ref:t},E),i,c.createElement("span",{className:Object(m.a)(o.badge,o["".concat(a.horizontal).concat(Object(b.a)(a.vertical),"}")],o["anchorOrigin".concat(Object(b.a)(a.vertical)).concat(Object(b.a)(a.horizontal)).concat(Object(b.a)(y))],"default"!==f&&o["color".concat(Object(b.a)(f))],F&&o.invisible,"dot"===S&&o.dot)},R))})),u=Object(g.a)((function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(f),p=r(59),h=Object(p.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var j=c.forwardRef((function(e,t){var r=e.alt,a=e.children,n=e.classes,i=e.className,o=e.component,s=void 0===o?"div":o,g=e.imgProps,b=e.sizes,f=e.src,u=e.srcSet,p=e.variant,j=void 0===p?"circle":p,O=Object(d.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),v=null,y=function(e){var t=e.src,r=e.srcSet,a=c.useState(!1),n=a[0],i=a[1];return c.useEffect((function(){if(t||r){i(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=r,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,r]),n}({src:f,srcSet:u}),x=f||u,w=x&&"error"!==y;return v=w?c.createElement("img",Object(l.a)({alt:r,src:f,srcSet:u,sizes:b,className:n.img},g)):null!=a?a:x&&r?r[0]:c.createElement(h,{className:n.fallback}),c.createElement(s,Object(l.a)({className:Object(m.a)(n.root,n.system,n[j],i,!w&&n.colorDefault),ref:t},O),v)})),O=Object(g.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(j),v=r(73),y=Object.assign.apply(Object,[{}].concat(Object(s.a)([{class:"medal_gold",color:"#FFE26F",badge:"/assets/imgs/medals/medal_gold.png"},{class:"bronze_medal",color:"#DE4F42",badge:"/assets/imgs/medals/bronze_medal.png"},{class:"diamond",color:"#70BBEF",badge:"/assets/imgs/medals/diamond.png"},{class:"gol_medal_pro",color:"#FF9838",badge:"/assets/imgs/medals/gol_medal_pro.png"},{class:"star",color:"#F98824",badge:"/assets/imgs/medals/star.png"},{class:"grad",color:"#0083FD",badge:"/assets/imgs/medals/grad.png"},{class:"silver_medal",color:"#A5BABF",badge:"/assets/imgs/medals/silver_medal.png"},{class:"silver_star",color:"#EEF2F5",badge:"/assets/imgs/medals/silver_star.png"},{class:"trophy",color:"#FFC250",badge:"/assets/imgs/medals/trophy.png"}].map((function(e){return Object(o.a)({},e.class,{padding:5,border:"5px solid ".concat(e.color)})}))))),x=Object(g.a)((function(e){return{root:{width:22,height:22,border:"2px solid ".concat(e.palette.background.paper)}}}))(O),w=Object(v.a)((function(e){return Object(i.a)({root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:e.spacing(7),height:e.spacing(7)}},y)}));function C(e){var t=w(),r=(e.alt,e.badge,e.grade,e.src,Object(n.a)(e,["alt","badge","grade","src"]));return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(u,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(a.jsx)(x,{alt:e.alt,src:e.badge||"/assets/imgs/badges/bronze_medal.png"}),children:Object(a.jsx)(O,Object(i.a)({className:"".concat(t.large," ").concat(t[e.grade]||t.bronze_medal),alt:e.alt,src:e.src||"/assets/imgs/default_avatar.png"},r))})})}},200:function(e,t,r){"use strict";var a=r(56),n=r(57);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(0)),o=(0,a(r(58)).default)(i.createElement("path",{d:"M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"}),"ArrowForwardIosOutlined");t.default=o},253:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(0),i=r(52),o=r(41),s=r(174),c=r(17),l=r(92),d=r(165),m=r(169),g=r(170),b=r(171),f=r(73);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h=n.createElement("g",{clipPath:"url(#clip0)"},n.createElement("path",{d:"M26.9797 15.4418C26.7035 15.3724 26.4273 15.4418 26.1856 15.6151C25.288 16.3778 24.2522 17.0019 23.1128 17.418C22.0426 17.834 20.8687 18.042 19.6258 18.042C16.8292 18.042 14.2743 16.8979 12.4445 15.0604C10.6146 13.2229 9.47526 10.6573 9.47526 7.84897C9.47526 6.67019 9.68241 5.52607 10.0277 4.48596C10.4074 3.37652 10.9599 2.37108 11.6849 1.50432C11.9956 1.12295 11.9266 0.568229 11.5468 0.256197C11.3051 0.0828459 11.0289 0.0135055 10.7527 0.0828459C7.81803 0.880261 5.26314 2.64844 3.43329 5.00602C1.67249 7.32892 0.636719 10.2065 0.636719 13.3269C0.636719 17.1059 2.15584 20.5383 4.64168 23.0345C7.12752 25.5308 10.511 27.0563 14.3088 27.0563C17.4852 27.0563 20.4199 25.9468 22.7676 24.1093C25.1499 22.2371 26.8761 19.5675 27.6012 16.5165C27.7393 16.0311 27.4631 15.5458 26.9797 15.4418Z",fill:"#8D8D8D"})),j=n.createElement("defs",null,n.createElement("clipPath",{id:"clip0"},n.createElement("rect",{width:27,height:27,fill:"white",transform:"translate(0.636719)"})));function O(e,t){var r=e.title,a=e.titleId,i=p(e,["title","titleId"]);return n.createElement("svg",u({width:28,height:27,viewBox:"0 0 28 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,h,j)}var v=n.forwardRef(O),y=(r.p,r(200)),x=r.n(y),w=r(195),C=r(74),S=Object(f.a)((function(e){return{list:{width:"100%"},listItem:{backgroundColor:e.palette.background.paper,marginBottom:e.spacing(1),"&:last-child":{marginTop:e.spacing(3)}}}}));t.default=function(e){var t=S();return Object(a.jsxs)(o.a,{container:!0,direction:"column",children:[Object(a.jsxs)(o.a,{item:!0,xs:12,container:!0,children:[Object(a.jsx)(o.a,{item:!0,xs:12,children:Object(a.jsxs)(s.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",width:1,children:[Object(a.jsx)(c.a,{variant:"h4",children:"My profile"}),Object(a.jsx)(l.a,{color:"inherit",children:Object(a.jsx)(v,{})})]})}),Object(a.jsxs)(o.a,{item:!0,xs:12,container:!0,spacing:2,children:[Object(a.jsx)(o.a,{item:!0,xs:12,md:4,container:!0,justify:"center",children:Object(a.jsx)(w.a,{style:{width:"80px",height:"80px"}})}),Object(a.jsx)(o.a,{item:!0,xs:12,md:4,container:!0,justify:"center",alignItems:"center",children:Object(a.jsx)(c.a,{variant:"body1",children:"Simple@gmail.com"})})]})]}),Object(a.jsx)(o.a,{item:!0,xs:12,container:!0,children:Object(a.jsx)(d.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.list,children:C.a&&C.a.map((function(e,r){return Object(a.jsxs)(m.a,{button:!0,className:t.listItem,component:i.b,to:e.link,children:[Object(a.jsx)(g.a,{children:e.icon}),Object(a.jsx)(b.a,{primary:e.title}),Object(a.jsx)(x.a,{})]},r)}))})})]})}}}]);
//# sourceMappingURL=9.80235fd0.chunk.js.map