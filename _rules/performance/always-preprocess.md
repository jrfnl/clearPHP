---
title:     Always Preprocess
---

Everything that may be prepared before compiling will be less work for PHP at a later stage. This usually leads to building caches into the application, as most data are dynamical and not known at compile time.

However, there is a range of optimization that are rooted in coding laziness:

{% highlight php %}
<?php
$seconds = 24 * 60 * 60;

$seconds = 86400;

{% endhighlight %}


The first initialization is based on literals multiplications, and will waste a few cycles to actually start the script. 

It is recommended to always precalculate values and avoid literals operations in code.

If it helps to keep the equation, comments will be the solution.


### Rule Details

This rule is aimed at avoiding using PHP to build initial values.

The following patterns are considered warnings:

{% highlight php %}
<?php
define ('DAY_IN_SECONDS', 24 * 60 * 60);
// define('DAY_IN_SECONDS', 86400);

$x = [];
$x[] = 'a';
$x[] = 'b';
// $x = ['a', 'b'];

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
define('b', $dbResult->count());

$s = 'Today is year '.date('Y');

// this is constant scalar expression
const someConstant = class::constante + 1;

{% endhighlight %}{: .ok }


### When Not To Use This Rule

If the equation is important to keep, then put it in a comment, and move this to documentation automatically. 


### Further Reading


#### Related rules

* [No Useless Math]
* [No Function Call In Loop]
* [No Recalculate]


[No Useless Math]: {{ "/good-practices/no-useless-math/" | prepend: site.clearphp.url }}
[No Function Call In Loop]: {{ "/performance/no-functioncall-in-loop/" | prepend: site.clearphp.url }}
[No Recalculate]: {{ "/performance/no-recalculate/" | prepend: site.clearphp.url }}
