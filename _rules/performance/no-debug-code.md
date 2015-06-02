---
title:     No Debug Code
---

Debug code comes in several flavours:

* `var_dump()` and `print_r()`
* `print` or `echo` with information (i.e. `echo 'DEBUG';`. That includes HTML comments or `$debug` messages.
* Helper functions or classes, such as Kint, php-ref, dump_r, Krumo, dBug.

{% highlight php %}
<?php
if (!is_object($dbconnexion)) {
	debug($dbconnexion);
	die();
}

{% endhighlight %}


It is recommended to remove all mention to those tools in production code, so as to avoid situations where they are really used (and are in production). 


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
print 'debug';

require '/kint/Kint.class.php';
Kint::dump( $_SERVER );

{% endhighlight %}{: .warning }


