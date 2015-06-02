---
title:     Not a method
---

Methods are a functions which are associated with a specific class. They have access to the class in which they are defined, either with the pseudo-variable `$this` to access properties or other methods, or via the local static properties and methods. 

A static method may only use static properties, and won't have access to properties or methods accessible with `$this`. A normal method will have access to both.

However, a method that doesn't make any use of `$this` or the static resources doesn't belong to the class. It should actually be a function. 

{% highlight php %}
<?php
class user {
	private $name = '';
	
	public function getNameSize() {
		return $this->nameLen($this->name);
	}
	
	public function nameLen($string) {
		return strlen($string);
	}
}

{% endhighlight %}


In the above example, the `getNameSize()` method is used to get information about the object (public method), and makes use of `$this`.

On the other hand, `nameLen()` applies some calculations on its arguments, and returns a result without affecting or making use of the local object. It has nothing to do with the local object.

It is recommended to check that methods have use local resources (properties or methods) by using `$this` or `self::` (or equivalent). 


### Rule Details

This rule requires that every method makes use of the current class properties or methods.

The following patterns are considered warnings:

{% highlight php %}
<?php
class x {
	const myConstant = 1;
	
	static public function processA($a) {
		// no $this, nor static access
		return $a + 1;
	}

	public function getConstant($a) {
		// Constants are always public anyway
		return x::myConstant;
	}
}

{% endhighlight %}{: .warning }


The following patterns are considered legit: 

{% highlight php %}
<?php
class x {
	static public function callMethod() {
		self::anotherStaticMethod();
		// anotherStaticMethod may be private
	}

	public function getSomething() {
		// Getter
		return $this->something;
	}

	public function setSomething($value) {
		// Setter
		$this->something = $value;
	}

	public static function getSomethingStatic() {
		// Getter (with self)
		return self::$somethingStatic;
	}

	public static function setSomethingStatic($value) {
		// Setter (with full class name)
		\x::$something = $value;
	}

	public function setSomethingStatic2($value) {
		// Setter (with self)
		// Should be a static method, but at least, it belongs here
		self::$somethingStatic = $value;
	}
}

{% endhighlight %}{: .good }

