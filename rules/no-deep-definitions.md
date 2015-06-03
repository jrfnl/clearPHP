<!-- Good Practices -->
# No Deep Definitions

PHP functions, classes, traits and interfaces may be defined anywhere in the code in whatever context. Usually, they may be defined in the global scope, inline, in a class or in a library. Sometimes, they are defined within another function. 

```php
<?php

function usualDefinition() {
	/* Do something */
	function deepDefinedFunction() {
		
	}

	/* Do something */
}

usualDefinition();
// only possible after calling the previous
deepDefinedFunction();

```


Deep definitions will create a structure in the upper level of the current namespace - be it global or specific namespace - and still has to provide a unique name to it. However, what with them being buried within the code, they are more difficult to find.

One time use function should be created as closures, so as to avoid polluting the global namespace. Shared functions, such as callback for PHP native functions, should be gathered in a library, for easy inclusion and reuse. 

Structures like `class`, `interface` or `trait` should be created in the upper level of their namespace, each in their own file. 

Constants may optionally be included in this rule. 

Deep definition should not be confused with conditional definition: conditional definition will happen in the global space, inside a _if...then_ structure, and not within a function or method, like deep definition. 

It is recommended to avoid deep definitions.

## Rule Details

This rule applies to : 

* functions
* classes
* interfaces
* traits
* constants (optionaly)

This rule doesn't apply to 

* closures



## Options

* Constants : they may be included in this rule, when constants are used to represent literal values. When they are used for state, like use-only-once functions, this option must be used.

