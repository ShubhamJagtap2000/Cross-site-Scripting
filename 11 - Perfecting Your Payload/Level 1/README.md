# Level One

- You're presented with a form asking you to enter your name, and once you've entered your name, it will be presented on a line below, for example:

  ![Screenshot (828)](https://user-images.githubusercontent.com/63872951/184215092-f926dba7-1bac-4e1d-bfd1-be3c05fbe40e.png)

- If you view the Page Source, You'll see your name reflected in the code:

  ![Screenshot (829)](https://user-images.githubusercontent.com/63872951/184215362-731b76bf-8b81-454f-a4f0-3321b6aadd79.png)

- Instead of entering your name, we're instead going to try entering the following [JavaScript Payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level1.js): 
  ```
  <script>alert('THM');</script>
  ```

- Now when you click the enter button, you'll get an alert popup with the string THM and the page source will look like the following:
  
  ![Screenshot (830)](https://user-images.githubusercontent.com/63872951/184215707-3b62ae88-c409-4a72-a241-49cd936e9e6d.png)

- And then, you'll get a confirmation message that your payload was successful with a link to the [next level](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/edit/main/11%20-%20Perfecting%20Your%20Payload/Level%202).

  ![Screenshot (831)](https://user-images.githubusercontent.com/63872951/184216115-e689fc71-5c52-4c23-9fd1-b361fa88818d.png)
