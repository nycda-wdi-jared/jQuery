autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

# [fit]HTTPS: Setting Up A Valid Certificate 

---

# HTTPS Overview

* HTTPS is a protocol that looks almost identical to HTTP, but with the addition of a scheme token

* This addition allows for a secure communication over the internet using a Secure Socket Layer (SSL) or Transport Layer Security (TLS) sublayer

* HTTPS encrypts and decrypts per page requests as well as pages returned by the server

* It Provides authentication of the site, protection of privacy and data exchange integrity

---

# HTTPS How It Works

* Signals the browser to use added encryption layer of SSL/TLS protecting traffic 

* Provides protection even if only one side is authenticated (typically the server)

* Secure channel over the network, providies reasonable protection from eavesdroppers and main-in-the-middle attacks so long as the certificate is verified and trusted

---

# HTTPS How It Works

* The whole http protocol can be encrypted
Including URL, Query Parameters, Headers, and Cookies

* Cannot protect disclosure of website and port numbers, since they are part of the TCP/IP Protocols

* Contents of communication gets encrypted, but not the entities communicating

---

# Trust

* Browsers trust HTTPS websites through preinstalled certificate authorities

* These authorities (DNSimple, Symantec, Comodo, GoDaddy, GlobalSign, among others) are in turn trusted to provide valid certificates

---

# Setting up a certificate Rails/Heroku

* Buy an SSL Certification

* Get SSL Endpoint From Heroku

* DNS/Domain Configuration

* Prepare App

---

# Step 1: Buy An SSL Certification

* Buy a wildcard certificate from DNSimple

* https://dnsimple.com/ssl-certificates

* The wildcard (*) allows the use of a single certificate in staging, production and future subdomains

* Download the certificate bundle and private key to install on heroku by clicking "Install the SSL Certificate" then selecting heroku

---

# Step 2: Setup Heroku via Command Line

* Create the SSL Addon with the command
````
heroku addons:create ssl:endpoint
````
* Add your certificate and private key to the endpoint
````
heroku certs:add *.{pem,crt,key}
````
* To view info about a certificate
````
heroku certs
````

* This will output an endpoint URL

---

# Step 3+4: DNS/Domain Configuration and Prepare APP

* In DNSimple, update/add a CNAME record for the SSL domain to match the new heroku endpoint

* Make the below edits to the  
config/environments/production.rb
```
config.force_ssl = true
```

* When a user types 'domain.com', they should be redirected to 'https://www.domain.com' and the appropriate indicator should show in the URL Bar.

---

# Resources

* [ThoughtBot: SSL For Rails with Heroku](https://robots.thoughtbot.com/ssl-for-rails-with-heroku-and-dnsimple)
* [Heroku: SSL Endpoint](https://devcenter.heroku.com/articles/ssl-endpoint#setting-up-ssl-on-heroku)
* [Wikipedia: HTTPS](https://en.wikipedia.org/wiki/HTTPS)