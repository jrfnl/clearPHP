---
title:     No Repeated Print
---

Repeated calls to `print` or `echo`, should be merged into one call with concatenation. 

{% highlight php %}
<?php
print "<!DOCTYPE html>\n";
print "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\">\n";
print "<head>\n";
print "  <meta charset=\"utf-8\">\n";
print "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n";
print "  <title>Title</title>\n";
/* ... */

{% endhighlight %}


This should be written as: 

{% highlight php %}
<?php
print "<!DOCTYPE html>\n".
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\">\n".
      "<head>\n".
      "  <meta charset=\"utf-8\">\n".
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n".
      "  <title>Title</title>\n";
/* ... */

{% endhighlight %}


Generally speaking, it is recommended to accumulate all information in a variable, then output it with `echo` or `print` in one call rather than calling repeatedly those functions.

It is also possible to put long blobs of raw text in HEREDOC or NOWDOC structures, or even in an external file. 


### Rule Details

The following pattern is considered a warning:

{% highlight php %}
<?php
print "<!DOCTYPE html>\n";
print "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\">\n";
print "<head>\n";
print "  <meta charset=\"utf-8\">\n";
print "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n";
print "  <title>$title</title>\n";
/* ... */

{% endhighlight %}{: .warning }


The following patterns are considered legit:

{% highlight php %}
<?php
print "<!DOCTYPE html>\n".
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\">\n".
      "<head>\n".
      "  <meta charset=\"utf-8\">\n".
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n".
      "  <title>Title</title>\n";
/* ... */

{% endhighlight %}{: .good }


{% highlight php %}
<?php
print <<<HTML
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$title</title>
HTML;
/* ... */

{% endhighlight %}{: .good }


### Further Reading


#### Related rules

* [No Unnecessary Concatenation]


[No Unnecessary Concatenation]: {{ "/php-manual/no-unnecessary-string-concatenation/" | prepend: site.clearphp.url }}