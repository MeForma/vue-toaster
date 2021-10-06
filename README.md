# Vue Toaster

Vue.js toast notification plugin for vue 3

[DEMO](https://meforma.github.io/vue-toaster/)

## Installation

```bash
# yarn
yarn add @meforma/vue-toaster

# npm
npm install @meforma/vue-toaster
```

## Import

You can install Toaster so it's usable globally:

```js
// In you main.js
// ... considering that your app creation is here
import Toaster from "@meforma/vue-toaster";

createApp(App).use(Toaster).mount("#app");
```

You can also import Toaster locally:

```js
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ /* options */ });

toaster.show(`Hey! I'm here`);
```

## Usage

```js
// this.$toast.show(message, {/* options */});
this.$toast.show(`Hey! I'm here`);
this.$toast.success(`Hey! I'm here`);
this.$toast.error(`Hey! I'm here`);
this.$toast.warning(`Hey! I'm here`);
this.$toast.info(`Hey! I'm here`);

// Close all opened toast after 3000ms
setTimeout(this.$toast.clear, 3000);
```

## Available options

The API methods accepts these options:

| Attribute     |      Type       |    Default     | Description                                                                   |
| :------------ | :-------------: | :------------: | :---------------------------------------------------------------------------- |
| message       |     String      |       --       | Message text/html (required)                                                  |
| type          |     String      |   `default`    | One of `success`, `info`, `warning`, `error`, `default`                       |
| position      |     String      | `bottom-right` | One of `top`, `bottom`, `top-right`, `bottom-right`,`top-left`, `bottom-left` |
| duration      | Number or false |     `4000`     | Visibility duration in milliseconds or `false` that disables duration         |
| dismissible   |     Boolean     |     `true`     | Allow user close by clicking                                                  |
| onClick       |    Function     |       --       | Do something when user clicks                                                 |
| onClose       |    Function     |       --       | Do something after toast gets dismissed                                       |
| queue         |     Boolean     |    `false`     | Wait for existing to close before showing new                                 |
| maxToasts     | Number or false |    `false`     | Defines the max of toasts showed in simultaneous                              |
| pauseOnHover  |     Boolean     |     `true`     | Pause the timer when mouse on over a toast                                    |
| useDefaultCss |     Boolean     |     `true`     | User default css styles                                                       |

## API methods

### `show(message, ?options)`

This is generic method, you can use this method to make any kind of toast.

```js
// Can accept a message as string and apply rest of options from defaults
this.$toast.show("Howdy!");

// Can accept an Object of options.
// If yout don't pass options, the default toast will be showed
this.$toast.show("Something went wrong!", {
  type: "error",
  // all of other options may go here
});
```

### `success(message,?options)`

There are some proxy methods to make it more readable. The same rule for `error`, `info` and `warning` methods

```js
this.$toast.success("Profile saved.", {
  // optional options Object
});
```

## Global options

You can set options for all the instances during plugin initialization

```js
app.use(Toaster, {
  // One of the options
  position: "top",
});
```

Further you can override option when creating new instances

```js
this.$toast.success("Order placed.", {
  // override the global option
  position: "bottom",
});
```

## How to execute example

Clone the project and run:

```
cd example; yarn install; yarn serve
```

## License

[MIT](LICENSE.txt) License
