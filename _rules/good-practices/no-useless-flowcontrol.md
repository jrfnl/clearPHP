---
title:     No Useless Flow Control
---

Useless flow control are valid flow control structures that have no impact on the code. 


{% highlight php %}
<?php
if ($a == 1);
	print("Hello, world");

if ($b == true) {
	// process this special case
}

{% endhighlight %}

Useless flow controls are often the result of a typo, like the first case above: the extra semi-colon should be removed. Or, they may be the result of forgotten situations that need more (re)writing. 

They should be removed or completed so as to have an actual impact in the code.


### Rule Details

This rule targets flow control instructions that don't do anything useful. 

The following code is considered a warning:

{% highlight php %}
<?php
if ($a == 1);
	print("Hello, world");

if ($b == true) {
	// process this special case
}

for($i = 1; $i < 10000; $i++) {
	
}
{% endhighlight %}{: .warning }



The following pattern is considered legit:

{% highlight php %}
<?php
switch($x) {
	case 'a':  // no action upon 'a'
		break; 
		
	case 'b': 
		$a++;
		break;
	
	default: 
		break; 
}

{% endhighlight %}{: .good }



### Further Reading


#### Related rules

* [No Empty Blocks]


[No Empty Blocks]: {{ "/good-practices/no-empty-blocks/" | prepend: site.clearphp.url }}
