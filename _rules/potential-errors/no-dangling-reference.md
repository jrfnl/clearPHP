---
title:     No Dangling References
---

In a `foreach` loop, a variable is used for looping through the array. If this variable is made into a reference for on the spot modification purpose, the reference to the last element will survive after the end of the loop. When this last reference is reused later, it will apply to the last element of the array. 

{% highlight php %}
<?php
$array = array('a', 'b');
$array2 = array('c', 'd');

foreach ($array as &$a);
foreach ($array2 as $a);

print_r($array);
print_r($array2);

{% endhighlight %}


In this example, `$array[1]` finally get assigned with the value `'d'`, which is the last value in the second loop. Any assignation to `$a` would affect `$array` too.

{% highlight php %}
Array
(
    [0] => a
    [1] => d
)
Array
(
    [0] => c
    [1] => d
)
{% endhighlight %}


It is recommended to unset the loop variable right after the loop, to avoid reusing it later.


### Rule Details

This rule targets code that doesn't unset the loop's reference right after usage. 

The following code is considered a warning:

{% highlight php %}
<?php
foreach (array(1, 2, 3, 4) as &$value) {
    $value = $value * 2;
}
$other_value *= 2;
unset($value); // don't wait too long to remove $value

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
foreach (array(1, 2, 3, 4) as &$value) {
    $value = $value * 2;
}
unset($value);

{% endhighlight %}{: .good }



### Further Reading

* [`foreach`](http://php.net/control-structures.foreach)


#### Related rules

* [No Incompatible References]
* [No Reassigned References]
* [No References On Objects]
* [No Useless Reference Arguments]
* [Use Reference To Alter In Foreach]


[No Incompatible References]: {{ "/php-manual/no-incompatible-reference/" | prepend: site.clearphp.url }}
[No Reassigned References]: {{ "/php-manual/no-reassign-references/" | prepend: site.clearphp.url }}
[No References On Objects]: {{ "/good-practices/no-references-on-objects/" | prepend: site.clearphp.url }}
[No Useless Reference Arguments]: {{ "/good-practices/no-useless-argument-reference/" | prepend: site.clearphp.url }}
[Use Reference To Alter In Foreach]: {{ "/performance/use-reference-to-alter-in-foreach/" | prepend: site.clearphp.url }}