---
title:     No Unused Variables
---

Variables that are created and not used anywhere in the code are most likely useless. Such variables consume memory, use code space and may create confusion.

As a simple check, any variable only used once in a context should be checked. 

Variables that are arguments are subject of a distinct rule, as their existence is under another set of constraints. See [No Unused Arguments]


### Rule Details

This rule is aimed at eliminating unused variables.

The following pattern is considered a warning:

{% highlight php %}
<?php
$x = 10;

{% endhighlight %}{: .warning }


The following pattern is not considered a warning:

{% highlight php %}
<?php
$x = 10;
$x++;

{% endhighlight %}{: .ok }


### When Not To Use This Rule

If you don't want to be notified about unused variables, you can turn this rule off.



[No Unused Arguments]: {{ "/good-practices/no-unused-arguments/" | prepend: site.clearphp.url }}
