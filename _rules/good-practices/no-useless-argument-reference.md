---
title:     No Useless Reference Arguments
---

Arguments may be passed by reference, allowing the called method to modify the content. If the method doesn't modify the content, then passing a reference is useless, as PHP will optimize the call itself. 

{% highlight php %}
<?php
$user = 'username';
$content = 'Some value';

function doSomething(&$user, &$content) {
	if (new User($user)->isAllowed()) {
		$content .= ' Modified by doSomething';
	}
}

{% endhighlight %}


In the previous example, `$content` is modified and the reference is actually needed. On the other hand, `$user` is only read to build the object, and will not be modified: this reference is useless.

It is recommended to only use references when they are needed.


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
$user = 'username';
$content = 'Some value';

// here, $content is OK, $user should not have reference
function doSomething(&$user, &$content) {
	if (new User($user)->isAllowed()) {
		$content .= ' Modified by doSomething';
	}
}

// here, $array is OK, 
//	     $object should not have reference as it is an object
//      $method should not have a reference as it won't be modified   
function doSomething(array &$array, Stdclass $object, callable $method) {
	$array[] = 1;
	/* do Something */
}

{% endhighlight %}{: .warning }



### Further Reading


#### Related rules

* [No Dangling References]
* [No Incompatible References]
* [No Reassigned References]
* [No References On Objects]
* [Use Reference To Alter In Foreach]



[No Dangling References]: {{ "/potential-errors/no-dangling-reference/" | prepend: site.clearphp.url }}
[No Incompatible References]: {{ "/php-manual/no-incompatible-reference/" | prepend: site.clearphp.url }}
[No Reassigned References]: {{ "/php-manual/no-reassign-references/" | prepend: site.clearphp.url }}
[No References On Objects]: {{ "/good-practices/no-references-on-objects/" | prepend: site.clearphp.url }}
[Use Reference To Alter In Foreach]: {{ "/performance/use-reference-to-alter-in-foreach/" | prepend: site.clearphp.url }}

