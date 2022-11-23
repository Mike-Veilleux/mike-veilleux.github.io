class BusStop {
    constructor(_map, _corrdinate, _popupInfo, _direction) {
        this.#_map = _map;
        this.#_corrdinate = _corrdinate
        this.#_popupInfo = _popupInfo
        this.#_direction = _direction
        this.Initialize();
    }

    #_map = null;
    #_corrdinate = null;
    #_popupInfo = null;
    #_direction = null;
    #_marker = null;

    Initialize() {
        this.#CreateMarker();
    }
    #CreateMarker() {
        // create a HTML element 
        const divElement = document.createElement('div');
        divElement.className = `${this.#_direction === 0 ? 'endPointDir0' : 'endPointDir1'}`;
        // make a marker and add it to the map
        const newMarker = new mapboxgl.Marker(divElement)
            .setLngLat(this.#_corrdinate)
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                    `<h3>Bus Terminal</h3>
                    <p>${this.#_popupInfo}</p>`
                )
            )
            .addTo(this.#_map);
        this.#_marker = newMarker;
        return this
    }


}

export { BusStop };