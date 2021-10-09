Frappe ERPNExt automatic language translator.
This custom app add a language translator to the top navbar of Frappe Desk/Web portal.

## How to setup
- bench get-app --branch=master https://github.com/mymi14s/language_translator
- bench --site sitename install-app language_translator
- bench migrate
- bench clear-cache && bench clear-website-cache
- bench restart

## Screenshot
![First screen](https://github.com/mymi14s/language_translator/blob/master/src/1.png "First screen")
![Select language](https://github.com/mymi14s/language_translator/blob/master/src/2.png "Select language")
![Language changed](https://github.com/mymi14s/language_translator/blob/master/src/3.png "Language changed")
