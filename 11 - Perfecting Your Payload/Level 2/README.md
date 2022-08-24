# Level Two

- Like the [previous level](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/11%20-%20Perfecting%20Your%20Payload/Level%201), you're being asked again to enter your name. This time when clicking enter, your name is being ***reflected in an input*** tag instead:

  ![Screenshot (871)](https://user-images.githubusercontent.com/63872951/186446194-d31971d3-44c2-4133-bf73-fff732f1818e.png)

- Viewing the page source, you can see your name reflected inside the value attribute of the input tag:

  ![image](https://user-images.githubusercontent.com/63872951/186446660-5f4c7d37-7cc0-4c12-8f1f-e77569ded9fd.png)

- It wouldn't work if you were to try the [previous JavaScript payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level1.js) because you can't run it from inside the input tag. 

- Instead, we need to escape the input tag first so the payload can run properly. You can do this with the [following payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level2.js): 

```
"><script>alert('THM');</script>
```

- The important part of the payload is the `">` which closes the value parameter and then ***closes the input tag***.

- This now closes the input tag properly and allows the JavaScript payload to run:

  ![image](https://user-images.githubusercontent.com/63872951/186447726-4feaf78b-a9e2-4feb-93d9-d6a330f27cd2.png)

- Now when you click the enter button, you'll get an alert popup with the string THM. And then, you'll get a confirmation message that your payload was successful with a link to the [next level](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level3.js).
