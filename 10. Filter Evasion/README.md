# Filter Evasion

- There are many techniques used to filter malicious payloads that are used with cross-site scripting. It will be your job to bypass `4` commonly used filters.

- Navigate to "Filter Evasion" in the XSS Playground on TryHackMe room to get started.

- Cross-site scripting are extremely common. Below are a few reports of XSS found in massive applications; you can get paid very well for finding and reporting these vulnerabilities.  

    - [XSS found in Shopify](https://hackerone.com/reports/415484)
    - [$7,500 for XSS found in Steam chat](https://hackerone.com/reports/409850)
    - [$2,500 for XSS in HackerOne](https://hackerone.com/reports/449351)
    - [XSS found in Instagram](https://hackerone.com/reports/283825)


# Answer the questions below

1. Bypass the filter that removes any script tags.
```
3c3cf8d90aaece81710ab9db759352c0
```
2. The word alert is filtered, bypass it.
```
a2e5ef66f5ff584a01d734ef5edaae91
```
3. The word hello is filtered, bypass it.
```
decba45d0eff17c6eedf1629393bee1d
```
4. Filtered in challenge 4 is as follows:

    word "Hello"
    script\
    onerror\
    onsubmit\
    onload\
    onmouseover\
    onfocus\
    onmouseout\
    onkeypress\
    onchange
```
2482d2e8939fc85a9363617782270555
```

# [Click to view the scripts used to answer the questions]()
