---
title:     No Obsolete Extensions
---

There are a few PHP native extensions that should be avoided. 

Extension   | Dropped in version | Alternative
----------- | ------------------ | -----------
`dbase`     | 5.3 | Abandoned
`ereg`      | 5.3 | `pcre`
`fbsql`     | 5.3 | Abandoned
`fdf`       | 5.3 | `pecl/fdf`
`mhash`     | 5.3 | `hash`
`ming`      | 5.3 | `pecl/ming`
`msql`      | 5.3 | Abandoned
`mssql`     | 5.3 | Use SQLSRV from Microsoft
`mysql`     | 5.5 | Deprecated only. Use `pdo` or `mysqli`
`ncurses`   | 5.3 | `pecl/ncurses`
`sqlite`    | 5.4 | `sqlite3`
`sybase`    | 5.3 | `pecl/sybase_ct`


### Rule Details

Using any of the extensions mentioned above will trigger a warning. Usage includes constants, functions, classes, interfaces or directives, if any.


### Further Reading


#### Related rules

* [Avoid Those Functions]
* [No Deprecated]
* [No Incompilable]
* [No Obsolete Directives]




[Avoid Those Functions]: {{ "/good-practices/avoid-those-functions/" | prepend: site.clearphp.url }}
[No Deprecated]: {{ "/php-manual/no-deprecated/" | prepend: site.clearphp.url }}
[No Incompilable]: {{ "/good-practices/no-incompilable/" | prepend: site.clearphp.url }}
[No Obsolete Directives]: {{ "/good-practices/no-obsolete-directives/" | prepend: site.clearphp.url }}