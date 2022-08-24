# Level 5

- Now, this level looks the same as level one, and your name also gets reflected in the same place. But if you try the `<script>alert('THM');</script>` payload, it won't work. 

- When you view the page source, you'll see why. 

  ![image](https://user-images.githubusercontent.com/63872951/186452329-17d17b82-205c-46de-a9f7-312a29cd79ca.png)

- The word script  gets removed from your payload, that's because there is a ***filter*** that strips out any potentially dangerous words.

- When a word gets removed from a string, there's a helpful trick that you can try. 

  ![image](https://user-images.githubusercontent.com/63872951/186452552-a6c3c6ed-4116-49f6-830a-73789b21c95a.png)

- Try entering the [following payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level5.js):

```
<sscriptcript>alert('THM');</sscriptcript> 
```

- and click the enter button, you'll get an alert popup with the string THM. And then, you'll get a confirmation message that your payload was successful with a link to the [next level](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/11%20-%20Perfecting%20Your%20Payload/Level%205).
