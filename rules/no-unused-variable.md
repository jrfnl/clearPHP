<!-- Good Practices -->
# No Unused Variables

Variables that are created and not used anywhere in the code are most likely useless. Such variables consume memory, use code space and may create confusion.

As a simple check, any variable only used once in a context should be checked. 

Variables that are arguments are subject of a distinct rule, as their existence is under another set of constraints. See <a href="unused-arguments.md">Unused arguments</a>


## Rule Details

This rule is aimed at eliminating unused variables.

The following pattern is considered a warning:

```php
<?php
$x = 10; 

```


The following pattern is not considered a warning:

```php
<?php
$x = 10;
$x++;

```


## When Not To Use This Rule

If you don't want to be notified about unused variables, you can turn this rule off.
