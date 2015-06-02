---
title:     No Bracketless Blocks
---

PHP allows statement like `for`, `if`-`elseif`-`then`, `do...while`, `while`, `foreach` to be followed by one instruction. In such case, only the next instruction will be included in the statement. This is convenient when writing short instruction, as this keeps it easy to read. 

{% highlight php %}
<?php
$a = 1;
if ($a == 1) 
	$b = 2;
	$a = 3;
	
// now only $b was changed

{% endhighlight %}


However, code tends to grow, and this convenience will be removed as soon as a second instruction needs to be added to the statement. Then, curly braces `{ }` are necessary in order to have all next instructions to be processed within the statement.

There are situations where the brackets will remove ambiguity: 

{% highlight php %}
<?php
if ($a > 0 ) if ($a > 10) $b = 1; else $b = 2;

{% endhighlight %}


In the code above, does the `else` apply to the first `if` or to the second `if` ? (_Answer: The second_).

Note also that PHP is not consistent in its allowing the bracketless blocks, as `try`/`catch` or `switch` statement do not support it.

As a precaution for future updates to the code, it is recommended to always add brackets to statements.


### Rule Details

The following snippets are considered a warning:

{% highlight php %}
<?php
if ($a == 1) 
	$b = 2;
elseif ($b == 2) 
	$c = 3;
else 
	$d = 4;
	
do
	$e = 5;
while ($f == 6);

while ($g == 7)
	$h = 8;
	
for ($i = 0; $i < 10; $i++) 
	$j = 9;
	
foreach($k as $l) 
	$m = 4;
	
{% endhighlight %}{: .warning }


The following pattern is considered legit:

{% highlight php %}
<?php
if ($a == 1) {
	$b = 2;
} elseif ($b == 2) {
	$c = 3;
} else {
	$d = 4;
}
	
do {
	$e = 5;
} while ($f == 6);

while ($g == 7) {
	$h = 8;
}
	
for ($i = 0; $i < 10; $i++) {
	$j = 9;
}

foreach($k as $l) {
	$m = 4;
}

{% endhighlight %}{: .good }


