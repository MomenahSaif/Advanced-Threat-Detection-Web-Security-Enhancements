# Advanced-Threat-Detection-Web-Security-Enhancements
DevelopersHub Corporation's Internship week 4
### Intrusion Detection & Monitoring (Fail2Ban)

Fail2Ban was configured to monitor SSH authentication logs in real time.
It detects repeated failed login attempts and automatically blocks the
source IP to prevent brute-force attacks.

- SSH jail enabled
- Configured retry limits and ban time
- Automatic IP blocking using firewall rules
- Real-time monitoring verified using fail2ban-client








### Security Headers & CSP

Security headers were implemented using Helmet middleware to protect
the application against common client-side attacks.

- Content Security Policy (CSP) implemented to mitigate XSS attacks
- Strict-Transport-Security (HSTS) configured to enforce HTTPS
- Additional headers enabled for clickjacking and MIME-type protection
