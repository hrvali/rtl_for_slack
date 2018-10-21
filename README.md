# rtl_for_slack
Add RTL support to slack desktop
It is only tested For version 3.3.3 on windows 10.


On Windows, Find your Slack's application directory: %homepath%\AppData\Local\slack\

Open up the most recent version (e.g. app-3.3.3) then open resources\app.asar.unpacked\src\static\ssb-interop.js
(The address is something like: C:\Users\yourName\AppData\Local\slack\app-3.3.3\resources\app.asar.unpacked\src\static\ssb-interop.js)

Copy all codes from "rtl.js" from this repository and add them to the very bottom of that file(ssb-interop.js), then restart slack.
