---
title:     No Curly Array
---

It is possible to reach specific elements of a PHP array using both square brackets `[  ]` and curly brackets `{  }`. 

{% highlight php %}
<?php
$x = array(1, array(2,3,4,5));

$x[1][0]; // 2
$x{1}[1]; // 3
$x[1]{2}; // 4
$x{1}{3}; // 5

{% endhighlight %}


Curly brackets `{  }` are possible, but are almost never used. It is good practice to avoid them.


### Rule Details

The following are considered a warning: 

{% highlight php %}
<?php
$x{1}[1]; 
$x[1]{2}; 
$x{1}{3}; 

{% endhighlight %}{: .warning }


The following is OK: 

{% highlight php %}
<?php
$x[1][0];

{% endhighlight %}{: .ok }



### Further Reading

* [Strings](http://php.net/language.types.string)
* [Arrays](http://php.net/language.types.array)
