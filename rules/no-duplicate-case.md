<!-- Good Practices -->
# No Duplicate Case In Switch

Disallow the creation of duplicate cases in `switch` statements.

Duplicate cases are useless as the second defined case will be silently ignored.


## Rule Details

This rule requires that every `switch` statement has unique literal cases, or complex calls. The following is wrong.

```php
<?php
switch($a) {
	case 1: 
		break 1;
	case 2: 
		break 1;
	case 3: 
		break 1;
	case 1:      // double case
		break 1;
	default:	
}

```

The following patterns are considered OK :

```php
<?php
switch($a) {
	case $a + 1 == 2:  // complex comparison. Should be reviewed
		break 1;
	case 3: 
		break 1;
	case 1: 
		break 1;
	default:	
}

// normal switch
switch($a) {
	case 2:
	case 3:     // fall through
		break 1;
	case 1: 
		break 1;
	default:	
}

```
