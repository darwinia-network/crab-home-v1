(this["webpackJsonpcrab-home-v2"]=this["webpackJsonpcrab-home-v2"]||[]).push([[3],{46:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},73:function(e,t){},74:function(e,t){function n(){const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"}document.querySelectorAll(".modal").forEach((function(e){e.addEventListener("show.bs.modal",(function(){n()})),e.addEventListener("hidden.bs.modal",(function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}))}))},75:function(e,t){const n=document.querySelectorAll(".navbar-togglable"),o=document.querySelectorAll(".navbar-collapse"),a=["load","scroll"];let c=!1;function r(e){const t=window.pageYOffset;t&&!c&&function(e){e.classList.remove("navbar-dark"),e.classList.add("navbar-light"),e.classList.add("bg-white"),c=!0}(e),t||function(e){e.classList.remove("navbar-light"),e.classList.remove("bg-white"),e.classList.add("navbar-dark"),c=!1}(e)}function i(){const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"}n.forEach((function(e){a.forEach((function(t){window.addEventListener(t,(function(){r(e)}))}))})),o.forEach((function(e){e.addEventListener("show.bs.collapse",(function(){i()})),e.addEventListener("hidden.bs.collapse",(function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}))}))},76:function(e,t){const n=document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropend"),o=["mouseenter"],a=["mouseleave","click"];n.forEach((function(e){const t=e.querySelector(".dropdown-menu");o.forEach((function(n){e.addEventListener(n,(function(){!function(e){window.innerWidth<992||(e.classList.add("showing"),setTimeout((function(){e.classList.remove("showing"),e.classList.add("show")}),1))}(t)}))})),a.forEach((function(n){e.addEventListener(n,(function(e){!function(e,t){setTimeout((function(){window.innerWidth<992||t.classList.contains("show")&&("click"===e.type&&e.target.closest(".dropdown-menu form")||(t.classList.add("showing"),t.classList.remove("show"),setTimeout((function(){t.classList.remove("showing")}),200)))}),2)}(e,t)}))}))}))},79:function(e,t){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(27),c=n.n(a),r=(n(46),n(18)),i=n(29),s=n.n(i),d=n(1),l=n(2);function u(e){const t=Object(o.lazy)((()=>e));return()=>Object(l.jsx)(o.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(t,{})})}const f=u(Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,1011))),p=u(Promise.all([n.e(7),n.e(12)]).then(n.bind(null,1005))),m=u(Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,994))),h=u(n.e(10).then(n.bind(null,999))),v=u(n.e(13).then(n.bind(null,971))),b=u(Promise.all([n.e(0),n.e(2),n.e(1),n.e(5),n.e(8)]).then(n.bind(null,996))),w="/crab-home-v1";function g(){return Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,component:f,path:`${w}/`}),Object(l.jsx)(d.a,{exact:!0,component:p,path:`${w}/economic`}),Object(l.jsx)(d.a,{exact:!0,component:m,path:`${w}/plo`}),Object(l.jsx)(d.a,{exact:!0,component:h,path:`${w}/grants`}),Object(l.jsx)(d.a,{exact:!0,component:b,path:`${w}/plo_contribute`}),Object(l.jsx)(d.a,{component:v})]})}n(52),n(53);var y=n(10),S=(n(14),n(64),n(65),n(66),n(32));n.n(S).a.init({duration:700,easing:"ease-out-quad",once:!0,startEvent:"load"});var E=n(33),j=n.n(E);document.querySelectorAll("[data-bigpicture]").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const n=JSON.parse(e.dataset.bigpicture),o={...{el:e,noLoader:!0},...n};j()(o)}))}));var L=n(34),q=n.n(L);document.querySelectorAll("[data-choices]").forEach((e=>{const t={...e.dataset.choices?JSON.parse(e.dataset.choices):{},...{shouldSort:!1,searchEnabled:!1,classNames:{containerInner:e.className,input:"form-control",inputCloned:"form-control-xs",listDropdown:"dropdown-menu",itemChoice:"dropdown-item",activeState:"show",selectedState:"active"}}};new q.a(e,t)}));var x=n(11);function O(e){const t=e.dataset.to?+e.dataset.to:null,n=e.dataset.countup?JSON.parse(e.dataset.countup):{};new x.a(e,t,n).start()}document.querySelectorAll("[data-countup]").forEach((e=>{"countup:in"!==e.getAttribute("data-aos-id")&&O(e)})),document.addEventListener("aos:in:countup:in",(function(e){(e.detail instanceof Element?[e.detail]:document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)')).forEach((e=>{O(e)}))}));var A=n(12),k=n.n(A);k.a.autoDiscover=!1,k.a.thumbnailWidth=null,k.a.thumbnailHeight=null;document.querySelectorAll("[data-dropzone]").forEach((e=>{let t;const n=e.dataset.dropzone?JSON.parse(e.dataset.dropzone):{},o={previewsContainer:e.querySelector(".dz-preview"),previewTemplate:e.querySelector(".dz-preview").innerHTML,init:function(){this.on("addedfile",(function(e){1===n.maxFiles&&t&&this.removeFile(t),t=e}))}},a={...n,...o};e.querySelector(".dz-preview").innerHTML="",new k.a(e,a)}));var N=n(17),J=n.n(N),z=n(35),T=n.n(z),W=n(36),D=n.n(W);const R=document.querySelectorAll(".highlight");J.a.registerLanguage("xml",T.a),J.a.registerLanguage("javascript",D.a),R.forEach((e=>{J.a.highlightBlock(e)}));var $=n(25),P=n.n($),C=n(22),F=n.n(C);const G=document.querySelectorAll("[data-isotope]"),H=document.querySelectorAll("[data-filter]");G.forEach((function(e){F()(e,(function(){const t=JSON.parse(e.dataset.isotope);new P.a(e,t)}))})),H.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const n=e.dataset.filter,o=e.dataset.bsTarget;P.a.data(o).arrange({filter:n})}))}));n(73),n(74),n(75),n(76);document.querySelectorAll('[data-bs-toggle="popover"]').forEach((e=>{new y.a(e)}));const M=document.querySelectorAll('[data-toggle="price"]');M.forEach((e=>{e.addEventListener("change",(e=>{const t=e.target,n=t.checked,o=t.dataset.target;document.querySelectorAll(o).forEach((e=>{const t=e.dataset.annual,o=e.dataset.monthly,a=e.dataset.options?JSON.parse(e.dataset.options):{};a.startVal=n?t:o,a.duration=a.duration?a.duration:1;(n?new x.a(e,o,a):new x.a(e,t,a)).start()}))}))}));var B=n(37),I=n.n(B);document.querySelectorAll("[data-quill]").forEach((e=>{const t={...e.dataset.quill?JSON.parse(e.dataset.quill):{},modules:{toolbar:[["bold","italic"],["link","blockquote","code","image"],[{list:"ordered"},{list:"bullet"}]]},theme:"snow"};new I.a(e,t)}));var V=n(38);const Y={header:".navbar.fixed-top",offset:function(e,t){return t.dataset.scroll&&void 0!==JSON.parse(t.dataset.scroll).offset?JSON.parse(t.dataset.scroll).offset:24}};new(n.n(V).a)("[data-scroll]",Y);document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e=>{new y.b(e)}));var _=n(39),K=n.n(_);document.querySelectorAll("[data-typed]").forEach((e=>{const t={typeSpeed:40,backSpeed:40,backDelay:1e3,loop:!0,...e.dataset.typed?JSON.parse(e.dataset.typed):{}};new K.a(e,t)}));n(79),n(80);s.a.config({FORMAT:{prefix:"",decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0,suffix:""}});var Q=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(g,{})})})};c.a.render(Object(l.jsx)(Q,{}),document.getElementById("root"))}},[[81,4,6]]]);
//# sourceMappingURL=main.2aba527c.chunk.js.map