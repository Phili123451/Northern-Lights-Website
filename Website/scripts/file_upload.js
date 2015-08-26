////////////////////////////////////////////////
// Funktion zum Hochladen von Dateien
////////////////////////////////////////////////

var client = null;

function uploadFile()
{
    //File Objekt
    var file = document.getElementById("upload_files").files[0];

    //FormData Objekt erzeugen
    var formData = new FormData();

    //XMLHttpRequest Objekt erzeugen
    client = new XMLHttpRequest();

    //FormData Objekt die Datei hinzufügen
    formData.append("datei", file);

    client.onerror = function (e) { alert("onError") };

    client.open("POST","upload.php");
    client.send(formData);
}