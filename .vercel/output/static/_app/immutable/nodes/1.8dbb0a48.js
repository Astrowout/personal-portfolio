import{S as q,i as C,s as H,k as d,q as y,a as j,l as _,m as x,r as b,h as f,c as k,n as v,b as D,G as c,u as I,H as S,I as G}from"../chunks/index.5f847bdc.js";import{p as N}from"../chunks/stores.c5d1d5f1.js";function O(i){var g;let t,e,s,n=i[0].status+"",u,p,o,m=((g=i[0].error)==null?void 0:g.message)+"",h;return{c(){t=d("section"),e=d("div"),s=d("h1"),u=y(n),p=j(),o=d("p"),h=y(m),this.h()},l(a){t=_(a,"SECTION",{class:!0});var r=x(t);e=_(r,"DIV",{class:!0});var l=x(e);s=_(l,"H1",{class:!0});var $=x(s);u=b($,n),$.forEach(f),p=k(l),o=_(l,"P",{class:!0});var E=x(o);h=b(E,m),E.forEach(f),l.forEach(f),r.forEach(f),this.h()},h(){v(s,"class","text-4xl sm:text-5xl u-font-display text-slate-900"),v(o,"class","text-xl text-slate-400"),v(e,"class","u-container-sm flex flex-col gap-y-1 justify-center items-center"),v(t,"class","u-space-x u-space-y h-full")},m(a,r){D(a,t,r),c(t,e),c(e,s),c(s,u),c(e,p),c(e,o),c(o,h)},p(a,[r]){var l;r&1&&n!==(n=a[0].status+"")&&I(u,n),r&1&&m!==(m=((l=a[0].error)==null?void 0:l.message)+"")&&I(h,m)},i:S,o:S,d(a){a&&f(t)}}}function P(i,t,e){let s;return G(i,N,p=>e(0,s=p)),[s,null,null]}class w extends q{constructor(t){super(),C(this,t,P,O,H,{data:1,form:2})}get data(){return this.$$.ctx[1]}get form(){return this.$$.ctx[2]}}export{w as component};
