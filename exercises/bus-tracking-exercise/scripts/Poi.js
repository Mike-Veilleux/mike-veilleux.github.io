class POI {
    constructor(_map, _corrdinate, _popupInfo) {
        this.#_map = _map;
        this.#_corrdinate = _corrdinate
        this.#_popupInfo = _popupInfo
        this.Initialize();
    }

    #_map = null;
    #_corrdinate = null;
    #_popupInfo = null;
    #_marker = null;

    Initialize() {
        this.#CreateMarker();
    }
    #CreateMarker() {
        // create a HTML element 
        const divElement = document.createElement('div');
        divElement.className = 'pointOfInterest';
        // make a marker and add it to the map
        const newMarker = new mapboxgl.Marker(divElement)
            .setLngLat(this.#_corrdinate)
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                    `<h3>Point Of Interest</h3>
                <p>${this.#_popupInfo}</p>`
                )
            )
            .addTo(this.#_map);
        this.#_marker = newMarker;
        return this
    }


}

export { POI };