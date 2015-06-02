---
title:     Constant Condition
---

Constant conditions signal a debug situation (forcing some rare behavior), a bug or a typo. 

{% highlight php %}
<?php
if (true) { 
	// Store in cache
}
// caching is forced, while it should be configurable

while($x = fetchData()) {

	if (strlen($x) == 0) { break 1;}
	
	// process $x
}
// should be a do ... while() without a break

{% endhighlight %}


Loops that are build with constant conditions, generally include an exit instruction, allowing them to be finalized without stopping the whole application. Such loops may be rewritten to make the exit function more visible, in the loop condition. 

{% highlight php %}
<?php
while(true) {
	waitForEvent();
	
	// exit function that needs to be in the while condition.
	if (receivedQuitSignal()) {
		break 1;
	}
}

{% endhighlight %}


Using constants in conditions is not regarded as constant conditions: such constants may be conditional constants (their value is dynamically defined at startup, from an external file), or even have dynamical value (such as the magic constants). Constant conditions will be build with literals.

It is recommended to use non-constant conditions in the flow instructions. 


### Rule Details

This rules spots conditional structures which value may be processed even before compiling the code. Such structures should be reviewed.

The following codes are considered a warning:

{% highlight php %}
<?php
// with if or elseif
if (true) { 
	// doSomething()
} elseif (2) {
	// doSomething()
}

// with ternary operator
$x = 0 ? 1 : 2;

// with do...while
do 
	// doSomething()
while (1 == 1);

// with while
while (!false) {
	// doSomething()
}

// with for
for ( ; $x == 2 || true ; ) {
	// doSomething()
}

{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
// SOME_CONSTANT may be configured somewhere
if (SOME_CONSTANT) { 
	// doSomething()
} elseif (basename(__FILE__) == 'index.php') {
	// __FILE__ is a dynamic constant
}

// with for
for ( ; $object->property == 2 ; ) {
	// doSomething()
}

// here, the condition is in the case
switch (true) {
	case $a : 
		// doSomething()
		break;
	
	case $c == $d; 
		// doSomething()
		break;
	
	default : 
}

{% endhighlight %}{: .good }


