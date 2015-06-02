---
title:     No Buried Assignation
---

Assignation is an expression: this makes it possible to do an assignation anywhere an expression may be used. This is very convenient to both test a value and collect it for further processing. 

{% highlight php %}
<?php
if (($id = array_search($haystack, $needle = $arguments)) !== false) {
	// process $id even more
}

{% endhighlight %}


The condition in the `if` statement will both search for `$needle` in `$haystack`, but it will also assign `$arguments` to `$needle`, and the result of `array_search()` to `$id`, while not touching `$haystack`. This shortens the code by two full lines (the two assignations), but it also buries the assignations. They are now difficult to spot in the code, and will surprise anyone reading the code.

It is recommended to keep assignations as visible as possible.


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
if (( $pos = strpos($haystack, $needle)) !== false) {
	// do something with $pos
}

{% endhighlight %}{: .warning }



### Further Reading


#### Related rules

* [No Implied If]


[No Implied If]: {{ "/good-practices/no-implied-if/" | prepend: site.clearphp.url }}
