---
title:     No Constant As Array Keys
---

PHP has a fallback to string when a constant is not defined. For example: 

{% highlight php %}
<?php
// foo is not defined as constant

$a = array('foo' => 'bar');

// foo is a string, because of the quotes (double will do too)
echo $a['foo'];

// foo is a string, because it is inside double quotes
echo "$a[foo]";

// This won't compile
//echo "$a['foo']";

// This will be 'foo' (the string), or, the foo constant (when someone defines it)
echo $a[foo];

{% endhighlight %}


It is recommended to always have strings or integers as array indexes, so as to be consistent inside and outside quotes. Check carefully that any constant used there is actually defined. Other types are cast or emit an error anyway.


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
$a = array(1.0 => 'b',  // Float will be casted
		   '1' => 'c',  // String will be casted to Int when possible
		   true => 'd', // Boolean will be casted to Int
		   null => 'e', // Null will be casted to Empty string
	  	   foo  => 'f'  // const may be cast to its value or to String
			 );
 
{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
const F = 10;
define('G' ,11);

$a = array(1 =>  'c', 
				    'd', // automated index
		 		    'a' => 'e',
		 		    F => 1, // F is defined
		 		    G => 2  // G is defined
			 );
 
{% endhighlight %}



### Further Reading

* [Arrays](http://php.net/language.types.array)


#### Related rules

* [No Duplicate Keys In Array]



[No Duplicate Keys In Array]: {{ "/good-practices/no-duplicate-key/" | prepend: site.clearphp.url }}