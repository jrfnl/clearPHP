---
title:     No Direct Call To Magic Method
---

Magic methods are used by PHP to run custom code at key points of the execution. The `__clone()` method will be called at cloning time, `__wakeup()` when the object is extracted from session storage, or `__set_state()` when the object is processed by `var_export()`.

Outside their intended usage and a relay within the class hierarchy, there is no need to call those methods. 

{% highlight php %}
<?php
// Don't do this!
echo $object->__toString() ."\n";

echo $object. "\n";


// within class hierarchy
class x {
	function __toString() { return 'x';}
}

class y extends x {
	function __toString() { return parent::__toString().'y'; }

{% endhighlight %}


### Rule Details

This rule is aimed at avoiding direct calls to magic methods. The list is the following: 

* `__construct()`
* `__destruct()`
* `__call()`
* `__callStatic()`
* `__get()`
* `__set()`
* `__isset()`
* `__unset()`
* `__sleep()`
* `__wakeup()`
* `__toString()`
* `__invoke()`
* `__set_state()`
* `__clone()`
* `__debugInfo()`


The following patterns are considered warnings:

{% highlight php %}
<?php
echo $object->__sleep();

// use clone operator directly
$y = $object->__clone();

{% endhighlight %}{: .warning }


The following patterns are considered legit:

{% highlight php %}
<?php
// within class hierarchy
class x {
	function __toString() { return 'x';}
}

class y extends x {
	function __toString() { return parent::__toString().'y'; }

{% endhighlight %}{: .good }



### Further Reading

* [Magic methods](http://php.net/language.oop5.magic)
