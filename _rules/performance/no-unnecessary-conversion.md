---
title:     No Unnecessary Conversion
---

PHP does a lot of type juggling: this means that it will automatically cast values from one type to the other, if the current operation requires it. 

{% highlight php %}
<?php
$a = "5";
$b = 1 + (int) $a;
$c = 'c' . ((string) $a); // both unnecessary: $a is a string 
                          // and concatenation will require one anyway

{% endhighlight %}


Typecasting can be useful as security feature, to ensure a value is of a requested type. It will not help performance.


### Rule Details

This rule is aimed at avoiding useless typecasting.

The following patterns are considered warnings:

{% highlight php %}
<?php
$a = "5";
$b = 1 + (int) $a;
$c = 1.0 + (int) $a;

$d = 'd' . ((string) $a); 

// do not cast unknown fraction to integers
echo (int) ( (0.1+0.7) * 10 ); // echoes 7!
// use the bcmath extension or the floor() or ceil() functions instead

{% endhighlight %}{: .warning }


### Further Reading

* [Casting integers](http://php.net/language.types.integer.php#language.types.integer.casting)
* [BCMath](http://php.net/bcmath)
* [floor](http://php.net/floor)
* [ceil](http://php.net/ceil)


#### Related rules

* [No Implied Cast]



[No Implied Cast]: {{ "/good-practices/no-implied-cast/" | prepend: site.clearphp.url }}