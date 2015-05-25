var dataIndex = {
  home_url: '',
	music_url: 'music',
	commercial_url: 'commercial',
	narrative_url: 'narrative',
	edible_url: 'edible',
	professional_url: 'photography/professional',
	personal_url: 'photography/personal'
};

var dataMusic = {
  home_url: '../',
  music_url: '',
  commercial_url: '../commercial',
  narrative_url: '../narrative',
  edible_url: '../edible',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal',
  videos: [{
    id: '125626176',
    title: '100 OpenTables: Brand Video'
  }, {
    id: '12',
    title: 'a guess'
  }]
};

var dataCommercial = {
  home_url: '../',
  music_url: '../music',
  commercial_url: '',
  narrative_url: '../narrative',
  edible_url: '../edible',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal'
};

var dataNarrative = {
  home_url: '../',
  music_url: '../music',
  commercial_url: '../commercial',
  narrative_url: '',
  edible_url: '../edible',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal'
};

var dataEdible = {
  home_url: '../',
  music_url: '../music',
  commercial_url: '../commercial',
  narrative_url: '../narrative',
  edible_url: '',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal'
};

var dataProfessional = {
  home_url: '../../',
  music_url: '../../music',
  commercial_url: '../../commercial',
  narrative_url: '../../narrative',
  edible_url: '../../edible',
  professional_url: '',
  personal_url: '../personal'
};

var dataPersonal = {
  home_url: '../../',
  music_url: '../../music',
  commercial_url: '../../commercial',
  narrative_url: '../../narrative',
  edible_url: '../../edible',
  professional_url: '../professional',
  personal_url: ''
};

var htmlFunction, html;

// Change cases to live URL before launch
switch(location.href) {
  case "file:///Users/Jenn/Projects/old-pete-lee/index.html":
    htmlFunction = JST['handlebars/index.hbs'];
    html = htmlFunction(dataIndex);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/music/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataMusic);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/commercial/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataCommercial);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/narrative/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataNarrative);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/edible/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataEdible);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/photography/professional/index.html":
    htmlFunction = JST['handlebars/photography.hbs'];
    html = htmlFunction(dataProfessional);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/photography/personal/index.html":
    htmlFunction = JST['handlebars/photography.hbs'];
    html = htmlFunction(dataPersonal);
    break;
}

$('body').prepend(html);

$(document).ready(function(){
  $(".video__outer").fitVids();

  var homePhotoURLs = [
    'https://farm8.staticflickr.com/7246/8155561235_ac9e5b2cde_o.jpg',
    'https://farm8.staticflickr.com/7153/6675594551_11a1ce9c28_o.jpg',
    'https://farm8.staticflickr.com/7350/12799015685_6aa3122f86_o.jpg',
  ];

  var randomImgURL;
  randomImgURL = homePhotoURLs[Math.floor(Math.random() * homePhotoURLs.length)];
  $('body').css('background-image', 'url(' + randomImgURL + ')');

  if (location.href !== 'file:///Users/Jenn/Projects/old-pete-lee/index.html') {
    var docHeight = $(document).height();
    $('body').append('<div class="overlay"></div>');
    $('.overlay')
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': '#333',
         'width': '100%',
      });
  }

});

// Add shadow only after asset load
$(window).load(function() {
  $('iframe').css('box-shadow', '0 0 5px 0 #222');
});

$(document).foundation();




