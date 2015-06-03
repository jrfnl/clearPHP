<!-- PHP Manual -->
# No Short Tags

PHP allows the short open tag `<?`, which is discouraged since it is only available if explicitly enabled using the `short_open_tag` `php.ini` configuration file directive, or if PHP was configured with the `--enable-short-tags` option).

Additionally the short open tag `<?` tries to interpret the XML doctype `<?xml` (and similar strings) as PHP code, but fails with "_Parse error: parse error, unexpected T_STRING_".


## Rule Details

This rule requires that every PHP opening tag is a full `<?php` tag. Short open tags will generate a warning.


The following pattern is considered a warning:

```
<? /* code */ ?>
```

The following code is considered legit:

```
<?php /* code */ ?>
```


```
<?= $text ?>
```


## Further Reading

* [PHP tags](http://php.net/language.basic-syntax.phptags)
