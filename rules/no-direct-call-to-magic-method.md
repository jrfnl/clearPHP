<!-- PHP Manual -->
# No Direct Call To Magic Method 

Magic methods are used by PHP to run custom code at key point of the execution. `__clone` method will be called at cloning time, `__wakeup` when the object is extracted from session storage, or `__set_state ` when the object is processed by `var_export`. 

Outside their intended usage and a relay within the class hierarchy, there is no need to call those methods. 

```php
<?php

// Don't do that! 
echo $object->__toString() ."\n";

echo $object. "\n";


// within class hierarchy
class x {
	function __toString() { return 'x';}
}

class y extends x {
	function __toString() { return parent::__toString().'y'; }

```

## Rule Details

This rule is aimed at avoiding direct call to magic methods. The list is the following : 
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

```php
<?php

echo $object->__sleep();

// use clone operator directly
$y = $object->__clone();

```

The following patterns are considered legit:

```php
<?php

// within class hierarchy
class x {
	function __toString() { return 'x';}
}

class y extends x {
	function __toString() { return parent::__toString().'y'; }

```


## Further Reading

* [Magic methods](http://php.net/language.oop5.magic)
