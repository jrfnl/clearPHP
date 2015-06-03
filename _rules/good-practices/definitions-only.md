---
title:     Definitions Only Files
---

PHP allows the definitions of structures that will later be called by other parts of the program: constants, functions, classes, interfaces and traits.

{% highlight php %}
<?php
function x($a, $b) {
	return $a + $b;
}

{% endhighlight %}


Those definitions are inert: they won't run by themselves, without being called.

On the other hand, global code, which isn't part of a previously mentioned structures, will be run directly and expect the called expressions be defined.

It is recommended to avoid mixing global code and definitions. This way, including definitions will not alter the execution of the program, beside adding new functionalities. And global code will only run code, and not add anything else.

Inclusion (with `require` and similar language constructs) is not acceptable for this rule: configuring (or including) the autoloader is global code, and should be loaded in another part of the script.


### Rule Details

This rule is aimed at avoiding mixing global code and definitions. 

This rule will tolerate that several structures are defined in the same file. The [rule that requires only one structure per file]({{ '/good-practices/one-class-per-file/' | prepend: site.clearphp.url }}) is a distinct one.

The following patterns are considered warnings:

{% highlight php %}
<?php
define ('DB_ACCESS',true);

$db = new DatabaseConnexion();

{% endhighlight %}{: .warning }


Inclusions (such as the `require_once` below) are not acceptable 

{% highlight php %}
<?php
require_once __DIR__ . '/Autoloader.php';

trait T {
	/**/
}

{% endhighlight %}{: .bad }


The following patterns are not considered warnings:

{% highlight php %}
<?php
define('b', $dbResult->count());

class DatabaseConnexion {
	/**/
}

{% endhighlight %}{: .ok }


{% highlight php %}
<?php
namespace a;
use b;

global $c;

trait DatabaseConnexion {
	/**/
}

{% endhighlight %}{: .ok }


### Further Reading

* [PSR-1: Side effects](http://www.php-fig.org/psr/psr-1/)
