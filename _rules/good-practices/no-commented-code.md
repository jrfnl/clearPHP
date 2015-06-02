---
title:     No Commented Code
---

In the age of ubiquitous Version Control System, there is just no reason to put code in comments and commit it. 


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
//if ($foo) 
{
	$a++;
	# $c++;
} /* else 
{
	$b--;
}
*/

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
/**
 * Returns some valuable answer from this object: $x ? 1 : 0;
 *
 * @return string
 */
function foo($x) { return magic($x); }

{% endhighlight %}{: .good }



### When Not To Use This Rule

If needed, just use revert from the control version system. 


