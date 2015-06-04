---
title:     Avoid Those Functions
---

There are a few PHP native functions that should be avoided, because they represent old solutions to modern problems, or they were replaced by better solutions or functions. 

Their usage should be investigated. 

Function | Reason | Alternative
-------- | ------ | -----------
`mysql_escape_string()`       | Not an effective way to secure values in a SQL query  |  Use [prepared statements]
`mysql_real_escape_string()`  | Not much better than the previous function  | Use [prepared statements]
`mysqli_real_escape_string()` | Old style data protection  | Use [prepared statements]
`addslashes()`                | Ineffective protection in SQL query  | Use [prepared statements]
`addCslashes()`               | Ineffective protection in SQL query  | Use [prepared statements]
`SQLite3::escapeString()`     | Not effective protection in SQL query for all characters  | Use [prepared statements]
`eval()`                      | This function has [a rule by itself]  | Use reflection, closures
`set_include_path()`          | May interfere with other inclusions | Configure `include_path` in `php.ini` and don't mess with it again
`mime_content_type()`         | Deprecated  | Use `Finfo` class, with the constant `FILEINFO_MIME_TYPE`


### Rule Details

Using any of the functions mentioned above will trigger a warning. 



### Further Reading

* [PHP 5.6 backward incompatible changes](http://php.net/migration56.incompatible)
* [PHP 5.5 backward incompatible changes](http://php.net/migration55.incompatible)
* [PHP 5.4 backward incompatible changes](http://php.net/migration54.incompatible)
* [PHP 5.3 backward incompatible changes](http://php.net/migration53.incompatible)
* [PHP 5.2 backward incompatible changes](http://php.net/migration52.incompatible)


#### Related rules

* [Always Prepare Statements]
* [No Eval]
* [No Aliases]
* [No Deprecated]
* [No Incompilable]
* [No Obsolete Extensions]



[prepared statements]: {{ "/security/always-prepare-statement/" | prepend: site.clearphp.url }}
[a rule by itself]: {{ "/security/no-eval/" | prepend: site.clearphp.url }}
[Always Prepare Statements]: {{ "/security/always-prepare-statement/" | prepend: site.clearphp.url }}
[No Eval]: {{ "/security/no-eval/" | prepend: site.clearphp.url }}
[No Aliases]: {{ "/php-manual/no-aliases/" | prepend: site.clearphp.url }}
[No Deprecated]: {{ "/php-manual/no-deprecated/" | prepend: site.clearphp.url }}
[No Incompilable]: {{ "/good-practices/no-incompilable/" | prepend: site.clearphp.url }}
[No Obsolete Extensions]: {{ "/good-practices/no-obsolete-extensions/" | prepend: site.clearphp.url }}
