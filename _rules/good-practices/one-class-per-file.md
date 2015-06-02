---
title:     One Class Per File
---

One class per file makes it easy to find class definitions in the file system. It is confusing to search for `class A` in `B.php` file, as they are both in the same file. Version control log messages are also harder to read.

It helps to follow the recommendations in PSR-0 to PSR-4 and to automate class loading with namespaces and autoload. 


### Rule Details

This rule requires that every `class` is defined in a file, and that every file that defines a class only holds one class.

The following pattern is considered a warning:

{% highlight php %}
<?php
class a { /**/ }

class b extends a { /**/ }

{% endhighlight %}{: .warning }


The following code is considered legit: 

{% highlight php %}
<?php
class a { /**/ }

{% endhighlight %}{: .good }


Another file: 

{% highlight php %}
<?php
class b extends a { /**/ }

{% endhighlight %}{: .good }


### When Not To Use This Rule

If you have some mechanism that compiles all classes into one file for faster loading, this rule may be ignore for that kind of file.


### Further Reading

* [PSR-1: Side effects](http://www.php-fig.org/psr/psr-0)
* [PSR-1: Side effects](http://www.php-fig.org/psr/psr-4)