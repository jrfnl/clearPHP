<!-- Good Practices -->
# No Nested Ternary

The ternary operator is a compact version of an _`if` then `else`_ structure. It is very convenient when the branching is needed but should be inline with the rest of the code.

```php
<?php
print 'Result : '.( $success ? 'transaction succeded' : 'transaction failed');

```


Ternary operators may be nested. This very quickly degrades the readability of the code.

```php
<?php
print 'Result : '.( $success ? $christmas ? 'transaction success and you get a gift' : 'transaction success' : 'transaction failed');

```


It should also be mentioned that ternaries may not produce the expected result when nesting them without adding parentheses. For example: 

```php
<?php
echo $foo ? 'a' : $bar ? 'b' : 'c';

```

These are the results for all values of `$foo` and `$bar`:

`$foo`  | `$bar`  | result
------- | ------- | ------
`true`  | `true`  | b
`true`  | `false` | b
`false` | `true`  | b
`false` | `false` | c


It is recommended to avoid nesting ternary operators. 


## Rule Details

Ternary operators are fine. Nesting them hurts. 

The following code will raise a warning : 

```php
<?php

$foo ? 'a' : $bar ? 'b' : 'c';

$foo ?: $bar ? 'b' : 'c';

$foo ?: $bar ?: 'c';

```


The following code is legit: 

```php
<?php

$a = $bar ? 'b' : 'c';
$d = $foo ? 'a' : $b;

if ($foo) {
	$d = 'a';
} elseif ($bar) {
	$d = 'b';
} else {
	$d = 'c';
}

```
