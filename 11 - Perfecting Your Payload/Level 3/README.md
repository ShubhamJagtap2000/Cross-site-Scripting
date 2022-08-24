# Level 3

- You're presented with another form asking for your name, and the same as the [previous level](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/11%20-%20Perfecting%20Your%20Payload/Level%202), your name gets reflected inside an HTML tag, this time the `textarea` tag.

  ![image](https://user-images.githubusercontent.com/63872951/186448943-3c4caf0d-9fd1-4ae4-b668-5082fc71302a.png)

- We'll have to escape the textarea tag a little differently from the input one (in Level Two) by using the [following payload](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/blob/main/11%20-%20Perfecting%20Your%20Payload/Payload%20List/Level3.js): 

```
</textarea><script>alert('THM');</script>
```

- It will turn this:

  ![image](https://user-images.githubusercontent.com/63872951/186449399-2017b8e3-2e8c-4328-911a-4402026a9c46.png)

- The ***important*** part of the above payload is `</textarea>`, which causes the textarea element to close so the script will run.

- Now when you click the enter button, you'll get an alert popup with the string THM. And then, you'll get a confirmation message that your payload was successful with a link to the [next level](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/11%20-%20Perfecting%20Your%20Payload/Level%204).
