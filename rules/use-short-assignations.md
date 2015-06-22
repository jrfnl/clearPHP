<!-- Performances -->
# Use Short Assignations

Some operators have a _'do-and-assign'_ version, that looks like a compacted version of the `=`-sign and the operator.

```php
<?php

$x = $x + 2;
// may be written
$x += 2;

```

This approach is good for readability : it makes it obvious that the variable is incremented with another value. This is typically very useful when data is collected in a variable until the variable is finally used, such as often is the case with concatenations.

Short assignation is more memory efficient. It will avoid copying the data to a new location after allocation. This will save some memory. It may also bring a speed boost if those lines are used intensively.

It is recommended to use the short assignation syntax all the time.

## Rule Details

This rule targets assignations that may be shortened. 

The list of short assignation operators is the following :
* +=
* -=
* *=
* /=
* %=
* **=
* .=
* &=
* |=
* ^=
* >>=
* <<=

The following patterns are considered a warning :

```php
<?php

// + and * are commutable
$a = $a + $b;
$a = $b + $a;

// other operators cannot be swapped, so only one version may be adapted
$a = $a - $b;

// This may be shortened
$a = $a . $b . $c; 

```

The following is OK : 

```php
<?php

// some operators cannot be swapped
$a = $b - $a; 

```
