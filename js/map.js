let cont1 = document.getElementById('1cont');
let cont2 = document.getElementById('2cont');
let cont3 = document.getElementById('3cont');
let cont4 = document.getElementById('4cont');



let opt = {
  center: {
    lat: 34.0522,
    lng: -118.2430
  },
  zoom: 10,
  disableDefaultUI: true,
  mapTypeControlOptions: {
    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
      'styled_map'
    ]
  }

};

const towns = [{
    town: 'Los Angeles',
    address: '6789 Stokes Isle Apt. 896,<br> Los Angeles 10010',
    time: 'Mon - Sat: 11:00-19:00, <br>Sun:11:00-16:00',
    phone: "(0043) 5476892846 <br>(0043) 558308553",
    mail: 'hello@pad.lkmfpmegmop <br>hello@pad.kmefnekgnpmp'
  },
  {
    town: 'New York',
    address: '4444 Stokes Isle Vbj. 555,<br> New York 10010',
    time: 'Mon - Sat: 11:00-19:00, <br>Sun:11:00-16:00',
    phone: "(0043) 658670894 <br>(0043) 546085442",
    mail: 'hello@pad.lkmsfkmpoko <br>hello@pad.klgskrnong'
  },
  {
    town: 'Boston',
    address: '2090 Stokes Isle Mpt. 777,<br> Boston 10010',
    time: 'Mon - Sat: 11:00-19:00, <br>Sun:11:00-16:00',
    phone: "(0043) 567894536 <br>(0043) 764507314",
    mail: 'hello@pad.lkandknfj<br>hello@pad.lkamfklmlwddw'
  },
  {
    town: 'Detroit',
    address: '1994 Stokes Isle Pjh. 666,<br> Detroit 10010',
    time: 'Mon - Sat: 11:00-19:00, <br>Sun:11:00-16:00',
    phone: "(0043) 568 456 902 <br>(0043) 548297445",
    mail: 'hello@pad.kjsngjegno <br>hello@pad.lakndknklll'
  }
];

let town = document.getElementById('town');
let address = document.getElementById('address');
let time = document.getElementById('time');
let phone = document.getElementById('phone');
let mail = document.getElementById('mail');

function showAbout(i) {
  town.innerHTML=towns[i].town;
  address.innerHTML=towns[i].address;
  time.innerHTML=towns[i].time;
  phone.innerHTML=towns[i].phone;
  mail.innerHTML=towns[i].mail;
}



cont1.addEventListener('click', function () {
  showAbout(0);
  opt.center = {
    lat: 34.0522,
    lng: -118.2430
  }
  initMap();
})
cont2.addEventListener('click', function () {
  showAbout(1);
  opt.center = {
    lat: 40.7142,
    lng: -74.0064
  }
  initMap();
})
cont3.addEventListener('click', function () {
  showAbout(2);
  opt.center = {
    lat: 42.358,
    lng: -71.059
  }
  initMap();
})
cont4.addEventListener('click', function () {
  showAbout(3);
  opt.center = {
    lat: 42.383,
    lng: -83.102
  }
  initMap();
})







function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
    [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dadada"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "water",
        "stylers": [{
            "color": "#88eaad"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#88eaad"
        }]
      }
    ], {
      name: 'Styled Map'
    });

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var map = new google.maps.Map(document.getElementById('map'), opt);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}