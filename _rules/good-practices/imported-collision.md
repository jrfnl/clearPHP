---
title:     No Closure Argument Collisions
---

When defining a closure, two kinds of variables may be included in the following code:

* The one used as arguments
* The one stated in the `use` statement

{% highlight php %}
<?php
$a = 1;

$f = function ($b) use ($a) {
	return $a + $b;
};

{% endhighlight %}


PHP will not check for any collision between arguments and imported variables: instead, it will _overwrite_: the imported variable will have precedence over the argument. For example: 

{% highlight php %}
<?php
$a = 1;

$f = function ($a) use ($a) {
	return $a + $a;
};

print $f(2); // this will print '2', aka 1 + 1;

{% endhighlight %}


It is recommended to make sure that all arguments and imported variables are distinct. 


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
function ($a) use ($a) {
	return $a + $a;
};

function ($a, $b, $c) use ($a) {
	return $a + $a;
};

function ($a) use ($a, $b, $c) {
	return $a + $a;
};

{% endhighlight %}{: .warning }


The following codes are not considered warnings:

{% highlight php %}
<?php
function ($a, $b, $c) use ($d, $e, $f) {
	return $a + $b + $c + $d + $e + $f;
};

{% endhighlight %}{: .ok }


### Further Reading


#### Related rules

* [All Unique Arguments]


[All Unique Arguments]: {{ "/php-manual/all-unique-arguments/" | prepend: site.clearphp.url }}