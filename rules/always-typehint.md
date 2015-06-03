<!-- Good Practices -->
# Always Typehint

PHP allows the use of `<classname>`, `array` or `callable`, to type the incoming arguments as, respectively, objects of the class `<classname>`, arrays or callable functions. 

When possible, typehints may be used in method signatures so as to enforce a simple validation for arguments. Typehints are used by PHP, IDE and some tools to check that arguments are of the expected shape. 

Typehint may be classes or interfaces. 

Whenever possible, typehints should be used so as to give more information about the incoming values. This will be used by the PHP compiler and binary to check variables and, eventually, emits catchable exceptions when they are not of the expected type. 

It is recommended to always set the typehint.

## Rule Details

This rule is aimed at encouraging the use of typehints.

The following patterns are considered warnings:

```php
<?php

function foo($a) {
	// $a should be typehinted with some class that supports the `callMethod` method.
	$a->callMethod();
}

```

The following patterns are not considered ambiguous:

```php
<?php

function foo($a) {
	$b = $a . 1; // $a could be a string or an object that supports __toString()
}

function bar($a, $b) {
	$c = $a + 1; // $a could be a number or an array
}

```

The following patterns are not considered warnings:

```php
<?php

function foo($a) {
	$b = $a + 1; // $a should be an integer
	$c = $a * 1.2; // $a should be an real
}


```


## Further Reading

* [Type hinting]



[Type hinting]: http://php.net/language.oop5.typehinting
