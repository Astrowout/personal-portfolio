import{S as P,i as q,s as z,k as _,a as k,q as A,y as L,l as $,m as w,c as E,r as I,h as i,z as M,n as u,b as x,G as h,A as S,g as v,d as y,B as T,u as G,H as B,P as H,f as N,v as O}from"../chunks/index.5f847bdc.js";/* empty css                    */import{B as V}from"../chunks/Button.b43acb39.js";function F(a){let e,s;return{c(){e=_("h1"),s=A(a[0]),this.h()},l(t){e=$(t,"H1",{class:!0});var r=w(e);s=I(r,a[0]),r.forEach(i),this.h()},h(){u(e,"class","font-serif text-2xl md:text-3xl text-center text-stone-600")},m(t,r){x(t,e,r),h(e,s)},p(t,r){r&1&&G(s,t[0])},d(t){t&&i(e)}}}function Y(a){let e;return{c(){e=A("Access page")},l(s){e=I(s,"Access page")},m(s,t){x(s,e,t)},d(s){s&&i(e)}}}function j(a){let e,s,t,r,p,g,o,b,n,f,l=a[0]&&F(a);return n=new V({props:{type:"submit",class:"mt-4 z-10",$$slots:{default:[Y]},$$scope:{ctx:a}}}),{c(){e=_("div"),l&&l.c(),s=k(),t=_("form"),r=_("label"),p=A("Your password"),g=k(),o=_("input"),b=k(),L(n.$$.fragment),this.h()},l(c){e=$(c,"DIV",{class:!0});var m=w(e);l&&l.l(m),s=E(m),t=$(m,"FORM",{method:!0,class:!0});var d=w(t);r=$(d,"LABEL",{for:!0,class:!0});var D=w(r);p=I(D,"Your password"),D.forEach(i),g=E(d),o=$(d,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),b=E(d),M(n.$$.fragment,d),d.forEach(i),m.forEach(i),this.h()},h(){u(r,"for","password"),u(r,"class","sr-only"),u(o,"id","password"),u(o,"name","password"),u(o,"type","password"),u(o,"placeholder","My secret password"),u(o,"class","w-full rounded-xl px-4 py-2 text-xl border border-stone-300"),u(t,"method","POST"),u(t,"class","flex flex-col items-center w-full mt-8"),u(e,"class","w-full rounded-xl bg-stone-100 p-5 md:px-8 md:py-10 shadow-2xl shadow-black max-w-lg")},m(c,m){x(c,e,m),l&&l.m(e,null),h(e,s),h(e,t),h(t,r),h(r,p),h(t,g),h(t,o),h(t,b),S(n,t,null),f=!0},p(c,[m]){c[0]?l?l.p(c,m):(l=F(c),l.c(),l.m(e,s)):l&&(l.d(1),l=null);const d={};m&2&&(d.$$scope={dirty:m,ctx:c}),n.$set(d)},i(c){f||(v(n.$$.fragment,c),f=!0)},o(c){y(n.$$.fragment,c),f=!1},d(c){c&&i(e),l&&l.d(),T(n)}}}function C(a,e,s){let{title:t=""}=e;return a.$$set=r=>{"title"in r&&s(0,t=r.title)},[t]}class R extends P{constructor(e){super(),q(this,e,C,j,z,{title:0})}}function U(a){let e;return{c(){e=_("div"),this.h()},l(s){e=$(s,"DIV",{class:!0}),w(e).forEach(i),this.h()},h(){u(e,"class","columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4")},m(s,t){x(s,e,t)},p:B,i:B,o:B,d(s){s&&i(e)}}}class J extends P{constructor(e){super(),q(this,e,null,U,z,{})}}function K(a){let e,s;return e=new R({props:{title:"This page is private 🤫"}}),{c(){L(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){S(e,t,r),s=!0},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Q(a){let e,s;return e=new J({props:{$$slots:{default:[W]},$$scope:{ctx:a}}}),{c(){L(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){S(e,t,r),s=!0},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function W(a){let e;return{c(){e=A("test")},l(s){e=I(s,"test")},m(s,t){x(s,e,t)},d(s){s&&i(e)}}}function X(a){let e,s,t,r,p;const g=[Q,K],o=[];function b(n,f){var l;return(l=n[0])!=null&&l.success?0:1}return t=b(a),r=o[t]=g[t](a),{c(){e=k(),s=_("main"),r.c(),this.h()},l(n){H("svelte-1e2azqf",document.head).forEach(i),e=E(n),s=$(n,"MAIN",{class:!0});var l=w(s);r.l(l),l.forEach(i),this.h()},h(){document.title="Lifescroll",u(s,"class","bg-slate-950 w-full h-screen mx-auto max-w-screen-2xl p-4 flex items-center justify-center")},m(n,f){x(n,e,f),x(n,s,f),o[t].m(s,null),p=!0},p(n,[f]){let l=t;t=b(n),t!==l&&(O(),y(o[l],1,1,()=>{o[l]=null}),N(),r=o[t],r||(r=o[t]=g[t](n),r.c()),v(r,1),r.m(s,null))},i(n){p||(v(r),p=!0)},o(n){y(r),p=!1},d(n){n&&i(e),n&&i(s),o[t].d()}}}function Z(a,e,s){let{form:t}=e;return a.$$set=r=>{"form"in r&&s(0,t=r.form)},[t]}class re extends P{constructor(e){super(),q(this,e,Z,X,z,{form:0})}}export{re as component};
