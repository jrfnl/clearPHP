---
title:     No Multiple Instruction Per Line
---

PHP uses the semicolon `;` for instruction separation. New expressions should start on a new line, making it easier to spot them.

{% highlight php %}
<?php
class x {
	const a = 1;
	const b = 2;
	const c = 3;
}

{% endhighlight %}


PHP also allows merging several operations in one, when they share some common meaning or operator.

{% highlight php %}
<?php
class x {
	const a = 1, b = 2, c = 3;
}

{% endhighlight %}


However, lining up several instructions on the same line will break the readability of the code, and make it harder to spot special situations. 

{% highlight php %}
<?php
switch ($x) {
	case 'a' : $a = 1; break 1;
	case 'b' : $a = 2; // fall throw
	case 'c' : $a = 3; break 1;
	case 'd' : 
		$a = 4; 
		$b = 5; break 1; 
	default : 
}

{% endhighlight %}


It is recommended to make sure there is only one instruction per line, or use the merged version of the instruction. 


### Rule Details

This code is considered a warning: 

{% highlight php %}
<?php
$a = 'a'; $a .= 'bc'; $a .= 'c';


if ($a == 0) {if ($b) {$c ^= $d; $e ^= $f;} else {$g = $h; $i = $j; $k = $l; $m = $n;}}

{% endhighlight %}{: .warning }


This code is considered valid: 

{% highlight php %}
<?php
class x {
	const a = 1;
	const b = 2;
	const c = 3;
}

class x {
	const a = 1, b = 2, c = 3;
}

{% endhighlight %}{: .good }


{% highlight php %}
<?php
$a = 'a';
$a .= $bc;
$a .= 'c';

// or

$a = 'a' . $bc . 'c';

{% endhighlight %}{: .good }


{% highlight php %}
<?php
if ($a == 0) {
	if ($b) {
		$c ^= $d; 
		$e ^= $f;
	} else {
		$g = $h; 
		$i = $j; 
		$k = $l; 
		$m = $n;
	}
}

{% endhighlight %}{: .good }


