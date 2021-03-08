> :warning: **Note**
> This project is in status: _**work in progress**_

> :warning: **Note**
> This documentation is in the making

<h1 align="center">
  <img src="https://raw.githubusercontent.com/oezkancodes/vue-cookiefy/796228b0e2a4ff0090e307ee92f1c4ab9226e2ab/static/logo.svg" alt="cookiefy">
  <p>Cookiefy for Vue</p>
</h1>
<p align="center">
  A minimal <b>Cookie Managenent UI</b> for Vue.js
</p>

<h2>Navigation</h2>

- [Features](#features)
- [Vuex](#vuex)
- [Installation](#installation)
- [Usage](#usage)
  - [Vue.js](#vuejs)
  - [Nuxt.js](#nuxtjs)
- [Props](#props)
- [Custom fields](#custom-fields)
- [Events](#events)
  - [Response Structure](#response-structure)
- [Custom Language](#custom-language)


## Features

* Cookie banner overlay UI
* Information overlay UI
* Customizable color
* Custumizable fields for cookies & privacy
* GDPR compliant:
  * Opt-in
  * Easy to deny
* You let Cookiefy handle the UI - you just handle the results

## Vuex

Cookiefy uses Vuex Store to handle state. **Vuex has to be installed** or Cookiefy wont work. For Vue.js you can use the Vue CLI to add Vuex with one command:

``` bash
vue add vuex
```

## Installation

``` bash
npm install vue-cookiefy
```

## Usage

### Vue.js

First go to your ``main.js`` file and register Cookiefy

``` javascript
// main.js
import Vue from 'vue'
import Cookiefy from 'vue-cookiefy'

Vue.use(Cookiefy)
```

Then you can add Cookiefy in any of your components

``` javascript
// YourComponent.vue
<template>
  <div>
    <Cookiefy 
      v-model="cookiefy" 
    />
  </div>
</template>
<script>

export default {
  name: 'YourComponent',
  
  data() {
    return {
      cookiefy: true,
    }
  },
}
</script>
```

### Nuxt.js

For Nuxt.js we will create a simple plugin to inject the Cookiefy component into your app.
First create a file named ``cookiefy.js`` in your ``@/plugins`` folder.

``` javascript
// @/plugins/cookiefy.js
import Vue from 'vue'
import Cookiefy from 'vue-cookiefy'

Vue.use(Cookiefy)
```

Then register the plugin in your Nuxt.js configuration file ``nuxt.config.js``

``` javascript
// nuxt.config.js 
export default {
  // ...
  plugins: [
    '@/plugins/cookiefy.js'
  ],
  // ...
}
```

Now you can use ``<Cookiefy />`` in any of your components.

## Props
| Prop            | Type       | Default     | Description                                                  |
| :-------------- | :--------- | :---------- | :----------------------------------------------------------- |
| ``cookieField`` | ``Array``  | ``[]``      | Containing the fields to select showed in the cookie overlay |
| ``privacyData`` | ``Array``  | ``[]``      | Contains the title and fields showed in the privacy overlay  |
| ``innerText``   | ``String`` | Placeholder | Set the user information about the cookie usage on your app  |
| ``color``       | ``String`` | ``#ff3d17`` | Primary color of the elements                                |
| ``lang``        | ``Object`` | English     | Language of elements - [see here](#custom-language)          |

## Custom fields

You can easily define your cookies and privacy text as fields using the ``cookieFields`` & ``privacyFields`` props.

``` javascript
// YourComponent.vue
<template>
  <div>
    <Cookiefy 
      v-model="cookiefy"
      :cookieFields="cookieFields"
      :privacyFields="privacyFields"
    />
  </div>
</template>
<script>
  export default {
    name: 'YourComponent',
    
    data() {
      return {
        cookiefy: true,
        cookieFields: [
          {
            text: 'Essential Cookies',
            checked: true,
            readonly: true,
          },
          {
            text: 'Google Analytics',
            checked: true,
            readonly: true,
          },
        ],
        privacyFields: [
          {
            title: 'Essential Cookies',
            text:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id sed quas corporis...',
          },
          {
            title: 'Google Analytics',
            text:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id sed quas corporis...',
          },
        ],
      }
    },
  }
</script>
```

## Events
| Event       | Description           | Return                                                                           |
| :---------- | :-------------------- | :------------------------------------------------------------------------------- |
| ``@accept`` | On user clicks accept | Returns an ``Array`` which contains all fields and results of the user selection |

``` javascript
<template>
  <div>
    <Cookiefy 
      // ...
      @accept="onAccept" 
    />
  </div>
</template>

<script>
  export default {
    name: 'YourComponent',

    // ...
    
    methods: {
      // this method is called when the user accepts 
      onAccept(fields) {
        // handle response here
      }
    },
  }
</script>
```

### Response Structure
The ``@accept`` event returns all defined fields as an ``Array``.

``` javascript
// The returned Array of fields is structured like this
[
  {
    text: 'Essential Cookies', 
    checked: true,
  },
  {
    text: 'Google Analytics', 
    checked: true
  },
  // ...
]
```

Now after you got the user response you can set your Cookies safely.

## Custom Language

You can easily change the language/text of the elements by using the ``lang`` prop.

``` javascript
<template>
  <div>
    <Cookiefy 
      // ...
      :lang="lang"
    />
  </div>
</template>

<script>
  export default {
    name: 'YourComponent',
    
    data() {
      return {
        // ...
        lang: {
          acceptAll: 'Alle akzeptieren',
          asSelected: 'Wie Auswahl',
          info: 'Mehr',
          close: 'Schließen',
          infoTitle: 'Informationen',
        },
      },
    }
</script>
```

The prop ``lang`` has following changable fields:
| Field          | Type   | Description  | Default       |
| :------------- | :----- | :----------- | :------------ |
| ``acceptAll``  | String | Button text  | "Accept all"  |
| ``asSelected`` | String | Button text  | "As selected" |
| ``info``       | String | Button text  | "More"        |
| ``close``      | String | Button text  | "Close"       |
| ``infoTitle``  | String | Dialog title | "Information" |