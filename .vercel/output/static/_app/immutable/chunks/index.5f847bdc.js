function E(){}const U=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return t()}function it(){return Object.create(null)}function N(t){t.forEach(ot)}function D(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function Vt(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function wt(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Yt(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function Zt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function te(t,e,n,i,s,l){if(s){const r=ct(e,n,i,l);t.p(r,s)}}function ee(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ne(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ie(t){const e={};for(const n in t)e[n]=!0;return e}function se(t,e,n){return t.set(n),e}function re(t){return t&&D(t.destroy)?t.destroy:E}function oe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const lt=typeof window<"u";let V=lt?()=>window.performance.now():()=>Date.now(),X=lt?t=>requestAnimationFrame(t):E;const C=new Set;function at(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&X(at)}function Y(t){let e;return C.size===0&&X(at),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let I=!1;function vt(){I=!0}function kt(){I=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Et(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function At(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=_t("style");return jt(ut(t),e),e.sheet}function jt(t,e){return At(t.head||t,e),e.sheet}function Ct(t,e){if(I){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ce(t,e,n){I&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function ae(){return Z(" ")}function ue(){return Z("")}function fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Ot=["width","height"];function Dt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Ot.indexOf(i)===-1?t[i]=e[i]:dt(t,i,e[i])}function Tt(t,e){Object.keys(e).forEach(n=>{Pt(t,n,e[n])})}function Pt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:dt(t,e,n)}function _e(t){return/-/.test(t)?Tt:Dt}function Rt(t){return Array.from(t.childNodes)}function qt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,s=!1){qt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function mt(t,e,n,i){return ht(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function de(t,e,n){return mt(t,e,n,_t)}function he(t,e,n){return mt(t,e,n,Mt)}function Lt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function me(t){return Lt(t," ")}function pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function ye(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ge(t,e,n){t.classList[n?"add":"remove"](e)}function zt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function xe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function $e(t,e){return new t(e)}const F=new Map;let H=0;function Bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ft(t,e){const n={stylesheet:St(e),rules:{}};return F.set(t,n),n}function W(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);a+=m*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Bt(f)}_${o}`,h=ut(t),{stylesheet:u,rules:d}=F.get(h)||Ft(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,H+=1,_}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),H-=s,H||Ht())}function Ht(){X(()=>{H||(F.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),F.clear())})}let R;function P(t){R=t}function tt(){if(!R)throw new Error("Function called outside component initialization");return R}function we(t){tt().$$.on_mount.push(t)}function be(t){tt().$$.after_update.push(t)}function ve(t){tt().$$.on_destroy.push(t)}const j=[],st=[];let M=[];const rt=[],pt=Promise.resolve();let Q=!1;function yt(){Q||(Q=!0,pt.then(gt))}function ke(){return yt(),pt}function O(t){M.push(t)}const K=new Set;let S=0;function gt(){if(S!==0)return;const t=R;do{try{for(;S<j.length;){const e=j[S];S++,P(e),Wt(e.$$)}}catch(e){throw j.length=0,S=0,e}for(P(null),j.length=0,S=0;st.length;)st.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];K.has(n)||(K.add(n),n())}M.length=0}while(j.length);for(;rt.length;)rt.pop()();Q=!1,K.clear(),P(t)}function Wt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Gt(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let T;function et(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function A(t,e,n){t.dispatchEvent(zt(`${e?"intro":"outro"}${n}`))}const B=new Set;let v;function Ee(){v={r:0,c:[],p:v}}function Ne(){v.r||N(v.c),v=v.p}function xt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function It(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),v.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const nt={duration:0};function Ae(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,o,c=0;function a(){r&&G(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=U,tick:p=E,css:m}=s||nt;m&&(r=W(t,0,1,u,h,d,m,c++)),p(0,1);const g=V()+h,k=g+u;o&&o.abort(),l=!0,O(()=>A(t,!0,"start")),o=Y(x=>{if(l){if(x>=k)return p(1,0),A(t,!0,"end"),a(),l=!1;if(x>=g){const $=d((x-g)/u);p($,1-$)}}return l})}let _=!1;return{start(){_||(_=!0,G(t),D(s)?(s=s(i),et().then(f)):f())},invalidate(){_=!1},end(){l&&(a(),l=!1)}}}function Se(t,e,n){const i={direction:"out"};let s=e(t,n,i),l=!0,r;const o=v;o.r+=1;function c(){const{delay:a=0,duration:f=300,easing:_=U,tick:h=E,css:u}=s||nt;u&&(r=W(t,1,0,f,a,_,u));const d=V()+a,p=d+f;O(()=>A(t,!1,"start")),Y(m=>{if(l){if(m>=p)return h(0,1),A(t,!1,"end"),--o.r||N(o.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return l})}return D(s)?et().then(()=>{s=s(i),c()}):c(),{end(a){a&&s.tick&&s.tick(1,0),l&&(r&&G(t,r),l=!1)}}}function je(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function f(){a&&G(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=U,tick:g=E,css:k}=l||nt,x={start:V()+d,b:u};u||(x.group=v,v.r+=1),o||c?c=x:(k&&(f(),a=W(t,r,u,p,d,m,k)),u&&g(0,1),o=_(x,p),O(()=>A(t,u,"start")),Y($=>{if(c&&$>c.start&&(o=_(c,p),c=null,A(t,o.b,"start"),k&&(f(),a=W(t,r,o.b,o.duration,0,m,l.css))),o){if($>=o.end)g(r=o.b,1-r),A(t,o.b,"end"),c||(o.b?f():--o.group.r||N(o.group.c)),o=null;else if($>=o.start){const q=$-o.start;r=o.a+o.d*m(q/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){D(l)?et().then(()=>{l=l(s),h(u)}):h(u)},end(){f(),o=c=null}}}function Ce(t,e){t.d(1),e.delete(t.key)}function Me(t,e){It(t,1,1,()=>{e.delete(t.key)})}function Oe(t,e,n,i,s,l,r,o,c,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,k=new Map,x=[];for(d=u;d--;){const y=_(s,l,d),w=n(y);let b=r.get(w);b?i&&x.push(()=>b.p(y,e)):(b=a(w,y),b.c()),g.set(w,m[d]=b),w in p&&k.set(w,Math.abs(d-p[w]))}const $=new Set,q=new Set;function J(y){xt(y,1),y.m(o,f),r.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],w=t[h-1],b=y.key,L=w.key;y===w?(f=y.first,h--,u--):g.has(L)?!r.has(b)||$.has(b)?J(y):q.has(L)?h--:k.get(b)>k.get(L)?(q.add(b),J(y)):($.add(L),h--):(c(w,r),h--)}for(;h--;){const y=t[h];g.has(y.key)||c(y,r)}for(;u;)J(m[u-1]);return N(x),m}function De(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Te(t){return typeof t=="object"&&t!==null?t:{}}function Pe(t){t&&t.c()}function Re(t,e){t&&t.l(e)}function Jt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(ot).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),l.forEach(O)}function Kt(t,e){const n=t.$$;n.fragment!==null&&(Gt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(j.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,i,s,l,r,o=[-1]){const c=R;P(t);const a=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:s,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:it(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&s(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Qt(t,_)),h}):[],a.update(),f=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){vt();const _=Rt(e.target);a.fragment&&a.fragment.l(_),_.forEach(ft)}else a.fragment&&a.fragment.c();e.intro&&xt(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),kt(),gt()}P(c)}class Le{$destroy(){Kt(this,1),this.$destroy=E}$on(e,n){if(!D(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as $,Jt as A,Kt as B,Yt as C,te as D,ee as E,Zt as F,Ct as G,E as H,Xt as I,oe as J,ge as K,Oe as L,Me as M,O as N,je as O,xe as P,Vt as Q,Ae as R,Le as S,Se as T,$t as U,re as V,fe as W,De as X,Te as Y,N as Z,Mt as _,ae as a,_e as a0,le as a1,ve as a2,ie as a3,Ce as a4,V as a5,Y as a6,U as a7,se as a8,ne as a9,ce as b,me as c,It as d,ue as e,Ne as f,xt as g,ft as h,qe as i,be as j,_t as k,de as l,Rt as m,dt as n,we as o,ye as p,Z as q,Lt as r,Ut as s,ke as t,pe as u,Ee as v,st as w,$e as x,Pe as y,Re as z};
