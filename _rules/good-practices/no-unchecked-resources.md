---
title:     No Unchecked Resources
---

PHP resources are a special type of data in PHP. They represent an external structure and are usually needed as the first argument to their extension-related functions. For example, file pointers, obtained with `fopen()` are resources.

{% highlight php %}
<?php
$fp = fopen('/tmp/someText.txt', 'w');

fwrite($fp, date('r');

fclose($fp);

{% endhighlight %}

Receiving a resource after calling the creation function is never sure: resources may represent connections to remote servers, or have to meet certain conditions like when creating files.

It is important to check that the returned value is actually a resource before using it. Resources are usually reused many times, each hit generating a new error that may be displayed (in the worst case) or simply fill up the error logs.

{% highlight php %}
<?php
// This will fail
$fp = fopen('/tmmp/someText.txt', 'w');

if (!is_resource($fp)) {
	// process error with retry, check or ad hoc message
}

// rest of the code ...

{% endhighlight %}


Error situations usually return a boolean, that makes it easy to check for this with the function `is_resource`, or simply as a boolean check with `===`. 

It is recommended to always check values that are return by resource-creating functions.


### Rule Details

Resource creating functions are listed in [Resource types]. There are over 130 of them, excluding some from exotic PHP-extensions. The most common ones are listed below: 

* `dir()`
* `fopen()`
* `fsockopen()`
* `ftp_connect()`
* `ftp_ssl_connect()`
* `imagecreate()` and related functions
* `imap_open()`
* `ldap_connect()`
* `opendir()`
* `openssl_get_privatekey()`
* `openssl_get_publickey()`
* `pdf_new()`
* `pfsockopen()`
* `popen()`
* `sem_get()`
* `shm_attach()`
* `tmpfile()`


The following patterns are considered warnings:

{% highlight php %}
<?php
// creation
$tmp = tmpfile();

// usage
fwrite($tmp, 'something');

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
// creation
$tmp = tmpfile();

// check
if (!is_resource($tmp)) { /* error */} 

// usage
fwrite($tmp, 'something');

{% endhighlight %}{: .ok }


{% highlight php %}
<?php
$pr = pspell_new("en");

if (!$pr) { return false; }

if (pspell_check($pspell_link, "testt")) {
    echo "This is a valid spelling";
} else {
    echo "Sorry, wrong spelling";
}

{% endhighlight %}{: .ok }



### Further Reading
* [Resource types]




[Resource types]: http://php.net/resource