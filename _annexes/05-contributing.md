---
title:     Contributing to ClearPHP
menutitle: Contribute
---

<!-- @todo fix text to be in line with gh-pages -->

To get you started contributing to ClearPHP, please read the [contributing guidelines].

#### Suggest a new rule

To propose a new rule or a fix:

- fork this repository, create a branch, checkout that branch, add the rule in a `proposition` branch, push the branch to Github, and send a pull request.
- Join us on the [mailing-list].


#### Translate

To translate clearPHP into a new language:

- Fork this repository,
- Create a folder with the new language name, using 2-letters isocode. Check [isocode] to find the right one.
- Copy
	- README.md
	- internal.md
	- rules (the whole folder)
- Start translating
- Send in a pull request when you are ready.



[mailing-list]: https://groups.google.com/forum/#!forum/clearphp
[isocode]: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[readme]: {{ '/blob/gh-pages/README.md' | prepend: site.clearphp.github }}
[contributing guidelines]: {{ '/blob/gh-pages/CONTRIBUTING.md' | prepend: site.clearphp.github }}