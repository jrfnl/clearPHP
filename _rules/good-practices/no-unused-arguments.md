---
title:     No Unused Arguments
---

Arguments are compulsory when calling a method or a function. As such, arguments should be taken into account by the methods, and used, rather than just ignored. 

{% highlight php %}
<?php
function init($uri, $login, $pass) {
	$this->log = new Mysqli($uri, $user, $pass);
}

{% endhighlight %}


There is a situation where arguments are both unused and necessary: when overloading a method in a class hierarchy. The parent class may have defined a list of arguments, that are actually unnecessary to the child class, but compulsory because of the (abstract) parent class. In that situation, an argument will rightfully not be used. 

{% highlight php %}
<?php
abstract class log {
	abstract function init($uri, $login, $pass);
	// save to some database on $host
}

class logSqlite extends log {
	function init($uri, $login, $pass) {
		// unused arguments linked to abstraction
		$this->log = new SQLite3($uri);	}
}

class logMysql extends log {
	function init($uri, $login, $pass) {
		$this->log = new Mysqli($uri, $user, $pass);	}
}

{% endhighlight %}


Argument should always be used in a function, even if conditionally.

{% highlight php %}
<?php
// all arguments are used, even if conditionally
function x($a, $b, $c) {
	if ($a > 0) {
		return $b + $c;
	} else {
		return $c;
	}
}

// $b is never used. Giving it a default value doesn't help
function x2($a, $b = 1, $c = 2) {
	if ($a > 0) {
		return 1 + $c;
	} else {
		return $c;
	}
}

{% endhighlight %}


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
function x ($foo) {
    return 5;
}

{% endhighlight %}{: .warning }


### When Not To Use This Rule

If you don't want to be notified about unused variables or function arguments, you can safely turn this rule off.


### Further Reading


#### Related rules

* [All Unique Arguments]
* [Default Argument At The End]
* [No Extra Argument]
* [No Missing Argument]



[All Unique Arguments]: {{ "/php-manual/all-unique-arguments/" | prepend: site.clearphp.url }}
[Default Argument At The End]: {{ "/php-manual/argument-with-default-at-the-end/" | prepend: site.clearphp.url }}
[No Extra Argument]: {{ "/good-practices/no-extra-argument/" | prepend: site.clearphp.url }}
[No Missing Argument]: {{ "/good-practices/no-missing-argument/" | prepend: site.clearphp.url }}
