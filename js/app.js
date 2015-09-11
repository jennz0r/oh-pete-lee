var dataIndex = {
  home_url: '',
	music_url: 'music',
	branded_url: 'branded',
	narrative_url: 'narrative',
  photography_url: 'photography',
  contact_url: 'contact'
};

var dataMusic = {
  home_url: '../',
  music_url: '',
  branded_url: '../branded',
  narrative_url: '../narrative',
  photography_url: '../photography',
  contact_url: '../contact',
  title: 'MUSIC',
  description: "",
  videos: [{
    id: '120522773',
    title: 'Meklit Hadero feat. Samuel Yirga - Kemekem',
    thumbnailUrl: 'http://i.vimeocdn.com/video/531212273.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '91651414',
    title: 'Atmosphere - Kanye West (Official Music Video)',
    thumbnailUrl: 'http://i.vimeocdn.com/video/471389381.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '79086655',
    title: 'Extranjero',
    thumbnailUrl: 'http://i.vimeocdn.com/video/454684232.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '67242039',
    title: 'Patton Oswalt does the Magic Clap',
    thumbnailUrl: 'http://i.vimeocdn.com/video/439190405.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '62309914',
    title: 'The Uncluded - Delicate Cycle',
    thumbnailUrl: 'http://i.vimeocdn.com/video/432151595.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '54213282',
    title: 'Wolf Larsen - If I Be Wrong',
    thumbnailUrl: 'http://i.vimeocdn.com/video/462728100.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '49484881',
    title: 'Aesop Rock - ZZZ Top',
    thumbnailUrl: 'http://i.vimeocdn.com/video/531213127.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '79146873',
    title: 'Megan Keely - Just Enough Time',
    thumbnailUrl: 'http://i.vimeocdn.com/video/457106933.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '49483012',
    title: "The Coup's Magic Clap",
    thumbnailUrl: 'http://i.vimeocdn.com/video/341457679.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '30934752',
    title: 'Behind the Eyelids Presents: John Heart Jackie',
    thumbnailUrl: 'http://i.vimeocdn.com/video/208087020.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '49484882',
    title: 'Aesop Rock - Cycles to Gehenna',
    thumbnailUrl: 'http://i.vimeocdn.com/video/455321873.webp?mw=1920&mh=1080&q=70'
  }]
};

var dataBranded = {
  home_url: '../',
  music_url: '../music',
  branded_url: '',
  narrative_url: '../narrative',
  photography_url: '../photography',
  contact_url: '../contact',
  title: 'BRANDED',
  description: "",
  videos: [{
    id: '125626176',
    title: '100 OpenTables: Brand Video',
    thumbnailUrl: 'http://i.vimeocdn.com/video/531211845.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '124724818',
    title: 'Sols - Live Your Life',
    thumbnailUrl: 'https://i.vimeocdn.com/video/514560403.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '108527682',
    title: 'Basis Peak by Intel: Brand Video',
    thumbnailUrl: 'http://i.vimeocdn.com/video/494060524.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '92594646',
    title: 'Cirq - Russia River Valley',
    thumbnailUrl: 'http://i.vimeocdn.com/video/472364799.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '92575084',
    title: 'Craft - by Cost Plus World Market',
    thumbnailUrl: 'http://i.vimeocdn.com/video/531212665.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '128915836',
    title: 'Calphalon YOURSET Heirloom Tomato Sauce Recipe',
    thumbnailUrl: 'http://i.vimeocdn.com/video/520214113.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '73995049',
    title: "Robert Mondavi's Coastal Crush (extended cut)",
    thumbnailUrl: 'http://i.vimeocdn.com/video/455321339.webp?mw=1920&mh=1080&q=70'
  }]
};

var dataNarrative = {
  home_url: '../',
  music_url: '../music',
  branded_url: '../branded',
  narrative_url: '',
  photography_url: '../photography',
  contact_url: '../contact',
  title: 'NARRATIVE',
  description: "",
  videos: [{
    id: '79282772',
    title: 'Rope a Dope',
    thumbnailUrl: 'http://i.vimeocdn.com/video/455321927.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '116523821',
    title: 'Rope A Dope 2',
    thumbnailUrl: 'http://i.vimeocdn.com/video/503032632.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '91651414',
    title: 'Atmosphere - Kanye West (Official Music Video)',
    thumbnailUrl: 'http://i.vimeocdn.com/video/471389381.webp?mw=1920&mh=1080&q=70'
  }, {
    id: '49484881',
    title: 'Aesop Rock - ZZZ Top',
    thumbnailUrl: 'http://i.vimeocdn.com/video/531213127.webp?mw=1920&mh=1080&q=70'
  }]
};

var dataPhotography = {
  home_url: '../../',
  music_url: '../../music',
  branded_url: '../../branded',
  narrative_url: '../../narrative',
  photography_url: '',
  contact_url: '../../contact',
  title: 'PHOTOGRAPHY',
  description: ""
};

var dataContact = {
  home_url: '../../',
  music_url: '../../music',
  branded_url: '../../branded',
  narrative_url: '../../narrative',
  photography_url: '../photography',
  contact_url: '',
  title: 'CONTACT',
  description: ""
};

var htmlFunction, html;

$(document).ready(function() {
  // Change cases to live URL before launch
  switch(location.pathname) {
    case "/":
      htmlFunction = JST['handlebars/index.hbs'];
      html = htmlFunction(dataIndex);
      break;
    case "/music/":
      htmlFunction = JST['handlebars/videography.hbs'];
      html = htmlFunction(dataMusic);
      break;
    case "/branded/":
      htmlFunction = JST['handlebars/videography.hbs'];
      html = htmlFunction(dataBranded);
      break;
    case "/narrative/":
      htmlFunction = JST['handlebars/videography.hbs'];
      html = htmlFunction(dataNarrative);
      break;
    case "/photography/":
      htmlFunction = JST['handlebars/photography.hbs'];
      html = htmlFunction(dataPhotography);
      break;
    case "/contact/":
      htmlFunction = JST['handlebars/contact.hbs'];
      html = htmlFunction(dataContact);
      break;
  };

  // Prepend the template to the body
  $('body').prepend(html);

  // Use fit vids to make videos responsive
  $(".modal__video").fitVids();

  
  // var randomIndexImgURL = Math.floor(Math.random() * 2) + 1;
  // if (location.pathname !== '/photography/professional/' &&
  //     location.pathname !== '/photography/personal/' &&
  //     location.pathname !== '/' ) {
  //   $('body').css('background-image', 'url(/img/backgrounds/' + randomImgURL + '.jpg)');
  // }
  // else

  if (location.pathname == '/contact/') {
    $('body').css('background-image', 'url(/img/pete01.jpg)');
  }
  else if (location.pathname == '/photography/') {
    $('body').css('background-color', '#000');
  }
  else {
    $('body').css('background-color', '#222');
  }

  $(document).foundation();
});

// Add shadow only after asset load
// $(window).load(function() {
//   $('.video__outer').css('box-shadow', '0 0 0 5px black');

//   if (location.pathname !== '/') {
//     var docHeight = $(document).height();
//     $('body').append('<div class="overlay"></div>');
//     $('.overlay')
//       .height(docHeight)
//       .css({
//          'opacity' : 0.5,
//          'position': 'absolute',
//          'top': 0,
//          'left': 0,
//          'background-color': 'white',
//          'width': '100%',
//       });
//   }
// });




