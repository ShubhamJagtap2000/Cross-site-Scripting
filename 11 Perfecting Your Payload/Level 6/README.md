# Level 6

- Similar to [level two](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/11%20-%20Perfecting%20Your%20Payload/Level%202), where we had to escape from the value attribute of an input tag, we can try `"><script>alert('THM');</script>`, but that doesn't seem to work. 

- Let's inspect the page source to see why that doesn't work. 

  ![image](https://user-images.githubusercontent.com/63872951/186453749-e401ec73-650b-4d6a-be32-a90fc4efb99a.png)

- You can see that the `<` and `>` characters get filtered out from our payload, preventing us from ***escaping*** the **IMG tag**. 

- To get around the filter, we can take advantage of the additional attributes of the IMG tag, such as the `onload event`. The onload event executes the code of your choosing once the image specified in the `src` attribute has loaded onto the web page.

- Let's use [following payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level6.js) to reflect this:
```
/images/cat.jpg" onload="alert('THM'); 
```

- and then viewing the page source, and you'll see how this will work:

  ![image](https://user-images.githubusercontent.com/63872951/186454725-42f7e66a-20e4-4f61-81e6-9183d0ea050d.png)

- Now when you click the enter button, you'll get an alert popup with the string THM. And then, you'll get a confirmation message that your payload was successful; with this being the last level, you'll receive a flag. 
