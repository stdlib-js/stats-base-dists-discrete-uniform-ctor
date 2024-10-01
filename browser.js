// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,d,"$1e"),e=p.call(e,b,"e"),e=p.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,o,a,f,c,s,p,l,y,h,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,E(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,h=e.padRight,g=void 0,(g=y-l.length)<0?l:l=h?l+m(g):m(g)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function x(r){var t,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var k=Object.prototype,T=k.toString,F=k.__defineGetter__,O=k.__defineSetter__,V=k.__lookupGetter__,R=k.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||R.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,t,n.get),a&&O&&O.call(r,t,n.set),r};function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r,t,n){$(r,t,{configurable:!1,enumerable:!1,get:n})}function W(r){return"number"==typeof r}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return C&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",D=H()?function(r){var t,n,e,i,o;if(null==r)return L.call(r);n=r[q],o=q,t=null!=(i=r)&&M.call(i,o);try{r[q]=void 0}catch(t){return L.call(r)}return e=L.call(r),t?r[q]=n:delete r[q],e}:function(r){return L.call(r)},X=Number,Y=X.prototype.toString,z=H();function B(r){return"object"==typeof r&&(r instanceof X||(z?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function J(r){return W(r)||B(r)}G(J,"isPrimitive",W),G(J,"isObject",B);var K=Number.POSITIVE_INFINITY,Q=X.NEGATIVE_INFINITY,rr=Math.floor;function tr(r){return rr(r)===r}function nr(r){return r<K&&r>Q&&tr(r)}function er(r){return W(r)&&nr(r)}function ir(r){return B(r)&&nr(r.valueOf())}function or(r){return er(r)||ir(r)}function ar(r){return r!=r}G(or,"isPrimitive",er),G(or,"isObject",ir);var ur,fr="function"==typeof Uint32Array,cr="function"==typeof Uint32Array?Uint32Array:null,sr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(fr&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr,lr=ur,yr="function"==typeof Float64Array,hr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,t,n;if("function"!=typeof hr)return!1;try{t=new hr([1,3.14,-3.14,NaN]),n=t,r=(yr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr,br=pr,dr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,256,257]),n=t,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Nr,Ar=vr,Er="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Nr=function(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Er&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Sr,Ir={uint16:Nr,uint8:Ar};(Sr=new Ir.uint16(1))[0]=4660;var jr=52===new Ir.uint8(Sr.buffer)[0],xr=!0===jr?1:0,kr=new br(1),Tr=new lr(kr.buffer);function Fr(r){return kr[0]=r,Tr[xr]}var Or=!0===jr?1:0,Vr=new br(1),Rr=new lr(Vr.buffer);function $r(r,t){return Vr[0]=r,Rr[Or]=t>>>0,Vr[0]}var Gr=1023,Pr=.6931471803691238,Wr=1.9082149292705877e-10,Cr=0x40000000000000,Hr=.3333333333333333,Lr=1048575,Mr=2146435072,Zr=1048576,qr=1072693248;function Dr(r){var t,n,e,i,o,a,u,f,c,s,p,l;return 0===r?Q:ar(r)||r<0?NaN:(o=0,(n=Fr(r))<Zr&&(o-=54,n=Fr(r*=Cr)),n>=Mr?r+r:(o+=(n>>20)-Gr|0,o+=(f=614244+(n&=Lr)&1048576|0)>>20|0,u=(r=$r(r,n|f^qr))-1,(Lr&2+n)<3?0===u?0===o?0:o*Pr+o*Wr:(a=u*u*(.5-Hr*u),0===o?u-a:o*Pr-(a-o*Wr-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Pr-(t-(s*(t+a)+o*Wr)-u)):0===o?u-s*(u-a):o*Pr-(s*(u-a)-o*Wr-u))))}function Xr(r){return tr(r/2)}function Yr(r){return Xr(r>0?r-1:r+1)}function zr(r){return r===K||r===Q}var Br,Jr,Kr=Math.sqrt;function Qr(r){return Math.abs(r)}!0===jr?(Br=1,Jr=0):(Br=0,Jr=1);var rt={HIGH:Br,LOW:Jr},tt=new br(1),nt=new lr(tt.buffer),et=rt.HIGH,it=rt.LOW;function ot(r,t,n,e){return tt[0]=r,t[e]=nt[et],t[e+n]=nt[it],t}function at(r){return ot(r,[0,0],1,0)}G(at,"assign",ot);var ut=!0===jr?0:1,ft=new br(1),ct=new lr(ft.buffer);function st(r,t){return ft[0]=r,ct[ut]=t>>>0,ft[0]}function pt(r){return 0|r}var lt,yt,ht=2147483647,gt=2147483648;!0===jr?(lt=1,yt=0):(lt=0,yt=1);var vt={HIGH:lt,LOW:yt},bt=new br(1),dt=new lr(bt.buffer),wt=vt.HIGH,mt=vt.LOW;function Nt(r,t){return dt[wt]=r,dt[mt]=t,bt[0]}var At=[0,0];function Et(r,t){var n,e;return at.assign(r,At,1,0),n=At[0],n&=ht,e=Fr(t),Nt(n|=e&=gt,At[1])}var _t=1072693247,Ut=1e300,St=1e-300,It=1048575,jt=1048576,xt=1072693248,kt=536870912,Tt=524288,Ft=20,Ot=9007199254740992,Vt=.9617966939259756,Rt=.9617967009544373,$t=-7.028461650952758e-9,Gt=[1,1.5],Pt=[0,.5849624872207642],Wt=[0,1.350039202129749e-8],Ct=1.4426950408889634,Ht=1.4426950216293335,Lt=1.9259629911266175e-8,Mt=1023,Zt=-1023,qt=-1074,Dt=22250738585072014e-324,Xt=4503599627370496;function Yt(r,t,n,e){return ar(r)||zr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Qr(r)<Dt?(t[e]=r*Xt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}G((function(r){return Yt(r,[0,0],1,0)}),"assign",Yt);var zt=2146435072,Bt=2220446049250313e-31,Jt=2148532223,Kt=[0,0],Qt=[0,0];function rn(r,t){var n,e;return 0===t||0===r||ar(r)||zr(r)?r:(Yt(r,Kt,1,0),r=Kt[0],t+=Kt[1],t+=function(r){var t=Fr(r);return(t=(t&zt)>>>20)-Gr|0}(r),t<qt?Et(0,r):t>Mt?r<0?Q:K:(t<=Zt?(t+=52,e=Bt):e=1,at.assign(r,Qt,1,0),n=Qt[0],n&=Jt,e*Nt(n|=t+Gr<<20,Qt[1])))}var tn=.6931471805599453,nn=1048575,en=1048576,on=1071644672,an=20,un=.6931471824645996,fn=-1.904654299957768e-9,cn=1072693247,sn=1105199104,pn=1139802112,ln=1083179008,yn=1072693248,hn=1083231232,gn=3230714880,vn=31,bn=1e300,dn=1e-300,wn=8008566259537294e-32,mn=[0,0],Nn=[0,0];function An(r,t){var n,e,i,o,a,u,f,c,s,p,l,y,h,g;if(ar(r)||ar(t))return NaN;if(at.assign(t,mn,1,0),a=mn[0],0===mn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Kr(r);if(-.5===t)return 1/Kr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(zr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Qr(r)<1==(t===K)?0:K}(r,t)}if(at.assign(r,mn,1,0),o=mn[0],0===mn[1]){if(0===o)return function(r,t){return t===Q?K:t===K?0:t>0?Yr(t)?r:0:Yr(t)?Et(K,r):K}(r,t);if(1===r)return 1;if(-1===r&&Yr(t))return-1;if(zr(r))return r===Q?An(-0,-t):t<0?0:K}if(r<0&&!1===tr(t))return(r-r)/(r-r);if(i=Qr(r),n=o&ht|0,e=a&ht|0,f=a>>>vn|0,u=(u=o>>>vn|0)&&Yr(t)?-1:1,e>sn){if(e>pn)return function(r,t){return(Fr(r)&ht)<=_t?t<0?Ut*Ut:St*St:t>0?Ut*Ut:St*St}(r,t);if(n<cn)return 1===f?u*bn*bn:u*dn*dn;if(n>yn)return 0===f?u*bn*bn:u*dn*dn;l=function(r,t){var n,e,i,o,a,u,f;return o=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Lt-o*Ct)-((e=st(e=(a=Ht*i)+u,0))-a),r[0]=e,r[1]=n,r}(Nn,i)}else l=function(r,t,n){var e,i,o,a,u,f,c,s,p,l,y,h,g,v,b,d,w,m,N,A,E;return m=0,n<jt&&(m-=53,n=Fr(t*=Ot)),m+=(n>>Ft)-Gr|0,n=(N=n&It|0)|xt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=jt),a=st(i=(d=(t=$r(t,n))-(c=Gt[A]))*(w=1/(t+c)),0),e=(n>>1|kt)+Tt,f=$r(0,e+=A<<18),b=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=st(f=3+(o=a*a)+(b+=(u=w*(d-a*f-a*(t-(f-c))))*(a+i)),0),p=st(p=(d=a*f)+(w=u*f+(b-(f-3-o))*i),0),l=Rt*p,g=(y=$t*p+(w-(p-d))*Vt+Wt[A])-((h=st(h=l+y+(s=Pt[A])+(v=m),0))-v-s-l),r[0]=h,r[1]=g,r}(Nn,i,n);if(y=(p=(t-(c=st(t,0)))*l[0]+t*l[1])+(s=c*l[0]),at.assign(y,mn,1,0),h=pt(mn[0]),g=pt(mn[1]),h>=ln){if(0!=(h-ln|g))return u*bn*bn;if(p+wn>y-s)return u*bn*bn}else if((h&ht)>=hn){if(0!=(h-gn|g))return u*dn*dn;if(p<=y-s)return u*dn*dn}return y=function(r,t,n){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&ht|0)>>an)-Gr|0,c=0,s>on&&(i=$r(0,((c=r+(en>>p+1)>>>0)&~(nn>>(p=((c&ht)>>an)-Gr|0)))>>>0),c=(c&nn|en)>>an-p>>>0,r<0&&(c=-c),t-=i),r=pt(r=Fr(f=1-((f=(o=(i=st(i=n+t,0))*un)+(a=(n-(i-t))*tn+i*fn))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<an>>>0)>>an<=0?rn(f,c):$r(f,r)}(h,s,p),u*y}var En=Kr(1/12);function _n(r,t,n){return ar(r)||ar(t)||ar(n)||!tr(t)||!tr(n)||t>n?NaN:r<t?0:r>=n?1:(rr(r)-t+1)/(n-t+1)}function Un(r){return function(){return r}}function Sn(r,t,n){return ar(r)||ar(t)||ar(n)||!tr(t)||!tr(n)||t>n?NaN:r<t?Q:r>=n?0:Dr(rr(r)-t+1)-Dr(n-t+1)}function In(r,t,n){return ar(r)||ar(t)||ar(n)||!tr(t)||!tr(n)||t>n?NaN:r<t||r>n||!tr(r)?Q:-Dr(n-t+1)}G(_n,"factory",(function(r,t){var n,e;return ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?Un(NaN):(n=r-1,e=t-r+1,function(i){return ar(i)?NaN:i<r?0:i>=t?1:(rr(i)-n)/e})})),G(Sn,"factory",(function(r,t){var n,e;return ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?Un(NaN):(e=r-1,n=Dr(t-r+1),function(i){return ar(i)?NaN:i<r?Q:i>=t?0:Dr(rr(i)-e)-n})})),G(In,"factory",(function(r,t){var n;return ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?Un(NaN):(n=-Dr(t-r+1),function(e){return ar(e)?NaN:e<r||e>t||!tr(e)?Q:n})}));var jn=.34657359027997264,xn=709.782712893384,kn=.6931471803691238,Tn=1.9082149292705877e-10,Fn=1.4426950408889634,On=38.816242111356935,Vn=1.0397207708399179;function Rn(r){var t,n,e,i,o,a,u,f,c,s,p,l,y;if(r===K||ar(r))return r;if(r===Q)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=On){if(e)return-1;if(f>=xn)return K}if(a=0|Fr(f),f>jn)f<Vn?e?(i=r+kn,o=-Tn,y=-1):(i=r-kn,o=Tn,y=1):(y=e?Fn*r-.5:Fn*r+.5,i=r-(p=y|=0)*kn,o=p*Tn),s=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(c=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((u-(p=3-u*t))/(6-r*p)),0===y?r-(r*l-c):(n=Nt(Gr+y<<20,0),l=r*(l-s)-s,l-=c,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(f=1-(l-r),1024===y?f=$r(f,i=Fr(f)+(y<<20)|0):f*=n,f-1):(p=1,y<20?f=(p=$r(p,i=1072693248-(2097152>>y)|0))-(l-r):(f=r-(l+(p=$r(p,i=Gr-y<<20|0))),f+=1),f*=n))}var $n=Math.ceil;function Gn(r){return r<0?$n(r):rr(r)}var Pn=.6931471803691238,Wn=1.9082149292705877e-10,Cn=1.4426950408889634,Hn=709.782712893384,Ln=-745.1332191019411,Mn=1/(1<<28),Zn=-Mn;function qn(r){var t;return ar(r)||r===K?r:r===Q?0:r>Hn?K:r<Ln?0:r>Zn&&r<Mn?1+r:function(r,t,n){var e,i,o,a;return rn(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-(t=Gn(r<0?Cn*r-.5:Cn*r+.5))*Pn,t*Wn,t)}function Dn(r,t,n){var e,i;return ar(r)||ar(t)||ar(n)||!tr(t)||!tr(n)||t>n?NaN:0===r?1:(i=n-t+1,e=qn(r*t)*Rn(r*i),e/=i*Rn(r))}function Xn(r,t,n){return ar(r)||ar(t)||ar(n)||!tr(t)||!tr(n)||t>n?NaN:r<t||r>n||!tr(r)?0:1/(n-t+1)}function Yn(r,t,n){return ar(r)||ar(t)||ar(n)||!tr(t)||!tr(n)||t>n||r<0||r>1?NaN:t+rr(r*(n-t+1))}function zn(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Bn(){var r,t;if(!(this instanceof Bn))return 0===arguments.length?new Bn:new Bn(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!er(r=arguments[0]))throw new TypeError(zn("0yb8s",r));if(!er(t))throw new TypeError(zn("0yb8t",t));if(r>t)throw new RangeError(zn("0ybDW",r,t))}else r=0,t=1;return $(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!er(n))throw new TypeError(zn("0yb8v",n));if(n>t)throw new RangeError(zn("0yb8w",t,n));r=n}}),$(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!er(n))throw new TypeError(zn("0yb8v",n));if(r>n)throw new RangeError(zn("0yb8x",r,n));t=n}}),this}return G(Dn,"factory",(function(r,t){var n;return ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?Un(NaN):(n=t-r+1,function(t){var e;return ar(t)?NaN:0===t?1:(e=qn(t*r)*Rn(t*n),e/=n*Rn(t))})})),G(Xn,"factory",(function(r,t){var n;return ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?Un(NaN):(n=1/(t-r+1),function(e){return ar(e)?NaN:e<r||e>t||!tr(e)?0:n})})),G(Yn,"factory",(function(r,t){var n;return ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?Un(NaN):(n=t-r+1,function(t){return ar(t)||t<0||t>1?NaN:r+rr(t*n)})})),P(Bn.prototype,"entropy",(function(){return r=this.a,t=this.b,ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?NaN:Dr(t-r+1);var r,t})),P(Bn.prototype,"kurtosis",(function(){return r=this.a,t=this.b,ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?NaN:-1.2*((n=An(t-r+1,2))+1)/(n-1);var r,t,n})),P(Bn.prototype,"mean",(function(){return r=this.a,t=this.b,ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?NaN:r/2+t/2;var r,t})),P(Bn.prototype,"median",(function(){return r=this.a,t=this.b,ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?NaN:r/2+t/2;var r,t})),P(Bn.prototype,"skewness",(function(){return r=this.a,t=this.b,ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?NaN:0;var r,t})),P(Bn.prototype,"stdev",(function(){return r=this.a,t=this.b,ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?NaN:En*Kr(An(t-r+1,2)-1);var r,t})),P(Bn.prototype,"variance",(function(){return r=this.a,t=this.b,ar(r)||ar(t)||!tr(r)||!tr(t)||r>t?NaN:(An(t-r+1,2)-1)/12;var r,t})),G(Bn.prototype,"cdf",(function(r){return _n(r,this.a,this.b)})),G(Bn.prototype,"logcdf",(function(r){return Sn(r,this.a,this.b)})),G(Bn.prototype,"logpmf",(function(r){return In(r,this.a,this.b)})),G(Bn.prototype,"mgf",(function(r){return Dn(r,this.a,this.b)})),G(Bn.prototype,"pmf",(function(r){return Xn(r,this.a,this.b)})),G(Bn.prototype,"quantile",(function(r){return Yn(r,this.a,this.b)})),Bn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).DiscreteUniform=t();
//# sourceMappingURL=browser.js.map
