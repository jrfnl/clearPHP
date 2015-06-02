---
title:     Strict Comparisons
---

PHP makes a effort at simplifying the programmer's life by automatically casting the values in a comparison to a comparable type. 

{% highlight php %}
<?php
$x = 0;
if ($x == false) { /* doSomething */ }

{% endhighlight %}


##### Frequent Error

Here, equating `0` to `false` seems quite natural. Under the hood, PHP does turn the integer `0` to its boolean equivalent, which is `false`. The comparison then succeeds. 

{% highlight php %}
<?php
$x = strpos('abc', 'a');
if ($x == false) { /* process error */ } else { /* process finding */}

{% endhighlight %}

Things gets a little more confusing when some information is carried by the type of the value. Here, `strpos` will return `false` if it can't find the needle (`'a'`) in the haystack (`'abc'`). But it will also return `0` if it finds the needle in the first position, which is indexed with 0. 

###### Security Error

The loose equations `==` and `!=` are also a weakness when dealing with passwords. Usually, passwords are not compared directly, but after hashing, using methods like haval, tiger or ripemd128 (Older code may rely on MD5, SHA1 or CRC32). All those hash are strings, containing numbers and letters.

{% highlight php %}
<?php
echo hash('ripemd128','315655854',false);
// 0e251331818775808475952406672980

{% endhighlight %}

When the hash value starts with an `0e`, and is compared using `==` and `!=`, then PHP will first convert the operands to integers before comparing them. This will turn both operands to 0, and even if the strings are not identical, the comparison will conclude so, leaving the application wide open to untrusted users.

{% highlight php %}
<?php
if (hash('ripemd128','315655854',false) == "0e123") {
	print "Matched\n";
};

{% endhighlight %}


###### Recommendations

The recommendation is to use `===` or `!==` by default, anywhere there is no good reason to use `==` or `!=`. Always compare the returned value to `false` or `true` explicitly.

As for password related operations, it is also recommended to use the `password_hash()` and `password_verify()` functions.


### Rule Details

This rule targets methods that don't compare results with `===` or `!==` to `false` or `true`.

Here is a list of PHP native functions that require strict comparison: 

* `array_search()`
* `collator_compare()`
* `collator_get_sort_key()`
* `current()`
* `fgetc()`
* `file_get_contents()`
* `file_put_contents()`
* `iconv_strpos()`
* `iconv_strrpos()`
* `imagecolorallocate()`
* `imagecolorallocatealpha()`
* `mb_strlen()`
* `next()`
* `pcntl_getpriority()`
* `preg_match()`
* `preg_match_all()`
* `prev()`
* `readdir()`
* `stripos()`
* `strpos()`
* `strripos()`
* `strrpos()`
* `strtok()`

The following code is considered a warning:

{% highlight php %}
<?php
// implicit comparisons
if (strpos('abc', 'a')) {}

// weak comparisons
if (stripos('abc', 'a') == false) {}
if (strrpos('abc', 'a') == 2) {}

// weak and implicit comparisons
if ($res = preg_match('/abc/', $a)) {}

{% endhighlight %}{: .warning }


The following patterns are considered legit:

{% highlight php %}
<?php
// explicit comparisons
if (strpos('abc', 'a') === false) {}
if (strripos('abc', 'a') !== true) {}

// explicit comparison and assignation
if (($res = readdir('.')) === false) {}

{% endhighlight %}{: .good }


### Further Reading

* [Strict vs. Loose Comparisons in PHP](http://www.copterlabs.com/blog/strict-vs-loose-comparisons-in-php/)
* [Magic hashes](https://blog.whitehatsec.com/magic-hashes/)
* [password_verify](http://php.net/function.password-verify)
* [Userland password_hash](https://github.com/ircmaxell/password_compat)
* [Variable comparison cheatsheets](http://phpcheatsheets.com/compare/)

