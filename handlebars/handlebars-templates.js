this["JST"] = this["JST"] || {};

Handlebars.registerPartial("nav", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<nav class=\"top-bar\" data-topbar role=\"navigation\">\n  <ul class=\"title-area\">\n    <li class=\"name\">\n      <img src=\"/img/avatar.png\" style=\"display:inline; height:100%; vertical-align:top;\">\n      <h1 style=\"display:inline;\"><a href=\""
    + alias3(((helper = (helper = helpers.home_url || (depth0 != null ? depth0.home_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"home_url","hash":{},"data":data}) : helper)))
    + "\" style=\"display:inline;\">ohpetelee</a></h1>\n    </li>\n     <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\n    <li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span></span></a></li>\n  </ul>\n\n  <section class=\"top-bar-section\">\n    <!-- Right Nav Section -->\n    <ul class=\"right\">\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.music_url || (depth0 != null ? depth0.music_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"music_url","hash":{},"data":data}) : helper)))
    + "\">Music</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.branded_url || (depth0 != null ? depth0.branded_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"branded_url","hash":{},"data":data}) : helper)))
    + "\">Branded</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.narrative_url || (depth0 != null ? depth0.narrative_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"narrative_url","hash":{},"data":data}) : helper)))
    + "\">Narrative</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.photography_url || (depth0 != null ? depth0.photography_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photography_url","hash":{},"data":data}) : helper)))
    + "\">Photography</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.contact_url || (depth0 != null ? depth0.contact_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contact_url","hash":{},"data":data}) : helper)))
    + "\">Contact</a></li>\n    </ul>\n  </section>\n</nav>";
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

this["JST"]["handlebars/photography-personal.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row\">\n  <div class=\"small-12  columns\">\n    <div style='position: relative; padding-bottom: 76%; height: 0; overflow: hidden;'><iframe id='iframe' src='http://flickrit.com/slideshowholder.php?height=75&size=big&setId=72157635418017496&credit=&thumbnails=0&transition=0&layoutType=responsive&sort=0' scrolling='no' frameborder='0'style='width:100%; height:100%; position: absolute; top:0; left:0;'></iframe></div>\n  </div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/photography-professional.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row\">\n  <div class=\"small-12  columns\">\n    <div style='position: relative; padding-bottom: 76%; height: 0; overflow: hidden;'><iframe id='iframe' src='http://flickrit.com/slideshowholder.php?height=75&size=big&setId=72157654936151111&credit=&thumbnails=0&transition=0&layoutType=responsive&sort=0' scrolling='no' frameborder='0'style='width:100%; height:100%; position: absolute; top:0; left:0;'></iframe></div>\n  </div>\n</div>";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/photography.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row\">\n  <div class=\"small-12  columns\">\n    <div style='position: relative; padding-bottom: 76%; height: 0; overflow: hidden;'><iframe id='iframe' src='http://flickrit.com/slideshowholder.php?height=75&size=big&setId=72157632464340437&credit=&thumbnails=0&transition=0&layoutType=responsive&sort=0' scrolling='no' frameborder='0'style='width:100%; height:100%; position: absolute; top:0; left:0;'></iframe></div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/videography.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!--\n   --><li>\n        <div class=\"video__outer\">\n          <img src=\""
    + alias3(((helper = (helper = helpers.thumbnailUrl || (depth0 != null ? depth0.thumbnailUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnailUrl","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"video__overlay\" data-reveal-id=\"videoModal"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <h6><a href=\"https://vimeo.com/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h6>\n          </div>\n        </div>\n      </li>\n      <div id=\"videoModal"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"reveal-modal large\" data-reveal aria-labelledby=\"videoModalTitle\" aria-hidden=\"true\" role=\"dialog\">\n        <div class=\"modal__video\">\n          <iframe src=\"https://player.vimeo.com/video/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "?badge='0'&byline='0'&color='f2002b'&portrait='0'&title='0'\" frameborder=\"0\" width=\"500\" height=\"281\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n        </div>\n        <a class=\"close-reveal-modal\" aria-label=\"Close\">&#9447;</a>\n      </div><!--\n    -->";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row  mv  ph\">\n  <h1 class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <!-- <p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p> -->\n</div>\n<div class=\"row\">\n  <div class=\"columns\">\n    <ul class=\"small-block-grid-1  medium-block-grid-2\">\n      "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.videos : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </ul>\n  </div>\n</div>";
},"usePartial":true,"useData":true});