---
title:     No Useless Instructions
---

Useless instructions are valid instructions that don't provide anything useful. They are correctly compiled and processed, but will not serve any purpose. 

Calls to properties, expressions that are not saved in a variables are good examples of such useless expressions. Most of the time, they are leftovers of code manipulations (construction, debug, refactoring...) that have been overlooked, and stayed behind. Since they don't do any harm, they are often left in place until a good reason comes up to deal with them. 

They should be removed or completed so as to have impact in the code.


### Rule Details

This rule targets code that doesn't do anything useful. 

The following patterns are considered warnings:

{% highlight php %}
<?php
// Empty namespaces
namespace x;
namespace y;

// literals in the code flow
1; 
My_CONSTANT;
$b;
function () { return $x = 3; }

// post-incrementation in a return
return $a++;

// empty instructions
$a++;;;
function x($a) {} ; // ; is only necessary for closures

// Unassigned closures
function ($a) {} ;

{% endhighlight %}{: .warning }


The following patterns are considered legit:

{% highlight php %}
<?php
// properties may be processed with __get()
$object->property;

// pre-incrementation in a return
return ++$a;

// Assigned closures
$object->myMethod(function ($a) {});

{% endhighlight %}{: .good }


