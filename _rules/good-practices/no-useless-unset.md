---
title:     No Useless Unset
---

`unset()` is the function to use to destroy a variable. _unset_ is also an operator `(unset)`, which actually does the same as the function.

Unsetting variables have different effects depending on the type of variable. In the following five cases it is useless to unset a variable:

* **_Unsetting a passed-by-value argument_**: arguments that are passed by value are copied from the calling context to the current one. Destroying the local variable is pointless: it will be destroyed (whatever that means), at the end of the method. 
* **_Unsetting a passed-by-reference argument_**: this time again, the actual value is left untouched. The reference itself is destroyed, but the value is still available in the original context.
* **_Unsetting a global variable inside a function_**: variables that are `global` can't be destroyed in the global scope by unsetting them from inside a function. The only solution is to unset them in the `$GLOBALS` variable.
* **_Unsetting a static variable in a function_**: a static variable is a variable which will survive the end of the current call, to be available again in the next call. Unsetting the variable will simply destroy it in the current call: it will be recreated at the next call.
* **_Unsetting a blind variable in a foreach loop_**: PHP works on a copy of the original array, and loops over the elements in that copy. Destroying such a variable, index or value, is useless. On the other hand, using the index to destroy the value in the original array is fine.

Here is a pot-pourri of the previous situations: 

{% highlight php %}
<?php
function foo(&$argByReference, $argByValue) { 
	static $theStatic;
	global $theGlobal;
	
	unset($theStatic); // useless, will be back next call
	unset($theGLobal); // useless, should unset $GLOBALS['theGlobal'];
	unset($argByReference); // useless, will only destroy local reference
	unset($argByValue); // useless, will only destroy local copy 
	
	foreach($array as $key => $value) {
		unset($value);
	}
	
}

$varByReference = 1;
$varByValue = 2;
foo($varByReference, $varByValue);

{% endhighlight %}


With a positive view, `unset()` may be used to unset local variables in a function, global variables in the global scope, object properties and array indexes.

It is recommended to avoid using `unset()` on resilient variables.


### Rule Details

The following code is considered a warning:

{% highlight php %}
<?php
function foo(&$argByReference, $argByValue) { 
	static $theStatic;
	global $theGlobal;
	
	unset($theStatic); // useless, will be back next call
	unset($theGLobal); // useless, should unset $GLOBALS['theGlobal'];
	unset($argByReference); // useless, will only destroy local reference
	unset($argByValue); // useless, will only destroy local copy 
	
	foreach($array as $key => $value) {
		unset($value);
	}

}

$varByReference = 1;
$varByValue = 2;
foo($varByReference, $varByValue);

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
unset ($variableInGlobalScope);
unset ($GLOBALS['anyGlobalVariable']);

function foo() {
	$localVariable = array(1);
	
	unset($localVariable[0]);
	unset($localVariable);
	
	unset($this->property);
	
	foreach($array as $key => $value) {
		unset($array[$value]);
	}
}

{% endhighlight %}{: .good }



### Further Reading
* [unset](http://php.net/function.unset)
