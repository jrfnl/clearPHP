<!-- Good Practices -->
# No Implied Cast

While PHP is a loose-typed language, you can still cast a value to a certain type. This relies on casting operators, like `(int)`, `(string)`, `(float)`, `(array)`, etc...

Most casting is to done implicitely, when PHP executes some other functionalities. For example, concatenating a variable to a string will cast the variable to a string. 

```php
<?php

print 'a '.(array()); // arrays are cast to the literal string 'Array'
print 'b '.(1); // integers are cast to their string representation 
print 'c '.($object); // objects are cast to the result of '__toString' or emit an error.

```


Using the above, it is possible to cast a value to a specific type by using the right operation and a carefully chosen literal.

```php
<?php

print $a * 1; // cast to integer
print $a + 0; // cast to integer
print $a / 1.0; // cast to float (rare)

print $a . ''; // cast to string
print "$a"; // also cast to string

```


It is recommended to use an explicit cast rather than an implied one, making it explicit that the operation is a typecasting, and not a mistaken operation. 


## Rule Details

This is considered a warning : 

```php
<?php

// math with identity operator
$a + 0;
$a - 0;

$a * 1; 
$a / 1; 
$a ** 1; 

// cast to real with the same operator as above

$a . ''; 
"$a"; 

```


The following are considered legit : 

```php
<?php

if ((int) $a) {} 

if ((float) $a) {} 

if ((string) $a) {} 

```

