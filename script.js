var map;

DG.then(function () {
    map = DG.map('map', {
        center: [56.847381, 53.213547],
        zoom: 12,
    });

    map.locate({ setView: true, watch: true }) // определение по дефолту местоположения пользователя
        .on('locationfound', function (e) {
            DG.marker([e.latitude, e.longitude]).addTo(map);
        })

        .on('locationerror', function (e) {
            DG.popup()
                .setLatLng(map.getCenter())
                .setContent('Доступ к определению местоположения отключён')
                .openOn(map);
        });

    DG.control.location().addTo(map); // кнопка определения местоположения пользователя
});