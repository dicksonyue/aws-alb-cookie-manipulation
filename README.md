# AWSALB Cookie "secure flag" manipulation 
By default the "secure flag" of the AWSALB cookie is not on. It might violate some of the security compliance policy like PCI.

Here is the work around by using the application controlled stickiness cookie to manipulate the secure flag

"You can't set the secure flag or HttpOnly flag on your duration-based session stickiness cookies. However, these cookies contain no sensitive data. Note that if you set the secure flag or HttpOnly flag on an application-controlled session stickiness cookie, it is also set on the AWSELB cookie."
https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html 

# Setup

Generate key and cert 

openssl req -newkey rsa:2048 -keyout key.pem -x509 -days 365 -out ./ssl/certificate.pem

openssl x509 -text -noout -in ./ssl/certificate.pem

openssl pkcs12 -inkey key.pem -in ./ssl/certificate.pem -export -out ./ssl/certificate.p12

openssl pkcs12 -in ./ssl/certificate.p12 -noout -info  // verify certificate

Run
node sever.js

Screen
![screen](https://raw.githubusercontent.com/dicksonyue/aws-alb-cookie-manipulation/master/Screen%20Shot%202018-09-27%20at%201.42.10%20PM.png)

