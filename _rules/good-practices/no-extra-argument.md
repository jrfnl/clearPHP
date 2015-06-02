---
title:     No Extra Argument
---

PHP does not check at compile time whether a function or method call has too many arguments. One may call any function with any number of arguments, and the extra arguments will be dropped at execution time.  

This is true for native PHP functions as well.

{% highlight php %}
<?php
function x($a, $b, $c = 2) { return $a + $b; }

x(1, 2, 3, 4, 5); // two arguments too many

{% endhighlight %}


It is recommended to provide only the needed arguments when calling a method or a function.


### Rule Details

This rule spots function and method calls with more arguments than needed. 

When the called method makes use of a variable number of arguments, using `func_get_args()`, `func_get_arg()` or `func_num_args()`, or even the `...` operator, the number of acceptable arguments is dynamic.


The following codes are considered a warning:

{% highlight php %}
<?php
function x($a, $b, $c = 2) { return $a + $b; }

function z($a, ...$b) { 	return array_sum($b) + $a; }

x(1, 2, 3, 4); // extra argument 4

{% endhighlight %}{: .warning }


The following pattern are considered legit:

{% highlight php %}
<?php
function x($a, $b, $c = 2) { 	return $a + $b; }
function y($a, $b, $c = 2) { 	return array_sum(func_get_args()); }
function z($a, ...$b) { 	return array_sum($b) + $a; }

x('a', 'b', 'c', 'd'); 

y();

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
* [No Missing Argument]
* [No Unused Arguments]


[All Unique Arguments]: {{ "/php-manual/all-unique-arguments/" | prepend: site.clearphp.url }}
[Default Argument At The End]: {{ "/php-manual/argument-with-default-at-the-end/" | prepend: site.clearphp.url }}
[No Missing Argument]: {{ "/good-practices/no-missing-argument/" | prepend: site.clearphp.url }}
[No Unused Arguments]: {{ "/good-practices/no-unused-arguments/" | prepend: site.clearphp.url }}