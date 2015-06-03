---
title:     No $this In Static Methods
---

Static methods are a special type of methods: they may be called without instantiating the class into an object. This makes them convenient for various tasks that are common to all objects from a class.

However, since they may be called without instantiation, this means that the special variable `$this`, which typically represents the current object, may be unavailable.

PHP doesn't check for `$this` usage inside static methods at compile time. At execution time, it will raise an error, since it can't find any value for `$this`. 

It is recommended to check that static methods have no usage of `$this`. 


### Rule Details

This rule requires that no `static` method uses the `$this` variable.

The following patterns are considered warnings:

{% highlight php %}
<?php
class x {
	static function y() {
		$this->callMethod();
		return $this->property;
	}
}

{% endhighlight %}{: .warning }


The following code is considered legit: 

{% highlight php %}
<?php
class x {
	static function y() {
		self::callStaticMethod();
		return self::$staticProperty;
	}
}

{% endhighlight %}{: .good }


### Further Reading

* [Static Keyword](http://php.net/language.oop5.static)
