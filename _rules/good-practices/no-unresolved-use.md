---
title:     No Unresolved Use Statement
minphp:    5.3
---

`use` statements provide the ability to refer to an external fully qualified name. Since it will be used to locate definitions in other namespaces and/or files, it is important to check the validity of the fully qualified name.

{% highlight php linenos %}
<?php
namespace X;

use AnotherNamespace\Aclass;
use AnotherNamespace\Subnamespace;

$a = new Aclass();

{% endhighlight %}


PHP will not check the validity of `use` at compile time, but at execution time. It will then raise a fatal error.

It is recommended to make sure that `use` statement are always pointing to an existing definition.


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
namespace X;

use AnotherNamespace\UndefinedClass;

{% endhighlight %}{: .warning }


### Further Reading


#### Related rules

* [No Useless Use]


[No Useless Use]: {{ "/good-practices/no-useless-use/" | prepend: site.clearphp.url }}
