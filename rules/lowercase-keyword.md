<!-- Good Practices -->
# Lowercase Keywords

The general usage is to use PHP keywords in lowercase. Uppercase is possible, but ugly and unheard of. 

```php
<?php
IF (OK_FOR_CONSTANTS) {
	PRINT "Result : ";
} ELSE {
	ECHO "Result : ";
}
?>
```

## Rule Details

All PHP keywords should be lowercase, except for constants such as `TRUE`, `FALSE`, `NULL`, which are tolerated in uppercase version, and PHP constants, which are always used as constants.

This is incorrect : 

```php
<?php
DO {
	print "Result : ";
} While ($x AnD $y === FALSE);
?>
```

This is correct code : 

```php
<?php
do {
	print "Result : ";
} while ($x and $y === FALSE);
?>
```




