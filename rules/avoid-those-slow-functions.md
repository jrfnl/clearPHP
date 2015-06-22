<!-- Performances -->
# Avoid Those Slow Functions

There are a few PHP native functions that should be avoided for speed reasons. They are listed below. 

Function             | Alternative
-------------------- |---------------
`array_diff()`       | Try using `array_diff_key()`, as keys are unique
`array_intersect()`  | Try using `array_intersect_key()`, as keys are unique
`array_udiff()`      | Try using `array_diff_key()`, as keys are unique
`array_uintersect()` | Try using `array_intersect_key()`, as keys are unique
`array_unique()`     | Use `array_count_values()` and `array_keys()`
`uasort()`           | Build the array to use non-u sort
`uksort()`           | Build the array to use non-u sort
`usort()`            | Build the array to use non-u sort
`in_array()`         | Build the array to be able to replace it with `isset()`
`preg_replace()`     | Replace with `str_replace()`, for simple replacements
`array_search()`     | Replace with `array_key_exists()`
`array_shift()`      | Process the array the other way with `array_pop()`
`array_unshift()`    | Process the array the other way with `array_push()`
`strstr()`           | Use `strpos()` for simple searches
`uniqid()`           | Always mention entropy (2nd parameter)
`array_walk()`       | Use `foreach($source as &$variable) { }`
`array_map()`        | Use `foreach($source as &$variable) { }`
`range()`            | You can use [generators] to prevent building an array in memory
`is_null()`          | Use `=== null` or similar
`is_resource()`      | Use `=== false` or similar
`is_bool()`          | Use `=== false` or similar


## Rule Details

Using any of the functions mentioned above will trigger a warning. 


## When Not To Use This Rule

These are micro-optimization compared to any architectural optimizations that are beyond the scope of this document. Don't start a manual replacement of all occurences fo these functions with faster versions, but keep this rule in mind when you code something new.
When you have coding conventions, push toward using some functions rather than others and keep the convention consistent.


## Further Reading

* [PHP Pitfalls]
* [Comparison of sorting functions]



[generators]: http://php.net/language.generators.overview
[PHP Pitfalls]: https://secure.phabricator.com/book/phabflavor/article/php_pitfalls/
[Comparison of sorting functions]: http://php.net/array.sorting
