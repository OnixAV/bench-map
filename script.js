var map;

DG.then(function () {
    map = DG.map('map', {
        center: [56.847381, 53.213547],
        zoom: 12,
    });

    map.setLang('ru');
    map.getLang();

    map.locate({ setView: true, watch: true }) // определение по дефолту местоположения пользователя
        .on('locationfound', function (e) {
            DG.marker([e.latitude, e.longitude]).addTo(map);
        })

    .on('locationerror', function (e) {
        DG.popup()
            .setLatLng(map.getCenter())
            .setContent('Доступ к определению местоположения отключён')
            .openOn(map);
    })

    .on('click', function(ev) { // Добавление маркера на карту
        DG.marker(ev.latlng).addTo(map);
    })
    
    DG.control.location().addTo(map); // кнопка определения местоположения пользователя
});