# embroider-cannot-find-module-error

Reproduction of error while building an ember app with embroider: `Module not found: Error`

## Few pointers

* app name - embroider-cannot-find-module-error
* engine name - settings
* addon name - common-utilities
* [This](https://github.com/siva-sundar/embroider-cannot-find-module-error/blob/master/lib/settings/package.json#L13) is how we mention in-repo addon as dependency to in-repo engine.

**Error**
![Error](https://github.com/siva-sundar/embroider-cannot-find-module-error/blob/master/error.png?raw=true)


**Currently using**

```json
  "ember-cli": "~3.8.3",
  "@embroider/compat": "^0.36.0",
  "@embroider/core": "^0.36.0",
  "@embroider/webpack": "^0.36.0",
  "ember-engines": "^0.8.12"
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd embroider-cannot-find-module-error`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
