
const ira = document.querySelector("#ira")
const centrar = document.querySelector("#centrar")
const colores = ["#3A7FF2", "#E94B4B", "#4AE2A2", "#F5C93C", "#9B59D1", "#FF7E3B", "#2DC7E8", "#67E94F", "#F25DA8", "#BFAE3A", "'#1E9B7A", "'#C84FF0", "'#FFB84A", "'#2F46E2", "'#E23D6E", "'#4BE0F9", "'#A6E94B"]

const grupoBotones = document.querySelector("#grupoBotones")

ira.addEventListener('click', () => {
    irTo(-18.47552, -70.30058)
})


centrar.addEventListener('click', () => {
    irTo(-33.45694, -70.64827)
})


//L.map es la clase central de la API. Se usa para crear y manipular el mapa. 
// En el mapa establecemos unas coordeanas de la vista y un nivel de zoom.
//1.- Crar el objeto mapa
let map = L.map('map', {
    fullscreenControl: true,
    fullscreenControlOptions: { position: 'topleft' }
}).setView([-33.45694, -70.64827], 5);


//2.- Añadir una cartografía base
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    {
        minZoom: 0, maxZoom: 20, id: 'mapbox.streets'
    }).addTo(map);


//3.- Añadiendo una escala
L.control.scale().addTo(map);

// 4. Crando el ícono
//var myIcon = L.icon({ iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=' })

//5. Añadiendo un marcador
//let marker = new L.Marker([-33.45694, -70.64827])
//marker.addTo(map)

const irTo = function (lat, log) {
    console.log('ir a')
    map.flyTo([lat, log],8)
}

//6. add geojson layer
const geoJsonUrl = 'data/Regional.geojson'
const regiones = [];
var opa = 0;

// aqui cargo el geojson pero no parece ocurrir nada
// Vario la opacidad por cada feature
fetch(geoJsonUrl)
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function (feature) {
                const { codregion } = feature.properties
                regiones.push(feature);
                return {
                    opacity: 0.8,   // controla la opacidad del borde 
                    stroke: true,   // Elimina los bordes
                    fillColor: colores[codregion], // Establece el color de relleno del feature
                    fillOpacity: 0.4 // controla el nivel de opacidad ( 0 a 1) del relleno del feature
                };
            },
            onEachFeature: muestraFeatureDatos
        }).addTo(map)
    })
    .catch(function (error) {
        console.log(`Se produjo el error ->  ${error}`)
    })

function muestraFeatureDatos(feature, layer) {

    const { Region, codregion } = layer.feature.properties
    const nuevoBoton = document.createElement('button')
    nuevoBoton.className = 'btn btn-light btn-sm m-1'      // Para agregar multiples clases
    nuevoBoton.textContent = Region                        // Establecer el título del boton
    grupoBotones.appendChild(nuevoBoton)                   // Agregar el elemento al pabre 
    nuevoBoton.id = codregion;

    nuevoBoton.addEventListener('click', (e) => {
        const idRegion = parseInt(e.target.id);
        const { codregion } = regiones[idRegion].properties
        const regionEncontrada = regiones.find(element => element.properties.codregion == idRegion)
        const poligono = L.polygon(regionEncontrada.geometry.coordinates[0])
        if (regionEncontrada) {
            const polygonBounds = poligono.getBounds();
            const polygonCenter = polygonBounds.getCenter();
            const {lat,lng} = polygonCenter
            irTo(lng, lat)
        }
    })


    function getfeature(id) {


    }

    layer.on('click', function (e) {
        var clickedMarker = e.target;
        var opaci = (e.target.options.fillOpacity > 1) ? 0 : e.target.options.fillOpacity + 0.2
        clickedMarker.setStyle({ fillOpacity: opaci });
    })
    if (feature.properties) {
        layer.bindPopup(`Region: ${feature.properties.Region}  Area: ${feature.properties.area_km} km2 `);
    }
}