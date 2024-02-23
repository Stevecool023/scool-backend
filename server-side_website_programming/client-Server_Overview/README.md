# Client-Server Overview
Details of what happens when a server receives a dynamc request from a bowser.

## Web servers and HTTP.
Web browsers communicate with web servers using the **H**yper**T**ext **T**ransfer **P**rotocal(**HTTP**).<br />
When clicking a link on a web page, submitting a form, running a search, the browser sends an *HTTP* Request to the server while the server responds via a *HTTP* Response.

### Static sites.
The server for a static site will only ever need to process GET requests, because the server doesn't store any modifiable data.
<br />It also doesn't change its responses based on HTTP Request data(e.g. URL parameters or cookies).

### Dynamic sites.
Ecommerce site example:
* the server would store product "data" in a database rather than individual HTML files.
When receiving an HTTP *GET* Request for a product, the server determines the product ID, fetches the data from the database,
and then constructs the HTML page for the response by inserting the data into an HTML page for the response by inserting the data into an HTML template.
<br />Using HTML makes it very easy to change the HTML structure, because this only needs to be done in one place, in a single template, and not across potentially thousands of static pages.

