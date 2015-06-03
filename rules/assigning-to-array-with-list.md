<!-- PHP Manual -->
# Assigning To Array With List

The PHP language construct `list()` accepts any data container as argument. Most of the time, those are variables, but it may be convenient to use arrays. 

```php
<?php

$info = array('arabica', 'brown', 'caffeine');

list($a[0], $a[1], $a[2]) = $info;

var_dump($a);


```
The values will be assigned to the right index in the array, but the former will be built from right to left, and not, as it is expected most of the time, from left to right. 

```
array(3) {
  [2]=>
  string(8) "caffeine"
  [1]=>
  string(5) "brown"
  [0]=>
  string(6) "arabica"
}
```


If order is important in the resulting array, it is recommended to apply `array_reverse()` on the resulting array, or to build the array in another way. 



## Further Reading

* [`list()`](http://php.net/function.list)
