(this["webpackJsonpcrab-home-v2"]=this["webpackJsonpcrab-home-v2"]||[]).push([[3],{28:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return m}));var o=n(0),a=n(1),c=n(2);function r(e){const t=Object(o.lazy)((()=>e));return()=>Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)("div",{}),children:Object(c.jsx)(t,{})})}const i=r(Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,1012))),s=r(Promise.all([n.e(7),n.e(12)]).then(n.bind(null,1006))),d=r(Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,995))),l=r(n.e(10).then(n.bind(null,1e3))),u=r(n.e(13).then(n.bind(null,972))),f=r(Promise.all([n.e(0),n.e(2),n.e(1),n.e(5),n.e(8)]).then(n.bind(null,997))),p="/crab-home-v1";function m(){return Object(c.jsxs)(a.c,{children:[Object(c.jsx)(a.a,{exact:!0,component:i,path:`${p}/`}),Object(c.jsx)(a.a,{exact:!0,component:s,path:`${p}/economic`}),Object(c.jsx)(a.a,{exact:!0,component:d,path:`${p}/plo`}),Object(c.jsx)(a.a,{exact:!0,component:l,path:`${p}/grants`}),Object(c.jsx)(a.a,{exact:!0,component:f,path:`${p}/plo_contribute`}),Object(c.jsx)(a.a,{component:u})]})}},47:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},74:function(e,t){},75:function(e,t){function n(){const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"}document.querySelectorAll(".modal").forEach((function(e){e.addEventListener("show.bs.modal",(function(){n()})),e.addEventListener("hidden.bs.modal",(function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}))}))},76:function(e,t){const n=document.querySelectorAll(".navbar-togglable"),o=document.querySelectorAll(".navbar-collapse"),a=["load","scroll"];let c=!1;function r(e){const t=window.pageYOffset;t&&!c&&function(e){e.classList.remove("navbar-dark"),e.classList.add("navbar-light"),e.classList.add("bg-white"),c=!0}(e),t||function(e){e.classList.remove("navbar-light"),e.classList.remove("bg-white"),e.classList.add("navbar-dark"),c=!1}(e)}function i(){const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"}n.forEach((function(e){a.forEach((function(t){window.addEventListener(t,(function(){r(e)}))}))})),o.forEach((function(e){e.addEventListener("show.bs.collapse",(function(){i()})),e.addEventListener("hidden.bs.collapse",(function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}))}))},77:function(e,t){const n=document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropend"),o=["mouseenter"],a=["mouseleave","click"];n.forEach((function(e){const t=e.querySelector(".dropdown-menu");o.forEach((function(n){e.addEventListener(n,(function(){!function(e){window.innerWidth<992||(e.classList.add("showing"),setTimeout((function(){e.classList.remove("showing"),e.classList.add("show")}),1))}(t)}))})),a.forEach((function(n){e.addEventListener(n,(function(e){!function(e,t){setTimeout((function(){window.innerWidth<992||t.classList.contains("show")&&("click"===e.type&&e.target.closest(".dropdown-menu form")||(t.classList.add("showing"),t.classList.remove("show"),setTimeout((function(){t.classList.remove("showing")}),200)))}),2)}(e,t)}))}))}))},80:function(e,t){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);n(0);var o=n(27),a=n.n(o),c=(n(47),n(18)),r=n(30),i=n.n(r),s=n(28),d=(n(53),n(54),n(10)),l=(n(14),n(65),n(66),n(67),n(33));n.n(l).a.init({duration:700,easing:"ease-out-quad",once:!0,startEvent:"load"});var u=n(34),f=n.n(u);document.querySelectorAll("[data-bigpicture]").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const n=JSON.parse(e.dataset.bigpicture),o={...{el:e,noLoader:!0},...n};f()(o)}))}));var p=n(35),m=n.n(p);document.querySelectorAll("[data-choices]").forEach((e=>{const t={...e.dataset.choices?JSON.parse(e.dataset.choices):{},...{shouldSort:!1,searchEnabled:!1,classNames:{containerInner:e.className,input:"form-control",inputCloned:"form-control-xs",listDropdown:"dropdown-menu",itemChoice:"dropdown-item",activeState:"show",selectedState:"active"}}};new m.a(e,t)}));var h=n(11);function v(e){const t=e.dataset.to?+e.dataset.to:null,n=e.dataset.countup?JSON.parse(e.dataset.countup):{};new h.a(e,t,n).start()}document.querySelectorAll("[data-countup]").forEach((e=>{"countup:in"!==e.getAttribute("data-aos-id")&&v(e)})),document.addEventListener("aos:in:countup:in",(function(e){(e.detail instanceof Element?[e.detail]:document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)')).forEach((e=>{v(e)}))}));var b=n(12),w=n.n(b);w.a.autoDiscover=!1,w.a.thumbnailWidth=null,w.a.thumbnailHeight=null;document.querySelectorAll("[data-dropzone]").forEach((e=>{let t;const n=e.dataset.dropzone?JSON.parse(e.dataset.dropzone):{},o={previewsContainer:e.querySelector(".dz-preview"),previewTemplate:e.querySelector(".dz-preview").innerHTML,init:function(){this.on("addedfile",(function(e){1===n.maxFiles&&t&&this.removeFile(t),t=e}))}},a={...n,...o};e.querySelector(".dz-preview").innerHTML="",new w.a(e,a)}));var g=n(17),y=n.n(g),S=n(36),E=n.n(S),j=n(37),L=n.n(j);const q=document.querySelectorAll(".highlight");y.a.registerLanguage("xml",E.a),y.a.registerLanguage("javascript",L.a),q.forEach((e=>{y.a.highlightBlock(e)}));var x=n(25),O=n.n(x),A=n(22),k=n.n(A);const N=document.querySelectorAll("[data-isotope]"),J=document.querySelectorAll("[data-filter]");N.forEach((function(e){k()(e,(function(){const t=JSON.parse(e.dataset.isotope);new O.a(e,t)}))})),J.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const n=e.dataset.filter,o=e.dataset.bsTarget;O.a.data(o).arrange({filter:n})}))}));n(74),n(75),n(76),n(77);document.querySelectorAll('[data-bs-toggle="popover"]').forEach((e=>{new d.a(e)}));const z=document.querySelectorAll('[data-toggle="price"]');z.forEach((e=>{e.addEventListener("change",(e=>{const t=e.target,n=t.checked,o=t.dataset.target;document.querySelectorAll(o).forEach((e=>{const t=e.dataset.annual,o=e.dataset.monthly,a=e.dataset.options?JSON.parse(e.dataset.options):{};a.startVal=n?t:o,a.duration=a.duration?a.duration:1;(n?new h.a(e,o,a):new h.a(e,t,a)).start()}))}))}));var T=n(38),W=n.n(T);document.querySelectorAll("[data-quill]").forEach((e=>{const t={...e.dataset.quill?JSON.parse(e.dataset.quill):{},modules:{toolbar:[["bold","italic"],["link","blockquote","code","image"],[{list:"ordered"},{list:"bullet"}]]},theme:"snow"};new W.a(e,t)}));var D=n(39);const R={header:".navbar.fixed-top",offset:function(e,t){return t.dataset.scroll&&void 0!==JSON.parse(t.dataset.scroll).offset?JSON.parse(t.dataset.scroll).offset:24}};new(n.n(D).a)("[data-scroll]",R);document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e=>{new d.b(e)}));var $=n(40),P=n.n($);document.querySelectorAll("[data-typed]").forEach((e=>{const t={typeSpeed:40,backSpeed:40,backDelay:1e3,loop:!0,...e.dataset.typed?JSON.parse(e.dataset.typed):{}};new P.a(e,t)}));n(80),n(81);var C=n(2);i.a.config({FORMAT:{prefix:"",decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0,suffix:""}});var F=function(){return Object(C.jsx)(c.a,{children:Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(s.a,{})})})};a.a.render(Object(C.jsx)(F,{}),document.getElementById("root"))}},[[82,4,6]]]);
//# sourceMappingURL=main.72370d19.chunk.js.map