start:
	hugo server

compile-sass:
	sass sass/style.scss > static/css/style.css

watch-sass:
	sass --watch sass/style.scss:static/css/style.css

clean:
	rm -rf public

build: clean compile-sass
	hugo

deploy: build
	cd public;\
	surge;

.PHONY: start clean compile-sass watch-sass build