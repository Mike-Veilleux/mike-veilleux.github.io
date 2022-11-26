function randomAvatar() {
    getAvatar();
    setInterval(getAvatar, 30000);
}

function getAvatar() {
    const preUrl = "https://robohash.org/";
    const randomString = Math.random().toString(36).slice(2, 7);
    const postUrl = "?set=set1";

    const holder = document.getElementById('avatar-holder');

    let img = document.getElementById('random-avatar');

    if (img === undefined) {
        img = document.createElement('img');
        img.src = preUrl + randomString + postUrl;
        img.classList.add('mx-2');
        img.width = "40";
        img.height = "40";
        img.style = "transform: scaleX(-1);";
        img.id = "random-avatar";
        holder.appendChild(img);
    } else {
        img.src = preUrl + randomString + postUrl;
    }
}
