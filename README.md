# Backend Course

### URL
**Uniform Resource Locator**: A web address that specifies the location of a resource on the internet
![URL Structure](README_FILES/url-parts-copy-(1).webp)

**Resource:** Any reacheable item located by the ***URL***, it can be an **image**, a **web page**, an **audio** file... etc etc etc

**Request:** Message sent by a client (web browser) to a server, REQUESTING a specific resource(s)

**Response:** Message sent by a server to a client, RESPONDING to Request sent by the same client

**Headers:** Extra information sent by both Requests and Responses

Request Headers Example

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```
Response Headers Example
```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
ETag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: my-key=my value; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```


### HTTP Verbs / Methods
```md
GET         - Get (retrieve) a resource
POST        - Create a resource
PUT         - Replace a resource (must exist)
PATCH       - Partially modify a resource
DELETE      - Removes a resource
```

Examples
```http
GET         api/cookies # Fetches all cookies
GET         api/cookies/1 # Fetches a cookie with id=1
POST        api/cookies/ # Creates a cookie (requires a body)
PATCH       api/cookies/1 # Modifies a cookie with id=1 and requires a body
PATCH       api/cookies/1 # Replaces a cookie with id=1 and requires a body
DELETE      api/cookies/1 # Deletes a cookie with id=1
```
