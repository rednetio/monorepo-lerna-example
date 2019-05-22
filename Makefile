WEBPACK= ../../node_modules/.bin/webpack-cli

build-app:
	@cd ./apps/$(workspace) && ${WEBPACK} --config ./config/webpack.config.js

build-lib:
	@cd ./libs/$(workspace) && ${WEBPACK} --config ./config/webpack.config.js
