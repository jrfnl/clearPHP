<!-- Good Practices -->
# No Switch With Multiple Default

Switch statements may have several cases and one `default` statement, which will act as a catch-all for all unspecified cases. PHP compiles `switch` structures with several `default` cases, though only the first one will actually be executed. 

All extra `default` cases are considered dead code. 


## Rule Details

This rule requires that every `switch` statement has only one `default` case. 

The following patterns are considered warnings:

```php
<?php
switch (foo) {
    case 'a':
        doA();
        break 1;

    default:
        doDefault();
        break 1;

    case 'b':
        doB();
        break 1;

    default:
        doDefault();
        break 1;
}

```


The following pattern is considered legit:

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
        doDefault();
        break 1;
}

```

