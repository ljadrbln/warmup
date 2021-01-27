Please work in sequence.

1. Write a very simple webcomponent (.js) and write a very simple html page that has the native web webcomponent, no 3rd party libs or any outside .js or 'packing' - just plain html and .js.
You can use any http server (ex: python -m SimpleHTTPServer)
Maximize use of 'module import' and '.mjs'.
Front end code should be in a different folder and run under a different port (and a different HTTP server)

2. Use http://listjs.com  to show a list of rows, from some hard coded array.

3. Write an express node js app w/ a REST route for a POST to returns something like this::
[{a:1},
{b:2}]

REST is the node code, on a different port.

4. From the html page, on a button click - fetch() the REST call and in browser do a console.log. (no need to connect to listjs)

5. In the node app, add a package 'sqlite3'. SQLite is built into linux so no need to install - but if you have other OS that is not linux, than ... figure it out.
Create a table - 'table1' with some columns.

6. Create a file 'model1.ts' in node that inserts into sqlite. (install typescript -g)
Use a promise in some way, maybe a timeout that resolves/does the insert after a timeout.
You should memorize how to write a 'new Promise' from memory without 'google' or looking at examples.

7. Write a very very simple test w/ http://www.npmjs.com/package/tape
that inserts into a DB.

8.  Write another webcomponent - a D3 very simple line chart as .mjs.
Get a button to display component one from #1 above and another button to *swap* this second comp.

9. Optional: Do a hello world Parse(like Mongo or FireStore) with free account at https://www.back4app.com/parse

10. Optional: Add some flexbox CSS (via some CSS framework lib such as Bootstrap, but you can use any CSS framework) to the page in step 1, make page a bit nicer.


Send me link to the github of this warm up project, the sooner the better.



