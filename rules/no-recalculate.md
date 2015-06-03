<!-- Performances -->
# No Recalculate

Within a scope, it is always faster to cache any calculated value than recalculate it. For example, 

```php
<?php
$htmlLink = '<a href="'.strtr(strtolower($url), ' ', '-').'.php"><img src="'.strtr(strtolower($url), ' ', '-').'.png" alt="$title"></a>';

```


In this example, both the URI link and the image URI are built from the `$url` variable, with some characters replacements. Calling both `strtr()` and `strtolower()` twice, or even one of them only, will be slower than calling them once and caching the result in a variable. 

```php
<?php

	$baseUri = strtr(strtolower($url), ' ', '-');
    $htmlLink = '<a href="'.$baseUri.'.php"><img src="'.$baseUri.'.png" alt="$title"></a>';

```


This has the added advantage of making the second line easier to read and to update (as long as both URIs are build the same way). 

When the function call is used only once, there is no performance gain to caching it in a variable. However, as soon as the function call is used twice, there is some gain. Of course, the simpler the function call and the fewer the reuse, the lower the gain.

It is recommended to avoid recalculation in any function scope. In the global scope, this is also recommended, although it may be harder to spot. 


## Rule Details

This rule is aimed at avoiding recalculating the same values several times.

The following patterns are considered warnings:

```php
<?php

	// $url is calculated twice identically
    $htmlLink = '<a href="'.strtr(strtolower($url), ' ', '-').'.php"><img src="'.strtr(strtolower($url), ' ', '-').'.png" alt="$title"></a>';

```

