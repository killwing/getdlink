getJson = function(url, done) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        done(JSON.parse(xhr.response));
    };
    xhr.open('GET', url);
    xhr.send(null);
}

getDLink = function() {
    var path = window.location.hash.match(/#video\/path=(.*)&t=\-?[0-9]/)[1]
    var url = "//"+window.location.host+"/api/filemetas?target=["+JSON.stringify(path)+"]&dlink=1&bdstoken="+yunData.MYBDSTOKEN+"&channel=chunlei&clienttype=0&web=1";
    getJson(url, function(json) {
        console.log(json.info[0].dlink)
    });
}

getDLink();
