# [XSS Payloads](https://tryhackme.com/room/xssgi)

## What is a Payload?

- In XSS, the payload is the ***JavaScript code*** we wish to be executed on the targets computer. There are two parts to the payload, **<ins>the Intention and the Modification</ins>**.


- `The intention` is what you wish the JavaScript to actually do (some examples below), and `the modification` is the changes to the code we need to make it execute as every scenario is different.


## Here are some examples of XSS intentions 
- See all below mentioned scripts [here](https://github.com/ShubhamJagtap2000/Cross-site-Scripting/tree/main/04%20-%20XSS%20Payloads/Payload%20List)

### 1. Proof of Concept(PoC)

- This is the simplest of payloads where all you want to do is demonstrate that you can achieve XSS on a website. This is often done by causing an ***alert box*** to pop up on the page with a string of text, for example:

[<script>alert('XSS');</script>]()
