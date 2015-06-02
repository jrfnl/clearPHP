---
title:     No Sleep
---

`sleep()` and `usleep()` pause PHP execution for the amount of time requested in its argument (first in seconds, second in micro-seconds). During that time, PHP will _hang_ while keeping all its resources opened.

Most of the time, `sleep()` and `usleep()` are not desirable, as speed is paramount. They are sometimes used for security reasons, so as to slow down an attack: for example, on a login script, a check of login/password combination could be slowed down a little so as to make a brute force attack useless.

The security risk lies in the pause: the `sleep()` function won't prevent the same user sending a lot of other queries, and once all those queries are sleeping for several seconds, the server will time out.  

It is recommended to avoid using `sleep()` and `usleep()` within web applications. 


### Rule Details

Any usage of `sleep()` and `usleep()` is suspect and should be reviewed.

{% highlight php %}
<?php
if (!user_login($user, $pass)) {
	sleep(2);
}

{% endhighlight %}{: .warning }


### When Not To Use This Rule

CLI applications may have valid use of `sleep` and `usleep`.


### Further Reading

* [Brute-force/DoS prevention in PHP](http://stackoverflow.com/questions/1727329/brute-force-dos-prevention-in-php)