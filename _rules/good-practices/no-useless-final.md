---
title:     No Useless Final
---

The `final` modifier may be applied to `class` and to `function` (method) in a class. When `final` is applied to a class, there is no need to apply it again to any of this class' methods, as they all will be final: the class itself cannot be extended.

{% highlight php %}
<?php
final class foo {
    final function bar() {}
}

class foofoo extends foo {
	/* other definitions */
}

// generates error: PHP Fatal error:  Class foofoo may not inherit from final class (bar)

{% endhighlight %}


It is recommended to avoid using superfluous final modifiers.


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
final class foo {
    final function bar() {}
}

{% endhighlight %}{: .warning }


The following patterns are considered legit:

{% highlight php %}
<?php
class foo {
    final public function bar() {}
    // more methods
}

final class foo {
    public function bar() {} // automatically final
    // more methods
}

{% endhighlight %}{: .good }



### Further Reading

* [Final Keyword](http://php.net/language.oop5.final)