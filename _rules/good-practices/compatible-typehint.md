---
title:     Compatible Typehint
---

In PHP's functions and methods, arguments may have a _typehint_, that forces arguments to be objects, compatible with a class or interface, array or callable. When classes and interfaces are used, objects of the same class or implementing the interface, or any of their child may be accepted. 

When such criteria are not met, the code will emit a catchable error. 

This validation will be done at execution time. This rule aims at avoiding any situation where a method is called with the wrong type of arguments, as much as it may be identified at compile time.


### Rule Details

The following are considered a warning: 

{% highlight php %}
<?php
function x(A $a) { /* some Code */ }

x(new b());

{% endhighlight %}{: .warning }


The following are OK: 

{% highlight php %}
<?php
function x(A $a) { /* some Code */ }

x(new a());

{% endhighlight %}{: .ok }


### Further Reading

* [Type hinting]


#### Related rules

* [Always Typehint]


[Type hinting]: http://php.net/language.oop5.typehinting
[Always Typehint]: {{ "/good-practices/always-typehint/" | prepend: site.clearphp.url }}