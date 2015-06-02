---
title:     No Exit
---

It is possible to end the execution of a script using `die` or `exit`. These will interrupt the execution of a script and destruct all resources. 

{% highlight php %}
<?php
if (mysql_connect('localhost', 'user', 'pass')) {
	die('No database');
}

{% endhighlight %}


Exiting a script this way will also break any library that is including the `die` or `exit`. This may be difficult to spot, especially if those functions are used without any argument, thus displaying nothing about the location of the exit. 

It is usually better to `throw` an exception or raise an error (with `trigger_error()`) or use any error handling set up available (returning a value, calling a `error` method, etc..). 


### Rule Details

{% highlight php %}
<?php
exit();
die(__METHOD__);

{% endhighlight %}{: .warning }

This rule may also apply to libraries build on top of the `var_dump()` concept, such as [Kint](http://raveren.github.io/kint/) or [Krumo](http://krumo.sourceforge.net/). They provide configuration to disable them while leaving debug traces in the code, which is not the case for native PHP functions such as `print_r`. While this is indeed better, this still means code that won't be used is pushed to production. As such, it must be avoided. 


### When Not To Use This Rule

When the code is run as a commandline script, `exit` and `die` are good to return status, just like `return`. 


### Further Reading

* [Exceptions](http://php.net/language.exceptions)
* [Trigger_error](http://php.net/function.trigger-error)
* [Return](http://php.net/function.return)