---
title:     No Incompatible References
---

When calling a method or a function, the arguments passed by reference and signaled in the signature by `&`, must be one of the following:

* Variables or arrays: `$v` or `$x[1]`
* New objects: `new stdClass()`
* References

{% highlight php %}
<?php
parse_str($incomingString, 'string');
{% endhighlight %}


PHP only check that functioncalls are using valid parameter types at execution time, if the definition of the method is not available at compile time (aka, the method is not native or not defined in the same file as the call). 

{% highlight php %}
<?php
// definition file, to be included in the next code
function foo(&$string) { /**/ }

{% endhighlight %}


{% highlight php %}
<?php
foo('PHP'); // This will yield a Fatal error at execution

{% endhighlight %}


It is recommended to ensure that passed-by-reference arguments are of the requested type. 


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
function foo(&$string) { /**/ }

foo('PHP'); // String
foo(true);  // Boolean
foo(1);  // Integer
foo(1.2);  // Float
foo(null);  // NULL
foo(PHP_VERSION);  // Constant
foo(SomeCLass::Constant);  // Static constant

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
function foo(&$string) { /**/ }

foo($variable); // Variable
foo($array[1]); // Array
foo($object->property);  // Property
foo(SomeClass::$property);  // Static Property
foo(ReferenceReturningFunction());  // Reference Returning Function
foo($object->ReferenceReturningMethod());  // Reference Returning Function
foo(Classe::ReferenceReturningStaticMethod());  // Reference Returning Function

function &ReferenceReturningFunction() {
    $x = 1;
    return $x;
}

{% endhighlight %}{: .ok }


### When Not To Use This Rule

Always use this.


### Further Reading

* [Passing references as arguments](http://php.net/language.references.pass)
* [Functions arguments](http://php.net/functions.arguments)


#### Related rules

* [No Dangling References]
* [No Reassigned References]
* [No References On Objects]
* [No Useless Reference Arguments]
* [Use Reference To Alter In Foreach]


[No Dangling References]: {{ "/potential-errors/no-dangling-reference/" | prepend: site.clearphp.url }}
[No Reassigned References]: {{ "/php-manual/no-reassign-references/" | prepend: site.clearphp.url }}
[No References On Objects]: {{ "/good-practices/no-references-on-objects/" | prepend: site.clearphp.url }}
[No Useless Reference Arguments]: {{ "/good-practices/no-useless-argument-reference/" | prepend: site.clearphp.url }}
[Use Reference To Alter In Foreach]: {{ "/performance/use-reference-to-alter-in-foreach/" | prepend: site.clearphp.url }}