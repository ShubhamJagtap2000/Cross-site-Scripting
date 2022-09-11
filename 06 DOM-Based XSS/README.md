# DOM-Based XSS

## What is the DOM?

- DOM stands for ***Document Object Model*** and is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style and content. 

- A web page is a document and this document can be either displayed in the browser window or as the HTML source. A diagram of the HTML DOM is displayed below:

  ![Screenshot (825)](https://user-images.githubusercontent.com/63872951/183936187-688868d8-1292-457a-b124-52d6659ff158.png)

- With the object mode, Javascript gets all the power it needs to create dynamic HTML. More information can be found on [w3schools](https://www.w3schools.com/js/js_htmldom.asp) website.

- In a DOM-based XSS attack, a malicious payload is not actually parsed by the victim's browser until the website's legitimate JavaScript is executed. So what does this mean?

- With reflective xss, an attackers payload will be injected directly on the website and will not matter when other Javascript on the site gets loaded.
  
  ```html
  <html>
    You searched for <em><script>...</script></em>
  </html> 
  ```

- With **DOM-Based XSS**, an attackers payload will only be executed when the vulnerable Javascript code is either loaded or interacted with. It goes through a Javascript function like so:

  ```js
  var keyword = document.querySelector('#search')
  keyword.innerHTML = <script>...</script>
  ```

# Answer the questions below

1. Look at the deployed machines DOM-Based XSS page source code, and figure out a way to exploit it by executing an alert with your cookies.
```
BreakingAnElementsTag
```

2. Create an onhover event on an image tag, that change the background color of the website to red.
```
JavascriptIsAwesome
```

# The Next Steps

- Click [here](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/06%20-%20DOM-Based%20XSS/DOM-Based%20XSS%20Approach) to see how to move further in DOM-Based XSS attack.

# Sample Payloads

- Click [here](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/06%20-%20DOM-Based%20XSS/Sample%20Payloads)
