var dataIndex = {
  home_url: '',
	music_url: 'music',
	branded_url: 'branded',
	narrative_url: 'narrative',
	professional_url: 'photography/professional',
	personal_url: 'photography/personal'
};

var dataMusic = {
  home_url: '../',
  music_url: '',
  branded_url: '../branded',
  narrative_url: '../narrative',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal',
  videos: [{
    id: '120522773',
    title: 'Meklit Hadero feat. Samuel Yirga - Kemekem'
  }, {
    id: '91651414',
    title: 'Atmosphere - Kanye West (Official Music Video)'
  }, {
    id: '79086655',
    title: 'Extranjero'
  }, {
    id: '67242039',
    title: 'Patton Oswalt does the Magic Clap'
  }, {
    id: '62309914',
    title: 'The Uncluded - Delicate Cycle'
  }, {
    id: '54213282',
    title: 'Wolf Larsen - If I Be Wrong'
  }, {
    id: '49484881',
    title: 'Aesop Rock - ZZZ Top'
  }, {
    id: '49484882',
    title: 'Aesop Rock - Cycles to Gehenna'
  }, {
    id: '79146873',
    title: 'Megan Keely - Just Enough Time'
  }, {
    id: '49483012',
    title: "The Coup's Magic Clap"
  }, {
    id: '30934752',
    title: 'Behind the Eyelids Presents: John Heart Jackie'
  }]
};

var dataBranded = {
  home_url: '../',
  music_url: '../music',
  branded_url: '',
  narrative_url: '../narrative',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal',
  videos: [{
    id: '125626176',
    title: '100 OpenTables: Brand Video'
  }, {
    id: '124724818',
    title: 'Sols - Live Your Life'
  }, {
    id: '108527682',
    title: 'Basis Peak by Intel: Brand Video'
  }, {
    id: '92594646',
    title: 'Cirq - Russia River Valley'
  }, {
    id: '73995049',
    title: "Robert Mondavi's Coastal Crush (extended cut)"
  }, {
    id: '92575084',
    title: 'Craft - by Cost Plus World Market'
  }, {
    id: '128915836',
    title: 'Calphalon YOURSET Heirloom Tomato Sauce Recipe'
  }]
};

var dataNarrative = {
  home_url: '../',
  music_url: '../music',
  branded_url: '../branded',
  narrative_url: '',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal',
  videos: [{
    id: '79282772',
    title: 'Rope a Dope'
  }, {
    id: '116523821',
    title: 'Rope A Dope 2'
  }, {
    id: '91651414',
    title: 'Atmosphere - Kanye West (Official Music Video)'
  }, {
    id: '49484881',
    title: 'Aesop Rock - ZZZ Top'
  }]
};

var dataProfessional = {
  home_url: '../../',
  music_url: '../../music',
  branded_url: '../../branded',
  narrative_url: '../../narrative',
  professional_url: '',
  personal_url: '../personal'
};

var dataPersonal = {
  home_url: '../../',
  music_url: '../../music',
  branded_url: '../../branded',
  narrative_url: '../../narrative',
  professional_url: '../professional',
  personal_url: ''
};

var htmlFunction, html;

$(document).ready(function(){

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
    case "file:///Users/Jenn/Projects/old-pete-lee/branded/index.html":
      htmlFunction = JST['handlebars/videography.hbs'];
      html = htmlFunction(dataBranded);
      break;
    case "file:///Users/Jenn/Projects/old-pete-lee/narrative/index.html":
      htmlFunction = JST['handlebars/videography.hbs'];
      html = htmlFunction(dataNarrative);
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

  // Prepend the template to the body
  $('body').prepend(html);

  // Use fit vids to make videos responsive
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
         'opacity' : 0.75,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'white',
         'width': '100%',
      });
  }

});

// Add shadow only after asset load
$(window).load(function() {
  $('.video__outer').css('box-shadow', '0 0 5px 0 #222');
});

$(document).foundation();




