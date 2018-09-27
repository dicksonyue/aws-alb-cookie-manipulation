# AWSALB Cookie manipulation 
By default the secure flag of the AWSALB cookie is not on. It might violate some of the security compliance policy. 

Here is the work around by using the application controlled stickiness cookie to manipulate the secure flag

"You can't set the secure flag or HttpOnly flag on your duration-based session stickiness cookies. However, these cookies contain no sensitive data. Note that if you set the secure flag or HttpOnly flag on an application-controlled session stickiness cookie, it is also set on the AWSELB cookie."
https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html 
