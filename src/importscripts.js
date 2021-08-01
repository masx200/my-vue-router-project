function importScripts(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    var data = xhr.responseText;
    new Function(data)();
}
export default importScripts;
