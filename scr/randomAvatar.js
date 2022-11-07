function randomAvatar() {

    const cardImg = document.getElementsByClassName('card-img-top');

    for (const element of cardImg) {
        const preUrl = "https://robohash.org/";
        const randomString = Math.random().toString(36).slice(2, 7);
        const postUrl = "?set=set1";
        element.src = preUrl + randomString + postUrl;
    }
}

