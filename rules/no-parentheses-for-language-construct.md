<!-- PHP Manual -->
# No Parentheses For Language Construct

`print` may be called without parentheses: it, along with a small group of other PHP native structures, are called _language constructs_ and are not usual functions. The language constructs are `echo`, `print`, `include`, `include_once`, `require`, `require_once`.

```php
<?php
print "a\n";
print("b\n");

```


Although both instructions behave the same, calling `print` with parentheses does not have the same meaning as in a function. Actually, PHP really understands the parentheses as (sic) parentheses, and not as arguments delimiters.

It is easier to understand the situation with the following script : 

```php
<?php

print("a") && print("b");

```


If `print` was a function, then it would display `a` and then `b`. However, the script displays `b1`. In fact, the above script is equivalent to the one below : 

```php
<?php

print( ("a") && print("b")  );

```


The first print function displays the result of `("a") && print "b"`. This expression displays `"b"`, then return `1`, and  `("a") && 1` is processed, resulting in 1. At that point, the second `print` is actually run. 

It is recommended not to use any parentheses with language constructs, so as to avoid such pitfall.


## Rule Details

List of language constructs whose parentheses should be avoided:

* `print`
* `echo`
* `include`
* `include_once`
* `require`
* `require_once`

List of instructions whose parentheses should be avoided too:

* `return` 
* `throw`

Note that some languages constructs, such as `unset`, `isset`, `empty`, ... may not be used without parentheses and that for some, such as `die` and `exit` the usage of parentheses is only needed when passing parameters to them.


The following pattern is considered a warning:

```php
<?php

print("a") && die()  );

```


The following patterns are considered legit:

```php
<?php

// tolerated
// print is alone in the expression
print ("b");

// better
include "c";
echo "b";

```


## When Not To Use This Rule

If `print` is _**always**_ used alone in the expression, there is no need to chase all uses.
 

## Further Reading

* [Variable functions](http://php.net/functions.variable-functions)
* [print](http://php.net/print)