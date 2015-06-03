---
title:     No Function Call In Loop
---

Loops are a way to execute the same instructions multiple times. That ability makes them prime candidate for optimization: the less processing is done in a loop, the faster the loop performs. 

{% highlight php %}
<?php
$x = range(1,10);
for($i = 0; $i < count($x); $i++) {
	// doSomething with $i
}
	
{% endhighlight %}


In the above statement, `$i < count($x)` is the terminal clause. It will be called after each iteration to check if the loop shall continue. Each time, it will count the number of elements in `$x`, even if this variable hasn't been changed. Repeatingly calling `count($x)` may be prevented by processing it before the loop, and then only checking `$i` against a static value.

{% highlight php %}
<?php
$x = range(1,10);
$count = count($x);
for($i = 0; $i < $count; $i++) {
	// doSomething with $i
}
	
{% endhighlight %}


This second code sample will do exactly the same as the first, but speed will be dramatically increased.

As a general rule, anything inside the loop (here: `doSomething with $i`), in the terminal clause or in the incrementation clause (second and third argument to `for`), is worth checking for any operation that will not be affected by `$i`. If it is always the same, then it should be preprocessed.


### Rule Details

The following code is considered a warning:

{% highlight php %}
<?php
$x = range(1,10);
$count = count($x);
for($i = 0; $i < $nb; $object->methodCall()) {
	// doSomething with $i and not $object
}

$x = range(1,10);
$count = count($x);
for($i = 0; $i < $count; $i++) {
	$a = $object->methodCall(); // This may be processed once only
	$total += $i * $a;
}
	
{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
// Here, the condition changes as the loop is processed. The check in the terminal clause is needed.
$x = range(1,10);
$j = array();
for($i = 0; $i < count($j); $i++) { 
	// doSomething with $i and $j
}
	
{% endhighlight %}{: .good }


### Further Reading


#### Related rules

* [No Array_merge In Loops]
* [Always Preprocess]
* [No Recalculate]
* [No Useless Math]


[No Array_merge In Loops]: {{ "/good-practices/no-array_merge-in-loop/" | prepend: site.clearphp.url }}
[Always Preprocess]: {{ "/performance/always-preprocess/" | prepend: site.clearphp.url }}
[No Useless Math]: {{ "/good-practices/no-useless-math/" | prepend: site.clearphp.url }}
[No Recalculate]: {{ "/performance/no-recalculate/" | prepend: site.clearphp.url }}