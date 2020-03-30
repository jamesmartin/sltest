# sltest

To test the static site export locally:

```
npm install -g serve

npm run build
npm run export
cd out
serve -p 3000 # check that it's working
```
