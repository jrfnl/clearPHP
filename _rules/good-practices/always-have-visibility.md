---
title:     Always Have Visibility
---

For compatibility reasons, PHP allows methods and properties to be defined without visibility: `public`, `protected` or `private`. By default, methods and properties are defined as `public`, making them available to all other objects without restriction.

One development approach is to set visibility by default to `private`, and then, lift the constraint as it is apparent that the resource has to be reached from parents or from outside objects. 

This is one core principle of Object Oriented Programming: encapsulation. It must be used to separate as much as possible the internals of the object from the outside, limiting its impact to a few and selected methods or properties.

It is recommended to always set the visibility, as restrictive as possible.


### Rule Details

This rule is aimed at avoiding omitting visibility for properties and methods.

The following patterns are considered warnings:

{% highlight php %}
<?php
abstract class x {
	static $staticProperty;
	var $varProperty;

	function defautVisibilityMethod() {}
	static function defautVisibilityStaticMethod() {}
	final function defautVisibilityFinalMethod() {}
	abstract function defautVisibilityAbstractMethod();
	
}

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
abstract class x {
	static protected $staticProperty;
	public $varProperty;

	public function defautVisibilityMethod() {}
	static protected function defautVisibilityStaticMethod() {}
	final private function defautVisibilityFinalMethod() {}
	abstract public function defautVisibilityAbstractMethod();
	
}

{% endhighlight %}{: .ok }


### Further Reading

* [Visibility in OOP]


#### Related rules

* [No PHP4 Class Syntax]



[Visibility in OOP]: http://php.net/language.oop5.visibility
[No PHP4 Class Syntax]: {{ "/good-practices/no-php4-class-syntax/" | prepend: site.clearphp.url }}
