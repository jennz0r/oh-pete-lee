this["JST"] = this["JST"] || {};

Handlebars.registerPartial("nav", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"fixed\">\n  <nav class=\"top-bar\" data-topbar role=\"navigation\">\n    <ul class=\"title-area\">\n      <li class=\"name\">\n        <img src=\"/img/avatar.png\" style=\"display:inline; height:100%; vertical-align:top;\">\n        <h1 style=\"display:inline;\"><a href=\""
    + alias3(((helper = (helper = helpers.home_url || (depth0 != null ? depth0.home_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"home_url","hash":{},"data":data}) : helper)))
    + "\" style=\"display:inline;\">ohpetelee</a></h1>\n      </li>\n       <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\n      <li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span></span></a></li>\n    </ul>\n\n    <section class=\"top-bar-section\">\n      <!-- Right Nav Section -->\n      <ul class=\"right\">\n        <li><a href=\""
    + alias3(((helper = (helper = helpers.music_url || (depth0 != null ? depth0.music_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"music_url","hash":{},"data":data}) : helper)))
    + "\">Music</a></li>\n        <li><a href=\""
    + alias3(((helper = (helper = helpers.branded_url || (depth0 != null ? depth0.branded_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"branded_url","hash":{},"data":data}) : helper)))
    + "\">Branded</a></li>\n        <li><a href=\""
    + alias3(((helper = (helper = helpers.narrative_url || (depth0 != null ? depth0.narrative_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"narrative_url","hash":{},"data":data}) : helper)))
    + "\">Narrative</a></li>\n        <li><a href=\""
    + alias3(((helper = (helper = helpers.photography_url || (depth0 != null ? depth0.photography_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photography_url","hash":{},"data":data}) : helper)))
    + "\">Photography</a></li>\n        <li><a href=\""
    + alias3(((helper = (helper = helpers.contact_url || (depth0 != null ? depth0.contact_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contact_url","hash":{},"data":data}) : helper)))
    + "\">Contact</a></li>\n      </ul>\n    </section>\n  </nav>\n</div>";
},"useData":true}));

this["JST"]["handlebars/contact.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row  mv  ph\">\n  <div class=\"small-12  medium-6  large-5  small-centered  medium-uncentered  columns\">\n    <h1 class=\"title\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <div class=\"bio  mv+\">\n      <h6 class=\"header-custom\">Production Blog</h6>\n      <a href=\"http://enterthehero.com/\">Enter the Hero</a>\n      <h6 class=\"header-custom\">Production Company</h6>\n      <a href=\"http://www.wearescandinavia.com/\">Scandinavia</a><br><br>\n      <em><a href=\"mailto:pete@ohpetelee.com\">pete@ohpetelee.com</a></em><span> | <em>617.784.1886</em></span>\n    </div>\n  </div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/index.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<ul class=\"cb-slideshow\">\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n</ul>";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/photography.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row\">\n  <div class=\"small-12 centered columns slideshow\">\n    <div class=\"auto-slicky\">\n      <div><img src=\"../img/slideshow/01.jpg\"></div>\n      <div><img src=\"../img/slideshow/02.jpg\"></div>\n      <div><img src=\"../img/slideshow/03.jpg\"></div>\n      <div><img src=\"../img/slideshow/04.jpg\"></div>\n      <div><img src=\"../img/slideshow/05.jpg\"></div>\n      <div><img src=\"../img/slideshow/06.jpg\"></div>\n      <div><img src=\"../img/slideshow/07.jpg\"></div>\n      <div><img src=\"../img/slideshow/08.jpg\"></div>\n      <div><img src=\"../img/slideshow/09.jpg\"></div>\n      <div><img src=\"../img/slideshow/10.jpg\"></div>\n      <div><img src=\"../img/slideshow/11.jpg\"></div>\n      <div><img src=\"../img/slideshow/12.jpg\"></div>\n      <div><img src=\"../img/slideshow/13.jpg\"></div>\n      <div><img src=\"../img/slideshow/14.jpg\"></div>\n      <div><img src=\"../img/slideshow/15.jpg\"></div>\n      <div><img src=\"../img/slideshow/16.jpg\"></div>\n      <div><img src=\"../img/slideshow/17.jpg\"></div>\n      <div><img src=\"../img/slideshow/18.jpg\"></div>\n      <div><img src=\"../img/slideshow/19.jpg\"></div>\n      <div><img src=\"../img/slideshow/20.jpg\"></div>\n      <div><img src=\"../img/slideshow/21.jpg\"></div>\n      <div><img src=\"../img/slideshow/22.jpg\"></div>\n      <div><img src=\"../img/slideshow/23.jpg\"></div>\n      <div><img src=\"../img/slideshow/24.jpg\"></div>\n      <div><img src=\"../img/slideshow/25.jpg\"></div>\n      <div><img src=\"../img/slideshow/26.jpg\"></div>\n      <div><img src=\"../img/slideshow/27.jpg\"></div>\n      <div><img src=\"../img/slideshow/28.jpg\"></div>\n      <div><img src=\"../img/slideshow/29.jpg\"></div>\n      <div><img src=\"../img/slideshow/30.jpg\"></div>\n      <div><img src=\"../img/slideshow/31.jpg\"></div>\n      <div><img src=\"../img/slideshow/32.jpg\"></div>\n      <div><img src=\"../img/slideshow/33.jpg\"></div>\n      <div><img src=\"../img/slideshow/34.jpg\"></div>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/videography.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!--\n   --><li>\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.johnny : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"video__outer\">\n          <img src=\""
    + alias3(((helper = (helper = helpers.thumbnailUrl || (depth0 != null ? depth0.thumbnailUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnailUrl","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"video__overlay\" "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.johnny : depth0),{"name":"unless","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n            <h6>"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.johnny : depth0),{"name":"unless","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n              "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n            "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.johnny : depth0),{"name":"unless","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.role : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</h6>\n          </div>\n        </div>\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.johnny : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n      </li>\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.johnny : depth0),{"name":"unless","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<!--\n    -->";
},"2":function(depth0,helpers,partials,data) {
    return "<a href=\"https://vimeo.com/blog/post/staff-pick-premiere-johnny-physical-lives\" target=\"_blank\" class=\"johnny__overlay\">";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "data-reveal-id=\"videoModal"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"https://vimeo.com/"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">";
},"8":function(depth0,helpers,partials,data) {
    return "</a>";
},"10":function(depth0,helpers,partials,data) {
    var helper;

  return "<br><br>"
    + this.escapeExpression(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"role","hash":{},"data":data}) : helper)));
},"12":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div id=\"videoModal"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"reveal-modal large\" data-reveal aria-labelledby=\"videoModalTitle\" aria-hidden=\"true\" role=\"dialog\">\n          <div class=\"modal__video\">\n            <iframe src=\"https://player.vimeo.com/video/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "?badge='0'&byline='0'&color='f2002b'&portrait='0'&title='0'\" frameborder=\"0\" width=\"500\" height=\"281\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n          </div>\n          <a class=\"close-reveal-modal\" aria-label=\"Close\">&#9447;</a>\n        </div>\n      ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row  mv  ph\">\n  <h1 class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <!-- <p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p> -->\n</div>\n<div class=\"row\">\n  <div class=\"columns\">\n    <ul class=\"small-block-grid-1 medium-block-grid-2 xlarge-block-grid-3\">\n      "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.videos : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </ul>\n  </div>\n</div>";
},"usePartial":true,"useData":true});