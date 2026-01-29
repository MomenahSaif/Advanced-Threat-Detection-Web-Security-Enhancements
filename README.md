# Week 4 – Advanced Threat Detection & Web Security Enhancements

## Overview
This project focuses on implementing advanced security controls for a Node.js Express application. The goal was to enhance threat detection, harden API security, and protect the application against common web-based attacks using industry-standard tools and best practices.

The implementation covers intrusion detection, API abuse prevention, secure cross-origin communication, authentication mechanisms, and browser-level security headers.



## Objectives
- Detect and mitigate brute-force and unauthorized access attempts
- Secure API endpoints against abuse and unauthorized usage
- Implement strong browser security controls to prevent client-side attacks
- Align security practices with OWASP Top 10 recommendations



## Technologies Used
- Node.js
- Express.js
- Fail2Ban
- express-rate-limit
- cors
- helmet
- Linux (Ubuntu/Kali)

---

## 1. Intrusion Detection & Monitoring

### Tool Used
**Fail2Ban**

### Description
Fail2Ban was configured as a host-based intrusion prevention system to monitor authentication logs in real time. It detects repeated failed login attempts and automatically blocks the source IP address using firewall rules.

### Implementation Steps
- Installed Fail2Ban on the Linux system
- Created a local configuration file (`jail.local`)
- Enabled the SSH jail to monitor authentication attempts
- Configured retry limits and ban duration
- Verified monitoring using the Fail2Ban client

### Outcome
- Real-time monitoring of SSH login attempts
- Automatic IP banning after multiple failed attempts
- Protection against brute-force attacks

---

## 2. API Security Hardening

### 2.1 Rate Limiting

**Tool:** express-rate-limit

Rate limiting was implemented to protect API endpoints from brute-force and denial-of-service attacks by limiting the number of requests per IP address.

**Configuration Highlights:**
- Time window: 15 minutes
- Maximum requests: 100 per IP
- Applied to all `/api/*` routes

This ensures that excessive or malicious requests are automatically blocked.

---

### 2.2 Cross-Origin Resource Sharing (CORS)

**Tool:** cors middleware

CORS was configured to restrict API access to trusted origins only. This prevents unauthorized or malicious websites from accessing the backend APIs.

**Key Controls:**
- Restricted allowed origins
- Limited allowed HTTP methods
- Prevented wildcard (`*`) access

This reduces the risk of cross-origin data leakage and misuse.

---

### 2.3 API Authentication

**Method Used:** API Key Authentication

Sensitive API endpoints were protected using API key–based authentication. Requests without a valid API key are denied access.

**Key Features:**
- API key passed through request headers
- Middleware-based authentication
- Unauthorized requests return HTTP 401

This ensures that only authorized clients can access protected resources.

---

## 3. Security Headers & Content Security Policy

### 3.1 Security Headers

**Tool:** Helmet

Helmet middleware was used to add multiple HTTP security headers automatically, protecting the application from common browser-based attacks such as clickjacking and MIME-type sniffing.

---

### 3.2 Content Security Policy (CSP)

A strict Content Security Policy was implemented to mitigate Cross-Site Scripting (XSS) attacks.

**CSP Controls:**
- Scripts allowed only from the same origin
- Inline scripts blocked
- External object embedding disabled
- Insecure requests upgraded when possible

This significantly reduces the risk of script injection attacks.

---

### 3.3 HTTP Strict Transport Security (HSTS)

HSTS was configured to enforce secure HTTPS communication.

**Key Settings:**
- One-year max-age
- Subdomains included
- Preload enabled

Note: HSTS is enforced only when the application is deployed over HTTPS. On localhost (HTTP), browsers ignore this header, which is expected behavior.

---

## Verification & Testing
- API endpoints tested via browser and command-line tools
- Rate limiting validated by repeated requests
- Authentication verified using valid and invalid API keys
- Security headers confirmed using browser developer tools
- Fail2Ban status checked using `fail2ban-client`

---


## Conclusion
This focused on implementing practical, real-world security controls across both server-side and client-side layers. The application is now protected against common threats such as brute-force attacks, API abuse, unauthorized access, and client-side script injection, aligning with modern web security best practices.

---

## Repository Contents
- Express application source code
- Security middleware implementations
- Configuration files
- Documentation and screenshots for verification

---

## Author
Momenah Saif
