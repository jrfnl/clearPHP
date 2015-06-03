---
title:     No Duplicate Keys In Array
---

Disallow the creation of duplicate keys in literal arrays. 

Duplicate keys are useless as the second defined key will overwrite the first silently. 


### Rule Details

This rule requires that every `array()` call has unique keys. The following is wrong. 

{% highlight php %}
<?php
$a = array(1 => 'a',
			 2 => 'b',
			 3 => 'c',
			 1 => 'a' // double definition
			 );

{% endhighlight %}{: .bad }


The following patterns are considered OK:

{% highlight php %}
<?php
$a = array(1 => 'a',
			 2 => 'b',
			 3 => 'c',
			 );

$a[1] = 'a'; // this doesn't belong to the literal definition anymore

{% endhighlight %}{: .ok }


### Further Reading

* [Arrays](http://php.net/language.types.array)


#### Related rules

* [No Constant As Array Keys]



[No Constant As Array Keys]: {{ "/php-manual/no-constant-as-array-keys/" | prepend: site.clearphp.url }}
