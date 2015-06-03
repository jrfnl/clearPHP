<!-- Good Practices -->
# Always Have Visibility

For compatibility reasons, PHP allows methods and properties to be defined without visibility : `public`, `protected` or `private`. By default, methods and properties are defined as `public`, making them available to all other objects without restriction.

One development approach is to set visibility by default to `private`, and then, lift the constraint as it is apparent that the resource has to be reached from parents or from outside objects. 

This is one core principle of Object Oriented Programming : encapsulation. It must be used to separate as much as possible the internals of the object from the outside, limiting its impact to a few and selected methods or properties. 

It is recommended to always set the visibility, as restrictive as possible.

## Rule Details

This rule is aimed at avoiding omitting visibility for properties and methods.

The following patterns are considered warnings:

```php
<?php

abstract class x {
	static $staticProperty;
	var $varProperty;

	function defautVisibilityMethod() {}
	static function defautVisibilityStaticMethod() {}
	final function defautVisibilityFinalMethod() {}
	abstract function defautVisibilityAbstractMethod();
	
}

```

The following patterns are not considered warnings:

```php
<?php

abstract class x {
	static protected $staticProperty;
	public $varProperty;

	public function defautVisibilityMethod() {}
	static protected function defautVisibilityStaticMethod() {}
	final private function defautVisibilityFinalMethod() {}
	abstract public function defautVisibilityAbstractMethod();
	
}

```


## Further Reading

* [Visibility in OOP]





[Visibility in OOP]: http://php.net/language.oop5.visibility
