---
title:     No Eval
---

`eval()` is a PHP function that takes a snippet of code provided as a string as parameter and will run it, as part of the current code. 

{% highlight php %}
<?php
$php = 'echo "Hello world";';
eval($php);
// Displays Hello world

{% endhighlight %}


`eval()` has two main drawbacks: 

* it is very slow, as PHP as to stop the current processing, compile the code and include it in the current tree, then resume execution. It is also known that opcode caches don't cache any `eval()`-ed strings, and force the recompilation of that code every time.
* Security wise, `eval()` will most probably be fed with data that is not known at coding time, maybe even with input from the internet user. If the `eval()`-ed code has to include user data, it would need a systematic sanitization that is not possible to do.

`create_function()` is the old style for creating anonymous functions in PHP. It actually relies on the same mechanism as `eval()` and should be treated as such. Both should be replaced by closures.

It is highly recommended to avoid using the `eval()` function and rely on other dynamical features of PHP such as variables variables. 


### Rule Details

Any usage of `eval()` is forbidden. 

The following are considered warnings:
{% highlight php %}
<?php
if(substr($variable, 0, 9) === '$GLOBALS[')){
	eval("\$value =\"$format[sql]\";");
}

$newfunc = create_function('$a,$b', 'return "ln($a) + ln($b) = " . log($a * $b);');

{% endhighlight %}{: .warning }


The following are considered legit:

{% highlight php %}
<?php
$closure = function ($a , $b) {
	return "ln($a) + ln($b) = " . log($a * $b)
};

{% endhighlight %}{: .good }


### When Not To Use This Rule

Please, always use this rule.


### Further Reading

* [Using Eval in PHP](http://blog.joshuaeichorn.com/archives/2005/08/01/using-eval-in-php/)
* [eval](http://php.net/function.eval)
* [create_function](http://php.net/function.create_function)
* [Closures](http://php.net/class.closure)


#### Related rules

* [Avoid Those Functions]



[Avoid Those Functions]: {{ "/good-practices/avoid-those-functions/" | prepend: site.clearphp.url }}
