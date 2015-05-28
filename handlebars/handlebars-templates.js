this["JST"] = this["JST"] || {};

Handlebars.registerPartial("nav", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<nav class=\"top-bar\" data-topbar role=\"navigation\">\n  <ul class=\"title-area\">\n    <li class=\"name\">\n      <h1><a href=\""
    + alias3(((helper = (helper = helpers.home_url || (depth0 != null ? depth0.home_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"home_url","hash":{},"data":data}) : helper)))
    + "\">Old Pete Lee</a></h1>\n    </li>\n     <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\n    <li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span></span></a></li>\n  </ul>\n\n  <section class=\"top-bar-section\">\n    <!-- Right Nav Section -->\n    <ul class=\"right\">\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.music_url || (depth0 != null ? depth0.music_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"music_url","hash":{},"data":data}) : helper)))
    + "\">Music</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.commercial_url || (depth0 != null ? depth0.commercial_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"commercial_url","hash":{},"data":data}) : helper)))
    + "\">Commercial</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.narrative_url || (depth0 != null ? depth0.narrative_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"narrative_url","hash":{},"data":data}) : helper)))
    + "\">Narrative</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.edible_url || (depth0 != null ? depth0.edible_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"edible_url","hash":{},"data":data}) : helper)))
    + "\">Edible</a></li>\n      <li class=\"has-dropdown\">\n        <a>Photography</a>\n        <ul class=\"dropdown\">\n          <li><a href=\""
    + alias3(((helper = (helper = helpers.professional_url || (depth0 != null ? depth0.professional_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"professional_url","hash":{},"data":data}) : helper)))
    + "\">Professional</a></li>\n          <li><a href=\""
    + alias3(((helper = (helper = helpers.personal_url || (depth0 != null ? depth0.personal_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"personal_url","hash":{},"data":data}) : helper)))
    + "\">Personal</a></li>\n        </ul>\n      </li>\n    </ul>\n  </section>\n</nav>";
},"useData":true}));

this["JST"]["handlebars/index.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["handlebars/photography.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["handlebars/videography.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!--\n --><div class=\"small-12  medium-6  columns  mv3x\">\n		<div class=\"video__outer\">\n			<iframe src=\"https://player.vimeo.com/video/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "?badge='0&byline='0'&color='f2002b'&portrait='0'&title='0'\" frameborder=\"0\" width=\"500\" height=\"281\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n			<div class=\"video__overlay\">\n				<p><a href=\"https://vimeo.com/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a> from <a href=\"https://vimeo.com/petelee\">Peter Lee</a> on <a href=\"https://vimeo.com\">Vimeo</a>.</p>\n			</div>\n		</div>\n	</div><!--\n-->";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n<div class=\"row  mv4x\">\n	"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.videos : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>";
},"usePartial":true,"useData":true});