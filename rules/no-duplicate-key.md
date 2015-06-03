<!-- Good Practices -->
# No Duplicate Keys In Array

Disallow the creation of duplicate keys in literal arrays. 

This is useless as the second defined key will overwrite the first silently. 

## Rule Details

This rule require that every `array()` call has unique keys. The following is wrong. 

```php
<?php
$a = array(1 => 'a',
			 2 => 'b',
			 3 => 'c',
			 1 => 'a' // double definition
			 );

```


The following patterns are considered OK :

```php
<?php
$a = array(1 => 'a',
			 2 => 'b',
			 3 => 'c',
			 );

$a[1] = 'a'; // this doesn't belong to the literal definition anymore

```


