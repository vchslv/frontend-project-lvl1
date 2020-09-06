install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

brain-even:
	node games/brain-even.js

brain-calc:
	node games/brain-calc.js

brain-gcd:
	node games/brain-gcd.js

brain-progression:
	node games/brain-progression.js

brain-prime:
	node games/brain-prime.js
