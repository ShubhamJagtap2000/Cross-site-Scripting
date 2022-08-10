# Reflected XSS

- Reflected XSS happens when user-supplied data in an HTTP request is included in the webpage source without any validation.

## Example Scenario

- A website where if you enter incorrect input, an error message is displayed. The content of the error message gets taken from the error parameter in the query string and is built directly into the page source.
  
  ![Screenshot (823)](https://user-images.githubusercontent.com/63872951/183879680-f1aa6a93-8be2-4097-9440-8156d8b14488.png)

  ```
  <div class="alert alert-danger">
    <p>Invalid Input Detected</p>
  </div>
  ```
  
- The application doesn't check the contents of the error parameter, which allows the attacker to insert malicious code.
  
  ![Screenshot (824)](https://user-images.githubusercontent.com/63872951/183879978-45148e11-ae2c-4b71-b1d0-e6fc0ff77f55.png)

  
  ```
  <div class="alert alert-danger">
    <p><script src="https://attacker.thm/evil.js"></script></p>
  </div>
  ```
  
## Potential Impact:

- The attacker could send links or embed them into an iframe on another website containing a JavaScript payload to potential victims getting them to execute code on their browser, potentially revealing session or customer information.

## How to test for Reflected XSS:

- You'll need to test every possible point of entry; these include:

    - Parameters in the URL Query String
    - URL File Path
    - Sometimes HTTP Headers (although unlikely exploitable in practice)

- Once you've found some data which is being reflected in the web application, you'll then need to confirm that you can successfully run your JavaScript payload; your payload will be dependent on where in the application your code is reflected. 

# Answer the questions below

 1. Where in an URL is a good place to test for reflected XSS?
```
Parameters
```
