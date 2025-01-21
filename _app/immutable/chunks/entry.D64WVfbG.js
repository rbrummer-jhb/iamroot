var wt=Object.defineProperty;var _t=(e,n,t)=>n in e?wt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>_t(e,typeof n!="symbol"?n+"":n,t);import{n as de,s as bt,o as Ce,t as vt}from"./scheduler.Cv9TUz2p.js";new URL("sveltekit-internal://");function At(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function St(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function he({href:e}){return e.split("#")[0]}function Et(e,n,t,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(t(l),i[s](l));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return a}const Rt="/__data.json",It=".html__data.json";function Ut(e){return e.endsWith(".html")?e.replace(/\.html$/,It):e.replace(/\/$/,"")+Rt}function Lt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Tt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const ze=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(be(e)),ze(e,n));const G=new Map;function xt(e,n){const t=be(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Tt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function Pt(e,n,t){if(G.size>0){const r=be(e,t),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,t)}function be(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Lt(...a)}"]`}return r}const Ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${$t(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pe(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Ct.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pe(c)}).join("")}).join("")}/?$`),params:n}}function Nt(e){return!/^\([^)]+\)$/.test(e)}function $t(e){return e.slice(1).split("/").filter(Nt)}function jt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Ot(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return jt(f,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function He(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Oe(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const $=[];function ve(e,n=de){let t;const r=new Set;function a(s){if(bt(e,s)&&(e=s,t)){const c=!$.length;for(const l of r)l[1](),$.push(l,e);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function o(s){a(s(e))}function i(s,c=de){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||de),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}var Ge;const T=((Ge=globalThis.__sveltekit_1azeies)==null?void 0:Ge.base)??"";var Me;const Ft=((Me=globalThis.__sveltekit_1azeies)==null?void 0:Me.assets)??T,Vt="1737456555980",Ke="sveltekit:snapshot",We="sveltekit:scroll",Ye="sveltekit:states",Bt="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Je(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Ae(){return{x:pageXOffset,y:pageYOffset}}function j(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ne={...X,"":X.hover};function Xe(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Xe(e)}}function ye(e,n,t){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!r||!!a||se(r,n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===J&&e.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function Z(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),t===null&&(t=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Xe(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[r??"off"],preload_data:Ne[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function $e(e){const n=ve(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const Qe={v:()=>{}};function qt(){const{set:e,subscribe:n}=ve(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Ft}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Vt;return i&&(e(!0),Qe.v(),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function se(e,n,t){return e.origin!==J||!e.pathname.startsWith(n)?!0:t?!(e.pathname===n+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function je(e){const n=Mt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Mt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Gt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const zt=-1,Ht=-2,Kt=-3,Wt=-4,Yt=-5,Jt=-6;function Xt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===zt)return;if(o===Kt)return NaN;if(o===Wt)return 1/0;if(o===Yt)return-1/0;if(o===Jt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=je(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=je(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Ht&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const et=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...et];const Zt=new Set([...et]);[...Zt];function Qt(e){return e.filter(n=>n!=null)}class ie{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class tt{constructor(n,t){this.status=n,this.location=t}}class Se extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const en="x-sveltekit-invalidated",tn="x-sveltekit-trailing-slash";function Q(e){return e instanceof ie||e instanceof Se?e.status:500}function nn(e){return e instanceof Se?e.text:"Internal Error"}let I,K,ge;const rn=Ce.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ce.toString());rn?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},ge={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},K=new class{constructor(){x(this,"current",$state.raw(null))}},ge=new class{constructor(){x(this,"current",$state.raw(!1))}},Qe.v=()=>ge.current=!0);function an(e){Object.assign(I,e)}const on=new Set(["icon","shortcut icon","apple-touch-icon"]),N=He(We)??{},W=He(Ke)??{},C={url:$e({}),page:$e({}),navigating:ve(null),updated:qt()};function ke(e){N[e]=Ae()}function sn(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;W[t];)delete W[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}async function nt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function De(){}let ce,we,ee,P,_e,A;const rt=[],te=[];let U=null;const at=new Set,cn=new Set,M=new Set;let w={branch:[],error:null,url:null},Ee=!1,ne=!1,Fe=!0,Y=!1,B=!1,ot=!1,Re=!1,st,R,L,re;const z=new Set;async function Sn(e,n,t){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),A=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),ce=Dt(e),P=document.documentElement,_e=n,we=e.nodes[0],ee=e.nodes[1],we(),ee(),R=(i=history.state)==null?void 0:i[D],L=(s=history.state)==null?void 0:s[H],R||(R=L=Date.now(),history.replaceState({...history.state,[D]:R,[H]:L},""));const r=N[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await mn(_e,t):pn(location.href,{replaceState:!0}),gn()}function ln(){rt.length=0,Re=!1}function it(e){te.some(n=>n==null?void 0:n.snapshot)&&(W[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function ct(e){var n;(n=W[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=te[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ve(){ke(R),Oe(We,N),it(L),Oe(Ke,W)}async function lt(e,n,t,r){return q({type:"goto",url:Je(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Re=!0)}})}async function fn(e){if(e.id!==(U==null?void 0:U.id)){const n={};z.add(n),U={id:e.id,token:n,promise:ut({...e,preload:n}).then(t=>(z.delete(n),t.type==="loaded"&&t.state.error&&(U=null),t))}}return U.promise}async function me(e){const n=ce.find(t=>t.exec(dt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function ft(e,n,t){var o;w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,e.props.page),st=new A.root({target:n,props:{...e.props,stores:C,components:te},hydrate:t,sync:!1}),ct(L);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(a)),ne=!0}function ae({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(T&&(e.pathname===T||e.pathname===T+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=At(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Qt(t).map(u=>u.node.component),page:Te(I)}};i!==void 0&&(c.props.form=i);let l={},d=!I,h=0;for(let u=0;u<Math.max(t.length,w.branch.length);u+=1){const g=t[u],f=w.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:I.data}),c}async function Ie({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:v}=new URL(p,t);c.dependencies.add(v)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Et(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},A.hash),async fetch(f,p){let v;f instanceof Request?(v=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):v=f;const k=new URL(v,t);return s&&u(k.href),k.origin===t.origin&&(v=k.href.slice(t.origin.length)),ne?Pt(v,k.href,p):xt(v,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Be(e,n,t,r,a,o){if(Re)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(rt.some(s=>s(new URL(i))))return!0;return!1}function Ue(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function un(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function qe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:Te(I),constructors:[]}}}async function ut({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((U==null?void 0:U.id)===e)return z.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==oe(w.url):!1,y=w.route?a.id!==w.route.id:!1,u=un(w.url,t);let g=!1;const f=l.map((m,_)=>{var O;const S=w.branch[_],E=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Be(g,y,h,u,(O=S.server)==null?void 0:O.uses,r));return E&&(g=!0),E});if(f.some(Boolean)){try{d=await gt(t,f)}catch(m){const _=await F(m,{url:t,params:r,route:{id:e}});return z.has(o)?qe({error:_,url:t,params:r,route:a}):le({status:Q(m),error:_,url:t,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let v=!1;const k=l.map(async(m,_)=>{var fe;if(!m)return;const S=w.branch[_],E=p==null?void 0:p[_];if((!E||E.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Be(v,y,h,u,(fe=S.universal)==null?void 0:fe.uses,r))return S;if(v=!0,(E==null?void 0:E.type)==="error")throw E;return Ie({loader:m[1],url:t,params:r,route:a,parent:async()=>{var Pe;const xe={};for(let ue=0;ue<_;ue+=1)Object.assign(xe,(Pe=await k[ue])==null?void 0:Pe.data);return xe},server_data_node:Ue(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of k)m.catch(()=>{});const b=[];for(let m=0;m<l.length;m+=1)if(l[m])try{b.push(await k[m])}catch(_){if(_ instanceof tt)return{type:"redirect",location:_.location};if(z.has(o))return qe({error:await F(_,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let S=Q(_),E;if(p!=null&&p.includes(_))S=_.status??S,E=_.error;else if(_ instanceof ie)E=_.body;else{if(await C.updated.check())return await nt(),await V(t);E=await F(_,{params:r,url:t,route:{id:a.id}})}const O=await dn(m,b,i);return O?ae({url:t,params:r,branch:b.slice(0,O.idx).concat(O.node),status:S,error:E,route:a}):await pt(t,{id:a.id},E,S)}else b.push(void 0);return ae({url:t,params:r,branch:b,status:200,error:null,route:a,form:n?void 0:null})}async function dn(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:e,error:n,url:t,route:r}){const a={};let o=null;if(A.server_loads[0]===0)try{const l=await gt(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Ee)&&await V(t)}const s=await Ie({loader:we,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ue(o)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return ae({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Le(e,n){if(!e||se(e,T,A.hash))return;let t;try{if(t=A.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const a=new URL(e);A.hash?a.hash=t:a.pathname=t,t=a}}catch{return}const r=dt(t);for(const a of ce){const o=a.exec(r);if(o)return{id:oe(e),invalidating:n,route:a,params:kt(o),url:e}}}function dt(e){return St(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function oe(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ht({url:e,type:n,intent:t,delta:r}){let a=!1;const o=yt(w,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||at.forEach(s=>s(i)),a?null:o}async function q({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=De,block:d=De}){const h=Le(n,!1),y=ht({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=R,g=L;l(),Y=!0,ne&&C.navigating.set(K.current=y.navigation),re=c;let f=h&&await ut(h);if(!f){if(se(n,T,A.hash))return await V(n);f=await pt(n,{id:null},await F(new Se(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,re!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await le({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return lt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await C.updated.check()&&(await nt(),await V(n));if(ln(),ke(u),it(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const b=o?0:1,m={[D]:R+=b,[H]:L+=b,[Ye]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||sn(R,L)}if(U=null,f.props.page.state=i,ne){w=f.state,f.props.page&&(f.props.page.url=n);const b=(await Promise.all(Array.from(cn,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(b.length>0){let m=function(){b.forEach(_=>{M.delete(_)})};b.push(m),b.forEach(_=>{M.add(_)})}st.$set(f.props),an(f.props.page),ot=!0}else ft(f,_e,!1);const{activeElement:p}=document;await vt();const v=t?t.scroll:a?Ae():null;if(Fe){const b=n.hash&&document.getElementById(decodeURIComponent(A.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));v?scrollTo(v.x,v.y):b?b.scrollIntoView():scrollTo(0,0)}const k=document.activeElement!==p&&document.activeElement!==document.body;!r&&!k&&yn(),Fe=!0,f.props.page&&Object.assign(I,f.props.page),Y=!1,e==="popstate"&&ct(L),y.fulfil(void 0),M.forEach(b=>b(y.navigation)),C.navigating.set(K.current=null)}async function pt(e,n,t,r){return e.origin===J&&e.pathname===location.pathname&&!Ee?await le({status:r,error:t,url:e,route:n}):await V(e)}function hn(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(me(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Ze(o,P);if(!s)return;const{url:c,external:l,download:d}=ye(s,T,A.hash);if(l||d)return;const h=Z(s),y=c&&oe(w.url)===oe(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Le(c,!1);u&&fn(u)}else i<=h.preload_code&&me(c)}function a(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=ye(o,T,A.hash);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&t.observe(o),l.preload_code===X.eager&&me(i))}}M.add(a),a()}function F(e,n){if(e instanceof ie)return e.body;const t=Q(e),r=nn(e);return A.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function pn(e,n={}){return e=new URL(Je(e)),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):lt(e,n,0)}function gn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ve(),!Y){const a=yt(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};at.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ve()}),(n=navigator.connection)!=null&&n.saveData||hn(),P.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ze(t.composedPath()[0],P);if(!r)return;const{url:a,external:o,target:i,download:s}=ye(r,T,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===he(location);if(o||c.reload&&(!y||!h)){ht({url:a,type:"link"})?Y=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(B=!0,ke(R),e(a),!c.replace_state)return;B=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),q({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(se(s,T,!1))return;const c=t.target,l=Z(c);if(l.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),q({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(re={},a===R)return;const o=N[a],i=t.state[Ye]??{},s=new URL(t.state[Bt]??location.href),c=t.state[H],l=he(location)===he(w.url);if(c===L&&(ot||l)){i!==I.state&&(I.state=i),e(s),N[R]=Ae(),o&&scrollTo(o.x,o.y),R=a;return}const h=a-R;await q({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{R=a,L=c},block:()=>{history.go(-h)},nav_token:re})}else if(!B){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{B?(B=!1,history.replaceState({...history.state,[D]:++R,[H]:L},"",location.href)):A.hash&&w.url.hash===location.hash&&q({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))on.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&C.navigating.set(K.current=null)});function e(t){w.url=I.url=t,C.page.set(Te(I)),C.page.notify()}}async function mn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Ee=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Le(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=mt(p.uses)),Ie({loader:A.nodes[g],url:c,params:a,route:o,parent:async()=>{const v={};for(let k=0;k<f;k+=1)Object.assign(v,(await h[k]).data);return v},server_data_node:Ue(p)})}),y=await Promise.all(h),u=ce.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=ae({url:c,params:a,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof tt){await V(new URL(h.location,location.href));return}l=await le({status:Q(h),error:await F(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),ft(l,e,d)}async function gt(e,n){var a;const t=new URL(e);t.pathname=Ut(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(tn,"1"),t.searchParams.append(en,n.map(o=>o?"1":"0").join(""));const r=await ze(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ie(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Xt(y,{...A.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=mt(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:v,error:k}=f,b=i.get(p);i.delete(p),k?b.reject(l(k)):b.fulfil(l(v))}}}})}function mt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function yn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function yt(e,n,t,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}function Te(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}export{Sn as a,C as s};
