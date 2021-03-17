(()=>{"use strict";var e={5683:(e,t,a)=>{var n=a(7294),r=a(3935),c=a(4699),l=a(1120),o=a(7623),s=a(9895),i=a(4741),m=a(7812),u=a(8995),d=a(5996),p="#ffffff8a",f="ru",E="en",g=(0,l.Z)((function(e){return(0,o.Z)({root:{padding:"2px 4px",display:"flex",alignItems:"center",maxWidth:500,minWidth:280,backgroundColor:p},input:{marginLeft:e.spacing(1),flex:1,maxWidth:500,minWidth:210},iconButton:{padding:5},divider:{height:28,margin:4}})}));function h(e){var t=g(),a=e.lang,r=e.search,c=e.setSearch,l=function(){return a===f?"Введите страну/сталицу":a===E?"Search country/capital":"Suche Land/Hauptstadt"},o=n.createRef();return(0,n.useEffect)((function(){var e=o.current&&o.current.children[0];e&&(""===r?e.classList.add("hidden"):e.classList.remove("hidden"))}),[o,r,t]),n.createElement(s.Z,{ref:o,component:"form",className:t.root,onSubmit:function(e){e.preventDefault()}},n.createElement(m.Z,{onClick:function(e){return function(e){e.detail&&c("")}(e)},type:"submit",className:t.iconButton,"aria-label":"search"},n.createElement(d.Z,null)),n.createElement(i.Z,{className:t.input,placeholder:l(),inputProps:{"aria-label":l()},autoFocus:!0,value:r,onChange:function(e){return c(e.target.value)}}),n.createElement(m.Z,{type:"submit",className:t.iconButton,"aria-label":"search"},n.createElement(u.Z,null)))}var _=a(6479),y=a(4436),v=a(8216),N=(0,l.Z)((function(e){return(0,o.Z)({formControl:{margin:e.spacing(1),minWidth:40},selectEmpty:{height:40}})}));function b(e){var t=N(),a=e.lang,r=e.setLang;return n.createElement(n.Fragment,null,n.createElement(y.Z,{className:t.formControl},n.createElement(v.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:function(e){r(e.target.value),localStorage.setItem("language",JSON.stringify(e.target.value))}},n.createElement(_.Z,{value:f},f),n.createElement(_.Z,{value:E},E),n.createElement(_.Z,{value:"de"},"de"))))}var w=a(3727),Z=a(5977);const S=function(e){var t=e.lang,a=e.setLang,r=e.search,c=e.setSearch,l=(0,Z.TH)();return n.createElement("header",{className:"header"},n.createElement(w.rU,{to:"/"},n.createElement("img",{className:"header__logo",src:"assets/images/logo.svg",alt:"Oleg Vaskevich"})),"/"===l.pathname&&n.createElement("div",{className:"header__search"},n.createElement(h,{lang:t,search:r,setSearch:c})),n.createElement("div",{className:"header__language"},n.createElement(b,{lang:t,setLang:a})))};var k=a(8463),x=a(9738),L=a(9912),C=a(951),R=a(2318),j=(0,l.Z)({root:{margin:10,backgroundColor:p},media:{height:240}});function D(e){var t=j(),a=e.country,r=e.lang,c=a.name,l=a.capital,o=a.avatar,s=a.path;return n.createElement(w.rU,{to:s},n.createElement(k.Z,{className:t.root},n.createElement(x.Z,null,n.createElement(C.Z,{className:t.media,image:o,title:c[r]}),n.createElement(L.Z,null,n.createElement(R.Z,{gutterBottom:!0,variant:"h5",component:"h2"},c[r]),n.createElement(R.Z,{variant:"body2",color:"textSecondary",component:"p"},l[r])))))}const P=n.forwardRef((function(e,t){var a=e.lang,r=e.data;return n.createElement("section",{ref:t,className:"countries-container"},r.map((function(e,t){return n.createElement(D,{key:t,country:e,lang:a})})))})),M=function(){return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"footer__links"},n.createElement("a",{href:"https://github.com/I-vasilich-I",className:"footer__link",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:"github__logo",src:"assets/images/GitHub.svg",alt:"Oleg Vaskevich"})),n.createElement("a",{href:"https://github.com/Lex-tp",className:"footer__link",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:"github__logo",src:"assets/images/GitHub.svg",alt:"Denis Korotkevich"}))),n.createElement("p",{className:"footer__year"},"© 2021"),n.createElement("a",{href:"https://rs.school/js/",target:"_blank",rel:"noreferrer"},n.createElement("img",{className:"rss__logo",src:"assets/images/rs_school_js.svg",alt:"The Rolling Scopes"})))},T=function(e){var t=e.avatar,a=e.name,r=e.capital,c=e.population,l=e.area,o=e.region,s=e.currency,i=e.flag,m=e.languages,u=e.lang,d={capital:{ru:"Столица",en:"Capital",de:"Hauptstadt"},area:{ru:"Территория",en:"Area",de:"Bereich"},population:{ru:"Население",en:"Population",de:"Population"},region:{ru:"Расположение",en:"Region",de:"Region"},flag:{ru:"Государственный флаг",en:"State flag",de:"Staatsflagge"},currency:{ru:"Валюта",en:"Currency",de:"Währung"},lang:{ru:"Государственный язык",en:"Official language",de:"Staatssprache"}};return n.createElement("div",{className:"country-info"},n.createElement("div",{className:"country-info__name"},a),n.createElement("img",{className:"country-info__avatar",src:t,alt:"avatar-".concat(a)}),n.createElement("div",{className:"country-info__summary"},n.createElement("div",{className:"country-info__summary__item"},n.createElement("span",{className:"country-info__summary__label"},d.capital[u]),n.createElement("span",{className:"country-info__summary__text"},r)),n.createElement("div",{className:"country-info__summary__item"},n.createElement("span",{className:"country-info__summary__label"},d.area[u]),n.createElement("span",{className:"country-info__summary__text"},l)),n.createElement("div",{className:"country-info__summary__item"},n.createElement("span",{className:"country-info__summary__label"},d.population[u]),n.createElement("span",{className:"country-info__summary__text"},c)),n.createElement("div",{className:"country-info__summary__item"},n.createElement("span",{className:"country-info__summary__label"},d.region[u]),n.createElement("span",{className:"country-info__summary__text"},o)),n.createElement("div",{className:"country-info__summary__item"},n.createElement("span",{className:"country-info__summary__label"},d.flag[u]),n.createElement("img",{className:"country-info__summary__flag",src:i,alt:"flag"})),n.createElement("div",{className:"country-info__summary__item"},n.createElement("span",{className:"country-info__summary__label"},d.currency[u]),n.createElement("span",{className:"country-info__summary__currency"},s)),n.createElement("div",{className:"country-info__summary__item"},n.createElement("span",{className:"country-info__summary__label"},d.lang[u]),m.map((function(e,t){return n.createElement("span",{key:t,className:"country-info__summary__text"},e)})))))};var B=a(2122),W=a(6066);function A(e){var t=e.image,a=e.title,r=e.description,c=e.location,l=e.onSlideClick,o=e.tooltip;return n.createElement("div",{className:"slider-box__item"},n.createElement("div",{className:"slide",onClick:l,title:o},n.createElement("img",{className:"slider-box__item__img",src:t,alt:a}),n.createElement("div",{className:"slider-box__item__caption"},n.createElement("span",{className:"slider-box__item__title"},a),n.createElement("span",{className:"slider-box__item__desc"},r),n.createElement("span",{className:"slider-box__item__location"},c))))}var F=a(366);function O(e){var t=(0,n.useState)(!1),a=(0,c.Z)(t,2),r=a[0],l=a[1],o=(0,n.useRef)(null),s=e.slides;function i(e){l(e)}var m={customPaging:function(e){return n.createElement("a",null,n.createElement("img",{src:s[e].image,alt:s[e].title}))},dotsClass:"slick-dots",autoplay:!0,autoplaySpeed:5e3,dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,pauseOnHover:!0,fade:!0};return U("ArrowRight",(function(){var e;r&&(null===(e=o.current)||void 0===e||e.slickNext())})),U("ArrowLeft",(function(){var e;r&&(null===(e=o.current)||void 0===e||e.slickPrev())})),U("Escape",(function(){r&&i(!1)})),n.createElement("div",{className:"slider-box ".concat(r?"slider-box__fullscreen":"")},n.createElement("button",{className:"btn-fullscreen",title:"Закрыть режим просмотра",onClick:function(){i(!1)}},n.createElement(F.Z,null)),n.createElement(W.Z,(0,B.Z)({ref:o},m),s.map((function(e,t){return n.createElement(A,{key:t,image:e.image,title:e.title,description:e.description,location:e.location,tooltip:r?"":"Нажмите для увеличения изображения",onSlideClick:function(){i(!0)}})}))))}function U(e,t){var a=(0,n.useRef)(t);(0,n.useEffect)((function(){a.current=t})),(0,n.useEffect)((function(){function t(t){t.code===e&&a.current(t)}return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[e])}var I=a(6584),H=a(795),J=a(7409),z=a(7651),K=a(2471),q=a(7118),V=a(6977);function G(e){var t=(0,n.useState)(!1),a=(0,c.Z)(t,2),r=a[0],l=a[1],o=e.location,s=e.lang,i=e.coordinates,m=e.typePolygon,u=e.capital,d=e.country,p=(0,n.useRef)(),f={geometry:{coordinates:i,type:"".concat(m)},properties:{name:d},type:"Feature"},E=n.createElement(I.I,{updateInterval:20,attribution:'<a href=\\"https://www.jawg.io\\" target=\\"_blank\\">© Jawg</a> - <a href=\\"https://www.openstreetmap.org\\" target=\\"_blank\\">© OpenStreetMap</a> contributors',url:"https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?lang=".concat(s,"&access-token=hjwgVWeFpBZKCpiJuubyxLQTlfaKby0nFconlrJRUxRilidPFenqyUvzELqTeEjR")});return n.createElement("div",{className:"map-wrapper ".concat(r?"fullscreen-map":"")},n.createElement("button",{className:"fullscreen-button",onClick:function(){l(!r),setTimeout((function(){var e;null===(e=p.current)||void 0===e||e.invalidateSize(!0)}),0)}},r?n.createElement(V.Z,null):n.createElement(q.Z,null)),n.createElement(H.h,{whenCreated:function(e){p.current=e},className:"map-content",center:o,minZoom:2,zoom:5,maxBounds:[[-89.98155760646617,-180],[89.99346179538875,180]],maxBoundsViscosity:1},E,n.createElement(J.J,{position:o},n.createElement(z.u,{className:"tooltip"},"".concat(function(e){switch(e){case"ru":return"Столица";case"en":return"Capital";case"de":return"Hauptstadt";default:return"Столица"}}(s),":").concat(u))),n.createElement(K.Q,{data:f,style:{color:"#30BD1D",weight:4}},n.createElement(z.u,{className:"tooltip"},d))))}a(2772),a(1467);var Q=a(2004);function Y(e){var t={url:e.url,className:"video-player",controls:!0,width:"100%",height:"100%"};return n.createElement("div",{className:"player-wrapper"},n.createElement(Q.Z,t))}var X=a(2614),$=a(8165),ee=a(8943),te=a(4059),ae=a(7395),ne=a(5477);function re(e){var t=(0,n.useState)(!1),a=(0,c.Z)(t,2),r=a[0],l=a[1],o=(0,n.useState)(!0),s=(0,c.Z)(o,2),i=s[0],m=s[1],u=(0,n.useState)({temp:0,icon:"",timeOfDay:"",stateWeather:"",wind:"",humidity:"",sunrise:0,sunset:0}),d=(0,c.Z)(u,2),p=d[0],f=d[1],E=e.capital,g=e.lang,h=e.timeZone,_={wind:{ru:"Ветер",en:"Wind",de:"Wind"},humidity:{ru:"Влажность",en:"Humidity",de:"Feuchtigkeit"},sunrise:{ru:"Рассвет",en:"Sunrise",de:"Dämmerung"},sunset:{ru:"Закат",en:"Sunset",de:"Sonnenuntergang"},speed:{ru:"м/с",en:"m/s",de:"m/s"}};return(0,n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(E,"&units=metric&appid=bfe77b66bdbd401c7b6a4210e7a8f5b2&lang=").concat(g)).then((function(e){return e.json()})).then((function(e){f({temp:Math.round(e.main.temp),icon:e.weather[0].id,timeOfDay:e.weather[0].icon.slice(-1),stateWeather:e.weather[0].description[0].toUpperCase()+e.weather[0].description.slice(1),wind:e.wind.speed,humidity:e.main.humidity,sunrise:1e3*e.sys.sunrise,sunset:1e3*e.sys.sunset}),l(!0)}),(function(e){console.log(e)}))}),[E,g,h]),n.createElement("div",{className:"weather-wrapper"},r?n.createElement("div",{className:"weather-box"},n.createElement(ae.Z,{onChange:function(){m(!i)}}),n.createElement("div",{className:"weather-info"},n.createElement("i",{className:"owf owf-".concat(p.icon,"-").concat(p.timeOfDay," weather-info__icon")}),n.createElement("div",{className:"weather-info__degree"},n.createElement("span",{className:"degree"},i?p.temp:Math.round(1.8*p.temp+32)),n.createElement("span",{className:"units"},i?"℃":"℉")),n.createElement("div",{className:"weather-info__description"},n.createElement("span",{className:"country"},E),n.createElement("span",{className:"state"},p.stateWeather))),n.createElement("div",{className:"weather-indicators"},n.createElement("div",{className:"weather-indicators__item"},n.createElement("span",{className:"caption-indicator"},_.wind[g]),n.createElement("div",{className:"indicator-wrapper"},n.createElement(X.Z,null),n.createElement("span",{className:"indicator"},"".concat(p.wind," ").concat(_.speed[g])))),n.createElement("div",{className:"weather-indicators__item"},n.createElement("span",{className:"caption-indicator"},_.humidity[g]),n.createElement("div",{className:"indicator-wrapper"},n.createElement($.Z,null),n.createElement("span",{className:"indicator"},"".concat(p.humidity," %")))),n.createElement("div",{className:"weather-indicators__item"},n.createElement("span",{className:"caption-indicator"},_.sunrise[g]),n.createElement("div",{className:"indicator-wrapper"},n.createElement(ee.Z,null),n.createElement("span",{className:"indicator"},new Date(p.sunrise).toLocaleTimeString(g,{timeZone:"".concat(h),hour:"numeric",minute:"numeric"})))),n.createElement("div",{className:"weather-indicators__item"},n.createElement("span",{className:"caption-indicator"},_.sunset[g]),n.createElement("div",{className:"indicator-wrapper"},n.createElement(te.Z,null),n.createElement("span",{className:"indicator"},new Date(p.sunset).toLocaleTimeString(g,{timeZone:"".concat(h),hour:"numeric",minute:"numeric"})))))):n.createElement(ne.Z,null))}function ce(e){var t=e.lang,a=e.timeZone,r=(0,n.useState)(Date.now()),l=(0,c.Z)(r,2),o=l[0],s=l[1];return(0,n.useEffect)((function(){var e=setInterval((function(){s(Date.now())}),1e3);return function(){clearInterval(e)}}),[t]),n.createElement("div",{className:"time-wrapper"},n.createElement("span",{className:"time"},new Date(o).toLocaleTimeString(t,{timeZone:"".concat(a)})),n.createElement("span",{className:"date"},new Date(o).toLocaleDateString(t,{timeZone:"".concat(a),year:"numeric",month:"long",day:"numeric",weekday:"long"})))}const le=a.p+"assets/images/euro.png",oe=a.p+"assets/images/dollar.png",se=a.p+"assets/images/ruble.png";function ie(e){var t=(0,n.useState)(!1),a=(0,c.Z)(t,2),r=a[0],l=a[1],o=(0,n.useState)(),s=(0,c.Z)(o,2),i=s[0],m=s[1],u=e.currency,d=e.lang,p={euro:{ru:"1 Евро",en:"1 Euro",de:"1 Euro"},usd:{ru:"1 Доллар",en:"1 Dollar",de:"1 Dollar"},rub:{ru:"1 Российский рубль",en:"1 Russian ruble",de:"1 Russischer Rubel"}};return(0,n.useEffect)((function(){fetch("https://free.currconv.com/api/v7/convert?q=USD_".concat(u,",EUR_").concat(u,"&apiKey=3cc85b7273ede806a604")).then((function(e){return e.json()})).then((function(e){fetch("https://free.currconv.com/api/v7/convert?q=RUB_".concat(u,"&apiKey=3cc85b7273ede806a604")).then((function(e){return e.json()})).then((function(t){m({usb:+e.results["USD_"+u].val.toFixed(2),euro:+e.results["EUR_"+u].val.toFixed(2),ruble:+t.results["RUB_"+u].val.toFixed(2)}),l(!0)}),(function(e){console.log(e)}))}),(function(e){console.log(e)}))}),[u]),n.createElement("div",{className:"currency-box"},r?n.createElement(n.Fragment,null,n.createElement("div",{className:"currency-captions"},n.createElement("div",{className:"currency-item"},n.createElement("img",{className:"currency-icon",src:le,alt:"euro"}),n.createElement("span",{className:"currency-point"},p.euro[d])),n.createElement("div",{className:"currency-item"},n.createElement("img",{className:"currency-icon",src:oe,alt:"dollar"}),n.createElement("span",{className:"currency-point"},p.usd[d])),n.createElement("div",{className:"currency-item"},n.createElement("img",{className:"currency-icon",src:se,alt:"ruble"}),n.createElement("span",{className:"currency-point"},p.rub[d]))),n.createElement("div",{className:"currency-numbers"},n.createElement("div",{className:"currency-item"},n.createElement("span",{className:"currency-point"},"".concat(null==i?void 0:i.euro," ").concat(u))),n.createElement("div",{className:"currency-item"},n.createElement("span",{className:"currency-point"},"".concat(null==i?void 0:i.usb," ").concat(u))),n.createElement("div",{className:"currency-item"},n.createElement("span",{className:"currency-point"},"".concat(null==i?void 0:i.ruble," ").concat(u))))):n.createElement(ne.Z,null))}function me(e){var t=e.path,a=e.lang,r=e.capital,l=e.country,o=e.currency,s=[],i={coordinates:[[]],location:[0,0]},m=(0,n.useState)(s),u=(0,c.Z)(m,2),d=u[0],p=u[1],f=(0,n.useState)(i),E=(0,c.Z)(f,2),g=E[0],h=E[1],_=(0,n.useState)(""),y=(0,c.Z)(_,2),v=y[0],N=y[1],b=(0,n.useState)(!1),w=(0,c.Z)(b,2),Z=w[0],S=w[1],k=(0,n.useState)(!1),x=(0,c.Z)(k,2),L=x[0],C=x[1],R={Belarus:"Europe/Minsk",Brazil:"America/Sao_Paulo",England:"Europe/London",Japan:"Asia/Tokyo",Netherlands:"Europe/Minsk",Peru:"Europe/Minsk",Poland:"Europe/Warsaw",Russia:"Europe/Moscow",USA:"America/New_York"},j={time:{ru:"Текущее время в стране",en:"Current time in the country",de:"Aktuelle Zeit im Land"},weather:{ru:"Погода в стране",en:"Country weather",de:"Landwetter"},photo:{ru:"Фотогалерея",en:"Photo gallery",de:"Fotogallerie"},video:{ru:"Видео о стране",en:"Country video",de:"Ländervideo"},map:{ru:"Карта",en:"Map",de:"Karte"},currency:{ru:"Курс валют по отношению к",en:"Exchange rate in relation to",de:"Wechselkurs in Bezug auf"}};return(0,n.useEffect)((function(){fetch("".concat("https://nameless-citadel-16403.herokuapp.com/places","/").concat(t)).then((function(e){return e.json()})).then((function(e){e[0].places.map((function(e){var t={image:e.img,title:e.name[a],description:e.info[a]};s.push(t)})),p(s),N(e[0].videoUrl),S(!0)})).catch((function(e){return console.log(e.message)}))}),[a,t]),(0,n.useEffect)((function(){fetch("".concat("https://nameless-citadel-16403.herokuapp.com/coordinates","/").concat(t)).then((function(e){return e.json()})).then((function(e){i.coordinates=e[0].coordinates,i.location=e[0].location,h(i),C(!0)})).catch((function(e){return console.log(e.message)}))}),[a,t]),n.createElement("div",{className:"country-content"},n.createElement(ue,{title:j.time[a]}),n.createElement(ce,{lang:a,timeZone:R[t]}),n.createElement(ue,{title:j.weather[a]}),n.createElement(re,{capital:r,lang:a,timeZone:R[t]}),n.createElement(ue,{title:"".concat(j.currency[a]," ").concat(o)}),n.createElement(ie,{currency:o,lang:a}),Z?n.createElement(n.Fragment,null,n.createElement(ue,{title:j.photo[a]}),n.createElement(O,{slides:d}),n.createElement(ue,{title:j.video[a]}),n.createElement(Y,{url:v})):n.createElement("div",{className:"countries-container countries-container--onload"},n.createElement(ne.Z,null)),L?n.createElement(n.Fragment,null,n.createElement(ue,{title:j.map[a]}),n.createElement(G,{location:g.location,coordinates:g.coordinates,lang:a,capital:r,country:l,typePolygon:"Belarus"===t||"Poland"===t?"Polygon":"MultiPolygon"})):n.createElement("div",{className:"countries-container countries-container--onload"},n.createElement(ne.Z,null)))}function ue(e){return n.createElement("div",{className:"content-caption"},n.createElement("h1",null,e.title))}const de=function(e){var t=e.country,a=t.avatar,r=t.name,c=t.capital,l=t.population,o=t.area,s=t.region,i=t.currency,m=t.flag,u=t.languages,d=t.path,p=e.lang,f="".concat(p,"-").concat(p.toUpperCase()),E={areaM:{ru:"км².",en:"km².",de:"km²."},populationM:{ru:"чел.",en:"ppl.",de:"mnsch."}},g=u[0];return n.createElement("div",{className:"country-container"},n.createElement(T,{avatar:a,name:r[p],capital:c[p],area:"".concat(o.toLocaleString(f)," ").concat(E.areaM[p]),population:"".concat(l.toLocaleString(f)," ").concat(E.populationM[p]),region:s[p],currency:i,flag:m,languages:g[p],lang:p}),n.createElement(me,{path:d,lang:p,capital:c[p],country:r[p],currency:i}))},pe=function(){var e,t=(0,n.useState)((e=localStorage.getItem("language")||null)?JSON.parse(e):"ru"),a=(0,c.Z)(t,2),r=a[0],l=a[1],o=(0,n.useState)(""),s=(0,c.Z)(o,2),i=s[0],m=s[1],u=n.createRef(),d=(0,n.useState)([]),p=(0,c.Z)(d,2),f=p[0],E=p[1],g=(0,n.useState)(!1),h=(0,c.Z)(g,2),_=h[0],y=h[1];return(0,n.useEffect)((function(){fetch("https://nameless-citadel-16403.herokuapp.com/countries").then((function(e){return e.json()})).then((function(e){E(e),y(!0)})).catch((function(e){return console.log(e.message)}))}),[]),(0,n.useEffect)((function(){var e,t=null===(e=u.current)||void 0===e?void 0:e.children;if(t){var a=Array.from(t);a.map((function(e){return e.classList.remove("hidden")})),a.filter((function(e){var t=Array.from(e.children)[0],a=Array.from(t.children)[0],n=Array.from(a.children),r=Array.from(n[1].children),c=r[0].innerHTML.toLowerCase(),l=r[1].innerHTML.toLowerCase();return!(c.includes(i.toLowerCase())||l.includes(i.toLowerCase()))})).map((function(e){return e.classList.add("hidden")}))}}),[i,u]),n.createElement(w.UT,null,n.createElement(S,{lang:r,setLang:l,search:i,setSearch:m}),n.createElement("main",{className:"main"},_?n.createElement(Z.rs,null,n.createElement(Z.AW,{exact:!0,path:"/"},n.createElement(P,{lang:r,ref:u,data:f})),f.map((function(e,t){return n.createElement(Z.AW,{key:t,path:"/".concat(e.path)},n.createElement(de,{country:e,lang:r}))}))):n.createElement("div",{className:"countries-container countries-container--onload"},n.createElement(ne.Z,null))),n.createElement(M,null))};r.render(n.createElement(pe,null),document.getElementById("root"))},6277:()=>{}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={179:0},t=[[5683,817],[6277,817]],n=e=>{},r=(r,c)=>{for(var l,o,[s,i,m,u]=c,d=0,p=[];d<s.length;d++)o=s[d],a.o(e,o)&&e[o]&&p.push(e[o][0]),e[o]=0;for(l in i)a.o(i,l)&&(a.m[l]=i[l]);for(m&&m(a),r&&r(c);p.length;)p.shift()();return u&&t.push.apply(t,u),n()},c=self.webpackChunktravel_app=self.webpackChunktravel_app||[];function l(){for(var n,r=0;r<t.length;r++){for(var c=t[r],l=!0,o=1;o<c.length;o++){var s=c[o];0!==e[s]&&(l=!1)}l&&(t.splice(r--,1),n=a(a.s=c[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),n}c.forEach(r.bind(null,0)),c.push=r.bind(null,c.push.bind(c));var o=a.x;a.x=()=>(a.x=o||(e=>{}),(n=l)())})(),a.x()})();