document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var url = document.getElementById('url').value;
    var canvas = document.getElementById('qr-code');
    var qr = new QRious({
        element: canvas,
        value: url
    });
});


document.getElementById('download').addEventListener('click', function() {
  var canvas = document.getElementById('qr-code');
  var url = canvas.toDataURL();
  this.href = url;
});

document.getElementById('download').addEventListener('click', function() {
  var filename = document.getElementById('filename').value;
  if (filename.length === 0) {
    // Si aucun nom de fichier n'a été saisi, utilisez la date courante comme nom de fichier par défaut
    var now = new Date();
    filename = "qr-code-" + now.toISOString();
  }
  // Ajoutez l'extension du fichier en fonction du format de l'image QR code que vous générez
  filename += ".png";
  document.getElementById('download').setAttribute('download', filename);
});