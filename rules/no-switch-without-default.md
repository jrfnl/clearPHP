<!-- Good Practices -->
# No Switch Without Default

Switch statement may have several cases and one `default` statement, which will act as a catch-all for all unspecified cases. It is considered good practice to always include a `default` statement, so as to catch any unusual or exceptional behavior. 

It may happens that `default` case is empty : in that situation, the `default` is meant to show that doing nothing is an intended behavior.

## Rule Details

This rule require that every `switch` statement has at least a `default` case. 

The following pattern is considered a warning:

```php
<?php
switch (foo) {
    case 'a':
        doSomething();
        break 1;

    case 'b':
        doSomething();
        break 1;

    default:
        // do nothing
}

```

The following patterns are considered warnings:

```php
<?php
switch (foo) {
    case 'a':
        doSomething();
        break 1;

    case 'b':
        doSomething();
        break 1;
}

```


## When Not To Use This Rule

If `default` is not always necessary, you may disable this rule.
