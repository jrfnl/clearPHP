---
title:     No Letters For Logical Operators
---

Logical operators comes in two flavors: lettered, also known as boolean, `and`, `or` and `xor`. And with symbols, also known as logical operators, `&&`, `||`, `^`, respectively. However, there is a catch: they are not exchangeable. 

In the documentation, the below example shows the difference in precedence:

{% highlight php %}
<?php
// --------------------
// "||" has a greater precedence than "or"

// The result of the expression (false || true) is assigned to $e
// Acts like: ($e = (false || true))
$e = false || true;

// The constant false is assigned to $f and then true is ignored
// Acts like: (($f = false) or true)
$f = false or true;

var_dump($e, $f);

{% endhighlight %}


In the result `$e` is `true`, `$f` is `false`. Most of the time, expected precedence is the one associated with the logical operators `&&`, `||`, `^`. It is recommended to only use these last logical operators. 


### Rule Details

This rule requires that logical operators use `&&`, `||`, `^`, instead of `and`, `or` and `xor`.

The following is wrong:

{% highlight php %}
<?php
$a = 1 and 2 or 3 xor 4;

{% endhighlight %}{: .bad }


The following patterns are considered OK:

{% highlight php %}
<?php
$a = 1 && 2 || 3 ^ 4;

{% endhighlight %}{: .ok }


### Further Reading

* [Logical operators](http://php.net/language.operators.logical)