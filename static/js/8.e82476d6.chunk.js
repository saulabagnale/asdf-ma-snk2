(this["webpackJsonpmanganyaa-snk-react"]=this["webpackJsonpmanganyaa-snk-react"]||[]).push([[8],{112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},117:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(0),r=n(12),i=n(78),o=n(84),s=n(18),l=n(132),u=n(86),p=function(){var e=new Date;e.setSeconds(e.getSeconds()+2),window.sessionStorage.setItem("asdf",e.getTime().toString())},d=n(88),m=n(17),h=(n(112),n(2)),g=function(){var e=Object(c.useContext)(i.a).translations,t=Object(c.useState)((function(){return window.Notification.permission||"default"})),n=Object(a.a)(t,2),r=n[0],o=n[1];function s(){window.Notification?Notification.requestPermission((function(e){return function(e){window.OneSignal&&window.OneSignal.isPushNotificationsEnabled().then((function(e){e||window.OneSignal.push(["registerForPushNotifications"])})),o(e)}(e)})):o("denied")}return Object(h.jsx)("h3",{className:"flipInY",children:"granted"===r?Object(h.jsx)(h.Fragment,{children:e.weWillNotifyYou}):"denied"===r?Object(h.jsx)(h.Fragment,{children:e.activateNotifications}):Object(h.jsx)("button",{className:"headerbtn",type:"button",onClick:s,children:e.weCanNotifyYou})})},j=(n(113),function(e){var t=e.chapterName,n=e.subscribe,a=e.link,r=e.serieNameWithManga,o=(e.lang,e.orderNumber,e.pages,Object(c.useContext)(i.a).translations);return Object(h.jsxs)("header",{className:"bg95",children:[Object(h.jsx)("h1",{className:"flipInY ".concat(a?"link":""),children:a?Object(h.jsx)(m.b,{to:a,children:r}):r}),Object(h.jsxs)("h2",{className:"flipInY",children:[o.chapter," ",t,n&&": ".concat(o.notReleasedYet)]}),n&&"Notification"in window&&Object(h.jsx)(g,{})]})}),f=n(115),b=n.n(f),x=n(116),O=n.n(x),v={position:"relative",display:"inline-block",borderRadius:5,userSelect:"none",boxSizing:"border-box",height:10,width:"100%",cursor:"pointer"},y={position:"absolute",borderRadius:5,userSelect:"none",boxSizing:"border-box",top:0,height:"100%",cursor:"pointer"},w={position:"relative",display:"block",content:'""',width:18,height:18,backgroundColor:"#fff",borderRadius:"50%",boxShadow:"0 1px 1px rgba(0,0,0,.5)",userSelect:"none",cursor:"pointer",boxSizing:"border-box"};function N(e){var t=e.touches;if(t&&t.length){var n=t[0];return{x:n.clientX,y:n.clientY}}return{x:e.clientX,y:e.clientY}}var C=function(e){var t=e.axis,n=e.x,a=e.xmin,r=e.xmax,i=e.xstep,o=e.onChange,l=e.styles,u=Object(c.useRef)(null),p=Object(c.useRef)(null),d=Object(c.useRef)({}),m=Object(c.useRef)({});function g(e){var n=e.left;if(o){var c=u.current.getBoundingClientRect().width,s=0;n<0&&(n=0),n>c&&(n=c),"x"!==t&&"xy"!==t||(s=n/c*(r-a)),o({x:(0!==s?parseInt(s/i,10)*i:0)+a,y:0})}}function j(e){e.preventDefault(),g(function(e){var t=N(e),n=t.x+d.current.x-m.current.x,a=t.y+d.current.y-m.current.y;return{left:n,top:a}}(e))}function f(e){e.preventDefault(),document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",j,{passive:!1}),document.removeEventListener("touchend",f),document.removeEventListener("touchcancel",f)}function b(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();var t=p.current,n=N(e);d.current={x:t.offsetLeft,y:t.offsetTop},m.current={x:n.x,y:n.y},document.addEventListener("mousemove",j),document.addEventListener("mouseup",f),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",f)}function x(e){e.preventDefault();var t=N(e),n=u.current.getBoundingClientRect();d.current={x:t.x-n.left,y:t.y-n.top},m.current={x:t.x,y:t.y},document.addEventListener("mousemove",j),document.addEventListener("mouseup",f),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",f),g({left:t.x-n.left,top:t.y-n.top})}var O=function(){var e=(n-a)/(r-a)*100;return e>100&&(e=100),e<0&&(e=0),{top:0,left:e}}(),C={width:"".concat(O.left,"%")},k={position:"absolute",transform:"translate(-50%, -50%)",left:"".concat(O.left,"%"),top:"50%"};return Object(h.jsxs)("div",{ref:u,style:Object(s.a)(Object(s.a)({},v),l.track),onTouchStart:x,onMouseDown:x,children:[Object(h.jsx)("div",{style:Object(s.a)(Object(s.a)(Object(s.a)({},y),l.active),C)}),Object(h.jsx)("div",{ref:p,style:k,onTouchStart:b,onMouseDown:b,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},children:Object(h.jsx)("div",{style:w})})]})};C.defaultProps={axis:"x",x:50,xmin:0,xmax:100,xstep:1,styles:{}};var k=C;n(114);var S=function(e){var t=e.mangaPageWidth,n=e.setMangaPageWidth,a=e.mode;function c(e){e!==t&&(n(e),localStorage.setItem("mangaPageWidth","".concat(e)))}return Object(h.jsxs)("div",{className:"slider-container bg95 fadeInUp",children:[Object(h.jsxs)("div",{className:"slider-uppersection",children:[Object(h.jsx)("div",{className:"zoom-icon",onClick:function(){return t>10&&c(t-10)},children:Object(h.jsx)(b.a,{})}),Object(h.jsxs)("span",{className:"slider-value-show",children:[t,"%"]}),Object(h.jsx)("div",{className:"zoom-icon",onClick:function(){return t<100&&c(t+10)},children:Object(h.jsx)(O.a,{})})]}),Object(h.jsx)(k,{axis:"x",xstep:10,xmin:10,xmax:100,x:t,onChange:function(e){return c(e.x)},styles:{track:{backgroundColor:"light"===a?"rgb(63,81,181, 0.4)":"rgb(0,0,0, 0.4)"},active:{backgroundColor:"light"===a?"rgb(63,81,181, 1)":"orange"}}})]})},M=n(85),I=n(36),P=n.n(I),E=n(26);var W=function(e){var t=e.fullscreen,n=e.set,a=Object(c.useContext)(i.a).translations;return Object(h.jsxs)("div",{className:"switch-container",children:[Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){e.target.checked?(n.fullscreenOn(),Object(E.b)(),sessionStorage.setItem("fullscreen","true")):(n.fullscreenOff(),Object(E.a)(),sessionStorage.setItem("fullscreen","false"))}}),Object(h.jsx)("span",{className:"slider round switchslider"})]}),Object(h.jsx)(P.a,{className:"switch",title:t?"".concat(a.deactivate," ").concat(a.fullscreen):"".concat(a.activate," ").concat(a.fullscreen)})]})},L=n(35),z=n.n(L);var B=function(e){var t=e.darkmode,n=e.set,a=Object(c.useContext)(i.a).translations;return Object(h.jsxs)("div",{className:"switch-container",children:[Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{type:"checkbox",checked:!t,onChange:function(e){e.target.checked?n.darkmodeOff():n.darkmodeOn(),localStorage.setItem("darkmode","".concat(!e.target.checked))}}),Object(h.jsx)("span",{className:"slider round switchslider"})]}),Object(h.jsx)(z.a,{className:"switch",title:t?"".concat(a.activate," ").concat(a.lightmode):"".concat(a.activate," ").concat(a.darkmode)})]})},T=n(90),D=n.n(T),U=n(118),Y=n.n(U),R=(n(117),function(){return document&&document.body.classList.remove("scroll-down")});var F=function(e){var t=e.nextChapter,n=e.previousChapter,a=Object(c.useContext)(i.a).translations,r=function(e,a){e.preventDefault();var c="prev"===a?n:t,r=window.sessionStorage.getItem("asdf");r&&Number(r)<(new Date).getTime()&&c.callback()};return Object(h.jsxs)("nav",{className:"otherchapter fadeInUp small",children:[Object(h.jsxs)(m.b,{className:"prevchapter bg95 ".concat(n.name&&n.link?"":"hidden"),to:n.link||!1,title:n.name||!1,onClick:function(e){return r(e,"prev")},onMouseDown:R,children:[Object(h.jsx)(D.a,{alt:n.name}),window.innerWidth>1199&&Object(h.jsx)("span",{children:a.prevChapter})]}),window.innerWidth>1199&&Object(h.jsx)("iframe",{className:"lazy topAdFadeIn","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4154168&output=noscript",src:"",width:"728",height:"90",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0"}),Object(h.jsxs)(m.b,{className:"nextchapter bg95 ".concat(t.name&&t.link&&!t.name.includes("140")?"":"hidden"),to:t.link||!1,title:t.name||!1,onClick:function(e){return r(e,"next")},onMouseDown:R,children:[window.innerWidth>1199&&Object(h.jsx)("span",{children:a.nextChapter}),Object(h.jsx)(Y.a,{alt:t.name})]})]})},q=n(119),A=(n(123),function(e){var t=e.title,n=e.slug,a=e.fullUrl,o=Object(c.useContext)(r.a).siteMetadata,l=Object(c.useContext)(i.a).translations,u=o.lang,p={shortname:"manganyaa",config:{url:a,identifier:n,title:t,language:"en"===u?"en_US":"pt"===u?"pt_BR":"es_MX"}};return console.log("asdf disqus disqusConfig ",p),Object(h.jsxs)("div",{className:"box-wrapper disqus-wrapper bg95",children:[Object(h.jsx)("h5",{children:l.chapterOpinions}),Object(h.jsx)("div",{className:"disqus-container ",children:Object(h.jsx)(q.DiscussionEmbed,Object(s.a)({},p))})]})}),H={darkmode:function(){return!localStorage.getItem("darkmode")||JSON.parse(localStorage.getItem("darkmode"))},fullscreen:function(){return!!sessionStorage.getItem("fullscreen")&&JSON.parse(sessionStorage.getItem("fullscreen"))},mangaPageWidth:function(){return NaN!==Number(localStorage.getItem("mangaPageWidth"))&&0!==Number(localStorage.getItem("mangaPageWidth"))?Number(localStorage.getItem("mangaPageWidth")):70}},_=n(133),G=n(135),J=n(136),X=n(137),K=n(138),Q=n(139),V=n(140),Z=n(141),$=n(142),ee=n(143),te=n(144),ne=n(145),ae=n(146),ce=n(147),re=n(148),ie=n(149),oe=n(150),se=(n(124),function(e){var t=e.siteUrl,n=e.fullUrl,r=e.imgs,o=Object(c.useContext)(i.a).translations.share,l=function(e,t){if(t){var n=Object(a.a)(t,3),c=n[0],r=n[1],i=n[2];if(i)return i.props["data-src"];if(r)return r.props["data-src"];if(c)return c.props["data-src"]}return"".concat(e,"/description.jpg")}(t,r),u=[{name:"Facebook",Button:G.a,Icon:J.a},{name:"Twitter",Button:X.a,Icon:K.a},{name:"Pinterest",Button:Q.a,Icon:V.a,media:l},{name:"Reddit",Button:Z.a,Icon:$.a},{name:"WhatsApp",Button:ee.a,Icon:te.a},{name:"Telegram",Button:ne.a,Icon:ae.a},{name:"Line",Button:ce.a,Icon:re.a},{name:"Tumblr",Button:ie.a,Icon:oe.a}];return Object(h.jsxs)("div",{className:"box-wrapper sharebuttons-wrapper bg95",children:[Object(h.jsx)("h5",{children:o}),Object(h.jsx)("div",{className:"box-container sharebuttons-container ",children:u.map((function(e){var t=e.name,a=e.Button,c=e.Icon,r=Object(_.a)(e,["name","Button","Icon"]);return Object(h.jsx)("div",{title:t,children:Object(h.jsx)(a,Object(s.a)(Object(s.a)({url:n},r),{},{className:"sharebutton",children:Object(h.jsx)(c,{round:!0,size:40})}))},t)}))})]})}),le=function(e){var t=e.toString();return t.includes(".")?"".concat(t.split(".")[0],"-").concat(t.split(".")[1]):t},ue=function(e,t,n,a){var c=a.translations,r=a.serie,i=a.siteMetadata,o=i.storage,s=i.lang,l=r.folderName,u={nextChapter:0!==e?t[e-1]:null,previousChapter:t[e+1]?t[e+1]:null},p=u.nextChapter?u.nextChapter.url:null,d=u.nextChapter?"".concat(c.chapter," ").concat(u.nextChapter.orderNumber):null,m=n&&u.nextChapter?function(e,t,n,a,c){for(var r=[],i=0;i<c;i++){var o="".concat(e).concat(t,"/").concat(n,"/").concat(a,"/").concat(i+1,".jpg");r.push(Object(h.jsx)("link",{rel:"prefetch",href:"".concat(o),as:"image"}))}return r}(o.fullPath,l,s,le(u.nextChapter.orderNumber),u.nextChapter.pages):[],g=u.previousChapter?u.previousChapter.url:null;return{otherChapters:u,nextChapter:{name:d,link:p,imgsPreload:m},previousChapter:{name:u.previousChapter?"".concat(c.chapter," ").concat(u.previousChapter.orderNumber):null,link:g}}},pe=function(e,t,n){for(var a=e.pages,c=e.orderNumber,r=e.chapterTitle,i=n.translations,o=n.siteMetadata,s=n.serie,l=o.lang,u=o.storage,p=s.folderName,d=s.serieNameWithManga,m=[],g=[],j=le(c),f=0;f<a;f++){var b="".concat(p,"|").concat(l,"|").concat(j,"|").concat(f+1);m.push(Object(h.jsx)("img",{className:"chimgs-lazy","data-src":b,src:"".concat(u.fullPath,"placeholder.gif"),onContextMenu:function(e){return e.preventDefault()},alt:"".concat(d," ").concat(i.langName," ").concat(i.chapter," ").concat(r||c," ").concat(i.page," ").concat(f+1)},"".concat(d," ").concat(i.langName," ").concat(i.chapter," ").concat(r||c," ").concat(i.page," ").concat(f+1))),t&&g.push(Object(h.jsx)("link",{rel:"preload",href:b,as:"image"}))}return{components:m,preloads:g}},de=function(e,t){for(var n=null,a=0;a<(null===t||void 0===t?void 0:t.length);a++){if(t[a].orderNumber===e){n=a;break}}return n},me=n(127),he=n.n(me),ge=(n(126),function(){var e=function(){return window.print()},t=Object(c.useContext)(i.a).translations;return Object(h.jsxs)("div",{className:"box-wrapper downloadchapter-wrapper bg95",children:[Object(h.jsx)("h5",{children:t.downloadChapter}),Object(h.jsx)("div",{className:"box-container",children:Object(h.jsx)("div",{className:"downloadChBtn",role:"button",tabIndex:0,"aria-label":t.translate,onClick:e,onKeyPress:function(t){13!==t.which&&13!==t.keyCode&&13!==t.code||e()},children:Object(h.jsx)(he.a,{})})})]})}),je=(n(128),n(129),function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]}),fe=function(e){var t=e.serie,n=Object(c.useContext)(r.a),m=n.siteMetadata,g=n.siteUrl,f=n.darkmode,b=n.fullscreen,x=n.set,O=Object(c.useContext)(i.a).translations,v=x.darkmodeOn,y=x.darkmodeOff,w=x.fullscreenOn,N=x.fullscreenOff,C=m.lang,k=m.currentPath,I=m.storage,P=m.isMainSite,E=t.folderName,L=t.serieName,z=t.serieNameWithManga,T=t.chapters,D=t.completed,U=P||"Completed"===D?T.list.filter((function(e){return 0!==e.pages})):[T.upcoming].concat(Object(l.a)(T.list.filter((function(e){return 0!==e.pages})))),Y=Object(c.useState)((function(){return H.mangaPageWidth()})),R=Object(a.a)(Y,2),q=R[0],_=R[1],G=f?"dark":"light",J=Number(k.split("/").pop()),X=de(J,U);null===X&&window.location.replace("/".concat(C));var K=Object(c.useState)(U[X]),Q=Object(a.a)(K,2),V=Q[0],Z=Q[1],$=V.orderNumber,ee=V.chapterTitle,te=V.pages,ne=V.url,ae=ee&&ee.split(":")[1],ce=ae&&ae.trim()?ee:$,re=Object(u.a)(),ie=pe(V,re,{translations:{langName:O.langName,chapter:O.chapter,page:O.page},serie:{folderName:E,serieNameWithManga:z},siteMetadata:{lang:C,storage:I}});Object(d.a)(".chimgs-lazy",V),Object(d.a)(".lazy",V),0!==te&&localStorage.setItem("lastChChecked-".concat(E),JSON.stringify({url:ne,orderNumber:$,mangaName:L,time:(new Date).getTime()}));var oe=de(V.orderNumber,U),le=ue(oe,U,re,{siteMetadata:{lang:C,storage:I},serie:{folderName:E},translations:{chapter:O.chapter}}),me=le.otherChapters,he=le.nextChapter,fe=le.previousChapter;Object(c.useEffect)((function(){p()}),[]);var be=function(e){history.pushState("","","previous"===e?fe.link.replace("https://manganyaa.com",""):he.link.replace("https://manganyaa.com","")),window.scrollTo({top:0}),p(),Z("previous"===e?Object(s.a)({},me.previousChapter):Object(s.a)({},me.nextChapter))},xe={chapterTitle:ce,nextChapter:{name:he.name,link:he.link,callback:function(){return be("next")}},previousChapter:{name:fe.name,link:fe.link,callback:function(){return be("previous")}}};console.log("otherChaptersProps ",xe);var Oe="".concat(g).concat(ne),ve=Object(h.jsx)(se,{siteUrl:g,fullUrl:Oe,imgs:ie.components},"".concat(ne,"-sharebtns")),ye=$.toString();if(ye.includes(".")){var we=ye.split(".");ye="".concat(we[0],"(").concat(we[1],")")}var Ne={en:"/read-".concat(E,"-manga-chapter-").concat(ye,"/"),es:"/leer-".concat(E,"-manga-capitulo-").concat(ye,"/"),pt:"/ler-".concat(E,"-manga-capitulo-").concat(ye,"/")},Ce=Object(h.jsx)(A,{title:"".concat(L," ").concat($," ").concat(je(C)),slug:Ne[C],fullUrl:Oe}),ke=Object(h.jsx)(M.a,{page:"chapter",serie:t}),Se=Object(h.jsx)(ge,{});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{fullUrl:"".concat(g).concat(k),mode:G,chapterTitle:$,serie:t}),Object(h.jsxs)("main",{className:"page-chapter","data-testfirstchapter":me.previousChapter?"false":"true","data-testlastchapter":me.nextChapter?"false":"true",children:[Object(h.jsx)(j,{chapterName:ce,subscribe:0===te,link:k.split("en"===C?"/chapter":"/capitulo")[0],serieNameWithManga:z,lang:C,orderNumber:$,pages:te},"".concat(ne,"-header")),Object(c.createElement)(F,Object(s.a)(Object(s.a)({},xe),{},{key:"".concat(ne,"-otherchs")})),(0!==te||139===$)&&Object(h.jsxs)("section",{id:"settings",className:"settings-container noprint",children:[Object(h.jsx)("div",{children:Object(h.jsx)(S,{mangaPageWidth:q,setMangaPageWidth:_,mode:G})}),Object(h.jsxs)("div",{className:"switches-container bg95 fadeInUp",children:[Object(h.jsx)(W,{fullscreen:b,set:{fullscreenOn:w,fullscreenOff:N}}),Object(h.jsx)(B,{darkmode:f,set:{darkmodeOn:v,darkmodeOff:y}})]})]},"".concat(ne,"-settings")),Object(h.jsxs)("section",{className:"imgsList fadeInUp width-".concat(q||70),children:[139===$&&0===te&&["https://i.imgur.com/OMVg5l4.jpg","https://i.imgur.com/wwKkdJ7.jpg","https://i.imgur.com/krh2GQM.jpg","https://i.imgur.com/OdFgC06.jpg","https://i.imgur.com/qUdEnR0.jpg","https://i.imgur.com/2Gy8d8D.jpg","https://i.imgur.com/TXQmGYt.jpg","https://i.imgur.com/06N1zoq.jpg","https://i.imgur.com/4HdX99m.jpg","https://i.imgur.com/1VWsFh8.jpg","https://i.imgur.com/HcxQO8K.jpg","https://i.imgur.com/f0IEVxc.jpg","https://i.imgur.com/OKUvXH3.jpg","https://i.imgur.com/oFpnMo9.jpg","https://i.imgur.com/uvQZjp8.jpg","https://i.imgur.com/Y9m1llv.jpg","https://i.imgur.com/DWZybEk.jpg","https://i.imgur.com/DRTnnDb.jpg","https://i.imgur.com/PcSSPGP.jpg","https://i.imgur.com/Zak3Grx.jpg","https://i.imgur.com/JhP2s1u.jpg","https://i.imgur.com/2tuh3vb.jpg","https://i.imgur.com/3iDQXYw.jpg","https://i.imgur.com/f1MlSk2.jpg","https://i.imgur.com/NRkJBnf.jpg","https://i.imgur.com/atwkljS.jpg","https://i.imgur.com/xgYzVz3.jpg","https://i.imgur.com/ZSWK4Q5.jpg","https://i.imgur.com/gFHMCw8.jpg","https://i.imgur.com/DlEYrBV.jpg","https://i.imgur.com/rGwxl1L.jpg","https://i.imgur.com/CLcdnx9.jpg","https://i.imgur.com/A5o6EoM.jpg","https://i.imgur.com/jio9ma6.jpg","https://i.imgur.com/vFrSLb2.jpg","https://i.imgur.com/YymNE5A.jpg","https://i.imgur.com/7lrERNm.jpg","https://i.imgur.com/XKtCTIV.jpg","https://i.imgur.com/1bBmJrw.jpg","https://i.imgur.com/WfGsUYt.jpg","https://i.imgur.com/FkxE2sZ.jpg","https://i.imgur.com/chwqvSB.jpg","https://i.imgur.com/nHplkVr.jpg","https://i.imgur.com/veZXOU2.jpg","https://i.imgur.com/rxhorv1.jpg","https://i.imgur.com/CTD1ShY.jpg","https://i.imgur.com/WFyff3c.jpg","https://i.imgur.com/GT7cfbP.jpg","https://i.imgur.com/sqhL9SN.jpg","https://i.imgur.com/hS17cSP.jpg","https://i.imgur.com/3kSmdac.jpg","https://i.imgur.com/ShyKUFb.jpg"].map((function(e,t){return Object(h.jsx)("img",{className:"chimgs-lazy","data-src":e,src:"".concat(I.fullPath,"placeholder.gif"),onContextMenu:function(e){return e.preventDefault()},alt:"".concat(z," ").concat(O.langName," ").concat(O.chapter," ").concat(ee||$," ").concat(O.page," ").concat(t+1)},"".concat(z," ").concat(O.langName," ").concat(O.chapter," ").concat(ee||$," ").concat(O.page," ").concat(t+1))})),ie.components]},"".concat(ne,"-chlist")),Object(h.jsx)("article",{style:{width:"100vw",display:"flex",justifyContent:"center",marginBottom:"1vh"},children:window.innerWidth<900?Object(h.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153962&output=noscript",src:"",width:"300",height:"100",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-mobile"},"".concat(ne,"-ad1")):Object(h.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ne,"-ad1"))}),Object(h.jsx)(F,Object(s.a)(Object(s.a)({},xe),{},{inferior:!0})),window.innerWidth>1199&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{id:"desktop-subchapter",className:"desktop-only bottom-layout",children:[Object(h.jsxs)("div",{style:{width:"72vw"},children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[ve,Se]}),window.innerWidth>1199&&Ce,window.innerWidth>1199&&Object(h.jsx)("article",{style:{display:"flex",justifyContent:"center",marginTop:"1vh"},children:Object(h.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ne,"-ad2"))})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[ke,window.innerWidth>1199&&Object(h.jsx)("article",{style:{display:"flex",justifyContent:"center"},children:Object(h.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ne,"-ad2"))})]})]})}),window.innerWidth<1200&&Object(h.jsxs)("section",{id:"mobile-subchapter",className:"mobile-only bottom-layout",children:[ve,Object(h.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(h.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(ne,"-ad3"))}),Ce,ke,Object(h.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(h.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(ne,"-ad3"))})]}),Object(h.jsx)("br",{})]})]})},be=n(20),xe=n(13);n(130),t.default=function(){window.scrollTo({top:0});var e=Object(c.useState)({}),t=Object(a.a)(e,2),s=t[0],l=t[1],u=Object(c.useContext)(r.a),p=u.siteMetadata,d=u.siteUrl,m=u.darkmode,g=s.chapters,j=p.currentPath,f=p.isMainSite,b=p.lang,x=m?"dark":"light",O=f?j.split("/")[1]:xe.folderName;return Object(c.useEffect)((function(){n(89)("./".concat(b,".json")).then((function(e){var t=e.default,n=t.mangaName,a=t.completed,c=t.chs;l({serieName:n,serieNameWithManga:"".concat(n," Manga"),completed:a,folderName:O,chapters:Object(r.c)(b,O,c,a)})}))}),[b,O]),g?Object(h.jsx)(i.b,{pageTranslations:n(83)["".concat(b,"i18nChapter")],children:Object(h.jsx)(fe,{serie:s})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.a,{fullUrl:"".concat(d).concat(j),mode:x,serie:s}),Object(h.jsx)(be.a,{})]})}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(18),c=n(0),r=n(12),i=n(2),o=Object(c.createContext)();t.b=function(e){var t=e.children,n=e.pageTranslations,s=Object(c.useContext)(r.a).genericTranslations,l={translations:Object(a.a)(Object(a.a)({},s),n)};return Object(i.jsx)(o.Provider,{value:l,children:t})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"eni18nChapter",(function(){return a})),n.d(t,"esi18nChapter",(function(){return c})),n.d(t,"pti18nChapter",(function(){return r}));var a={weCanNotifyYou:"We can notify you when new chapters get released",weWillNotifyYou:"We will notify you when this chapter gets released",activateNotifications:"If you enable notifications, we can notify you when new chapters get released",notReleasedYet:"Not released yet",langName:"English",page:"Page",share:"Share Chapter",chapterOpinions:"Chapter's Opinions",downloadChapter:"Download Chapter"},c={weCanNotifyYou:"Podemos notificarte cuando nuevos capitulos son publicados",weWillNotifyYou:"Te notificaremos cuando este capitulo sea publicado",activateNotifications:"Si habilitas las notificaciones, podemos notificarte cuando nuevos capitulos son publicados",notReleasedYet:"Aun no publicado",langName:"Espa\xf1ol",page:"Pagina",share:"Compartir Capitulo",chapterOpinions:"Opiniones del Capitulo",downloadChapter:"Descargar Capitulo"},r={weCanNotifyYou:"Podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",weWillNotifyYou:"Iremos notific\xe1-lo quando este cap\xedtulo foi publicado",activateNotifications:"Se voc\xea ativar as notifica\xe7\xf5es, podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",notReleasedYet:"Ainda n\xe3o publicado",langName:"Portugu\xeas",page:"P\xe1gina",share:"Compartilhar Cap\xedtulo",chapterOpinions:"Opini\xf5es do Cap\xedtulo",downloadChapter:"Baixar Cap\xedtulo"}},84:function(e,t,n){"use strict";var a=n(0),c=n(94);n(83);var r=n(12),i=n(2),o=function(e,t,n,a,c,r,i,o,s){var l=a?"".concat(n," ").concat(a.split(":")[0]):"";return l?"".concat(s&&"serie"!==o&&"chapter"!==o?"MangaNyaa - ":"").concat(c," ").concat(e," ").concat(l," ").concat(r," ").concat(t," ").concat(i," Online"):"".concat(s&&"serie"!==o&&"chapter"!==o?"MangaNyaa - ":"").concat(c," ").concat(e," ").concat(r," ").concat(t).concat(l," ").concat(i," Online")},s=function(e,t,n){var a={en:"Read ".concat(t," Online Free"),es:"Leer ".concat(t," Online Gratis"),pt:"Leia ".concat(t," Online Gr\xe1tis")};return"home"===n?"MangaNyaa ~ ".concat(a[e]):a[e]},l=function(e,t,n,a,c){var r="chapter"===c&&a?"".concat(n," ").concat(function(e){var t=e.split(":")[1];return!t||!t.trim()||t.includes("released")||t.includes("publicado")||t.includes("lan\xe7ado")?e.split(":")[0]:e}(a)," "):"";return{en:"Read ".concat(t," ").concat(r,"Online Free in English with the best High Quality (Mobile App, Darkmode, Fullscreen, Image Resizing) at Manga Nyaa."),es:"Leer ".concat(t," ").concat(r,"Online Gratis en Espa\xf1ol con la mejor calidad (App Mobile, Modo Oscuro, Pantalla Completa, Ajuste de Imagen) en Manga Nyaa."),pt:"Leia ".concat(t," ").concat(r,"Online Gr\xe1tis em Portugu\xeas com a melhor qualidade (App Mobile, Modo Escuro, Ajuste de Imagem, Tela Cheia) em Manga Nyaa.")}[e]},u=function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]},p=function(e){return{en:"en_US",es:"es_ES",pt:"pt_BR"}[e]},d=function(e,t,n,a){if("en"===e){var c=t;"home"!==n||t.includes("/en")||t.includes("/read")?"serie"!==n||t.includes("read-online-free-english")?"chapter"!==n||t.includes("read-online-free-english")?t.includes("/en")||(c=t.replace(".com/",".com/en/")):c=t.replace("/chapter","/read-online-free-english/chapter"):c=t+"/read-online-free-english":c=a[e];var r=c.replace("chapter","capitulo").replace("read","leer").replace("free","gratis").replace("english","espanol").replace("/en","/es"),o=c.replace("chapter","capitulo").replace("read","ler").replace("free","gratis").replace("english","portugues").replace("/en","/pt");return[Object(i.jsx)("link",{rel:"alternate",hrefLang:"es",href:r},r),Object(i.jsx)("link",{rel:"alternate",hrefLang:"pt",href:o},o)]}if("es"===e){var s=t.replace("capitulo","chapter").replace("leer","read").replace("gratis","free").replace("espanol","english").replace("/es","/en"),l=t.replace("leer","ler").replace("espanol","portugues").replace("/es","/pt");return[Object(i.jsx)("link",{rel:"alternate",hrefLang:"en",href:s},s),Object(i.jsx)("link",{rel:"alternate",hrefLang:"pt",href:l},l)]}if("pt"===e){var u=t.replace("capitulo","chapter").replace("ler","read").replace("gratis","free").replace("portugues","english").replace("/pt","/en"),p=t.replace("ler","leer").replace("portugues","espanol").replace("/pt","/es");return[Object(i.jsx)("link",{rel:"alternate",hrefLang:"en",href:u},u),Object(i.jsx)("link",{rel:"alternate",hrefLang:"es",href:p},p)]}return Object(i.jsx)(i.Fragment,{})};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"dark"},t=e.fullUrl,n=e.chapterTitle,m=e.mode,h=e.serie,g=e.preloads,j=void 0===g?[]:g,f=Object(a.useContext)(r.a),b=f.genericTranslations,x=f.siteMetadata,O=f.siteUrl,v=b.chapter,y=b.read,w=b.in,N=b.free,C=x.lang,k=void 0===C?"en":C,S=x.page,M=x.homes,I=x.storage,P=x.isMainSite,E=h||{},W=E.serieNameWithManga,L=void 0===W?"Manga":W,z=E.folderName,B=u(k),T=l(k,L,v,n&&n.toString(),S),D=p(k),U=s(k,L,S),Y=o(L,B,v,n&&n.toString(),y,w,N,S,P),R=("home"===S||"serie"===S||"chapter"===S)&&d(k,t,S,M),F="home"!==S&&P?"".concat(I.fullPath).concat(z,"/description/1.jpg"):"".concat(O,"/ogimg.jpg");return Object(i.jsxs)(c.a,{htmlAttributes:{lang:k,mode:m,page:S},children:[Object(i.jsx)("title",{children:Y}),Object(i.jsx)("meta",{property:"og:title",content:Y}),Object(i.jsx)("meta",{name:"twitter:title",content:Y}),Object(i.jsx)("meta",{name:"description",content:T}),Object(i.jsx)("meta",{property:"og:description",content:T}),Object(i.jsx)("meta",{name:"twitter:description",content:T}),Object(i.jsx)("link",{rel:"manifest",href:"/manifest_".concat(k,".webmanifest")}),R,Object(i.jsx)("meta",{property:"og:locale",content:D}),Object(i.jsx)("meta",{property:"og:type",content:"article"}),Object(i.jsx)("meta",{property:"og:url",content:t}),Object(i.jsx)("meta",{property:"og:site_name",content:U}),Object(i.jsx)("meta",{property:"article:section",content:"Manga"}),Object(i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(i.jsx)("meta",{name:"twitter:image",content:F}),Object(i.jsx)("meta",{property:"og:image",content:F}),Object(i.jsx)("meta",{property:"og:image:secure_url",content:F}),j]})}},85:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(31);var i=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},o=n(12),s=n(78),l=(n(87),n(2));t.a=function(e){var t=e.limit,n=void 0===t?3:t,u=e.page,p=e.serie,d=Object(a.useContext)(o.a).siteMetadata,m=Object(a.useContext)(s.a).translations,h=d.lang,g=d.homes,j=p.serieName,f=function(e,t,n,a){return i(r.filter((function(e){return e.name!==t}))).slice(0,n).map((function(t,n){var r=t.name,i=t.subdomain;return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)("a",{"data-src":"https://".concat(i,".manganyaa.com/ogimg.jpg"),"data-lazybg":!0,className:"other-manga-item ".concat(a," lazy"),href:"https://".concat(i,".manganyaa.com").concat(e),children:Object(l.jsx)("h6",{className:"other-manga-item-text bg70",children:r},"".concat(r,"-h6"))},"".concat(r,"-a")),2===n&&"serie"===a&&window.innerWidth<1200&&Object(l.jsx)("article",{style:{display:"flex",justifyContent:"center",marginBottom:"2.5vh"},children:Object(l.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"})})]},r)}))}(g[h],j,n,u);return Object(l.jsxs)("section",{className:"box-wrapper other-manga-wrapper ".concat(u," bg95 "),children:[Object(l.jsx)("h5",{children:m.otherPopularSeries}),Object(l.jsx)("div",{className:"box-container other-manga-container ".concat(u),children:f})]})}},86:function(e,t,n){"use strict";t.a=function(){var e=!0;if("undefined"!==typeof navigator){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t){var n=t.effectiveType,a=t.saveData;("slow-2g"===n||"2g"===n||"3g"===n||a)&&(e=!1)}}return e}},87:function(e,t,n){},88:function(e,t,n){"use strict";var a=n(0),c=n(12);t.a=function(e,t){var n=Object(a.useContext)(c.a).siteMetadata,r=n.storage,i=n.lang,o=n.page,s=n.currentPath;Object(a.useEffect)((function(){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t=[].slice.call(document.querySelectorAll(e));if(t.length>0){var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var a=t.target;!function(e,t,n){if(e.dataset.lazybg)e.style.backgroundImage="url(".concat(e.dataset.src,")");else if(e.dataset.src.includes("/iframe.")||e.dataset.src.includes("/flags/")||e.dataset.src.includes("ogimg")||e.dataset.src.includes("imgur")||!e.dataset.src.includes("|"))e.src=e.dataset.src;else{var a="".concat(n.fullPath).concat(e.dataset.src.replaceAll("|","/"),".jpg");e.src=a}e.classList.remove(t.replace(".")),(t.includes("chs-")||t.includes("chimgs-"))&&e.classList.add("fadeIn")}(a,e,r),n.unobserve(a)}}))}));t.forEach((function(e){n.observe(e)}))}}}),[o,s,i,r,t])}},89:function(e,t,n){var a={"./desc-en.json":[91,1],"./desc-es.json":[92,2],"./desc-pt.json":[93,3],"./en.json":[96,12],"./es.json":[97,13],"./pt.json":[98,14]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n.t(c,3)}))}c.keys=function(){return Object.keys(a)},c.id=89,e.exports=c}}]);