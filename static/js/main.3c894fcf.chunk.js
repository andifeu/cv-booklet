/*! For license information please see main.3c894fcf.chunk.js.LICENSE.txt */
(this["webpackJsonpcv-booklet"]=this["webpackJsonpcv-booklet"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"pages":[{"id":"about","headline":"About","page":"About.js","url":""},{"id":"kompetenzen","part":1,"headline":"Kompetenzen","page":"Kompetenzen.js","url":"kompetenzen"},{"id":"kompetenzen--2","part":2,"page":"Kompetenzen.js","url":"kompetenzen"},{"id":"projekte","headline":"Projekte","page":"Projekte.js","url":"projekte","part":1},{"id":"projekte","headline":"Projekte","page":"Projekte.js","url":"projekte","part":2},{"id":"projekte","headline":"Projekte","page":"Projekte.js","url":"projekte","part":3},{"id":"projekte","headline":"Projekte","page":"Projekte.js","url":"projekte","part":4},{"id":"career","headline":"Beruflicher Werdegang","page":"career.js","url":"werdegang"},{"id":"ausbildung","headline":"Ausbildung","page":"Ausbildung.js","url":"ausbildung"},{"id":"kontakt","headline":"Kontakt","page":"Kontakt.js","url":"kontakt"}]}')},function(e,t,n){e.exports={"margin-top-10":"PageContent_margin-top-10__2sUlT","image-container":"PageContent_image-container__372x1","bg-image":"PageContent_bg-image__2ff4f",pencil:"PageContent_pencil___41w3",portrait:"PageContent_portrait__n3-ak","portrait-pencil":"PageContent_portrait-pencil__z1Lf8","about-text":"PageContent_about-text__1KW60",details:"PageContent_details__2RVST","project-desc":"PageContent_project-desc__28k1f",technologies:"PageContent_technologies__2E2dJ",tasks:"PageContent_tasks__vA8tP","project-bg-image":"PageContent_project-bg-image__2kJuO","ospneo-bg":"PageContent_ospneo-bg__8zCQk","giesecke-bg":"PageContent_giesecke-bg__iLSVU",sources:"PageContent_sources__qv_bu",subheadline:"PageContent_subheadline__2bXw9",line:"PageContent_line__3MrGx"}},,,,function(e,t,n){e.exports={"chart-widget":"PieChart_chart-widget__1tZM6",flex:"PieChart_flex__1MAtD",chart:"PieChart_chart__3MZVl",background:"PieChart_background__wX4Qx",percent:"PieChart_percent__2d-Bn","label-container":"PieChart_label-container__AmXa7",label:"PieChart_label__1R7V8"}},function(e,t,n){e.exports={"page-content":"ContentContainer_page-content__3uaDx","text-block":"ContentContainer_text-block__1eVya","page-front":"ContentContainer_page-front__yqlWc","page-back":"ContentContainer_page-back__2J1NF","page-content-header":"ContentContainer_page-content-header__1BU4z","page-content-footer":"ContentContainer_page-content-footer__3Xcpl","page-content-text":"ContentContainer_page-content-text__2bUq3","page-num":"ContentContainer_page-num__2mQT_"}},,function(e,t,n){e.exports={"card-widget":"Card_card-widget__2aEMH",card:"Card_card__mOZqL",image:"Card_image__2jDne","card-bg":"Card_card-bg__1FSk9",info:"Card_info__TxLrP"}},,function(e,t,n){e.exports={"book-pages":"Book_book-pages__1wufg",contents:"Book_contents__3lYoO",title:"Book_title__3sZGz",index:"Book_index__38t4Z"}},function(e,t,n){e.exports={book:"Layout_book__2MrCq",cover:"Layout_cover__1vuq9","page-container":"Layout_page-container__2p8u3",page:"Layout_page__1pbNN",sidebar:"Layout_sidebar__2eohI"}},,,,function(e,t,n){e.exports={page:"Page_page__329Ps","page-left":"Page_page-left__28FuV","page-right":"Page_page-right__31Z4a"}},,,,,function(e,t,n){var a,i;i=this,void 0===(a=function(){return i.EasyPieChart=function(){var e=function(e,t){var n,a=document.createElement("canvas");e.appendChild(a),"object"===typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(a);var i=a.getContext("2d");a.width=a.height=t.size;var r=1;window.devicePixelRatio>1&&(r=window.devicePixelRatio,a.width=a.height=t.size*r,i.scale(r,r)),t.cssWidth&&(a.style.width=t.cssWidth),t.cssHeight&&(a.style.height=t.cssHeight),i.translate(t.size/2,t.size/2),i.rotate((t.rotate/180-.5)*Math.PI);var s=(t.size-t.lineWidth)/2;t.scaleColor&&t.scaleLength&&(s-=t.scaleLength+2),Date.now=Date.now||function(){return+new Date};var c=function(e,t,n){var a=(n=Math.min(Math.max(-1,n||0),1))<=0;i.beginPath(),i.arc(0,0,s,0,2*Math.PI*n,a),i.strokeStyle=e,i.lineWidth=t,i.stroke()},o=function(){var e,n;i.lineWidth=1,i.fillStyle=t.scaleColor,i.save();for(var a=24;a>0;--a)a%6===0?(n=t.scaleLength,e=0):(n=.6*t.scaleLength,e=t.scaleLength-n),i.fillRect(-t.size/2+e,0,n,1),i.rotate(Math.PI/12);i.restore()},l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},d=function(){t.scaleColor&&o(),t.trackColor&&c(t.trackColor,t.trackWidth||t.lineWidth,1)};this.getCanvas=function(){return a},this.getCtx=function(){return i},this.clear=function(){i.clearRect(t.size/-2,t.size/-2,t.size,t.size)},this.draw=function(e){var a;t.scaleColor||t.trackColor?i.getImageData&&i.putImageData?n?i.putImageData(n,0,0):(d(),n=i.getImageData(0,0,t.size*r,t.size*r)):(this.clear(),d()):this.clear(),i.lineCap=t.lineCap,a="function"===typeof t.barColor?t.barColor(e):t.barColor,c(a,t.lineWidth,e/100)}.bind(this),this.animate=function(e,n){var a=Date.now();t.onStart(e,n);var i=function(){var r=Math.min(Date.now()-a,t.animate.duration),s=t.easing(this,r,e,n-e,t.animate.duration);this.draw(s),t.onStep(e,n,s),r>=t.animate.duration?t.onStop(e,n):l(i)}.bind(this);l(i)}.bind(this)};return function(t,n){var a={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,cssWidth:"",cssHeight:"",rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},onStart:function(e,t){},onStep:function(e,t,n){},onStop:function(e,t){}};if("undefined"!==typeof e)a.renderer=e;else{if("undefined"===typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");a.renderer=SVGRenderer}var i={},r=0,s=function(){for(var e in this.el=t,this.options=i,a)a.hasOwnProperty(e)&&(i[e]=n&&"undefined"!==typeof n[e]?n[e]:a[e],"function"===typeof i[e]&&(i[e]=i[e].bind(this)));"string"===typeof i.easing&&"undefined"!==typeof jQuery&&jQuery.isFunction(jQuery.easing[i.easing])?i.easing=jQuery.easing[i.easing]:i.easing=a.easing,"number"===typeof i.animate&&(i.animate={duration:i.animate,enabled:!0}),"boolean"!==typeof i.animate||i.animate||(i.animate={duration:1e3,enabled:i.animate}),this.renderer=new i.renderer(t,i),this.renderer.draw(r),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),i.animate.enabled?this.renderer.animate(r,e):this.renderer.draw(e),r=e,this}.bind(this),this.disableAnimation=function(){return i.animate.enabled=!1,this},this.enableAnimation=function(){return i.animate.enabled=!0,this},s()}}()}.apply(t,[]))||(e.exports=a)},function(e,t,n){e.exports={leaders:"Menu_leaders__2-5FB"}},,,,,,function(e,t,n){},,function(e,t,n){var a={"./avira-logo.png":[48,3],"./content-bg.jpg":[49,4],"./cv-booklet.png":[50,5],"./giesecke-bg.jpeg":[51,6],"./giesecke.jpg":[52,7],"./ospneo-bg.png":[53,8],"./ospneo.png":[54,9],"./portrait.jpg":[55,10],"./webrtc-flutter-1.jpg":[56,11],"./webrtc-flutter-2.jpg":[57,12],"./wood-bg.jpg":[58,13]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id=38,e.exports=i},,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(28),s=n.n(r),c=(n(36),n(21)),o=n(2),l=n(3),d=n(6),h=n(5),u=n(4),j=n(27),b=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"delayedExecution",value:function(e,t,n){return n&&clearTimeout(n),window.setTimeout(e,t)}},{key:"isFirefox",value:function(){return navigator.userAgent.indexOf("Firefox")>-1}}]),e}(),p=n(15),g=n.n(p),f=n(9),m=n(10),O=n.n(m),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).headline=e.headline||null,a.pageNum=e.pageNum,a.part=e.part||null,a.css=O.a,a}return Object(l.a)(n,[{key:"render",value:function(){if(this.part&&this["render"+this.part])return this["render"+this.part](this.props);throw new Error("Fehler: render"+(this.part||"")+"() nicht implementiert")}}]),n}(i.a.Component),x=n(17),k=n.n(x),_=n(0),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).breakpoint=620,n.useFilter=null,n.filterRef=null,n.imageRef=null,n.filterFrequency=null,n.filterId=e.filterId||"card-filter_"+Math.floor(1e5*Math.random()+1),n.filterRef=i.a.createRef(null),n.imageRef=i.a.createRef(null),n.filterFrequency=e.filterFrequency||"0.02",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setImage(this.props.image),y(this,!0),window.addEventListener("resize",(function(t){e.timer=b.delayedExecution((function(){y(e)}),100,e.timer)}))}},{key:"setImage",value:function(e){var t=this;n(38)("./".concat(e)).then((function(e){var n;e&&e.default?(t.image=e.default,(n=t).imageRef.current.style.backgroundImage="url(".concat(n.image,")")):console.error("Image not found")}))}},{key:"getImageInfo",value:function(){return this.props.description?Object(_.jsxs)("div",{className:k.a.info,children:[this.props.title?Object(_.jsx)("h2",{children:this.props.title}):null,Object(_.jsx)("p",{children:this.props.description})]}):null}},{key:"render",value:function(){var e={backgroundImage:"url(".concat(this.image,")")};return Object(_.jsxs)("div",{className:k.a["card-widget"],children:[Object(_.jsx)("div",{ref:this.filterRef,className:k.a["card-bg"]}),Object(_.jsxs)("div",{className:k.a.card,children:[this.getImageInfo(),Object(_.jsx)("div",{ref:this.imageRef,className:"".concat(k.a.image),style:e})]}),Object(_.jsx)("svg",{children:Object(_.jsxs)("filter",{id:this.filterId,children:[Object(_.jsx)("feTurbulence",{x:"0",y:"0",baseFrequency:this.filterFrequency,numOctaves:"5",seed:"1"}),Object(_.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"20"})]})})]})}}]),a}(i.a.Component);function y(e,t){(t||!0===e.useFilter)&&window.innerWidth<e.breakpoint?(e.filterRef.current.style.filter="",e.useFilter=!1):(t||!1===e.useFilter)&&window.innerWidth>=e.breakpoint&&(e.filterRef.current.style.filter="url(#".concat(e.filterId,")"),e.useFilter=!0)}var C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{children:this.headline}),Object(_.jsx)("div",{className:this.css["image-container"],children:Object(_.jsx)(w,{image:"portrait.jpg",title:"\xdcber mich",description:"Hallo! Mein Name ist Andreas Feuerstein. Seit 2011"})}),Object(_.jsxs)("div",{className:this.css["about-text"],children:[Object(_.jsx)("p",{children:"Hallo! Mein Name ist Andreas Feuerstein. Seit 2011 arbeite ich leidenschaftlich als Webentwickler mit den Schwerpunkten PHP-Backend- sowie Javascript-Frontendentwicklung. Bei zahlreichen spannenden Projekten in den letzten Jahren konnte ich mein Know-How weiterentwickeln."}),Object(_.jsx)("p",{children:"Seit Oktober 2015 bin ich als selbstst\xe4ndiger Softwareentwickler t\xe4tig und biete Ihnen kreative L\xf6sungen f\xfcr Ihr Projekt."})]})]})}}]),n}(v),P=n(29),N=n.n(P),F=n(14),A=n.n(F),S={barColor:"#3c77b1",trackColor:"#d4d4d4",lineCap:"round",lineWidth:6,size:100,rotate:0,scaleColor:!1,animate:{enabled:!1}},R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).label=e.label,a.sublabel=e.sublabel,a.value=e.value,a.pieRef=i.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.pieChart=new N.a(this.pieRef.current,S)}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:A.a["chart-widget"],children:[Object(_.jsxs)("div",{className:A.a.flex,children:[Object(_.jsxs)("div",{className:A.a["label-container"],children:[Object(_.jsx)("h3",{className:A.a.label,children:this.label}),Object(_.jsx)("span",{className:A.a.sublabel,children:this.sublabel})]}),Object(_.jsx)("div",{className:A.a.chart,"data-percent":this.value,ref:this.pieRef,children:Object(_.jsx)("div",{className:A.a.background,children:Object(_.jsx)("span",{className:A.a.percent,children:"".concat(this.value,"%")})})})]}),this.props.children]})}}]),n}(i.a.Component),I=n(8);function M(e){var t=[],n=[];return e.technologies&&Array.isArray(e.technologies)&&e.technologies.forEach((function(e){t.push(Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),Object(_.jsx)("span",{children:e})]},e))})),e.image&&Array.isArray(e.image.name)&&e.image.name.forEach((function(e){n.push(Object(_.jsx)(w,{image:e,filterFrequency:"0.2"},e))})),Object(_.jsxs)(_.Fragment,{children:[e.image&&e.image.bgCSS&&Object(_.jsx)("div",{className:"".concat(O.a[e.image.bgCSS]," ").concat(O.a["project-bg-image"])}),Object(_.jsx)("div",{className:O.a.subheadline,children:Object(_.jsx)("h3",{children:e.projectname})}),n.length>0&&Object(_.jsx)("div",{style:e.image.style,className:O.a["image-container"],children:n}),Object(_.jsxs)("div",{className:O.a["project-desc"],children:[e.customer&&Object(_.jsx)("div",{className:O.a.line,children:Object(_.jsxs)("p",{children:[Object(_.jsx)("b",{children:"Kunde:"})," ",e.customer]})}),e.duration&&Object(_.jsx)("div",{className:O.a.line,children:Object(_.jsxs)("p",{children:[Object(_.jsx)("b",{children:"Dauer:"}),"\xa0",e.duration]})}),t&&Object(_.jsxs)("div",{className:O.a.line,children:[Object(_.jsx)("b",{children:"Technologien:"}),Object(_.jsx)("ul",{className:O.a.technologies,children:t})]}),e.description&&Object(_.jsxs)("div",{className:O.a.line,children:[Object(_.jsx)("b",{children:"Beschreibung:"}),Object(_.jsx)("p",{children:e.description})]})]}),(e.code||e.demo)&&Object(_.jsxs)("div",{className:O.a.sources,children:[e.code&&Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"Code:"}),"\xa0",e.code]}),e.demo&&Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"Demo:"}),"\xa0",e.demo]})]})]})}var E={about:C,kompetenzen:function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render1",value:function(){return Object(_.jsxs)(_.Fragment,{children:[this.headline&&Object(_.jsx)("h2",{children:this.headline}),Object(_.jsx)("p",{children:"Mein momentaner Schwerpunkt liegt in der Frontendentwicklung mit Javascript, HTML5 und CSS3. Dar\xfcber hinaus konnte in einigen Projekten eine mehrj\xe4hrige Erfahung in der Backendentwicklung mit PHP und MySQL sammeln."}),Object(_.jsx)(R,{label:"Javascript",sublabel:"10 Jahre Erfahrung",value:"95",children:Object(_.jsxs)("div",{className:this.css.details,children:[Object(_.jsx)("b",{children:"Frameworks & Standarts"}),Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"ECMAScript 5"]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"ECMAScript 6 & neuer"]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"Typescript"]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"jQuery"]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"React.js"]})]})]})}),Object(_.jsx)(R,{label:"PHP",sublabel:"12 Jahre Erfahrung",value:"90",children:Object(_.jsxs)("div",{className:this.css.details,children:[Object(_.jsx)("b",{children:"Frameworks & Standarts"}),Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"PHP 7"]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"CakePHP"]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"Laravel"]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),"Doctrine"]})]})]})}),Object(_.jsx)(R,{label:"HTML 5",sublabel:"8 Jahre Erfahrung",value:"90"})]})}},{key:"render2",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(R,{label:"CSS 3",sublabel:"10 Jahre Erfahrung",value:"90"}),Object(_.jsx)(R,{label:"MYSQL",sublabel:"8 Jahre Erfahrung",value:"85"}),Object(_.jsx)(R,{label:"C/C++",sublabel:"5 Jahre Erfahrung",value:"50"}),Object(_.jsx)(R,{label:"Dart & Flutter",sublabel:"1 Jahr Erfahrung",value:"50"})]})}}]),n}(v),ausbildung:function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{children:this.headline}),Object(_.jsx)("div",{className:this.css.subheadline,children:Object(_.jsx)("h3",{children:"Berufsausbilding"})}),Object(_.jsx)("div",{style:{width:"60%",height:"30%"},className:this.css["image-container"],children:Object(_.jsx)(w,{image:"avira-logo.png",filterFrequency:"0.2"})}),Object(_.jsx)("div",{className:this.css["margin-top-10"],children:Object(_.jsxs)("p",{children:[Object(_.jsx)("b",{children:"Ort:"}),"\xa0",Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.avira.com/",children:"Avira GmbH"}),"\xa0 in Tettnang am Bodensee"]})}),Object(_.jsx)("div",{children:Object(_.jsxs)("p",{children:[Object(_.jsx)("b",{children:"Dauer:"}),"\xa0September 2005 - Juli 2008"]})}),Object(_.jsxs)("div",{className:this.css.line,children:[Object(_.jsx)("b",{children:"T\xe4tigkeitsbereiche:"}),Object(_.jsxs)("ul",{className:this.css.tasks,children:[Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),Object(_.jsx)("span",{children:"Erlernen der Programmiersprachen C/C++"})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),Object(_.jsxs)("span",{children:["Entwicklung des"," ",Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.chip.de/downloads/Avira-RegistryCleaner_49840903.html",children:"Avira RegistryCleaners"})," ","(C++/MFC)"]})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),Object(_.jsx)("span",{children:"Erlernen der Programmiersprache Java"})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)(I.a,{}),Object(_.jsx)("span",{children:"Entwicklung von Kleinprojekten in PHP / HTML / CSS"})]})]})]})]})}}]),n}(v),projekte:function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render1",value:function(){var e=Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.microdoc.com/",children:"MicroDoc Computersysteme GmbH"})," ","als Dienstleister f\xfcr die"," ",Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.f-i.de/",children:"Finanz Informatik GmbH & Co. KG."})]}),t=Object(_.jsxs)(_.Fragment,{children:["Mitentwicklung des Javascript UI-Frameworks OSPlus_neo, f\xfcr den Einsatz bei Onlinebanking-Frontends, Bankberater-Software und inzwischen auch Geldautomaten:",Object(_.jsx)("br",{}),Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.youtube.com/watch?v=3RqmiVekSNA",children:"Produktvideo"})]});return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{children:this.headline}),Object(_.jsx)(M,{projectname:"OSPlus_neo",image:{name:["ospneo.png"],bgCSS:"ospneo-bg",style:{width:"40%",height:"26%"}},customer:e,duration:"April 2016 - Februar 2021",technologies:["Javascript","HTML5","CSS3"],description:t})]})}},{key:"render2",value:function(){var e=Object(_.jsxs)(_.Fragment,{children:["Intranet Telefonbuch",Object(_.jsx)("br",{}),"-",Object(_.jsx)("br",{}),"Giesecke+Devrient"]}),t=Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gi-de.com/",children:"Giesecke & Devrient"}),n=Object(_.jsxs)(_.Fragment,{children:["Entwicklung eines leichtgewichtigen PHP-MVC Frameworks zur internen Verwendung f\xfcr G&D.",Object(_.jsx)("br",{}),"Portierung des alten Intranet-Telefonbuchs auf das neue System."]});return Object(_.jsx)(M,{projectname:e,image:{name:["giesecke.jpg"],bgCSS:"giesecke-bg"},customer:t,duration:"September 2015 - Dezember 2015",technologies:["PHP","Javascript"],description:n})}},{key:"render3",value:function(){var e=Object(_.jsx)(_.Fragment,{children:"Entwicklung eines Lebenslaufs in Form eines 3D-Hefts auf Basis von Vanilla Javascript und React.js."}),t=Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/andifeu/cv-booklet/tree/master",children:"Github"}),n=Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://andifeu.github.io/cv-booklet/#/",children:"Github pages"});return Object(_.jsx)(M,{projectname:"CV Booklet",image:{name:["cv-booklet.png"],style:{width:"80%",height:"35%"}},customer:"privates Projekt",duration:"August 2021 - September 2021",technologies:["Javascript","React.js"],description:e,code:t,demo:n})}},{key:"render4",value:function(){var e=Object(_.jsx)(_.Fragment,{children:"Entwicklung einer Peer-To-Peer Videotelefonie-App f\xfcr Android und iOS auf Basis des Frameworks Flutter und Firebase (Backend)."}),t=Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/andifeu/webrtc_flutterclient",children:"Github"})});return Object(_.jsx)(M,{projectname:"WebRTC Video Call App",image:{name:["webrtc-flutter-1.jpg","webrtc-flutter-2.jpg"],style:{width:"80%",height:"40%",padding:"5%"}},customer:"privates Projekt",duration:"M\xe4rz 2021 - Mai 2021",technologies:["Flutter","Dart","WebRTC"],description:e,code:t})}}]),n}(v),kontakt:function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).number=4915753093362,e}return Object(l.a)(n,[{key:"callNumber",value:function(e){var t=parseInt(this.number,10);e.preventDefault(),window.location.href="tel://+"+t}},{key:"render",value:function(){var e=this;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h2",{children:this.headline}),Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{children:"Andreas Feuerstein - Software Entwickler"}),Object(_.jsxs)("p",{children:["Email:\xa0",Object(_.jsx)("a",{href:"mailto:andreas.feuerstein@mail.de",children:"andreas.feuerstein@mail.de"})]}),Object(_.jsxs)("p",{children:["Tel.:\xa0",Object(_.jsx)("a",{onClick:function(t){return e.callNumber(t)},href:"#",children:"0 1575 / 30 933 62"})]}),Object(_.jsx)("p",{children:"Adresse:"}),Object(_.jsxs)("address",{children:["Blumenweg 10",Object(_.jsx)("br",{}),"88319 Aitrach"]})]})]})}}]),n}(v)};var z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).ref=i.a.createRef(),a.pageType="front"===e.type?g.a["page-front"]:g.a["page-back"],a}return Object(l.a)(n,[{key:"render",value:function(){var e=function(e){var t,n=f.pages[e];return n?(t=n.id,n.id.indexOf("--")>-1&&(t=n.id.split("--")[0]),n.component=E[t],n):null}(this.props.pageNum-1),t=null===e||void 0===e?void 0:e.component;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{ref:this.ref,className:"".concat(g.a["page-content"]," ").concat(this.pageType),children:[Object(_.jsx)("div",{className:g.a["page-content-header"]}),Object(_.jsxs)("div",{className:"".concat(g.a["page-content-text"]),children:[t&&e&&Object(_.jsx)(t,{headline:e.headline,pageNum:this.props.pageNum,part:e.part},e.id),Object(_.jsx)("div",{className:g.a["page-num"],children:this.props.pageNum})]}),Object(_.jsx)("div",{className:g.a["page-content-footer"]})]})})}}]),n}(i.a.Component),D=n(24),L=n.n(D),T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).frontActive=!0,a.ref=null,a.animationActive=!1,a.pageNum=0,a.numSites=0,a.siteIndex=0,a.siteIndex=e.siteIndex,a.numSites=e.numSites,a.pageNum=2*a.siteIndex+1,a.ref=i.a.createRef(),a.frontRef=i.a.createRef(),a.backRef=i.a.createRef(),a}return Object(l.a)(n,[{key:"setFrontActive",value:function(e){this.frontActive=e}},{key:"isFrontActive",value:function(){return this.frontActive}},{key:"isAnimationActive",value:function(){return this.animationActive}},{key:"animate",value:function(e){var t,n,a=this,i=this.ref.current,r=10*this.siteIndex;t=[2,-90],n=[-90,-182],this.isFrontActive()||(t=[-182,-90],n=[-90,2],r=10*(this.numSites-this.siteIndex)),this.animationActive=!0,H.call.apply(H,[this,i].concat(Object(j.a)(t))).addEventListener("finish",(function(){i.style.zIndex=r,H.call.apply(H,[a,i].concat(Object(j.a)(n))).addEventListener("finish",(function(){a.setFrontActive(!a.frontActive),a.animationActive=!1,"function"===typeof e&&e(a)}))}))}},{key:"render",value:function(){var e={zIndex:10*(this.numSites-this.siteIndex)};return this.props.siteIndex>0&&b.isFirefox()&&(e.display="none"),Object(_.jsxs)("div",{style:e,ref:this.ref,onClick:this.props.onPageClick.bind(this),className:"".concat(L.a.page," ").concat(L.a["page-right"]),children:[Object(_.jsx)(z,{ref:this.frontRef,type:"front",pageNum:this.pageNum,children:Object(_.jsx)("h1",{children:this.pageNum})}),Object(_.jsx)(z,{ref:this.backRef,type:"back",pageNum:this.pageNum+1,children:Object(_.jsx)("h1",{children:this.pageNum+1})})]})}}]),n}(i.a.Component);function H(e,t,n){return e.animate([{transform:"rotateY("+t+"deg)"},{transform:"rotateY("+n+"deg)"}],{duration:500,fill:"forwards"})}var B=n(30),J=n.n(B);function W(){return Object(_.jsx)("nav",{children:Object(_.jsx)("ul",{className:J.a.leaders,children:Object.keys(f.pages).map((function(e){return(!f.pages[e].part||f.pages[e].part<2)&&Object(_.jsxs)("li",{children:[Object(_.jsx)(c.b,{to:f.pages[e].url,children:f.pages[e].headline}),Object(_.jsx)("span",{children:e})]},f.pages[e].id)}))})})}var G=n(19),q=n.n(G),V=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).numPages=0,a.numSites=0,a.activePageIndex=0,a.pageRefs=[],a.prevDirectionUp=!0,a.animationActive=!1,a.numPages=Object.values(f.pages).length,a.numSites=Math.ceil(a.numPages/2),a}return Object(l.a)(n,[{key:"isAnimationActive",value:function(){return this.pageRefs.some((function(e){return e.isAnimationActive()}))}},{key:"goToPageByUrl",value:function(e){var t=this,n=f.pages,a=0,i=0;for(0===e.indexOf("/")&&(e=e.substr(1));a<n.length-1&&e!==n[a].url;)a++;var r=Math.floor((a+1)/2);setInterval((function(){i<r&&(t.pageAnimation(i,!1),i++)}),300)}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("wheel",this.mousewheelHandler.bind(this)),this.goToPageByUrl(this.props.location.pathname),this.props.history.listen((function(t){t.autoChange||e.props.location.pathname===t.pathname||e.isAnimationActive()||e.goToPageByUrl(t.pathname)}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("wheel",this.mousewheelHandler.bind(this))}},{key:"mousewheelHandler",value:function(e){var t=this.activePageIndex,n=!0;if(e.deltaY<0){if(0===t)return;n=!1,t--}else if(t===this.numSites)return;this.pageRefs[t]&&this.pageAnimation(t,this.prevDirectionUp!==n,!0)}},{key:"pageAnimation",value:function(e,t,n){var a=this;if(this.pageRefs[e]){var i=this.pageRefs[e],r=i.isFrontActive(),s=this.isAnimationActive();if(!s||!t){if(r?(this.prevDirectionUp=!0,this.activePageIndex++):(this.prevDirectionUp=!1,this.activePageIndex--),!s&&b.isFirefox())for(var c=0;c<this.pageRefs.length;c++)this.pageRefs[c].ref.current.style.display="";i.animate((function(e){if(!a.isAnimationActive()){if(n){var t=e.pageNum;e.isFrontActive()||t++,function(e,t){for(var n,a=0;a<t;a++)f.pages[a]&&(n=f.pages[a]);""===n.url&&(n.url="/");n&&n.url!==e.location.pathname&&e.push({pathname:n.url,autoChange:!0})}(a.props.history,t)}if(b.isFirefox())for(var i=0;i<a.pageRefs.length;i++)i!==a.activePageIndex-1&&i!==a.activePageIndex&&(a.pageRefs[i].ref.current.style.display="none")}}))}}else console.error("page not set!")}},{key:"render",value:function(){for(var e=this,t=[],n=["A"],a=function(a){t.push(Object(_.jsx)(T,{numSites:e.numSites,siteIndex:a,ref:function(t){e.pageRefs[a]=i.a.createRef(),e.pageRefs[a]=t},onPageClick:function(t){"range"!==document.getSelection().type.toLowerCase()&&-1===n.indexOf(t.target.tagName)&&e.pageAnimation(a,!0,!0)}},"page-".concat(a)))},r=0;r<this.numSites;r++)a(r);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:q.a.contents,children:[Object(_.jsx)("div",{className:q.a.headline,children:Object(_.jsxs)("h1",{className:q.a.title,children:["Andreas Feuerstein",Object(_.jsx)("br",{}),"Softwareentwicklung"]})}),Object(_.jsxs)("div",{className:q.a.index,children:[Object(_.jsx)("h2",{children:"Inhalte"}),Object(_.jsx)(W,{})]})]}),t]})}}]),n}(i.a.Component);var U=Object(u.d)(V),K=n(20),Q=n.n(K);function Z(e){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("aside",{className:Q.a.sidebar,children:Object(_.jsx)(W,{})}),Object(_.jsx)("div",{className:Q.a.book,children:Object(_.jsx)("div",{className:Q.a.cover,children:Object(_.jsx)("div",{className:Q.a["page-container"],children:Object(_.jsx)(U,{})})})})]})}function Y(){return Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(c.a,{children:Object(_.jsx)(Z,{})})})}s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(Y,{})}),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.3c894fcf.chunk.js.map