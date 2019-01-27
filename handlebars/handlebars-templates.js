this["JST"] = this["JST"] || {};

Handlebars.registerPartial("nav", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"fixed\">\n  <nav class=\"top-bar\" data-topbar role=\"navigation\">\n    <ul class=\"title-area\">\n      <li class=\"name\">\n        <img src=\"/img/avatar.png\" style=\"display:inline; height:100%; vertical-align:top;\">\n        <h1 style=\"display:inline;\"><a href=\""
    + alias4(((helper = (helper = helpers.home_url || (depth0 != null ? depth0.home_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home_url","hash":{},"data":data}) : helper)))
    + "\" style=\"display:inline;\">ohpetelee</a></h1>\n      </li>\n       <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\n      <li class=\"toggle-topbar menu-icon\"><a href=\"#\"><span></span></a></li>\n    </ul>\n\n    <section class=\"top-bar-section\">\n      <ul class=\"right\">\n        <li><a href=\""
    + alias4(((helper = (helper = helpers.music_url || (depth0 != null ? depth0.music_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"music_url","hash":{},"data":data}) : helper)))
    + "\">Music</a></li>\n        <li><a href=\""
    + alias4(((helper = (helper = helpers.branded_url || (depth0 != null ? depth0.branded_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"branded_url","hash":{},"data":data}) : helper)))
    + "\">Branded</a></li>\n        <li><a href=\""
    + alias4(((helper = (helper = helpers.narrative_url || (depth0 != null ? depth0.narrative_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"narrative_url","hash":{},"data":data}) : helper)))
    + "\">Narrative</a></li>\n        <li class=\"has-dropdown\">\n          <a href=\"#\">Photography</a>\n          <ul class=\"dropdown\">\n            <li><a href=\""
    + alias4(((helper = (helper = helpers.photo_works_url || (depth0 != null ? depth0.photo_works_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo_works_url","hash":{},"data":data}) : helper)))
    + "\">Works</a></li>\n            <li><a href=\""
    + alias4(((helper = (helper = helpers.photo_food_url || (depth0 != null ? depth0.photo_food_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo_food_url","hash":{},"data":data}) : helper)))
    + "\">Food</a></li>\n          </ul>\n        </li>\n        <li><a href=\""
    + alias4(((helper = (helper = helpers.contact_url || (depth0 != null ? depth0.contact_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contact_url","hash":{},"data":data}) : helper)))
    + "\">Contact</a></li>\n      </ul>\n    </section>\n  </nav>\n</div>\n";
},"useData":true}));

this["JST"]["handlebars/contact.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = container.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"row  mv  ph\">\n  <div class=\"small-12  medium-6  large-5  small-centered  medium-uncentered  columns\">\n    <h1 class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <div class=\"bio  mv\">\n      <h6 class=\"header-custom\">Representation</h6>\n      <p>\n        <span>Management: Avalon</span><br/>\n        <span>Aaron Brown</span><br/>\n        <a href=\"mailto:ABrown@avalon-entertainment.com\">ABrown@avalon-entertainment.com</a><br/>\n        <a href=\"tel:1-310-424-1716\">(310) 424-1716</a><br/>\n      </p>\n      <p>\n        <span>Literary Agent: APA</span><br/>\n        <span>Christina Campagnola</span><br/>\n        <a href=\"mailto:ccampagnola@apa-agency.com\">ccampagnola@apa-agency.com</a><br/>\n        <a href=\"tel:1-310-888-4282\">(310) 888-4282</a><br/>\n      </p>\n      <div class=\"mv\">\n        <h6 class=\"header-custom\">For All Other Inquiries</h6>\n        <a href=\"mailto:pete@ohpetelee.com\">pete @ ohpetelee.com</a>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/dontbeahero.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"row  mv4x  ph2x  ph\">\n  <h1 class=\"title\">COMING SOON</h1>\n  <div class=\"mv2x\">\n    <div class=\"video__outer\">\n      <img src=\"../img/dbah.jpg\">\n      <div class=\"video__overlay\" data-reveal-id=\"videoModal223838773\">\n        <h6><a href=\"https://vimeo.com/223838773\" target=\"_blank\" rel=\"noopener noreferrer\">PLAY EXCERPT</a></h6>\n      </div>\n    </div>\n    <div id=\"videoModal223838773\" class=\"reveal-modal large\" data-reveal aria-labelledby=\"videoModalTitle\" aria-hidden=\"true\" role=\"dialog\">\n      <div class=\"modal__video\">\n        <iframe src=\"https://player.vimeo.com/video/223838773\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n      </div>\n      <a class=\"close-reveal-modal\" aria-label=\"Close\">&#9447;</a>\n    </div>\n  </div>\n  <p class=\"mv2x\">Lizzy Jo, who still lives with mom at age 45, battles her loneliness and boredom by robbing banks in the guise of a cowboy on her lunch break. But after the adrenaline rush wears off, she still has to deal with her deeply unhappy life. Inspired by a true story. Starring Missi Pyle.</p>\n</div>\n";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/index.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<ul class=\"cb-slideshow\">\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n  <li><span></span></li>\n</ul>";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/photography_food.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = container.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"row  mv  ph\">\n  <h1 class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n<div class=\"row\">\n    <div class=\"small-12 centered columns\">\n        <a data-flickr-embed=\"true\"  href=\"https://www.flickr.com/photos/nomoretitanic/albums/72157635232648764\" title=\"food\"><img src=\"https://farm9.staticflickr.com/8418/29055941905_44c1dda753_k.jpg\" width=\"2048\" height=\"1303\" alt=\"food\"></a>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/photography_works.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = container.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"row  mv  ph\">\n  <h1 class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>\n<div class=\"row\">\n  <div class=\"small-12 centered columns\">\n    <a data-flickr-embed=\"true\"  href=\"https://www.flickr.com/photos/nomoretitanic/albums/72157632464340437\" title=\"portfolio\"><img src=\"https://farm9.staticflickr.com/8354/8360441478_a8f0e4f279_k.jpg\" width=\"2048\" height=\"996\" alt=\"portfolio\"></a>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["JST"]["handlebars/videography.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--\n   --><li>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.johnny : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"video__outer\">\n          <img src=\""
    + alias4(((helper = (helper = helpers.thumbnailUrl || (depth0 != null ? depth0.thumbnailUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailUrl","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"video__overlay\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.johnny : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n            <h6>"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.special : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hero : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n              "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n            "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.johnny : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.role : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h6>\n          </div>\n        </div>\n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.special : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      </li>\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.johnny : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!--\n    -->";
},"2":function(container,depth0,helpers,partials,data) {
    return "<a href=\"https://vimeo.com/blog/post/staff-pick-premiere-johnny-physical-lives\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"johnny__overlay\">";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-reveal-id=\"videoModal"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\"";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"https://vimeo.com/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" rel=\"noopener noreferrer\">";
},"8":function(container,depth0,helpers,partials,data) {
    return "<a href=\"https://www.vimeo.com/petelee/hero\" target=\"_blank\" rel=\"noopener noreferrer\">";
},"10":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<br><br>"
    + container.escapeExpression(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"role","hash":{},"data":data}) : helper)));
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div id=\"videoModal"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"reveal-modal large\" data-reveal aria-labelledby=\"videoModalTitle\" aria-hidden=\"true\" role=\"dialog\">\n          <div class=\"modal__video\">\n            <iframe src=\"https://player.vimeo.com/video/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "?badge='0'&byline='0'&color='f2002b'&portrait='0'&title='0'\" frameborder=\"0\" width=\"500\" height=\"281\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n          </div>\n          <a class=\"close-reveal-modal\" aria-label=\"Close\">&#9447;</a>\n        </div>\n      ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.nav,depth0,{"name":"nav","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"row  mv  ph\">\n  <h1 class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <!-- <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p> -->\n</div>\n<div class=\"row\">\n  <div class=\"columns\">\n    <ul class=\"small-block-grid-1 medium-block-grid-2 xlarge-block-grid-3\">\n      "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.videos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </ul>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});