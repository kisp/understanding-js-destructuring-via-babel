lint-and-run:
	npm run lint:fix && node index.js

run-babel:
	npx babel index.js >babel-out.js
