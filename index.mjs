// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-entropy@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-kurtosis@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-mean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-median@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-skewness@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-stdev@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-variance@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-cdf@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-logcdf@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-logpmf@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-mgf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-pmf@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-quantile@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function g(){var s,e;if(!(this instanceof g))return 0===arguments.length?new g:new g(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(j("0yb8s,HF",s));if(!i(e))throw new TypeError(j("0yb8t,HG",e));if(s>e)throw new RangeError(j("0ybHH",s,e))}else s=0,e=1;return t(this,"a",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(j("0yb8v,HI",t));if(t>e)throw new RangeError(j("0yb8w,HJ",e,t));s=t}}),t(this,"b",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(j("0yb8v,HI",t));if(s>t)throw new RangeError(j("0yb8x,HK",s,t));e=t}}),this}e(g.prototype,"entropy",(function(){return r(this.a,this.b)})),e(g.prototype,"kurtosis",(function(){return n(this.a,this.b)})),e(g.prototype,"mean",(function(){return o(this.a,this.b)})),e(g.prototype,"median",(function(){return d(this.a,this.b)})),e(g.prototype,"skewness",(function(){return m(this.a,this.b)})),e(g.prototype,"stdev",(function(){return p(this.a,this.b)})),e(g.prototype,"variance",(function(){return f(this.a,this.b)})),s(g.prototype,"cdf",(function(t){return h(t,this.a,this.b)})),s(g.prototype,"logcdf",(function(t){return a(t,this.a,this.b)})),s(g.prototype,"logpmf",(function(t){return u(t,this.a,this.b)})),s(g.prototype,"mgf",(function(t){return c(t,this.a,this.b)})),s(g.prototype,"pmf",(function(t){return b(t,this.a,this.b)})),s(g.prototype,"quantile",(function(t){return l(t,this.a,this.b)}));export{g as default};
//# sourceMappingURL=index.mjs.map
