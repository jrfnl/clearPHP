---
title:     No Reassigned References
---

> References in PHP are a means to access the same variable content by different names.

There is a separation between the variables names and their related content: this way, several distinct variables may refer to the same content. Changing the content of one will change the content for the others too.

{% highlight php %}
<?php
$a = 'a';
$b = &$a;
$b .= 'b';

print $a; // displays ab

{% endhighlight %}


On the other hand, this example, adapted from the PHP manual, will not work as expected. 

{% highlight php %}
<?php
function foo(&$b)
{
    $b =& 'b';
}

$a = 'a';
foo($a); 

print $a; // display a, not b

{% endhighlight %}


Here, a reference is indeed created at function call-time. `$b` is a reference to the same content than the original variable `$a`. However, assigning a new reference to `$b` will only change the reference in `$b`: it will not change the content of `$b`. This way, the new reference is lost, and `$a` stays unchanged.

The following would work as expected: 

{% highlight php %}
<?php
function foo(&$b)
{
    $b = 'b';
}

$a = 'a';
foo($a); 

print $a; // display b

{% endhighlight %}


It is recommended to avoid reassigning references in a function's argument, and only changing their content. 


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
function foo(&$b)
{
   $c = 'c';
   $b = &$c;
}

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
function foo(&$b)
{
   $c = 'c';
   $b = $c;
}

function bar(&$b)
{
   $c = $b.'c'; // although the reference on $b is useless
   return &$c;
}

{% endhighlight %}{: .ok }


### Further Reading


#### Related rules

* [No Dangling References]
* [No Incompatible References]
* [No References On Objects]
* [No Useless Reference Arguments]
* [Use Reference To Alter In Foreach]


[No Dangling References]: {{ "/potential-errors/no-dangling-reference/" | prepend: site.clearphp.url }}
[No Incompatible References]: {{ "/php-manual/no-incompatible-reference/" | prepend: site.clearphp.url }}
[No References On Objects]: {{ "/good-practices/no-references-on-objects/" | prepend: site.clearphp.url }}
[No Useless Reference Arguments]: {{ "/good-practices/no-useless-argument-reference/" | prepend: site.clearphp.url }}
[Use Reference To Alter In Foreach]: {{ "/performance/use-reference-to-alter-in-foreach/" | prepend: site.clearphp.url }}
