---
title:     No Isolated Block
---

PHP blocks are instructions between curly braces `{ ...  }`. Blocks are used with flow control instructions, such as `if then`, `switch`, `foreach`,... to group several instructions and apply a condition or a loop to it. 

{% highlight php %}
<?php
function x() { // function block
	return ($a);
}

{% endhighlight %}


Instructions may be grouped together with the  curly braces `{ ...  }`, without any usage of flow control instructions. 

{% highlight php %}
<?php
// if ($y == 3)  commented out code
{ 
	$a = 0;
	$a++;
	$a *= 2;
}

{% endhighlight %}


Instructions grouping is done with new lines, and without the overhead of curly braces. When a lone block is found in the code, it is the left-over of some instruction that was removed, just like in the example above.


### Rule Details

This is considered a warning: 

{% highlight php %}
<?php
{
	($a++);
}

{% endhighlight %}{: .warning }


Blocks are considered legit code when used with flow control instructions or structure declarations: 

{% highlight php %}
<?php
function x() {
	if ($a) {
		/* doSomething */
	}
}

{% endhighlight %}{: .good }

