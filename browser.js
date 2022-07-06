// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,l,y,s;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(o.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),y="get"in f,s="set"in f,l&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,f.get),s&&u&&u.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,get:n})}function y(t){return"number"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",N=p()?function(t){var r,n,e,i,u;if(null==t)return v.call(t);n=t[h],u=h,r=null!=(i=t)&&b.call(i,u);try{t[h]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[h]=n:delete t[h],e}:function(t){return v.call(t)},m=Number,w=m.prototype.toString,d=p();function g(t){return"object"==typeof t&&(t instanceof m||(d?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===N(t)))}function A(t){return y(t)||g(t)}c(A,"isPrimitive",y),c(A,"isObject",g);var _=Number.POSITIVE_INFINITY,U=m.NEGATIVE_INFINITY,j=Math.floor;function E(t){return j(t)===t}function O(t){return t<_&&t>U&&E(t)}function I(t){return y(t)&&O(t)}function T(t){return g(t)&&O(t.valueOf())}function S(t){return I(t)||T(t)}function M(t){return t!=t}c(S,"isPrimitive",I),c(S,"isObject",T);var V,F="function"==typeof Uint32Array,H="function"==typeof Uint32Array?Uint32Array:null,P="function"==typeof Uint32Array?Uint32Array:void 0;V=function(){var t,r,n;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(F&&n instanceof Uint32Array||"[object Uint32Array]"===N(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?P:function(){throw new Error("not implemented")};var G,x=V,q="function"==typeof Float64Array,k="function"==typeof Float64Array?Float64Array:null,L="function"==typeof Float64Array?Float64Array:void 0;G=function(){var t,r,n;if("function"!=typeof k)return!1;try{r=new k([1,3.14,-3.14,NaN]),n=r,t=(q&&n instanceof Float64Array||"[object Float64Array]"===N(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?L:function(){throw new Error("not implemented")};var R,W=G,C="function"==typeof Uint8Array,Y="function"==typeof Uint8Array?Uint8Array:null,D="function"==typeof Uint8Array?Uint8Array:void 0;R=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,256,257]),n=r,t=(C&&n instanceof Uint8Array||"[object Uint8Array]"===N(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?D:function(){throw new Error("not implemented")};var z,B=R,J="function"==typeof Uint16Array,K="function"==typeof Uint16Array?Uint16Array:null,Q="function"==typeof Uint16Array?Uint16Array:void 0;z=function(){var t,r,n;if("function"!=typeof K)return!1;try{r=new K(r=[1,3.14,-3.14,65536,65537]),n=r,t=(J&&n instanceof Uint16Array||"[object Uint16Array]"===N(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Q:function(){throw new Error("not implemented")};var X,Z={uint16:z,uint8:B};(X=new Z.uint16(1))[0]=4660;var $=52===new Z.uint8(X.buffer)[0],tt=!0===$?1:0,rt=new W(1),nt=new x(rt.buffer);function et(t){return rt[0]=t,nt[tt]}var it=!0===$?1:0,ut=new W(1),ot=new x(ut.buffer);function at(t,r){return ut[0]=t,ot[it]=r>>>0,ut[0]}var ft=1023,ct=.6931471803691238,lt=1.9082149292705877e-10,yt=1048575;function st(t){var r,n,e,i,u,o,a,f,c,l,y,s;return 0===t?U:M(t)||t<0?NaN:(u=0,(n=et(t))<1048576&&(u-=54,n=et(t*=0x40000000000000)),n>=2146435072?t+t:(u+=(n>>20)-ft|0,u+=(f=614244+(n&=yt)&1048576|0)>>20|0,a=(t=at(t,n|1072693248^f))-1,(yt&2+n)<3?0===a?0===u?0:u*ct+u*lt:(o=a*a*(.5-.3333333333333333*a),0===u?a-o:u*ct-(o-u*lt-a)):(f=n-398458|0,c=440401-n|0,i=(y=(s=(l=a/(2+a))*l)*s)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=s*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),o=e+i,(f|=c)>0?(r=.5*a*a,0===u?a-(r-l*(r+o)):u*ct-(r-(l*(r+o)+u*lt)-a)):0===u?a-l*(a-o):u*ct-(l*(a-o)-u*lt-a))))}function pt(t){return E(t/2)}function vt(t){return pt(t>0?t-1:t+1)}function bt(t){return t===_||t===U}var ht,Nt,mt=Math.sqrt;function wt(t){return Math.abs(t)}!0===$?(ht=1,Nt=0):(ht=0,Nt=1);var dt={HIGH:ht,LOW:Nt},gt=new W(1),At=new x(gt.buffer),_t=dt.HIGH,Ut=dt.LOW;function jt(t,r){return gt[0]=r,t[0]=At[_t],t[1]=At[Ut],t}function Et(t,r){return 1===arguments.length?jt([0,0],t):jt(t,r)}var Ot,It,Tt=!0===$?0:1,St=new W(1),Mt=new x(St.buffer);function Vt(t,r){return St[0]=t,Mt[Tt]=r>>>0,St[0]}function Ft(t){return 0|t}!0===$?(Ot=1,It=0):(Ot=0,It=1);var Ht={HIGH:Ot,LOW:It},Pt=new W(1),Gt=new x(Pt.buffer),xt=Ht.HIGH,qt=Ht.LOW;function kt(t,r){return Gt[xt]=t,Gt[qt]=r,Pt[0]}var Lt=[0,0];function Rt(t,r){var n,e;return Et(Lt,t),n=Lt[0],n&=2147483647,e=et(r),kt(n|=e&=2147483648,Lt[1])}var Wt=1048576,Ct=[1,1.5],Yt=[0,.5849624872207642],Dt=[0,1.350039202129749e-8];function zt(t,r){return M(r)||bt(r)?(t[0]=r,t[1]=0,t):0!==r&&wt(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var Bt=[0,0],Jt=[0,0];function Kt(t,r){var n,e;return 0===r||0===t||M(t)||bt(t)?t:(function(t,r){1===arguments.length?zt([0,0],t):zt(t,r)}(Bt,t),r+=Bt[1],r+=function(t){var r=et(t);return(r=(2146435072&r)>>>20)-ft|0}(t=Bt[0]),r<-1074?Rt(0,t):r>1023?t<0?U:_:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Et(Jt,t),n=Jt[0],n&=2148532223,e*kt(n|=r+ft<<20,Jt[1])))}var Qt=2147483647,Xt=1048575,Zt=1048576,$t=2147483647,tr=1083179008,rr=1e300,nr=1e-300,er=[0,0],ir=[0,0];function ur(t,r){var n,e,i,u,o,a,f,c,l,y,s,p,v,b;if(M(t)||M(r))return NaN;if(Et(er,r),o=er[0],0===er[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return mt(t);if(-.5===r)return 1/mt(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(bt(r))return function(t,r){return-1===t?(t-t)/(t-t):1===t?1:wt(t)<1==(r===_)?0:_}(t,r)}if(Et(er,t),u=er[0],0===er[1]){if(0===u)return function(t,r){return r===U?_:r===_?0:r>0?vt(r)?t:0:vt(r)?Rt(_,t):_}(t,r);if(1===t)return 1;if(-1===t&&vt(r))return-1;if(bt(t))return t===U?ur(-0,-r):r<0?0:_}if(t<0&&!1===E(r))return(t-t)/(t-t);if(i=wt(t),n=u&$t|0,e=o&$t|0,f=o>>>31|0,a=(a=u>>>31|0)&&vt(r)?-1:1,e>1105199104){if(e>1139802112)return function(t,r){return(2147483647&et(t))<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,r);if(n<1072693247)return 1===f?a*rr*rr:a*nr*nr;if(n>1072693248)return 0===f?a*rr*rr:a*nr*nr;s=function(t,r){var n,e,i,u,o,a;return n=(o=1.9259629911266175e-8*(i=r-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Vt(e=(u=1.4426950216293335*i)+o,0))-u),t[0]=e,t[1]=n,t}(ir,i)}else s=function(t,r,n){var e,i,u,o,a,f,c,l,y,s,p,v,b,h,N,m,w,d,g,A,_;return d=0,n<Wt&&(d-=53,n=et(r*=9007199254740992)),d+=(n>>20)-ft|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,n-=Wt),o=Vt(i=(m=(r=at(r,n))-(c=Ct[A]))*(w=1/(r+c)),0),e=524288+(n>>1|536870912),f=at(0,e+=A<<18),N=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Vt(f=3+(u=o*o)+(N+=(a=w*(m-o*f-o*(r-(f-c))))*(o+i)),0),b=(p=-7.028461650952758e-9*(y=Vt(y=(m=o*f)+(w=a*f+(N-(f-3-u))*i),0))+.9617966939259756*(w-(y-m))+Dt[A])-((v=Vt(v=(s=.9617967009544373*y)+p+(l=Yt[A])+(h=d),0))-h-l-s),t[0]=v,t[1]=b,t}(ir,i,n);if(y=(r-(c=Vt(r,0)))*s[0]+r*s[1],l=c*s[0],Et(er,p=y+l),v=Ft(er[0]),b=Ft(er[1]),v>=tr){if(0!=(v-tr|b))return a*rr*rr;if(y+8008566259537294e-32>p-l)return a*rr*rr}else if((v&$t)>=1083231232){if(0!=(v-3230714880|b))return a*nr*nr;if(y<=p-l)return a*nr*nr}return p=function(t,r,n){var e,i,u,o,a,f,c,l,y,s;return y=((l=t&Qt|0)>>20)-ft|0,c=0,l>1071644672&&(i=at(0,((c=t+(Zt>>y+1)>>>0)&~(Xt>>(y=((c&Qt)>>20)-ft|0)))>>>0),c=(c&Xt|Zt)>>20-y>>>0,t<0&&(c=-c),r-=i),t=Ft(t=et(f=1-((f=(u=.6931471824645996*(i=Vt(i=n+r,0)))+(o=.6931471805599453*(n-(i-r))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=o-(f-u))+f*a)-f))),(t+=c<<20>>>0)>>20<=0?Kt(f,c):at(f,t)}(v,l,y),a*p}var or=mt(1/12);function ar(t,r,n){return M(t)||M(r)||M(n)||!E(r)||!E(n)||r>n?NaN:t<r?0:t>=n?1:(j(t)-r+1)/(n-r+1)}function fr(t){return function(){return t}}function cr(t,r,n){return M(t)||M(r)||M(n)||!E(r)||!E(n)||r>n?NaN:t<r?U:t>=n?0:st(j(t)-r+1)-st(n-r+1)}function lr(t,r,n){return M(t)||M(r)||M(n)||!E(r)||!E(n)||r>n?NaN:t<r||t>n||!E(t)?U:-st(n-r+1)}c(ar,"factory",(function(t,r){var n,e;return M(t)||M(r)||!E(t)||!E(r)||t>r?fr(NaN):(n=t-1,e=r-t+1,function(i){return M(i)?NaN:i<t?0:i>=r?1:(j(i)-n)/e})})),c(cr,"factory",(function(t,r){var n,e;return M(t)||M(r)||!E(t)||!E(r)||t>r?fr(NaN):(e=t-1,n=st(r-t+1),function(i){return M(i)?NaN:i<t?U:i>=r?0:st(j(i)-e)-n})})),c(lr,"factory",(function(t,r){var n;return M(t)||M(r)||!E(t)||!E(r)||t>r?fr(NaN):(n=-st(r-t+1),function(e){return M(e)?NaN:e<t||e>r||!E(e)?U:n})}));var yr=.6931471803691238,sr=1.9082149292705877e-10,pr=1.4426950408889634;function vr(t){var r,n,e,i,u,o,a,f,c,l,y,s;if(t===_||M(t))return t;if(t===U)return-1;if(0===t)return t;if(t<0?(n=!0,a=-t):(n=!1,a=t),a>=38.816242111356935){if(n)return-1;if(a>=709.782712893384)return _}if(u=0|et(a),a>.34657359027997264)a<1.0397207708399179?n?(e=t+yr,i=-sr,s=-1):(e=t-yr,i=sr,s=1):(s=n?pr*t-.5:pr*t+.5,e=t-(l=s|=0)*yr,i=l*sr),c=e-(t=e-i)-i;else{if(u<1016070144)return t;s=0}return o=1+(f=t*(r=.5*t))*function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}(f),y=f*((o-(l=3-o*r))/(6-t*l)),0===s?t-(t*y-f):(y=t*(y-c)-c,y-=f,-1===s?.5*(t-y)-.5:1===s?t<-.25?-2*(y-(t+.5)):1+2*(t-y):s<=-2||s>56?(a=at(a=1-(y-t),e=et(a)+(s<<20)|0))-1:(l=1,s<20?a=(l=at(l,e=1072693248-(2097152>>s)|0))-(y-t):(a=t-(y+(l=at(l,e=ft-s<<20|0))),a+=1),at(a,e=et(a)+(s<<20)|0)))}var br=Math.ceil;function hr(t){return t<0?br(t):j(t)}var Nr=1.4426950408889634,mr=1/(1<<28);function wr(t){var r;return M(t)||t===_?t:t===U?0:t>709.782712893384?_:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<mr?1+t:function(t,r,n){var e,i,u,o;return Kt(1-(r-(e=t-r)*(u=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=hr(t<0?Nr*t-.5:Nr*t+.5)),1.9082149292705877e-10*r,r)}function dr(t,r,n){var e,i;return M(t)||M(r)||M(n)||!E(r)||!E(n)||r>n?NaN:0===t?1:(i=n-r+1,e=wr(t*r)*vr(t*i),e/=i*vr(t))}function gr(t,r,n){return M(t)||M(r)||M(n)||!E(r)||!E(n)||r>n?NaN:t<r||t>n||!E(t)?0:1/(n-r+1)}function Ar(t,r,n){return M(t)||M(r)||M(n)||!E(r)||!E(n)||r>n||t<0||t>1?NaN:r+j(t*(n-r+1))}function _r(){var t,r=arguments,n=r[0],e="https://stdlib.io/e/"+n+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}function Ur(){var t,r;if(!(this instanceof Ur))return 0===arguments.length?new Ur:new Ur(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!I(t=arguments[0]))throw new TypeError(_r("invalid argument. Minimum support must be an integer. Value: `%s`.",t));if(!I(r))throw new TypeError(_r("invalid argument. Maximum support must be an integer. Value: `%s`.",r));if(t>r)throw new RangeError(_r("invalid arguments. Minimum support must be less than or equal to maximum support. Value: `(%d, %d)`.",t,r))}else t=0,r=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!I(n))throw new TypeError(_r("invalid assignment. Must be an integer. Value: `%s`.",n));if(n>r)throw new RangeError(_r("invalid assignment. Must be less than or equal to %u. Value: `%d`.",r,n));t=n}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!I(n))throw new TypeError(_r("invalid assignment. Must be an integer. Value: `%s`.",n));if(t>n)throw new RangeError(_r("invalid assignment. Must be greater than or equal to %u. Value: `%s`.",t,n));r=n}}),this}return c(dr,"factory",(function(t,r){var n;return M(t)||M(r)||!E(t)||!E(r)||t>r?fr(NaN):(n=r-t+1,function(r){var e;return M(r)?NaN:0===r?1:(e=wr(r*t)*vr(r*n),e/=n*vr(r))})})),c(gr,"factory",(function(t,r){var n;return M(t)||M(r)||!E(t)||!E(r)||t>r?fr(NaN):(n=1/(r-t+1),function(e){return M(e)?NaN:e<t||e>r||!E(e)?0:n})})),c(Ar,"factory",(function(t,r){var n;return M(t)||M(r)||!E(t)||!E(r)||t>r?fr(NaN):(n=r-t+1,function(r){return M(r)||r<0||r>1?NaN:t+j(r*n)})})),l(Ur.prototype,"entropy",(function(){return t=this.a,r=this.b,M(t)||M(r)||!E(t)||!E(r)||t>r?NaN:st(r-t+1);var t,r})),l(Ur.prototype,"kurtosis",(function(){return t=this.a,r=this.b,M(t)||M(r)||!E(t)||!E(r)||t>r?NaN:-1.2*((n=ur(r-t+1,2))+1)/(n-1);var t,r,n})),l(Ur.prototype,"mean",(function(){return t=this.a,r=this.b,M(t)||M(r)||!E(t)||!E(r)||t>r?NaN:t/2+r/2;var t,r})),l(Ur.prototype,"median",(function(){return t=this.a,r=this.b,M(t)||M(r)||!E(t)||!E(r)||t>r?NaN:t/2+r/2;var t,r})),l(Ur.prototype,"skewness",(function(){return t=this.a,r=this.b,M(t)||M(r)||!E(t)||!E(r)||t>r?NaN:0;var t,r})),l(Ur.prototype,"stdev",(function(){return t=this.a,r=this.b,M(t)||M(r)||!E(t)||!E(r)||t>r?NaN:or*mt(ur(r-t+1,2)-1);var t,r})),l(Ur.prototype,"variance",(function(){return t=this.a,r=this.b,M(t)||M(r)||!E(t)||!E(r)||t>r?NaN:(ur(r-t+1,2)-1)/12;var t,r})),c(Ur.prototype,"cdf",(function(t){return ar(t,this.a,this.b)})),c(Ur.prototype,"logcdf",(function(t){return cr(t,this.a,this.b)})),c(Ur.prototype,"logpmf",(function(t){return lr(t,this.a,this.b)})),c(Ur.prototype,"mgf",(function(t){return dr(t,this.a,this.b)})),c(Ur.prototype,"pmf",(function(t){return gr(t,this.a,this.b)})),c(Ur.prototype,"quantile",(function(t){return Ar(t,this.a,this.b)})),Ur},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).DiscreteUniform=r();
//# sourceMappingURL=browser.js.map
