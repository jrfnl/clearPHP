---
title:     No Assign Null From Method
---

PHP functions and methods may return `null` by not returning at all, or returning it explicitly. When they do so, the function may be called but no result should be assigned to a variable, as this is a waste of memory. 

Methods that return `null` or some other result are not considered in this rule. 


### Rule Details

The following are considered a warning: 

{% highlight php %}
<?php
function x() { /* do Something Without Return */ }
function y() { /* do Something Without Return */; return null; }

$a = x();
$b[] = y();

{% endhighlight %}{: .warning}


The following are OK: 

{% highlight php %}
<?php
function x($a) {
	if ($a) {
		return 1;
	}  else {
		return null;
	}
}

$a = x(1);

{% endhighlight %}{: .ok }


### Further Reading


#### Related rules

* [No Useless Return]


[No Useless Return]: {{ "/good-practices/no-useless-return/" | prepend: site.clearphp.url }}