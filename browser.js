// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(u):e(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var n,e,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!t(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(e=(-o).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(n),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):u.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,v=/e\+(\d)$/,w=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,g=/\.0$/,h=/\.0*e/,d=/(\..*[^0])0*e/;function N(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,d,"$1e"),e=l.call(e,h,"e"),e=l.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,v,"e+0$1"),e=l.call(e,w,"e-0$1"),r.alternate&&(e=l.call(e,y,"$1."),e=l.call(e,b,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function H(r,n,t){var e=n-r.length;return e<0?r:r=t?r+m(e):m(e)+r}var I=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function _(r){var n,t,e,u,a,c,s,p,l;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(u=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,A(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=o(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):I(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=N(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=H(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(G(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function S(r){return"string"==typeof r}function W(r){var n,t,e;if(!S(r))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=x(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return _.apply(null,t)}var j=Object.prototype,L=j.toString,k=j.__defineGetter__,T=j.__defineSetter__,F=j.__lookupGetter__,V=j.__lookupSetter__,M=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(F.call(r,n)||V.call(r,n)?(e=r.__proto__,r.__proto__=j,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,a="set"in t,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&k&&k.call(r,n,t.get),a&&T&&T.call(r,n,t.set),r};function R(r,n,t){M(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(r,n,t){M(r,n,{configurable:!1,enumerable:!1,get:t})}function P(r){return"number"==typeof r}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return C&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",D=Z()?function(r){var n,t,e,i,u;if(null==r)return q.call(r);t=r[z],u=z,n=null!=(i=r)&&X.call(i,u);try{r[z]=void 0}catch(n){return q.call(r)}return e=q.call(r),n?r[z]=t:delete r[z],e}:function(r){return q.call(r)},J=Number,K=J.prototype.toString,B=Z();function Q(r){return"object"==typeof r&&(r instanceof J||(B?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function rr(r){return P(r)||Q(r)}R(rr,"isPrimitive",P),R(rr,"isObject",Q);var nr=Number.POSITIVE_INFINITY,tr=J.NEGATIVE_INFINITY,er=Math.floor;function ir(r){return er(r)===r}function ur(r){return r<nr&&r>tr&&ir(r)}function ar(r){return P(r)&&ur(r)}function or(r){return Q(r)&&ur(r.valueOf())}function fr(r){return ar(r)||or(r)}function cr(r){return r!=r}R(fr,"isPrimitive",ar),R(fr,"isObject",or);var sr,pr="function"==typeof Uint32Array,lr="function"==typeof Uint32Array?Uint32Array:null,vr="function"==typeof Uint32Array?Uint32Array:void 0;sr=function(){var r,n,t;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(pr&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,yr=sr,br="function"==typeof Float64Array,gr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;wr=function(){var r,n,t;if("function"!=typeof gr)return!1;try{n=new gr([1,3.14,-3.14,NaN]),t=n,r=(br&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var dr,Nr=wr,mr="function"==typeof Uint8Array,Hr="function"==typeof Uint8Array?Uint8Array:null,Ir="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,n,t;if("function"!=typeof Hr)return!1;try{n=new Hr(n=[1,3.14,-3.14,256,257]),t=n,r=(mr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Ar,Er=dr,Or="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,t;if("function"!=typeof _r)return!1;try{n=new _r(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Or&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Gr,xr=Ar,Sr={uint16:xr,uint8:Er};(Gr=new Sr.uint16(1))[0]=4660;var Wr=52===new Sr.uint8(Gr.buffer)[0],jr=!0===Wr?1:0,Lr=new Nr(1),kr=new yr(Lr.buffer);function Tr(r){return Lr[0]=r,kr[jr]}var Fr=!0===Wr?1:0,Vr=new Nr(1),Mr=new yr(Vr.buffer),Rr=.6931471803691238,$r=1.9082149292705877e-10,Pr=1048575;function Cr(r){var n,t,e,i,u,a,o,f,c,s,p,l;return 0===r?tr:cr(r)||r<0?NaN:(u=0,(t=Tr(r))<1048576&&(u-=54,t=Tr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=Pr)&1048576|0)>>20|0,o=(r=function(r,n){return Vr[0]=r,Mr[Fr]=n>>>0,Vr[0]}(r,t|1072693248^f))-1,(Pr&2+t)<3?0===o?0===u?0:u*Rr+u*$r:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*Rr-(a-u*$r-o)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=o/(2+o))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*o*o,0===u?o-(n-s*(n+a)):u*Rr-(n-(s*(n+a)+u*$r)-o)):0===u?o-s*(o-a):u*Rr-(s*(o-a)-u*$r-o))))}function Zr(r){return ir(r/2)}function qr(r){return Zr(r>0?r-1:r+1)}function Xr(r){return r===nr||r===tr}var Yr=Math.sqrt;function zr(r){return Math.abs(r)}var Dr,Jr={uint16:xr,uint8:Er};Dr=function(){var r;return(r=new Jr.uint16(1))[0]=4660,52===new Jr.uint8(r.buffer)[0]}();var Kr,Br,Qr=Dr;!0===Qr?(Kr=1,Br=0):(Kr=0,Br=1);var rn={HIGH:Kr,LOW:Br},nn=new Nr(1),tn=new yr(nn.buffer),en=rn.HIGH,un=rn.LOW;function an(r,n,t,e){return nn[0]=r,n[e]=tn[en],n[e+t]=tn[un],n}function on(r){return an(r,[0,0],1,0)}R(on,"assign",an);var fn=!0===Qr?0:1,cn=new Nr(1),sn=new yr(cn.buffer);function pn(r,n){return cn[0]=r,sn[fn]=n>>>0,cn[0]}function ln(r){return 0|r}var vn,wn,yn=2147483647,bn=!0===Qr?1:0,gn=new Nr(1),hn=new yr(gn.buffer);function dn(r){return gn[0]=r,hn[bn]}!0===Qr?(vn=1,wn=0):(vn=0,wn=1);var Nn={HIGH:vn,LOW:wn},mn=new Nr(1),Hn=new yr(mn.buffer),In=Nn.HIGH,An=Nn.LOW;function En(r,n){return Hn[In]=r,Hn[An]=n,mn[0]}var On=[0,0];function _n(r,n){var t,e;return on.assign(r,On,1,0),t=On[0],t&=yn,e=dn(n),En(t|=e&=2147483648,On[1])}var Un=!0===Qr?1:0,Gn=new Nr(1),xn=new yr(Gn.buffer);function Sn(r,n){return Gn[0]=r,xn[Un]=n>>>0,Gn[0]}var Wn=1023,jn=1048576,Ln=[1,1.5],kn=[0,.5849624872207642],Tn=[0,1.350039202129749e-8];function Fn(r,n,t,e){return cr(r)||Xr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&zr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}R((function(r){return Fn(r,[0,0],1,0)}),"assign",Fn);var Vn=[0,0],Mn=[0,0];function Rn(r,n){var t,e;return 0===n||0===r||cr(r)||Xr(r)?r:(Fn(r,Vn,1,0),n+=Vn[1],n+=function(r){var n=dn(r);return(n=(2146435072&n)>>>20)-Wn|0}(r=Vn[0]),n<-1074?_n(0,r):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,on.assign(r,Mn,1,0),t=Mn[0],t&=2148532223,e*En(t|=n+Wn<<20,Mn[1])))}var $n=1048575,Pn=1048576,Cn=1083179008,Zn=1e300,qn=1e-300,Xn=[0,0],Yn=[0,0];function zn(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,w,y;if(cr(r)||cr(n))return NaN;if(on.assign(n,Xn,1,0),a=Xn[0],0===Xn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Yr(r);if(-.5===n)return 1/Yr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Xr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:zr(r)<1==(n===nr)?0:nr}(r,n)}if(on.assign(r,Xn,1,0),u=Xn[0],0===Xn[1]){if(0===u)return function(r,n){return n===tr?nr:n===nr?0:n>0?qr(n)?r:0:qr(n)?_n(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&qr(n))return-1;if(Xr(r))return r===tr?zn(-0,-n):n<0?0:nr}if(r<0&&!1===ir(n))return(r-r)/(r-r);if(i=zr(r),t=u&yn|0,e=a&yn|0,f=a>>>31|0,o=(o=u>>>31|0)&&qr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(dn(r)&yn)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?o*Zn*Zn:o*qn*qn;if(t>1072693248)return 0===f?o*Zn*Zn:o*qn*qn;l=function(r,n){var t,e,i,u,a,o;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=pn(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r}(Yn,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,w,y,b,g,h,d,N,m,H,I;return N=0,t<jn&&(N-=53,t=dn(n*=9007199254740992)),N+=(t>>20)-Wn|0,t=1072693248|(m=1048575&t|0),m<=235662?H=0:m<767610?H=1:(H=0,N+=1,t-=jn),a=pn(i=(h=(n=Sn(n,t))-(c=Ln[H]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=Sn(0,e+=H<<18),g=(u=i*i)*u*(0===(I=u)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=pn(f=3+(u=a*a)+(g+=(o=d*(h-a*f-a*(n-(f-c))))*(a+i)),0),y=(v=-7.028461650952758e-9*(p=pn(p=(h=a*f)+(d=o*f+(g-(f-3-u))*i),0))+.9617966939259756*(d-(p-h))+Tn[H])-((w=pn(w=(l=.9617967009544373*p)+v+(s=kn[H])+(b=N),0))-b-s-l),r[0]=w,r[1]=y,r}(Yn,i,t);if(v=(p=(n-(c=pn(n,0)))*l[0]+n*l[1])+(s=c*l[0]),on.assign(v,Xn,1,0),w=ln(Xn[0]),y=ln(Xn[1]),w>=Cn){if(0!=(w-Cn|y))return o*Zn*Zn;if(p+8008566259537294e-32>v-s)return o*Zn*Zn}else if((w&yn)>=1083231232){if(0!=(w-3230714880|y))return o*qn*qn;if(p<=v-s)return o*qn*qn}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l;return p=((s=r&yn|0)>>20)-Wn|0,c=0,s>1071644672&&(i=Sn(0,((c=r+(Pn>>p+1)>>>0)&~($n>>(p=((c&yn)>>20)-Wn|0)))>>>0),c=(c&$n|Pn)>>20-p>>>0,r<0&&(c=-c),n-=i),r=ln(r=dn(f=1-((f=(u=.6931471824645996*(i=pn(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<20>>>0)>>20<=0?Rn(f,c):Sn(f,r)}(w,s,p),o*v}function Dn(r){return Zr(r>0?r-1:r+1)}function Jn(r){return r===nr||r===tr}var Kn=Math.sqrt;function Bn(r){return Math.abs(r)}var Qn,rt={uint16:xr,uint8:Er};Qn=function(){var r;return(r=new rt.uint16(1))[0]=4660,52===new rt.uint8(r.buffer)[0]}();var nt,tt,et=Qn;!0===et?(nt=1,tt=0):(nt=0,tt=1);var it={HIGH:nt,LOW:tt},ut=new Nr(1),at=new yr(ut.buffer),ot=it.HIGH,ft=it.LOW;function ct(r,n,t,e){return ut[0]=r,n[e]=at[ot],n[e+t]=at[ft],n}function st(r){return ct(r,[0,0],1,0)}R(st,"assign",ct);var pt=!0===et?0:1,lt=new Nr(1),vt=new yr(lt.buffer);function wt(r,n){return lt[0]=r,vt[pt]=n>>>0,lt[0]}function yt(r){return 0|r}var bt,gt,ht=2147483647,dt=!0===et?1:0,Nt=new Nr(1),mt=new yr(Nt.buffer);function Ht(r){return Nt[0]=r,mt[dt]}!0===et?(bt=1,gt=0):(bt=0,gt=1);var It={HIGH:bt,LOW:gt},At=new Nr(1),Et=new yr(At.buffer),Ot=It.HIGH,_t=It.LOW;function Ut(r,n){return Et[Ot]=r,Et[_t]=n,At[0]}var Gt=[0,0];function xt(r,n){var t,e;return st.assign(r,Gt,1,0),t=Gt[0],t&=ht,e=Ht(n),Ut(t|=e&=2147483648,Gt[1])}var St=!0===et?1:0,Wt=new Nr(1),jt=new yr(Wt.buffer);function Lt(r,n){return Wt[0]=r,jt[St]=n>>>0,Wt[0]}var kt=1023,Tt=1048576,Ft=[1,1.5],Vt=[0,.5849624872207642],Mt=[0,1.350039202129749e-8];function Rt(r,n,t,e){return cr(r)||Jn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Bn(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}R((function(r){return Rt(r,[0,0],1,0)}),"assign",Rt);var $t=[0,0],Pt=[0,0];function Ct(r,n){var t,e;return 0===n||0===r||cr(r)||Jn(r)?r:(Rt(r,$t,1,0),n+=$t[1],n+=function(r){var n=Ht(r);return(n=(2146435072&n)>>>20)-kt|0}(r=$t[0]),n<-1074?xt(0,r):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,st.assign(r,Pt,1,0),t=Pt[0],t&=2148532223,e*Ut(t|=n+kt<<20,Pt[1])))}var Zt=1048575,qt=1048576,Xt=1083179008,Yt=1e300,zt=1e-300,Dt=[0,0],Jt=[0,0];function Kt(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,w,y;if(cr(r)||cr(n))return NaN;if(st.assign(n,Dt,1,0),a=Dt[0],0===Dt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Kn(r);if(-.5===n)return 1/Kn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Jn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Bn(r)<1==(n===nr)?0:nr}(r,n)}if(st.assign(r,Dt,1,0),u=Dt[0],0===Dt[1]){if(0===u)return function(r,n){return n===tr?nr:n===nr?0:n>0?Dn(n)?r:0:Dn(n)?xt(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&Dn(n))return-1;if(Jn(r))return r===tr?Kt(-0,-n):n<0?0:nr}if(r<0&&!1===ir(n))return(r-r)/(r-r);if(i=Bn(r),t=u&ht|0,e=a&ht|0,f=a>>>31|0,o=(o=u>>>31|0)&&Dn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Ht(r)&ht)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?o*Yt*Yt:o*zt*zt;if(t>1072693248)return 0===f?o*Yt*Yt:o*zt*zt;l=function(r,n){var t,e,i,u,a,o;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=wt(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r}(Jt,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,w,y,b,g,h,d,N,m,H,I;return N=0,t<Tt&&(N-=53,t=Ht(n*=9007199254740992)),N+=(t>>20)-kt|0,t=1072693248|(m=1048575&t|0),m<=235662?H=0:m<767610?H=1:(H=0,N+=1,t-=Tt),a=wt(i=(h=(n=Lt(n,t))-(c=Ft[H]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=Lt(0,e+=H<<18),g=(u=i*i)*u*(0===(I=u)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=wt(f=3+(u=a*a)+(g+=(o=d*(h-a*f-a*(n-(f-c))))*(a+i)),0),y=(v=-7.028461650952758e-9*(p=wt(p=(h=a*f)+(d=o*f+(g-(f-3-u))*i),0))+.9617966939259756*(d-(p-h))+Mt[H])-((w=wt(w=(l=.9617967009544373*p)+v+(s=Vt[H])+(b=N),0))-b-s-l),r[0]=w,r[1]=y,r}(Jt,i,t);if(v=(p=(n-(c=wt(n,0)))*l[0]+n*l[1])+(s=c*l[0]),st.assign(v,Dt,1,0),w=yt(Dt[0]),y=yt(Dt[1]),w>=Xt){if(0!=(w-Xt|y))return o*Yt*Yt;if(p+8008566259537294e-32>v-s)return o*Yt*Yt}else if((w&ht)>=1083231232){if(0!=(w-3230714880|y))return o*zt*zt;if(p<=v-s)return o*zt*zt}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l;return p=((s=r&ht|0)>>20)-kt|0,c=0,s>1071644672&&(i=Lt(0,((c=r+(qt>>p+1)>>>0)&~(Zt>>(p=((c&ht)>>20)-kt|0)))>>>0),c=(c&Zt|qt)>>20-p>>>0,r<0&&(c=-c),n-=i),r=yt(r=Ht(f=1-((f=(u=.6931471824645996*(i=wt(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<20>>>0)>>20<=0?Ct(f,c):Lt(f,r)}(w,s,p),o*v}var Bt=Kn(1/12);function Qt(r){return Zr(r>0?r-1:r+1)}function re(r){return r===nr||r===tr}var ne=Math.sqrt;function te(r){return Math.abs(r)}var ee,ie={uint16:xr,uint8:Er};ee=function(){var r;return(r=new ie.uint16(1))[0]=4660,52===new ie.uint8(r.buffer)[0]}();var ue,ae,oe=ee;!0===oe?(ue=1,ae=0):(ue=0,ae=1);var fe={HIGH:ue,LOW:ae},ce=new Nr(1),se=new yr(ce.buffer),pe=fe.HIGH,le=fe.LOW;function ve(r,n,t,e){return ce[0]=r,n[e]=se[pe],n[e+t]=se[le],n}function we(r){return ve(r,[0,0],1,0)}R(we,"assign",ve);var ye=!0===oe?0:1,be=new Nr(1),ge=new yr(be.buffer);function he(r,n){return be[0]=r,ge[ye]=n>>>0,be[0]}function de(r){return 0|r}var Ne,me,He=2147483647,Ie=!0===oe?1:0,Ae=new Nr(1),Ee=new yr(Ae.buffer);function Oe(r){return Ae[0]=r,Ee[Ie]}!0===oe?(Ne=1,me=0):(Ne=0,me=1);var _e={HIGH:Ne,LOW:me},Ue=new Nr(1),Ge=new yr(Ue.buffer),xe=_e.HIGH,Se=_e.LOW;function We(r,n){return Ge[xe]=r,Ge[Se]=n,Ue[0]}var je=[0,0];function Le(r,n){var t,e;return we.assign(r,je,1,0),t=je[0],t&=He,e=Oe(n),We(t|=e&=2147483648,je[1])}var ke=!0===oe?1:0,Te=new Nr(1),Fe=new yr(Te.buffer);function Ve(r,n){return Te[0]=r,Fe[ke]=n>>>0,Te[0]}var Me=1023,Re=1048576,$e=[1,1.5],Pe=[0,.5849624872207642],Ce=[0,1.350039202129749e-8];function Ze(r,n,t,e){return cr(r)||re(r)?(n[e]=r,n[e+t]=0,n):0!==r&&te(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}R((function(r){return Ze(r,[0,0],1,0)}),"assign",Ze);var qe=[0,0],Xe=[0,0];function Ye(r,n){var t,e;return 0===n||0===r||cr(r)||re(r)?r:(Ze(r,qe,1,0),n+=qe[1],n+=function(r){var n=Oe(r);return(n=(2146435072&n)>>>20)-Me|0}(r=qe[0]),n<-1074?Le(0,r):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,we.assign(r,Xe,1,0),t=Xe[0],t&=2148532223,e*We(t|=n+Me<<20,Xe[1])))}var ze=1048575,De=1048576,Je=1083179008,Ke=1e300,Be=1e-300,Qe=[0,0],ri=[0,0];function ni(r,n){var t,e,i,u,a,o,f,c,s,p,l,v,w,y;if(cr(r)||cr(n))return NaN;if(we.assign(n,Qe,1,0),a=Qe[0],0===Qe[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ne(r);if(-.5===n)return 1/ne(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(re(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:te(r)<1==(n===nr)?0:nr}(r,n)}if(we.assign(r,Qe,1,0),u=Qe[0],0===Qe[1]){if(0===u)return function(r,n){return n===tr?nr:n===nr?0:n>0?Qt(n)?r:0:Qt(n)?Le(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&Qt(n))return-1;if(re(r))return r===tr?ni(-0,-n):n<0?0:nr}if(r<0&&!1===ir(n))return(r-r)/(r-r);if(i=te(r),t=u&He|0,e=a&He|0,f=a>>>31|0,o=(o=u>>>31|0)&&Qt(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Oe(r)&He)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?o*Ke*Ke:o*Be*Be;if(t>1072693248)return 0===f?o*Ke*Ke:o*Be*Be;l=function(r,n){var t,e,i,u,a,o;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=he(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r}(ri,i)}else l=function(r,n,t){var e,i,u,a,o,f,c,s,p,l,v,w,y,b,g,h,d,N,m,H,I;return N=0,t<Re&&(N-=53,t=Oe(n*=9007199254740992)),N+=(t>>20)-Me|0,t=1072693248|(m=1048575&t|0),m<=235662?H=0:m<767610?H=1:(H=0,N+=1,t-=Re),a=he(i=(h=(n=Ve(n,t))-(c=$e[H]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=Ve(0,e+=H<<18),g=(u=i*i)*u*(0===(I=u)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=he(f=3+(u=a*a)+(g+=(o=d*(h-a*f-a*(n-(f-c))))*(a+i)),0),y=(v=-7.028461650952758e-9*(p=he(p=(h=a*f)+(d=o*f+(g-(f-3-u))*i),0))+.9617966939259756*(d-(p-h))+Ce[H])-((w=he(w=(l=.9617967009544373*p)+v+(s=Pe[H])+(b=N),0))-b-s-l),r[0]=w,r[1]=y,r}(ri,i,t);if(v=(p=(n-(c=he(n,0)))*l[0]+n*l[1])+(s=c*l[0]),we.assign(v,Qe,1,0),w=de(Qe[0]),y=de(Qe[1]),w>=Je){if(0!=(w-Je|y))return o*Ke*Ke;if(p+8008566259537294e-32>v-s)return o*Ke*Ke}else if((w&He)>=1083231232){if(0!=(w-3230714880|y))return o*Be*Be;if(p<=v-s)return o*Be*Be}return v=function(r,n,t){var e,i,u,a,o,f,c,s,p,l;return p=((s=r&He|0)>>20)-Me|0,c=0,s>1071644672&&(i=Ve(0,((c=r+(De>>p+1)>>>0)&~(ze>>(p=((c&He)>>20)-Me|0)))>>>0),c=(c&ze|De)>>20-p>>>0,r<0&&(c=-c),n-=i),r=de(r=Oe(f=1-((f=(u=.6931471824645996*(i=he(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<20>>>0)>>20<=0?Ye(f,c):Ve(f,r)}(w,s,p),o*v}function ti(r,n,t){return cr(r)||cr(n)||cr(t)||!ir(n)||!ir(t)||n>t?NaN:r<n?0:r>=t?1:(er(r)-n+1)/(t-n+1)}R(ti,"factory",(function(r,n){var t,e,i;return cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?(i=NaN,function(){return i}):(t=r-1,e=n-r+1,function(i){return cr(i)?NaN:i<r?0:i>=n?1:(er(i)-t)/e})}));var ei,ii={uint16:xr,uint8:Er};ei=function(){var r;return(r=new ii.uint16(1))[0]=4660,52===new ii.uint8(r.buffer)[0]}();var ui=ei,ai=!0===ui?1:0,oi=new Nr(1),fi=new yr(oi.buffer);function ci(r){return oi[0]=r,fi[ai]}var si=!0===ui?1:0,pi=new Nr(1),li=new yr(pi.buffer),vi=.6931471803691238,wi=1.9082149292705877e-10,yi=1048575;function bi(r){var n,t,e,i,u,a,o,f,c,s,p,l;return 0===r?tr:cr(r)||r<0?NaN:(u=0,(t=ci(r))<1048576&&(u-=54,t=ci(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=yi)&1048576|0)>>20|0,o=(r=function(r,n){return pi[0]=r,li[si]=n>>>0,pi[0]}(r,t|1072693248^f))-1,(yi&2+t)<3?0===o?0===u?0:u*vi+u*wi:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*vi-(a-u*wi-o)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=o/(2+o))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*o*o,0===u?o-(n-s*(n+a)):u*vi-(n-(s*(n+a)+u*wi)-o)):0===u?o-s*(o-a):u*vi-(s*(o-a)-u*wi-o))))}function gi(r,n,t){return cr(r)||cr(n)||cr(t)||!ir(n)||!ir(t)||n>t?NaN:r<n?tr:r>=t?0:bi(er(r)-n+1)-bi(t-n+1)}R(gi,"factory",(function(r,n){var t,e,i;return cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?(i=NaN,function(){return i}):(e=r-1,t=bi(n-r+1),function(i){return cr(i)?NaN:i<r?tr:i>=n?0:bi(er(i)-e)-t})}));var hi,di={uint16:xr,uint8:Er};hi=function(){var r;return(r=new di.uint16(1))[0]=4660,52===new di.uint8(r.buffer)[0]}();var Ni=hi,mi=!0===Ni?1:0,Hi=new Nr(1),Ii=new yr(Hi.buffer);function Ai(r){return Hi[0]=r,Ii[mi]}var Ei=!0===Ni?1:0,Oi=new Nr(1),_i=new yr(Oi.buffer),Ui=.6931471803691238,Gi=1.9082149292705877e-10,xi=1048575;function Si(r){var n,t,e,i,u,a,o,f,c,s,p,l;return 0===r?tr:cr(r)||r<0?NaN:(u=0,(t=Ai(r))<1048576&&(u-=54,t=Ai(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=xi)&1048576|0)>>20|0,o=(r=function(r,n){return Oi[0]=r,_i[Ei]=n>>>0,Oi[0]}(r,t|1072693248^f))-1,(xi&2+t)<3?0===o?0===u?0:u*Ui+u*Gi:(a=o*o*(.5-.3333333333333333*o),0===u?o-a:u*Ui-(a-u*Gi-o)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=o/(2+o))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*o*o,0===u?o-(n-s*(n+a)):u*Ui-(n-(s*(n+a)+u*Gi)-o)):0===u?o-s*(o-a):u*Ui-(s*(o-a)-u*Gi-o))))}function Wi(r,n,t){return cr(r)||cr(n)||cr(t)||!ir(n)||!ir(t)||n>t?NaN:r<n||r>t||!ir(r)?tr:-Si(t-n+1)}R(Wi,"factory",(function(r,n){var t,e;return cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?(e=NaN,function(){return e}):(t=-Si(n-r+1),function(e){return cr(e)?NaN:e<r||e>n||!ir(e)?tr:t})}));var ji,Li={uint16:xr,uint8:Er};ji=function(){var r;return(r=new Li.uint16(1))[0]=4660,52===new Li.uint8(r.buffer)[0]}();var ki=ji,Ti=!0===ki?1:0,Fi=new Nr(1),Vi=new yr(Fi.buffer);function Mi(r){return Fi[0]=r,Vi[Ti]}var Ri,$i,Pi=!0===ki?1:0,Ci=new Nr(1),Zi=new yr(Ci.buffer);function qi(r,n){return Ci[0]=r,Zi[Pi]=n>>>0,Ci[0]}!0===ki?(Ri=1,$i=0):(Ri=0,$i=1);var Xi={HIGH:Ri,LOW:$i},Yi=new Nr(1),zi=new yr(Yi.buffer),Di=Xi.HIGH,Ji=Xi.LOW,Ki=.6931471803691238,Bi=1.9082149292705877e-10,Qi=1.4426950408889634;function ru(r){var n,t,e,i,u,a,o,f,c,s,p,l,v,w,y;if(r===nr||cr(r))return r;if(r===tr)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=38.816242111356935){if(e)return-1;if(f>=709.782712893384)return nr}if(a=0|Mi(f),f>.34657359027997264)f<1.0397207708399179?e?(i=r+Ki,u=-Bi,v=-1):(i=r-Ki,u=Bi,v=1):(v=e?Qi*r-.5:Qi*r+.5,i=r-(p=v|=0)*Ki,u=p*Bi),s=i-(r=i-u)-u;else{if(a<1016070144)return r;v=0}return o=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((o-(p=3-o*n))/(6-r*p)),0===v?r-(r*l-c):(w=1023+v<<20,y=0,zi[Di]=w,zi[Ji]=y,t=Yi[0],l=r*(l-s)-s,l-=c,-1===v?.5*(r-l)-.5:1===v?r<-.25?-2*(l-(r+.5)):1+2*(r-l):v<=-2||v>56?(f=1-(l-r),1024===v?f=qi(f,i=Mi(f)+(v<<20)|0):f*=t,f-1):(p=1,v<20?f=(p=qi(p,i=1072693248-(2097152>>v)|0))-(l-r):(f=r-(l+(p=qi(p,i=1023-v<<20|0))),f+=1),f*=t))}var nu=Math.ceil;function tu(r){return r<0?nu(r):er(r)}function eu(r){return r===nr||r===tr}var iu,uu={uint16:xr,uint8:Er};iu=function(){var r;return(r=new uu.uint16(1))[0]=4660,52===new uu.uint8(r.buffer)[0]}();var au,ou,fu=iu;!0===fu?(au=1,ou=0):(au=0,ou=1);var cu={HIGH:au,LOW:ou},su=new Nr(1),pu=new yr(su.buffer),lu=cu.HIGH,vu=cu.LOW;function wu(r,n,t,e){return su[0]=r,n[e]=pu[lu],n[e+t]=pu[vu],n}function yu(r){return wu(r,[0,0],1,0)}R(yu,"assign",wu);var bu,gu,hu=!0===fu?1:0,du=new Nr(1),Nu=new yr(du.buffer);function mu(r){return du[0]=r,Nu[hu]}!0===fu?(bu=1,gu=0):(bu=0,gu=1);var Hu={HIGH:bu,LOW:gu},Iu=new Nr(1),Au=new yr(Iu.buffer),Eu=Hu.HIGH,Ou=Hu.LOW;function _u(r,n){return Au[Eu]=r,Au[Ou]=n,Iu[0]}var Uu=[0,0];function Gu(r,n,t,e){return cr(r)||eu(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}R((function(r){return Gu(r,[0,0],1,0)}),"assign",Gu);var xu=[0,0],Su=[0,0];function Wu(r,n){var t,e,i,u,a,o;return 0===n||0===r||cr(r)||eu(r)?r:(Gu(r,xu,1,0),n+=xu[1],n+=function(r){var n=mu(r);return(n=(2146435072&n)>>>20)-1023|0}(r=xu[0]),n<-1074?(i=0,u=r,yu.assign(i,Uu,1,0),a=Uu[0],a&=2147483647,o=mu(u),_u(a|=o&=2147483648,Uu[1])):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,yu.assign(r,Su,1,0),t=Su[0],t&=2148532223,e*_u(t|=n+1023<<20,Su[1])))}var ju=1.4426950408889634,Lu=1/(1<<28);function ku(r){var n;return cr(r)||r===nr?r:r===tr?0:r>709.782712893384?nr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Lu?1+r:function(r,n,t){var e,i,u,a;return Wu(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=tu(r<0?ju*r-.5:ju*r+.5)),1.9082149292705877e-10*n,n)}function Tu(r,n,t){var e,i;return cr(r)||cr(n)||cr(t)||!ir(n)||!ir(t)||n>t?NaN:0===r?1:(i=t-n+1,e=ku(r*n)*ru(r*i),e/=i*ru(r))}function Fu(r,n,t){return cr(r)||cr(n)||cr(t)||!ir(n)||!ir(t)||n>t?NaN:r<n||r>t||!ir(r)?0:1/(t-n+1)}function Vu(r,n,t){return cr(r)||cr(n)||cr(t)||!ir(n)||!ir(t)||n>t||r<0||r>1?NaN:n+er(r*(t-n+1))}function Mu(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function Ru(){var r,n;if(!(this instanceof Ru))return 0===arguments.length?new Ru:new Ru(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!ar(r=arguments[0]))throw new TypeError(Mu("0yb8s,HF",r));if(!ar(n))throw new TypeError(Mu("0yb8t,HG",n));if(r>n)throw new RangeError(Mu("0ybHH",r,n))}else r=0,n=1;return M(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!ar(t))throw new TypeError(Mu("0yb8v,HI",t));if(t>n)throw new RangeError(Mu("0yb8w,HJ",n,t));r=t}}),M(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!ar(t))throw new TypeError(Mu("0yb8v,HI",t));if(r>t)throw new RangeError(Mu("0yb8x,HK",r,t));n=t}}),this}return R(Tu,"factory",(function(r,n){var t,e;return cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?(e=NaN,function(){return e}):(t=n-r+1,function(n){var e;return cr(n)?NaN:0===n?1:(e=ku(n*r)*ru(n*t),e/=t*ru(n))})})),R(Fu,"factory",(function(r,n){var t,e;return cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?(e=NaN,function(){return e}):(t=1/(n-r+1),function(e){return cr(e)?NaN:e<r||e>n||!ir(e)?0:t})})),R(Vu,"factory",(function(r,n){var t,e;return cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?(e=NaN,function(){return e}):(t=n-r+1,function(n){return cr(n)||n<0||n>1?NaN:r+er(n*t)})})),$(Ru.prototype,"entropy",(function(){return r=this.a,n=this.b,cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?NaN:Cr(n-r+1);var r,n})),$(Ru.prototype,"kurtosis",(function(){return r=this.a,n=this.b,cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?NaN:-1.2*((t=zn(n-r+1,2))+1)/(t-1);var r,n,t})),$(Ru.prototype,"mean",(function(){return r=this.a,n=this.b,cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?NaN:r/2+n/2;var r,n})),$(Ru.prototype,"median",(function(){return r=this.a,n=this.b,cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?NaN:r/2+n/2;var r,n})),$(Ru.prototype,"skewness",(function(){return r=this.a,n=this.b,cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?NaN:0;var r,n})),$(Ru.prototype,"stdev",(function(){return r=this.a,n=this.b,cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?NaN:Bt*Kn(Kt(n-r+1,2)-1);var r,n})),$(Ru.prototype,"variance",(function(){return r=this.a,n=this.b,cr(r)||cr(n)||!ir(r)||!ir(n)||r>n?NaN:(ni(n-r+1,2)-1)/12;var r,n})),R(Ru.prototype,"cdf",(function(r){return ti(r,this.a,this.b)})),R(Ru.prototype,"logcdf",(function(r){return gi(r,this.a,this.b)})),R(Ru.prototype,"logpmf",(function(r){return Wi(r,this.a,this.b)})),R(Ru.prototype,"mgf",(function(r){return Tu(r,this.a,this.b)})),R(Ru.prototype,"pmf",(function(r){return Fu(r,this.a,this.b)})),R(Ru.prototype,"quantile",(function(r){return Vu(r,this.a,this.b)})),Ru},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).DiscreteUniform=n();
//# sourceMappingURL=browser.js.map
