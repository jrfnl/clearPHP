---
title:     Use Constant Rather Than Function
---

Some PHP functions have a constant counterpart. This constant is usually faster, or more convenient to use. 


Function  | Constant | Description
--------- | -------- | -----------
`php_sapi_name()`            | `PHP_SAPI`    | Type of interface used
`phpversion()`               | `PHP_VERSION` | Version of the current PHP
`fopen('php://stdin', 'r')`  | `STDIN`       | Stream is already opened. (CLI version)
`fopen('php://stdout', 'w')` | `STDOUT`      | Stream is already opened. (CLI version)
`fopen('php://stderr', 'w')` | `STDERR`      | Stream is already opened. (CLI version)


It is recommended to make use of the constant version.


### Rule Details

The following patterns is considered a warning:

{% highlight php %}
<?php
if (php_sapi_name() === 'cli') {
	/**/
}

{% endhighlight %}{: .warning }


The following patterns is considered valid:

{% highlight php %}
<?php
if (PHP_SAPI === 'cli') {
	/**/
}

{% endhighlight %}{: .good }

