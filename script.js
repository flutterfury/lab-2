// This is the mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWgtc21pdGgiLCJhIjoiY2xkbTJnNHF5MDMydDN1bXkzMmx1ZGNnOCJ9.zEfxmdj0xwfKLLJge5TRyQ';
   
const map = new mapboxgl.Map({ //constant variable //inserts a mapbox map 
  container: 'map', // div container ID for map
  style: 'mapbox://styles/sarah-smith/cle37ogul002c01leg091lvdn', //  link to style URL from mapbox
  center: [-78.450,45.803, ], // starting position [longitude, latitude]
 zoom: 7 // starting zoom

 });
  
 map.on('load', () => { //event function 
  //Adds data source 
  map.addSource('provincial-parks', { // source ID
    'type': 'vector',//data type
    'url': 'mapbox://sarah-smith.8kslmlkz' // tileset link from mapbox
    });
    //adds layer from source 
    map.addLayer({
    'id': 'parks', //layer id
    'type': 'fill', //data geometry type (fill for polygon)
    'source': 'provincial-parks', // source ID from addSource method
    'paint': {
    'fill-color': '#006600',//colour of polygons
    'fill-opacity': 0.4,//transparency of colour fill
    'fill-outline-color': 'black'//outline of polygon colour
    },
    'source-layer': 'Provincial_park_regulated-dp6k9l' //name of layer from mapbox tileset page
    },
    );
    //adds data source 
    map.addSource('fishing', { // source ID
      'type': 'vector', //data type
      'url': 'mapbox://sarah-smith.ahlpu8cf' // tileset link from mapbox
      });
    //adds layer from source
      map.addLayer({
      'id': 'stocking-data',//layer id
      'type': 'circle',//data geometry type
      'source': 'fishing', //source ID from addSource method
      'paint': {
      'circle-radius': 2, //size of points
      'circle-color': '#0000CC'//colour of points 
      },
      'source-layer': 'Fish_Stocking_Data_for_Recrea-cuwufu' //name of layer from mapbox tileset page
      },
      )});
