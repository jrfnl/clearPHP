---
title:     Leave Last Closing Tag Out
---

PHP uses `<?php` for opening a PHP sequence, and `?>` for closing it. Everything outside these tags is considered as `raw HTML` and will be displayed as is, while everything inside is considered PHP code.

{% highlight php %}
<?php
$a = 'a';

// This is not the last closing tag.
?>
B
<?php
echo $a;

// No closing tag, on purpose

{% endhighlight %}{: .short }


The PHP interpreter will understand the end of the file as the end of the script, and will close any instruction. You may still get an fatal error if the instruction is badly build, or if there is no final `;`, so the behavior is the same as if you had closed the script.

The added value here is avoiding the infamous _Cannot modify header information - headers already sent by (output started at /path/to/file.php:lineNumber)_ bug. You'll run into this warning when there are raw HTML strings, which are immediately echoed to the server. Such strings are quite easy to spot when they are not blank (like a real `<html>` tag, or, when they are blank, at the beginning of the file.

At the end of the script, an extra space or tabulation might be difficult to spot, and, as such, will most probably generate the above mentioned error. This means that scripts must be checked for trailing whitespaces, and may have to be committed again with a whitespace fix. This is not efficient.

It is recommended to leave the last PHP closing tag open, so as to avoid the infamous _Cannot modify header information - headers already sent_ warning.


## Rule Details

This rule is aimed at avoiding the use of the last `?>` in a PHP script when it would be the last thing in a file.

The following patterns are considered warnings:

{% highlight php %}
<?php
class myClass {
	/* some code */
}
?>
{% endhighlight %}{: .warning .short }


The following patterns are not considered warnings:

{% highlight php %}
<?php
class myClass {
	/* some code */
}

{% endhighlight %}{: .ok .short }


## When Not To Use This Rule

* If you hate unbalanced parenthesis: [(](https://xkcd.com/859/)
* If you check all closing tags with your IDE or some code beautifier: just don't do this manually.


## Further Reading

* [PHP Closing Tag](http://php.net/language.basic-syntax.phptags)
* [PSR-2 coding style guide](http://www.php-fig.org/psr/psr-2/)