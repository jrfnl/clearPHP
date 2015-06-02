---
title:     No Unused Methods
---

Methods that are created and not used anywhere in the code are most likely useless. Such methods consume memory, use code space and may create confusion.

Methods may be uses in the class, its children or in the rest of the code if the method is public. If the method is never found, it may be removed from the code, or marked as [dead code].


### Rule Details

This rule is aimed at eliminating unused methods.

The following patterns are considered warnings:

{% highlight php %}
<?php
class foo {
	public function unusedMethod() {}
	
	public function usedMethod() {}
}

$bar = new foo();
$bar->usedMethod();

{% endhighlight %}{: .warning }


### When Not To Use This Rule

If methods may be called dynamically in your code, for instance using `call_user_func()` or similar, you should turn this rule off.


### Further Reading


#### Related rules

* [No Dead Code]


[dead code]: {{ "/good-practices/no-dead-code/" | prepend: site.clearphp.url }}
[No Dead Code]: {{ "/good-practices/no-dead-code/" | prepend: site.clearphp.url }}