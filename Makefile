start:
	hugo server

compile-sass: check-dirs
	sass sass/style.scss > static/css/style.css

watch-sass: check-dirs
	sass --watch sass/style.scss:static/css/style.css

clean:
	rm -rf public

build: clean compile-sass
	hugo

deploy: build
	surge --project public;

check-dirs:
	mkdir -p static/css

.PHONY: start clean compile-sass watch-sass build
