---
title:     Unresolved Instanceof
---

The `instanceof` operator checks that an object is of a specified class, or has this class in its ancestors.

{% highlight php %}
<?php
class A { }
class B extends A {}

$b = new B();

var_dump($b instanceof A); // true
var_dump($b instanceof B); // true
var_dump($b instanceof C); // false

{% endhighlight %}


In the example here, `C` doesn't exist. The operator can't tell the difference between "_C doesn't exist_" and "_$b is not of class C_". No error is reported. 

As `instanceof` is often used in conditions, this will lead to dead code (or to constantly used code). This is not desirable. 

It is recommended to make sure that the class used in the left part of the `instanceof` operator is always valid.


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
// various sources for non-existing class
$a instanceof NonExistingClass;

$a instanceof ClassWithASpelllingMistake;

$a instanceof ClassActuallyInAnotherNamespace;

{% endhighlight %}{: .warning }




