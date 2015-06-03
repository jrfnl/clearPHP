---
title:     No Useless Use
minphp:    5.3
---

`use` statements are present at the beginning of the namespace to help PHP find class definitions in the rest of the code. PHP will collect them and use them all to look for classes that are requested during the execution of the current file.

Any extra `use` statement will require extra searching to understand from which namespace the class will come, including resolving unnecessary name collisions. 

{% highlight php %}
<?php
namespace name {
	// foobar is useless
	use foo, bar, foobar;
	
	class barfoo extends foo implements bar {
	
	}
}

{% endhighlight %}


It is recommended to keep the number of `use` statements to a minimum. 


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
namespace name {
	// foobar is useless
	use foo, bar, foobar;
	
	class barfoo extends foo implements bar {
	
	}
}

{% endhighlight %}{: .warning }



### Further Reading


#### Related rules

* [No Unresolved Use Statement]


[No Unresolved Use Statement]: {{ "/good-practices/no-unresolved-use/" | prepend: site.clearphp.url }}