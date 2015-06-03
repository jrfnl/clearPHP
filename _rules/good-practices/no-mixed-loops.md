---
title:     No Mixed Loops
---

`for` loops make use of local counters and requires a incrementation expression. Mixing the counters from one loop into the other is confusing at best. 

{% highlight php %}
<?php
for ($i = 0; $i < 10; $i++) {
	for ($j = 0; $j < 20; $i++) {
		// doSomething with $i and $j
   }
}

{% endhighlight %}


It is recommended to always keep loops counters separated. In case they *need to* have an impact on each other, make the change obvious in the body of the loops.


### Rule Details

The following code is considered a warning:

{% highlight php %}
<?php
for ($i = 0; $i < 10; $i++) {
	for ($j = 0; $j < 20; $i++) {
		// doSomething
   }
}

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
// $i incrementation obviously depends on the second loop
for ($i = 0; $i < 10; ) {
	for ($j = 0; $j < 20; ) {
		$i++;
		print "$i $j\n";
		// doSomething
   }
}

{% endhighlight %}{: .good }

