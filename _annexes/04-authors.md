---
title:     Acknowledgements
---

ClearPHP was originally written by Damien Seguy. The following people have contributed - in one way or another - to this project:


<div class="contributors">

{% for contributor in site.github.contributors %}
[![Avatar]({{ contributor.avatar_url }}){: style="width: 30px;"}]({{ contributor.html_url }}) [@{{ contributor.login }}]({{ contributor.html_url }})
{: .contributor }
{% else %}
Please refer to the [contributors list] on GitHub.
{% endfor %}

As well as:

* [@Fneufneu](https://github.com/Fneufneu)
* [@philsturgeon](https://github.com/philsturgeon)
* [@victorstanciu](https://github.com/victorstanciu)
* [@jrfnl](https://github.com/jrfnl)


</div>


[contributors list]: https://github.com/dseguy/clearPHP/graphs/contributors
