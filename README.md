# qlik-sense-nodejs-basic-sso
An example of using Node.JS to configure a simple SSO example for custom authentication with Qlik Sense

The example uses the Node.js and Expres to run a simple web server. For more information on the 'Express' module please refer to the Express documentation - http://expressjs.com/

### Pre-requisites:
- Node.js
- Qlik Sense Server

### Configuration:
- Qlik Sense Server
  1. Open the QMC (Qlik Management Console) and navigate to the Virtual 'Proxies' area.
  2. Create or Edit Virtual Proxy. Use the specified prefix value in step 5 below.
  3. Optionally, populate the 'Authentication module redirect URI' with - http://node_server:3000/login
    - Port 3000 is configured in the index.js file of the Node.js site and can be changed if desired.
  4. Navigate to the 'Certificates' area of the QMC.
  5. Export the certificate, giving it the name of the Node.js machine. By default this is saved in C:\ProgramData\Qlik\Sense\Repository\Exported Certificates. 
  7. Copy the certificate to the root of the Node.js project.
    - NOTE: Refer to the Qlik online help for more information on exporting certificates.
    - [Exporting Certificates](http://help.qlik.com/en-US/sense/November2017/Subsystems/ManagementConsole/Content/export-certificates.htm)
- Node.js
  1. Download or clone the git repository onto your machine. 
  2. Open a command/terminal window.
  3. Browse to the directory of the qlik-sense-nodejs-basic-sso.
  4. Install the necessary dependencies by executing the `npm install` command in this directory.
  5. Using a text editor, open the config.js file and update the following to reflect your environment -
    - SENSE_SERVER - This should be the host name or IP of your Qlik Sense Server
    - SENSE_PORT - The port being used to run Qlik Sense (typically 443).
    - SENSE_PROXY - The prefix of the virtual proxy to use.
    - USER_DIRECTORY - The User Directory to use when creating a ticker for the users logging in.

To run the solution, execute the `npm start` command in the command prompt window. 
For additional information, open a web browser and go to http://localhost:3000

To test the login you can go to http://localhost:3000/login. If the login was successfully, you should be redirected to the Qlik Sense Hub, logged in as the specified user.

Alternatively, if you completed step 3 in the Qlik Sense Server configuration above, you can go directly to the Hub, ensureing that you go via the approproate virtual proxy. If you're not logged in, you will be redirected to the login form.

