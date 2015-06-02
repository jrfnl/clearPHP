# Contributing to the Clear PHP rules and website

Please take a moment to review this document in order to make the contribution process easy and
effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing
and developing this open source project. In return, they should reciprocate that respect in addressing
your issue or assessing patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/dseguy/clearPHP/issues) is the preferred channel
for changes: spelling mistakes, wording changes, new content and generally [submitting pull requests](#pull-requests),
but please respect the following restrictions:


<a name="pull-requests"></a>
## Pull Requests

Pull requests are a great way to add new rules or other content to Clear PHP, as well as correcting
any browser issues or other style changes.

Adhering to the following process is the best way to get your work included in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/clearPHP.git
   # Navigate to the newly cloned directory
   cd clearPHP
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/dseguy/clearPHP.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout gh-pages
   git pull upstream gh-pages
   ```

3. Create a new topic branch (off the main project development branch) to contain your change or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Install the [Jekyll](https://github.com/jekyll/jekyll/) and [GitHub Pages](https://github.com/github/pages-gem)
   gems to preview locally.
   See [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages) for more information.

5. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html). Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

6. If you have updated the css or js files, make sure you also update the minified versions of those files.

7. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream gh-pages
   ```

8. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

9. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.


## Adding a new rule category:

* Create a subdirectory of the `_rules` directory.
* Add a new entry to the `_data/ruletypes.yml` file with the subdirectory name as the value
  for `directory`, a title in Titlecase and a description.
  You can influence the order of the rule types in the menu by re-ordering the entries in this file.
* Add a new file to the `_rules` directory named `subdirectory-name.md` to enable the index page
  for the rule type. The only content in this file should be:
```
---
layout:      ruleindex
---
```
* Start adding rule entries to the subdirectory

The new rule category and the rules added to it will automatically be added to the menu.


## Creating new rules

There is an example new rule file available in the `_drafts` folder. The example file contains
detailed information on how to create a new rule, what metadata is needed and what
variables are available.


### Linking to other rules:

* Internal references should be linked like this `[Rule Title]: {{ '/ruletype-subdirectory/rule-file-name-without-md/' | prepend: site.clearphp.url }}`

* If you move a rule from one rule type to another, make sure you add a redirect for the old url in `.htaccess` and adjust any existing internal links to the rule.


## Contributor Style Guide

1. Wrap function names in sentences in backticks and add `()`.
2. Wrap language constructs in sentences in backticks, but do *not* add `()`.
3. Wrap code blocks in highlight tags. All code blocks should start with `<?php` -
   the code should start on the next line directly after that. Code blocks should not have a
   closing tag `?>` and should have a blank line before the closing highlight tag and two
   blank lines after.
4. If for a specific example it is important to show the opening (and/or closing) php tag,
   add the `.short` class by adding {: .short } after the highlight end tag. So named as this
   normally will only apply to short samples such as: `<?= echo $a ?>`.
5. Specific code blocks demonstrating good/bad code should have appropriate style classes.
   The available class names are `bad`, `warning`, `ok`, `good`. You can add the add by
   adding `{: .classname }` directly after the hightlight closing tag.
6. Use American English spelling (*primary English repo only*).
7. Code samples should adhere to the .... coding standard. (To be determined)
8. You can mix [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/) and html,
   but markdown is preferred. Only use html if the desired effect cannot be achieved using markdown.
9. Use language agnostic urls when refering to external websites such as the
   [php.net](http://php.net/urlhowto) manual.
10. All files should be encoded as UTF-8 without BOM.


## Translations

If you are interested in translating the _ClearPHP_ website, fork this repo on GitHub and publish
your localized fork to your own GitHub Pages account. We'll link to your translation from the primary website.

To avoid fragmentation and reader confusion, please set up the translation so we can link to your GitHub Pages
fork with a subdomain (e.g. "ru.clearphp.io"), enter the subdomain into the `CNAME` file, and ask us
to setup DNS for you.

When your translation is ready, open an issue on the Issue Tracker to let us know.


## Troubleshooting local test environment

* Help on [GitHub build errors](https://help.github.com/articles/troubleshooting-github-pages-build-failures)


## Useful reference material

If you've not contributed to a Jekyll-based gh-pages website before, you may need to read up on the techniques used.

Here is a list of relevant documentation:

* [Jekyll Documentation](http://jekyllrb.com/docs/)
* [GitHub Flavoured MarkDown](https://guides.github.com/features/mastering-markdown/)
* [Kramdown Markdown Parser Quick Reference](http://kramdown.gettalong.org/quickref.html)
* [Kramdown Markdown Parser Syntax Documentation](http://kramdown.gettalong.org/syntax.html)
* [Liquid Templating Introduction](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [Liquid Templating Documentation](https://docs.shopify.com/themes/liquid-documentation/)


This site uses GitHub enriched Jekyll metadata, see the below for more information:

* [Repository metadata on GitHub Pages](https://help.github.com/articles/repository-metadata-on-github-pages/)
* [Repository API Documentation](https://developer.github.com/v3/repos/)
* [Contributors API Documentation](https://developer.github.com/v3/repos/#list-contributors)