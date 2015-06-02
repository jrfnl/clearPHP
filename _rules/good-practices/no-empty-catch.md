---
title:     No Empty Catch
---

`try...catch` structures are an error control structure: if any error happens in the `try` block, an exception is emitted, and it will be caught (or not) in one of the `catch` blocks.

Empty `catch` blocks means that the error will be identified, but treated by omission. It is a way to say: we know about this error but we can ignore it. This is even worse when the caught `Exception` is of class `Exception`, which is the most general type of error. 

At worse, a caught exception should be logged, so as to provide a basis for future analyze. On the other hand, commenting an empty catch block will do the same. 


### Rule Details

This rule is aimed at avoiding empty catch block.

The following patterns are considered warnings:

{% highlight php %}
<?php
try {

} catch (Exception $e) {
	
}

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
try {

} catch (SomeException $e) {
	// commenting why we can ignore this
} catch (SomeOtherException $e) {
	// reserved for future use
	$log->log($e->getMessage());
} catch (SomeDbException $e) {
	// logging
	$log->log($e->getMessage());
	// actually taking some action
	$this->db->rollback(); 
}

{% endhighlight %}{: .ok }


### Further Reading


#### Related rules

* [No Catch Overwrite]
* [No Raw Exceptions]
* [No Unresolved Catch]



[No Catch Overwrite]: {{ "/good-practices/no-catch-overwrite/" | prepend: site.clearphp.url }}
[No Raw Exceptions]: {{ "/good-practices/no-raw-exceptions/" | prepend: site.clearphp.url }}
[No Unresolved Catch]: {{ "/good-practices/no-unresolved-catch/" | prepend: site.clearphp.url }}
