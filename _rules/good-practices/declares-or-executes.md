---
title:     Declares Or Executes
---

Files should either execute code or declare new structures (classes, interfaces, functions, etc.) but shouldn't do both. 

Declaration files will be included at some point in the code, so as to provide the necessary definitions to run a script. They shouldn't have other effect than providing a definition. Any other side effect may interfere with the running code, which should be left as main commander.  


### Rule Details

This rule requires that files contains only definitions for functions, constants, classes, traits or interfaces. A few exceptions may apply to conditional definitions and direct access prevention.
  
The following patterns are considered warnings:

{% highlight php %}
<?php
class x { /**/ }

// main script should initialize that variable only if needed
if (x::staticProperty === null) {
	$main_variable = new x();
}

{% endhighlight %}{: .warning }


The following code is considered legit: 

{% highlight php %}
<?php
// direct access
if (!defined('APP_CONSTANT')) { die(); }

// conditional declarations
if (defined('APP_CONFIGURATION')) {
	class x { /**/ }
} else {
	class x { /**/ }
}

{% endhighlight %}{: .good }


### Further Reading

* [PSR-1: Side effects](http://www.php-fig.org/psr/psr-1/#2.3.-side-effects)

