---
title:     No Switch Without Default
---

Switch statements may have several cases and one `default` statement, which will act as a catch-all for all unspecified cases. It is considered good practice to always include a `default` statement, so as to catch any unusual or exceptional behavior.

It may happen that the `default` case is empty: in that situation, the `default` case is meant to document that doing nothing is the intended behavior.


### Rule Details

This rule requires that every `switch` statement has a `default` case.

The following pattern is considered a warning:

{% highlight php %}
<?php
switch (foo) {
    case 'a':
        doSomething();
        break 1;

    case 'b':
        doSomething();
        break 1;
}

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
switch (foo) {
    case 'a':
        doSomething();
        break 1;

    case 'b':
        doSomething();
        break 1;

    default:
        // do nothing
}
{% endhighlight %}{: .good }


### When Not To Use This Rule

If `default` is not always necessary, you may disable this rule.


### Further Reading


#### Related rules

* [Commented Fallthrough]
* [No Duplicate Case In Switch]
* [No Switch With Multiple Default]


[Commented Fallthrough]: {{ "/good-practices/commented-fallthrough/" | prepend: site.clearphp.url }}
[No Duplicate Case In Switch]: {{ "/good-practices/no-duplicate-case/" | prepend: site.clearphp.url }}
[No Switch Without Default]: {{ "/good-practices/no-switch-without-default/" | prepend: site.clearphp.url }}
[No Switch With Multiple Default]: {{ "/good-practices/no-switch-with-multiple-default/" | prepend: site.clearphp.url }}

