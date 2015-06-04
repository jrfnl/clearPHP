---
title:     Use Object API
---

PHP hosts both a procedural API and an OOP one. For example, the `mysqli` extension has both the native function `mysqli_connect()` and the OOP method `mysqli::__construct()`. Both produce the same result. For example, the procedural style:

{% highlight php %}
<?php
$link = mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');

if (!$link) {
    die('Connect Error (' . mysqli_connect_errno() . ') ';
}

echo 'Success... ' . mysqli_get_host_info($link) . "\n";

mysqli_close($link);

{% endhighlight %}


And the OOP Style: 

{% highlight php %}
<?php
try {
	$db = new mysqli('localhost', 'my_user', 'my_password', 'my_db');
} catch (Exception $e) {
	die('Connect Error (' . $db->errorno . ') ';

}
echo 'Success... ' . $db->host_info . "\n";

$db->close();

{% endhighlight %}


One of the main differences between the two styles, is the handling of the resource. Procedural style requires the call of an initialization function (here, `mysqli_connect()`), which returns a resource. Resources are an old object type of the PHP world, which are needed but can't really do much on their own. They are always requested as the first argument of the related family of functions, until they are closed with functions like `mysqli_close()`. 

On the other hand, OOP style provides an object and a wealth of methods to manipulate it. Method names are closely related to their procedural counterpart: `mysqli_prepare()` is called `mysqli::prepare()` in OOP. Most of the time, the prefix is simply removed. In reality, the old resource is hidden inside the object. The main change is that every method is now freed of the first argument: since it is already inside the object, there is no more need to pass it as the first argument. 

Some PHP extensions have no OOP equivalent: string and number manipulations. Those, of course, will keep the procedural approach. On the other hands, a large number of extensions now come with just an OOP interface, and no procedural one, such as `ext/phar` or `ext/zmq`.

It is recommended to use the object approach whenever possible. 


### Rule Details

The following are considered a warning: 

{% highlight php %}
<?php
// Needs example

{% endhighlight %}{: .warning }


The following are OK: 

{% highlight php %}
<?php
// Needs example

{% endhighlight %}{: .ok }


### When Not To Use This Rule

If the project doesn't use any OOP feature, it may ignore this rule.
