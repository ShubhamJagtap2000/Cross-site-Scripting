# Level 4

- Entering your name into the form, you'll see it reflected on the page. This level looks similar to [level one](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/11%20-%20Perfecting%20Your%20Payload/Level%201), but upon inspecting the page source, you'll see your name gets reflected in some JavaScript code.

  ![image](https://user-images.githubusercontent.com/63872951/186450633-354bfe6b-3640-4aaf-a134-d2b9713c15a5.png)

- You'll have to escape the existing JavaScript command, so you're able to run your code; you can do this with the [following payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level4.js):

```
';alert('THM');//
```

- You'll see from the below screenshot will execute your code. 

  ![image](https://user-images.githubusercontent.com/63872951/186451142-92c48001-f985-4925-9b00-74521f2b8220.png)


- The `'` closes the field specifying the name, then `;` signifies the end of the current command, and the `//` at the end makes anything after it a comment rather than executable code.

- [Level 5](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/11%20-%20Perfecting%20Your%20Payload/Level%205) 
