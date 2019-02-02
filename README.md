# contacts-sync
This script will update your Google contacts with the data in your spreadsheet.

# How to use this script
This script was writin in Google apps script which is a subset of JavaScript.
To use it you must open a new script by:
1. open relevent sheet.
2. go to tools > Script editor
3. copy and paste the code from here.
4. copy sheet ID from it's URL and place in the code where indicated.

# Importent!
Currently the order and placment of the data matters!
* Row A - first name
* Row B - last name
* Row C - Address
* Row D - Telephone number

# Optional
You can add a trigger to run the script on a schedual (e.g. every day).

# Note about authorazation
Like all scripts accessing Google APIs you need to authorize it to run. You do so by manually running it the first time.

# Planned improvements
* Delete contact when removed from spreadsheet.
