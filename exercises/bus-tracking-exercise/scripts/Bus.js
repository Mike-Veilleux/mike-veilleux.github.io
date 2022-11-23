class Bus {
    constructor(_map, _mtbaJson) {
        this.#_map = _map;
        this.#_json = _mtbaJson
        this.Initialize();
    }

    #_map = null;
    #_json = null;
    #_marker = null;
    #_previousDirection = null

    get json() { return this.#_json; }
    set json(value) { this.#_json = value; }

    Initialize() {
        this.#CreateMarker();
    }

    #CreateMarker() {
        this.#_previousDirection = this.#_json.attributes.direction_id;


        // create a HTML element 
        const divElement = document.createElement('div');
        divElement.className = `${this.#_json.attributes.direction_id === 0 ? 'markerDir0' : 'markerDir1'}`;
        divElement.id = this.#_json.id;
        // make a marker and add it to the map
        const newMarker = new mapboxgl.Marker(divElement)
            .setLngLat([this.#_json.attributes.longitude, this.#_json.attributes.latitude])
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                    `<h3>Bus: ${this.#_json.attributes.label}</h3>
                    <p>Direction: ${this.#_json.attributes.direction_id}</p>
                    <p>Occupancy: ${this.#_json.attributes.occupancy_status}</p>`
                )
            )
            .addTo(this.#_map);
        this.#_marker = newMarker;
        return this
    }

    MoveMarker() {
        this.#_marker.setLngLat([this.#_json.attributes.longitude, this.#_json.attributes.latitude]);
        return this;
    }

    RemoveMarker() {
        this.#_marker.remove();
        return this;
    }

    UpdateJson(newJson) {
        this.json = newJson;
        return this;
    }

    CheckDirection() {
        if (this.#_previousDirection != this.#_json.attributes.direction_id) {
            this.RemoveMarker();
            this.#CreateMarker();
        }
        return this
    }

    #SentenceCase(str) {
        // let arrStr = str.split('_');
        // const firstLetter = arrStr[0].charAt(0);
        // console.log(firstLetter);
        // return arrStr.join(' ');

        //return nStr.toLowerCase().charAt(0).toUpperCase() + nStr.slice(1);;

        // I Googled this regular expression => https://codepen.io/rothkj1022/pen/eNONZz
        // var newString = string.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
        // newString = newString.split('_').join(' ');
        // return newString;
    }

}

export { Bus };