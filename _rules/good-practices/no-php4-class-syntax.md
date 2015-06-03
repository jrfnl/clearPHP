---
title:     No PHP4 Class Syntax
minphp:    5.0
---

In PHP 4, constructors used to be methods that bore the class's name. 

{% highlight php %}
<?php
class x {
	private $init = false;
	
	// This is the constructor
	function x() {
		$this->init = true;
	}
}

{% endhighlight %}


In PHP 5, constructors are now called `__construct` and if this function is not defined, if the class has no parent and if the method is not the last element of the current namespace, PHP will try to use the function that bear the class's name instead. This is meant to ensure backward compatibility. 

For backward compatibility, when PHP 5 can't find the `__construct()` function in a given class or its parents, it will look for the PHP 4 constructor. Since PHP 5.4, namespaced classes do not recognize PHP 4 constructors in any case.

{% highlight php %}
<?php
namespace {
	class x {
		private $init = false;
	
		// This is the constructor
		function x() {
			echo __METHOD__."\n";
		}
	}
	new x();
}

namespace y {
	class x {
		private $init = false;
	
		// This is NOT the constructor
		function x() {
			echo __METHOD__."\n";
		}
	}
	new x();
}

{% endhighlight %}


In PHP 4, properties were declared using the `var` keyword. This keyword is still available, and is a synonym of `public`. However, it should be replaced by `public` or another visibility indicator. 

{% highlight php %}
<?php
// PHP 4 syntax
class foo {
	var $bar = 1;
}

// PHP 5 syntax
class bar {
	public $foor = 1;
}

{% endhighlight %}


It is recommended to avoid PHP 4 class syntax altogether, as it has been replaced by new and more powerful syntaxes. It is considered obsolete and backward compatible support may be dropped at some point in the future.


### Rule Details

The following snippets are considered a warning:

{% highlight php %}
<?php
namespace {
	// rename this from PHP4_style to __construct()
	class PHP4_style {
		function PHP4_style() { /**/ } 
	}

	// rename this from PHP4_style to __construct()
	class PHP4_style_with_parent extends PHP4_style {
		// will use PHP4_style
	}

	// check PHP4_PHP5_hybrid and see if it may be dropped or renamed
	class PHP4_PHP5_hybrid {
		function __construct() { /**/ } 
		function PHP4_PHP5_hybrid() { /**/ } 
	}

	class oldStyleProperty{
		var $someProperty = 1;
	}
}


namespace Foo {
	class Bar {
   		public function Bar() {
       // treated as construct in PHP 5.3.0-5.3.2
       // treated as regular method as of PHP 5.3.3
    	}
	}
}

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
class PHP5_style {
	public $someProperty = 1;
	
	function __construct() { /**/ }
}

{% endhighlight %}{: .good }


### Further Reading

* [Remove PHP 4 Constructors](https://wiki.php.net/rfc/remove_php4_constructors) 
