---
title:     No References On Objects
---

Since PHP 5, objects are always passed by reference whenever calling a method or a function. There is no need to add the `&` operator to create a reference. The object will stay in the initial context, and will be modified in any called context. 

{% highlight php %}
<?php
// Object has property
$o = new Object();

f($o);

// function accept 
function f($object) {
	$object->property = 2;
}

print $o->property; // 2

// These calls are identical for objects
call_user_func_array('f', array($o));
call_user_func_array('f', array(&$o));

{% endhighlight %}


Note: This is totally different for scalar values, which do depend on `&` to be passed by value or by reference. 

It is recommended never to use references on objects.


### Rule Details

The following code is considered a warning:

{% highlight php %}
<?php
$o = new Object();

// Typehint makes the reference useless
function f(Object &$a) {}

foreach($arrayOfObjects as &$object) {
	$object->alter();
}

{% endhighlight %}{: .warning }


### Further Reading


#### Related rules

* [No Dangling References]
* [No Incompatible References]
* [No Reassigned References]
* [No Useless Reference Arguments]
* [Use Reference To Alter In Foreach]



[No Dangling References]: {{ "/potential-errors/no-dangling-reference/" | prepend: site.clearphp.url }}
[No Incompatible References]: {{ "/php-manual/no-incompatible-reference/" | prepend: site.clearphp.url }}
[No Reassigned References]: {{ "/php-manual/no-reassign-references/" | prepend: site.clearphp.url }}
[No Useless Reference Arguments]: {{ "/good-practices/no-useless-argument-reference/" | prepend: site.clearphp.url }}
[Use Reference To Alter In Foreach]: {{ "/performance/use-reference-to-alter-in-foreach/" | prepend: site.clearphp.url }}