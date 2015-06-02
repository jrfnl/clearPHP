---
title:     No Missing Argument
---

PHP does not check at compile time if a function or method calls has enough arguments. One may call any function with any number of argument, and this will be checked at execution time. Extra arguments will be dropped, but missing arguments will generate an error. 

This is true for PHP native functions as well.

{% highlight php %}
<?php
function x($a, $b, $c = 2) { return $a + $b; }

x(); // missing arguments 0 and 1
x('a'); // missing arguments 1 

{% endhighlight %}


It is recommended to provide an acceptable number of arguments. The acceptable number may depend on default values in the function signature.


### Rule Details

This rule spots functions and methods calls with less arguments than needed. 

When the called method makes use of a variable number of arguments, using `func_get_args()`, `func_get_arg()` or `func_num_args()`, or even the `...` operator, the number of acceptable arguments is dynamic.


The following codes are considered a warning:

{% highlight php %}
<?php
function x($a, $b, $c = 2) { return $a + $b; }

function z($a, ...$b) { 	return array_sum($b) + $a; }

x(); // missing arguments 0 and 1
x('a'); // missing arguments 1 
x('a', 'b', 'c', 'd'); // arguments 4 will be ignore 

z(); // not enough arguments

{% endhighlight %}{: .warning }


The following patterns are considered legit:

{% highlight php %}
<?php
function x($a, $b, $c = 2) { 	return $a + $b; }
function y($a, $b, $c = 2) { 	return array_sum(func_get_args()); }
function z($a, ...$b) { 	return array_sum($b) + $a; }

x('a', 'b');

y('a', 'b', 'c', 'd'); 

z(1, 2, 3, 4); 

{% endhighlight %}{: .good }


### Further Reading

* [`func_get_arg()`](http://php.net/function.func-get-arg)
* [`func_get_args()`](http://php.net/aliases)
* [`func_num_args()`](http://php.net/function.func-num-args)
* [Variable-length argument lists](http://php.net/functions.arguments.php#functions.variable-arg-list)


#### Related rules

* [All Unique Arguments]
* [Default Argument At The End]
* [No Extra Argument]
* [No Unused Arguments]


[All Unique Arguments]: {{ "/php-manual/all-unique-arguments/" | prepend: site.clearphp.url }}
[Default Argument At The End]: {{ "/php-manual/argument-with-default-at-the-end/" | prepend: site.clearphp.url }}
[No Extra Argument]: {{ "/good-practices/no-extra-argument/" | prepend: site.clearphp.url }}
[No Unused Arguments]: {{ "/good-practices/no-unused-arguments/" | prepend: site.clearphp.url }}