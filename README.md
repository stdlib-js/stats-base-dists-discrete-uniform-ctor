<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Discrete Uniform

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Discrete uniform distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-discrete-uniform-ctor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var DiscreteUniform = require( '@stdlib/stats-base-dists-discrete-uniform-ctor' );
```

#### DiscreteUniform( \[a, b] )

Returns a [discrete uniform][discrete-uniform-distribution] distribution object.

```javascript
var discreteUniform = new DiscreteUniform();

var mu = discreteUniform.mean;
// returns 0.5
```

By default, `a = 0` and `b = 1`. To create a distribution having a different `a` (minimum support) and `b` (maximum support), provide the corresponding arguments.

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var mu = discreteUniform.mean;
// returns 3.0
```

* * *

## discreteUniform

A [discrete uniform][discrete-uniform-distribution] distribution object has the following properties and methods...

### Writable Properties

#### discreteUniform.a

Minimum support of the distribution. `a` **must** be an integer smaller than or equal to `b`.

```javascript
var discreteUniform = new DiscreteUniform( -2, 2 );

var a = discreteUniform.a;
// returns -2

discreteUniform.a = 0;

a = discreteUniform.a;
// returns 0
```

#### discreteUniform.b

Maximum support of the distribution. `b` **must** be an integer larger than or equal to `a`.

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var b = discreteUniform.b;
// returns 4

discreteUniform.b = 3;

b = discreteUniform.b;
// returns 3
```

* * *

### Computed Properties

#### DiscreteUniform.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var entropy = discreteUniform.entropy;
// returns ~2.197
```

#### DiscreteUniform.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var kurtosis = discreteUniform.kurtosis;
// returns -1.23
```

#### DiscreteUniform.prototype.mean

Returns the [expected value][expected-value].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var mu = discreteUniform.mean;
// returns 8.0
```

#### DiscreteUniform.prototype.median

Returns the [median][median].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var median = discreteUniform.median;
// returns 8.0
```

#### DiscreteUniform.prototype.skewness

Returns the [skewness][skewness].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var skewness = discreteUniform.skewness;
// returns 0.0
```

#### DiscreteUniform.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var s = discreteUniform.stdev;
// returns ~2.582
```

#### DiscreteUniform.prototype.variance

Returns the [variance][variance].

```javascript
var discreteUniform = new DiscreteUniform( 4, 12 );

var s2 = discreteUniform.variance;
// returns ~6.667
```

* * *

### Methods

#### DiscreteUniform.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.cdf( 2.5 );
// returns ~0.333
```

#### DiscreteUniform.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.logcdf( 2.5 );
// returns ~-1.099
```

#### DiscreteUniform.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.logpmf( 4.0 );
// returns ~-1.099
```

#### DiscreteUniform.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.pmf( 3, 0 );
// returns ~0.333
```

#### DiscreteUniform.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var discreteUniform = new DiscreteUniform( 2, 4 );

var y = discreteUniform.quantile( 0.5 );
// returns 3.0

y = discreteUniform.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var DiscreteUniform = require( '@stdlib/stats-base-dists-discrete-uniform-ctor' );

var discreteUniform = new DiscreteUniform( -2, 2 );

var mu = discreteUniform.mean;
// returns 0.0

var median = discreteUniform.median;
// returns 0.0

var s2 = discreteUniform.variance;
// returns 2.0

var y = discreteUniform.cdf( 2.5 );
// returns 1.0
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-discrete-uniform-ctor/main/LICENSE

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
