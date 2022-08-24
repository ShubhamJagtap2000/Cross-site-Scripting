# Protection Methods

- There are many ways to prevent XSS, here are the `3 ways` to keep cross-site scripting away of your application.

### 1. Escaping

- Escape all user input. This means any data your application has received is secure before rendering it for your end users. 

- By escaping user input, key characters in the data received but the web page will be prevented from being interpreter in any malicious way. 

- For example, you could ***disallow*** the `<` and `>` characters from being rendered.

### 2. Validating Input 

- This is the process of ensuring your application is rendering the correct data and preventing malicious data from doing harm to your site, database and users. 

- Input validation is disallowing certain characters from being submit in the first place.

### 3. Sanitising 

- Lastly, sanitizing data is a ***strong defence*** but should ***not*** be used to battle XSS attacks alone. 

- Sanitizing user input is especially helpful on sites that allow ***HTML*** markup, changing the unacceptable user input into an acceptable format. 

- For example you could sanitise the `<` character into the HTML entity `&#60;`
