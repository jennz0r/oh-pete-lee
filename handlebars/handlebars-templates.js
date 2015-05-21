this["JST"] = this["JST"] || {};

Handlebars.registerPartial("nav", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<nav class=\"top-bar\" data-topbar role=\"navigation\">\n  <ul class=\"title-area\">\n    <li class=\"name\">\n      <h1><a href=\"#\">Old Pete Lee</a></h1>\n    </li>\n     <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\n    <li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span></span></a></li>\n  </ul>\n\n  <section class=\"top-bar-section\">\n    <!-- Right Nav Section -->\n    <ul class=\"right\">\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.music_url || (depth0 != null ? depth0.music_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"music_url","hash":{},"data":data}) : helper)))
    + "\">Music</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.commercial_url || (depth0 != null ? depth0.commercial_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"commercial_url","hash":{},"data":data}) : helper)))
    + "\">Commercial</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.narrative_url || (depth0 != null ? depth0.narrative_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"narrative_url","hash":{},"data":data}) : helper)))
    + "\">Narrative</a></li>\n      <li><a href=\""
    + alias3(((helper = (helper = helpers.edible_url || (depth0 != null ? depth0.edible_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"edible_url","hash":{},"data":data}) : helper)))
    + "\">Edible</a></li>\n      <li class=\"has-dropdown\">\n        <a href=\"#\">Photography</a>\n        <ul class=\"dropdown\">\n          <li><a href=\""
    + alias3(((helper = (helper = helpers.professional_url || (depth0 != null ? depth0.professional_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"professional_url","hash":{},"data":data}) : helper)))
    + "\">Professional</a></li>\n          <li><a href=\""
    + alias3(((helper = (helper = helpers.personal_url || (depth0 != null ? depth0.personal_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"personal_url","hash":{},"data":data}) : helper)))
    + "\">Personal</a></li>\n        </ul>\n      </li>\n    </ul>\n  </section>\n</nav>";
},"useData":true}));

this["JST"]["handlebars/photography.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["handlebars/videography.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});