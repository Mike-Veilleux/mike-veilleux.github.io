function randomAvatar() {
    const img = document.getElementById('random-avatar');
    const preUrl = "https://robohash.org/";
    const randomString = Math.random().toString(36).slice(2, 7);
    const postUrl = "?set=set1";
    img.src = preUrl + randomString + postUrl;
}

