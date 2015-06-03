---
title:     All Unique Arguments
---

When defining a PHP method, multiples arguments may carry the same name.

{% highlight php %}
<?php
function f($a, $a, $a) {
	echo $a;
}

f('b', 'c', 'd'); // prints 'd'

{% endhighlight %}


The incoming values are assigned to the arguments in the same order as in the method definition: the last one overwrites the first.

{% highlight php %}
<?php
function f($a, $b, $a) {
	echo $b , $a;
}

f('e', 'f', 'g'); // prints 'fg'

{% endhighlight %}


It is recommended to always use distinct names for argument variables.


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
function f($b, $a, $a) { /**/ }

function f($a, $b, $a) { /**/ }

function f($a, $a, $a) { /**/ }

function f(Stdclass $a, $a) { /**/ }

function f(Stdclass $a, $a = 2) { /**/ }

function f(Stdclass $a, &$a) { /**/ }

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
function f($a, $b, $c) { /**/ }

{% endhighlight %}{: .ok }


### When Not To Use This Rule

Always use this.


### Further Reading


#### Related rules

* [No Closure Argument Collisions]
* [Default Argument At The End]
* [No Extra Argument]
* [No Missing Argument]
* [No Unused Arguments]


[No Closure Argument Collisions]: {{ "/good-practices/imported-collision/" | prepend: site.clearphp.url }}
[Default Argument At The End]: {{ "/php-manual/argument-with-default-at-the-end/" | prepend: site.clearphp.url }}
[No Extra Argument]: {{ "/good-practices/no-extra-argument/" | prepend: site.clearphp.url }}
[No Missing Argument]: {{ "/good-practices/no-missing-argument/" | prepend: site.clearphp.url }}
[No Unused Arguments]: {{ "/good-practices/no-unused-arguments/" | prepend: site.clearphp.url }}