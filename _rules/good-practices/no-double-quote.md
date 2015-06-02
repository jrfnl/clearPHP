---
title:     No Double Quotes
---

PHP allows `'` and `"` quotes to create string literals. It also allows for NOWDOC and HEREDOC syntax, which are the same as the former but for larger blob of text. Dynamic elements in both first syntaxes will stay unchanged, while the second syntax will make PHP replace any variables, properties or arrays it finds within the literal by their actual value. 

{% highlight php %}
<?php
$a = 'world';

// all code below will display the same 
echo "Hello $a";
echo "Hello world";
echo 'Hello world';

{% endhighlight %}

`"` and HEREDOC should only be used when there are dynamic values within the literal, or the extra escape sequences that `"` support, such as `\n` for new lines or the literal single quote. This will save PHP the task of checking the string for any variables. 


### Rule Details

The following code is considered a warning:

{% highlight php %}
<?php
"This string has no variable nor escape sequences.";
<<<HEREDOC

This Heredoc has no variable part.

HEREDOC;

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
"This string hasn't any variable but does have escape sequences.\n";

<<<HEREDOC

This Heredoc has a $variable.

HEREDOC;

{% endhighlight %}{: .good }


### When Not To Use This Rule

If the application makes heavy use of one of the quote style in another related technology (HTML uses `"` a lot), it is good to use the other quote style to create such literals in PHP. 

If the application generates too many reports of this, it is probably wise to avoid using it and fixing too many minor problems.

Speed-wise, only very high volume application will benefit from this. 


### Further Reading

* [Strings](http://php.net/language.types.string)
* [Disproving the Single Quotes Performance Myth](http://nikic.github.io/2012/01/09/Disproving-the-Single-Quotes-Performance-Myth.html)
* [PHP The Right Way: Strings](http://www.phptherightway.com/pages/The-Basics.html#strings)
