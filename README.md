This project represents Week 4 of my cybersecurity / backend internship, focused on implementing advanced threat detection, API security hardening, and browser-level security controls.
The goal of this phase was to detect malicious activity in real time, protect backend APIs from abuse, and enforce secure communication and content loading policies.

The implementation follows real-world security best practices and aligns with common guidance from OWASP.

Objectives

Detect and mitigate brute-force attacks using host-based monitoring

Protect APIs against abuse, unauthorized access, and cross-origin attacks

Enforce strong browser security policies to prevent client-side attacks

Implement layered security controls across the system

Technologies Used

Node.js

Express.js

express-rate-limit

cors

helmet

Fail2Ban

Linux (Ubuntu/Kali environment)

1. Intrusion Detection & Monitoring
Tool Used: Fail2Ban

Fail2Ban was configured as a host-based intrusion detection and prevention system. It continuously monitors system authentication logs and automatically blocks IP addresses that exhibit malicious behavior such as repeated failed login attempts.

Key Features Implemented

Real-time monitoring of SSH authentication logs

Automatic detection of brute-force login attempts

Temporary IP banning after multiple failed login attempts

Configurable retry thresholds and ban duration

Configuration Summary

SSH jail enabled

Retry limit and ban time configured

Service enabled and verified using fail2ban-client

Security Benefit

This setup helps mitigate:

SSH brute-force attacks

Credential stuffing

Unauthorized access attempts at the system level

2. API Security Hardening

The backend API was secured using multiple layered controls to prevent abuse and unauthorized access.

2.1 Rate Limiting

Tool Used: express-rate-limit

Rate limiting was applied at the API level to restrict the number of requests from a single IP address within a defined time window.

Configuration Details

Time window: 15 minutes

Maximum requests per IP: 100

Applied to all /api/* routes

Security Benefit

Prevents brute-force login attempts

Reduces risk of denial-of-service (DoS) attacks

Protects backend resources from abuse

2.2 CORS Configuration

Tool Used: cors middleware

Cross-Origin Resource Sharing (CORS) was configured to restrict which client origins are allowed to access the API.

Configuration Details

Only trusted origins allowed

Limited HTTP methods (GET, POST)

Wildcard origins explicitly avoided

Security Benefit

Prevents unauthorized websites from accessing the API

Protects against data theft via malicious frontends

Enforces controlled API consumption

2.3 API Authentication

Method Used: API Key–based Authentication

Sensitive API endpoints were protected using an API key mechanism. Requests without a valid API key are denied access.

Implementation Details

API key sent via custom request header

Middleware validates API key before allowing access

Unauthorized requests receive HTTP 401 response

Security Benefit

Ensures only authorized clients can access protected endpoints

Prevents unauthenticated API usage

Provides a simple but effective access control mechanism

3. Security Headers & Content Security Policy

To protect against client-side attacks, multiple HTTP security headers were implemented using Helmet.

3.1 Security Headers

Tool Used: helmet

Helmet was added as global middleware to automatically apply recommended security headers.

Headers enforced include:

X-Content-Type-Options

X-Frame-Options

Referrer-Policy

Other browser hardening headers

3.2 Content Security Policy (CSP)

A strict Content Security Policy was configured to control which resources the browser is allowed to load.

CSP Rules Implemented

Only self-hosted scripts allowed

Inline and external untrusted scripts blocked

Object embedding disabled

Only trusted sources allowed for images and connections

Security Benefit

Prevents cross-site scripting (XSS) attacks

Blocks malicious script injection

Reduces impact of compromised frontend code

3.3 HTTP Strict Transport Security (HSTS)

HSTS headers were configured to enforce HTTPS communication.

Configuration Details

Max-age set to one year

Subdomains included

Preload enabled

Important Note

HSTS is ignored by browsers on HTTP and localhost environments. It becomes effective when the application is deployed over HTTPS in a production environment.

Security Benefit

Forces encrypted HTTPS communication

Prevents SSL stripping and protocol downgrade attacks

Verification & Testing

The following verification steps were performed:

Fail2Ban jail status verified using fail2ban-client

API rate limiting tested by repeated requests

Unauthorized API access tested without API key

Authorized access verified with valid API key

Security headers confirmed via browser developer tools
