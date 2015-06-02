---
title:     Commented Fallthrough
---

`case` in `switch` structures may be finalized using the `break` keyword. 

They may also continue in the next case, by letting the execution continue without `break`. This way, two cases are merged in one. This is called fallthrough.

Fallthrough is usually rare. In the event they occur, most of them will be empty fallthrough, which are actually several cases with the same name. 

Fallthrough are OK but needs to be commented so as to highlight their usage.


### Rule Details

This rule requires that every `case` statement without a `break` has at least a comment. The following patterns are considered warnings:

{% highlight php %}
<?php
// case 'b' has uncommented fallthrough
switch (foo) {
    case 'a':
    case 'c':
        doSomethingForA();
        // will also do for c
        break 1;

    case 'b':
        doSomethingForB();

    default:
        doSomethingForDefault();
}

{% endhighlight %}{: .warning }


The following code is considered legit: 

{% highlight php %}
<?php
// case 'b' has commented fallthrough
switch (foo) {
    case 'a':
    case 'c':
        doSomethingForA();
        // will also do for c
        break 1;

    case 'b':
        doSomethingForB();
        //also apply default behavior 

    default:
        doSomethingForDefault();
}

{% endhighlight %}{: .good }


### Further Reading


#### Related rules

* [No Duplicate Case In Switch]
* [No Switch With Multiple Default]
* [No Switch Without Default]



[No Duplicate Case In Switch]: {{ "/good-practices/no-duplicate-case/" | prepend: site.clearphp.url }}
[No Switch With Multiple Default]: {{ "/good-practices/no-switch-with-multiple-default/" | prepend: site.clearphp.url }}
[No Switch Without Default]: {{ "/good-practices/no-switch-without-default/" | prepend: site.clearphp.url }}
