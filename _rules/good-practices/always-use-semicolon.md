---
title:     Always Use Semicolon
---

PHP uses semicolon `;` to make a distinction between two sequential instructions.

{% highlight php %}
<?php
$a = 'a';
echo $a;

{% endhighlight %}


There are a few situations where semicolon are not required, as another token will be used as instruction ending. For example:

{% highlight php %}
<?php
echo 'a'
?>

{% endhighlight %}{: .short }


Here, the `echo 'a'` instruction will be closed automatically by the `?>` PHP closing tag.

In some situations, the missing `;` will make PHP starts the instruction on one line and finish on the next.

{% highlight php %}
<?php
$a = f() or
	// $a = b()      // This line was simply commented out
if ($condition) {}	// now the 'if' is depend on the f() call
	
echo 
print 'b';
// This will display b1

{% endhighlight %}


`continue` and `break` used to accept no value (which will default to 1) or the result of the next expression (up to PHP 5.4):

{% highlight php %}
<?php
for ( $i = 0; $i < 5; ++$i )
{
    if ( $i == 2 )
        continue
    print "$i\n";
    // surprising result
}

{% endhighlight %}


There are quite some instructions that may overflow to the next line, like all operators and a number of language constructs:

* all operators (math, comparison, logical...)
* `echo`
* `print`
* `include` and `include_once`
* `require` and `require_once`
* `exit`

This rule doesn't require the adding of an extra semicolon when it isn't needed.

{% highlight php %}
<?php
for ( $i = 0; $i < 5; ++$i ) { }; // useless semicolon

class x { }; // useless semicolon

{% endhighlight %}


It is recommended to make sure that all required semicolon are always set, even if they are not compulsory.

### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php echo $a ?>
<?= 3 ?>

{% endhighlight %}{: .warning .short }


The following code is not considered a warning:

{% highlight php %}
<?php
include
	'/some/file.php';

{% endhighlight %}{: .ok }


### Further Reading

* [instruction-separation](http://php.net/language.basic-syntax.instruction-separation)

