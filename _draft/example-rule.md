{::comment}

REMOVE THIS COMMENT & SAVE THE FILE UNDER A NEW NAME TO USE THIS TEMPLATE.
ALSO remove the '[must-use]' and '[optional]' helper lines and any unused optional attributes.

---------------------------
Template for Rules.
---------------------------

Guidelines:

- Rules should each be in their own file and should be saved to the appropriate rule-type subdirectory
  within the the `_rules` directory.

- The filename should reflect the rule title and use the `.md` file extension.
  The filename will influence the sort order of the rules and the permalink, so choose it carefully.

- Don't add the title in the Rule content, but use the `title` attribute in the frontmatter/meta-data.
  You can *not* use markdown in the title.
  The title will also be used as for the <title> tag for the page.
  
- To use a custom (shorter) rule title in the menu, set the `menutitle:` attribute.

- Individual pages will be generated for each Rule and links to these will automatically be included
  in the menu, the Rule Type index page and the sitemap.
  
- You can optional set the `minphp` and/or `maxphp` attributes to the minimum/maximum PHP version the rule
  is applicable to. If either of these are set, this information will be displayed as meta data just under
  the rule title.

{:/comment}
---
[must-use]
title:       The Page Title in Titlecase

[optional]
minphp:      5.0
maxphp:      5.3
menutitle:   Shorter title for use in the menu
description: Meta description for use in the <meta> header
sitemap:
    lastmod:    2014-01-23
    priority:   0.5
    changefreq: 'monthly'
    exclude:    false
---

Some explanation of the rule.

You can use all normal [GitHub flavoured markdown syntaxes](https://guides.github.com/features/mastering-markdown/).

However for multi-line code samples this syntax is needed to make the syntax highlighting work - don't forget to make sure that the code sample starts with `<?php` !

{% highlight php %}
<?php
// some example PHP code

{% endhighlight %}


There are also a number of variables available for use in all documents. It is strongly advised to use these when appropriate.
- {{site.clearphp.url}}: http://clearphp.io, i.e. the site url
- {{site.clearphp.title}}: Fallback title for the <title> tag if no `title` is set in the Frontmatter at the top of a file.
- {{site.clearphp.description}}: Fallback for the <meta name="description"> header tag if no `description` is set in the Frontmatter at the top of the file.
- {{site.clearphp.logo}}: --to be determined--, the url to the logo file
- {{site.clearphp.github}}: https://github.com/dseguy/clearPHP/
- {{site.clearphp.owner}}: "Damien Seguy"
- {{site.clearphp.ownerurl}}: http://www.exakat.io/
- {{site.clearphp.twnick}}: exakat
- {{site.clearphp.twhash}}: ClearPHP


Additionally attributes you set in the Frontmatter can be accessed via {{page.attribute}}. So if you want to use the minimum PHP version in the page content as you've set as `minphp` attribute, you can use `{{page.minphp}}` to do so.


More rule details

{% highlight php %}
<?php
// another example

{% endhighlight %}


### Rule Details

The following patterns are considered warnings:

{% highlight php %}
<?php
// Code which will be flagged

{% endhighlight %}{: .warning }


The following patterns are not considered warnings:

{% highlight php %}
<?php
// Code which is ok

{% endhighlight %}{: .ok }


The following patterns are considered legit:

{% highlight php %}
<?php
// Code which is good

{% endhighlight %}{: .good }



#### Options



### When Not To Use This Rule

Use details


### Further Reading

* []()


#### Related rules => this is a subheading under "Further Reading", if there are no "Further Reading" links, but there are "Related Rules", do not remove the "Further Reading" header

* [Rule Title]



[Rule Title]: {{ '/ruletype-subdirectory/rule-file-name-without-md/' | prepend: site.clearphp.url }}
