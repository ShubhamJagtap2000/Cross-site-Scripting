# Reflected XSS

- In a reflected cross-site scripting attack, the malicious payload is part of the ***victim's request*** to the website. The website includes this payload in response back to the user. 
- To summarise, an attacker needs to trick a victim into clicking a URL to execute their malicious payload.

- This might seem harmless as it requires the victim to send a request containing an attackers payload, and a user wouldn't attack themselves. However, attackers could trick the user into clicking their crafted link that contains their payload via social-engineering them via email.

- Reflected XSS is the most common type of XSS attack.

  ![Screenshot (822)](https://user-images.githubusercontent.com/63872951/183872557-a87409ba-b39f-48b6-b607-6c3f9b304099.png)

- An attacker crafts a URL containing a malicious payload and sends it to the victim. The victim is tricked by the attacker into clicking the URL. The request could be 
  
  `http://example.com/search?keyword=<script>...</script>` 
  
- The website then includes this malicious payload from the request in the response to the user. The victims browser will execute the payload inside the response. 
- The data the script gathered is then sent back to the attacker (it might not necessarily be sent from the victim, but to another website where the attacker then gathers this data - this protects the attacker from directly receiving the victims data).


# Answer the questions below

1. Craft a reflected XSS payload that will cause a popup saying "Hello"
```
<script>alert("Hello")</script>
```
2. Craft a reflected XSS payload that will cause a popup with your machines IP address.
```
<script>alert(window.location.hostname)</script>
```

# The Next Steps

- Click [here](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/05%20-%20Reflected%20XSS/Reflected%20XSS%20Approach) to see how to move further in reflected XSS atack.
