* Installer MYRKSKOG™ på https://underskog.no/modul/103
* Installer Den breie sti på https://underskog.no/modul/104

Test endringer i Chrome-konsoll:

```
var script = document.createElement('script');script.src = "https://code.jquery.com/jquery-3.4.1.min.js";document.getElementsByTagName('head')[0].appendChild(script);

$("p").css({"color": "lightgray", "background": "black"});
```
