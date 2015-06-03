<!-- PHP Manual -->
# No Deprecated

From version to version, PHP depreciates some features and replaces them with new or not. This is normal evolution of the platform. Deprecated features are initially marked as such, then, removed in a following version. 

For example, the extension `ext/mysql` has been removed in PHP 5.5, and it was obsolete in the previous versions. In the current PHP 5.6 version, the variable `$HTTP_RAW_POST_DATA`, the configuration directives `iconv.input_encoding` (and some related ones), and static call to normal methods are depreciated. 

## Rule Details

This rule targets code that is marked as obsolete in one of the PHP versions, or was removed. The list of such deprecated features is available in the manual, in the migration pages.


## When Not To Use This Rule

If you plan to keep your application linked to some PHP version, then you can safely ignore this rule.


## Further Reading

* [Deprecated features in PHP 5.6.x](http://php.net/migration56.deprecated)
* [Deprecated features in PHP 5.5.x](http://php.net/migration55.deprecated)
* [Deprecated features in PHP 5.4.x](http://php.net/migration54.deprecated)
* [Deprecated features in PHP 5.3.x](http://php.net/migration53.deprecated)
