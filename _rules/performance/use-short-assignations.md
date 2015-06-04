---
title:     Use Short Assignations
---

Some operators have a 'do-and-assign' version, that looks like a compacted version for = and the operator. 

{% highlight php %}
<?php
$x = $x + 2;
// may be written 
$x += 2;

{% endhighlight %}

This approach is good for readability: it makes it obvious that the variable is incremented with another value. This is typically useful when data is collected in a variable until the variable is finally used, such as with concatenations.

Short assignation makes better use of memory. It will avoid copying data to a new location, after allocation. This will save some memory. It may also bring a speed boost if those lines are used intensively.

It is recommended to use the short assignation syntax all the time.


## Rule Details

This rule targets assignations that may be shortened.

The list of short assignation operators is the following :
* `+=`
* `-=`
* `*=`
* `/=`
* `%=`
* `**=`
* `.=`
* `&=`
* `|=`
* `^=`
* `>>=`
* `<<=`

The following patterns are considered a warning :

{% highlight php %}
<?php
// + and * are commutable
$a = $a + $b;
$a = $b * $a;

// other operators cannot be swapped, so only one version may be adapted
$a = $a - $b;

// This may be shortened
$a = $a . $b . $c; 

{% endhighlight %}{: .warning }


The following are OK : 

{% highlight php %}
<?php

// some operators cannot be swapped
$a = $b - $a; 

{% endhighlight %}{: .ok }

