$.getJSON('data/cltNYC.json', function (cltLocations) {
    console.log(cltLocations)
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

    var NYC_COORDINATES = [-74.00214, 40.71882]
    var map = new mapboxgl.Map({
        container: 'mapContainer', // HTML container id
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: NYC_COORDINATES, // starting position [long,lat] of NYC
        zoom: 9.7
    });


    // the popup markers w/info for the map along with the fly-to functions of the buttons on the sidebar, inspired by Gardens of Cairo from 2022
    cltLocations.forEach(function (cltLocation) {
        var popup = new mapboxgl.Popup({ offset: 40 })
            .setHTML(`
  <p><b>${cltLocation.CLT_Organization}</b></p>
          <p><u>Headquarters</u>: <strong>${cltLocation.Address}</strong><p>
          <p><u>Land Status</u>: <strong>${cltLocation.LandStatus}</strong><p>
  `);
        let color = "#7c1b1b"
        new mapboxgl.Marker({
            color: color
        })
            .setLngLat([cltLocation.Longitude, cltLocation.Latitude])
            .setPopup(popup)
            .addTo(map);
    });
    $('#NWBCCC').on('click', function () {
        map.flyTo({
            center: [-73.8937, 40.8685],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-NWBCCC').show();
    });
    $('#MMC').on('click', function () {
        map.flyTo({
            center: [-73.8873, 40.84481],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-MMC').show();
    });
    $('#WSNQ').on('click', function () {
        map.flyTo({
            center: [-73.9152, 40.8213],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-WSNQ').show();
    });
    $('#MHPM').on('click', function () {
        map.flyTo({
            center: [-73.8764, 40.82847],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-MHPM').show();
    });
    $('#NMCLT').on('click', function () {
        map.flyTo({
            center: [-73.9209, 40.86959],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-NMCLT').show();
    });
    $('#EBCLT').on('click', function () {
        map.flyTo({
            center: [-73.9346, 40.79668],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-EBCLT').show();
    });
    $('#CSCLT').on('click', function () {
        map.flyTo({
            center: [-73.9908, 40.72688],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-CSCLT').show();
    });
    $('#Chinatown').on('click', function () {
        map.flyTo({
            center: [-73.9986, 40.71322],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-Chinatown').show();
    });
    $('#WQCLT').on('click', function () {
        map.flyTo({
            center: [-73.9216, 40.74679],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-WQCLT').show();
    });
    $('#Chhaya').on('click', function () {
        map.flyTo({
            center: [-73.8887, 40.74796],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-Chhaya').show();
    });
    $('#BKLVLUP').on('click', function () {
        map.flyTo({
            center: [-73.9454, 40.63097],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-BKLVLUP').show();
    });
    $('#Brownsville').on('click', function () {
        map.flyTo({
            center: [-73.91, 40.66747],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-Brownsville').show();
    });
    $('#ENYCLT').on('click', function () {
        map.flyTo({
            center: [-73.8852, 40.67966],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-ENYCLT').show();
    });
    $('#realCLT').on('click', function () {
        map.flyTo({
            center: [-73.77506146, 40.59555008],
            zoom: 17.5,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-realCLT').show();
    });
    // come home button
    $('#reset-button-1').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-2').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-3').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-4').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-5').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-6').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-7').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-8').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-9').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-10').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-11').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-12').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-13').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });
    $('#reset-button-14').on('click', function () {
        map.flyTo({
            center: NYC_COORDINATES,
            zoom: 9.7,
        });
        $('#main-sidebar-content').show();
        $('.variable-sidebar').hide();
    });

})
