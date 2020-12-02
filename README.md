> :warning: **Note**
> This project is in status: _**work in progress**_

> :warning: **Note**
> This documentation is in the making

<h1 style="text-align: center;">
  <div>
    <img src="https://raw.githubusercontent.com/oezkancodes/vue-cookiefy/796228b0e2a4ff0090e307ee92f1c4ab9226e2ab/static/logo.svg" alt="cookiefy">
  </div>
  Cookiefy for Vue
</h1>
<p style="text-align: center;">
  A minimal <b>Cookie Managenent UI</b> for Vue.js
</p>

<br />

<h2 style="text-align: center;">Preview</h2>

<p style="text-align: center;">
  <b>Cookie Overlay</b>
</p>

![cookies](https://raw.githubusercontent.com/oezkancodes/vue-cookiefy/8dda0344a8ac91791d740f5e85f1748b6211cbce/static/base_component.png)

<p style="text-align: center;">
  <b>Privacy Overlay</b>
</p>

![privacy](https://raw.githubusercontent.com/oezkancodes/vue-cookiefy/8dda0344a8ac91791d740f5e85f1748b6211cbce/static/privacy_component.png)


## Navigation

- [Navigation](#navigation)
- [Features](#features)
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
* Privacy overlay UI
* Customizable element color
* Custumizable fields for cookies & privacy

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
First create a file named ``cookiefy.js`` in your ``./plugins`` folder.

``` javascript
// ./plugins/cookiefy.js
import Vue from 'vue'
import Cookiefy from 'vue-cookiefy'

Vue.use(Cookiefy)
```

Then register the plugin in your Nuxt.js configuration file ``nuxt.config.js``

``` javascript
// ./nuxt.config.js 
export default {
  // ...
  plugins: [
    '@/plugins/cookiefy.js'
  ],
  // ...
}
```

Now you can use the ``<Cookiefy />`` component in any of your components

## Props
| Prop             | Type       | Default     | Description                                                                  |
| :--------------- | :--------- | :---------- | :--------------------------------------------------------------------------- |
| ``cookieField``  | ``Array``  | ``[]``      | ``Array`` of ``Objects`` containing the fields showed in the cookie overlay  |
| ``privacyField`` | ``Array``  | ``[]``      | ``Array`` of ``Objects`` containing the fields showed in the privacy overlay |
| ``innerText``    | ``String`` | Placeholder | Set the user information about the cookie usage on your app                  |
| ``color``        | ``String`` | ``#ff3d17`` | Color of the Elements                                                        |
| ``lang``         | ``Object`` | English     | Language of buttons and privacy overlay title                                |

## Custom fields

You can easily define your cookies and privacy text as fields using the ``cookieFields`` & ``privacyFields`` props.

``` javascript
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
        ],
        privacyFields: [
          {
            title: 'Essential Cookies',
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
| Event       | Description           | Return                                                                       |
| :---------- | :-------------------- | :--------------------------------------------------------------------------- |
| ``@accept`` | On user clicks accept | Returns an Array which contains all fields and results of the user selection |

``` javascript
<template>
  <div>
    <Cookiefy 
      v-model="cookiefy"
      // ...
      @accept="onAccept" 
    />
  </div>
</template>

<script>
  export default {
    name: 'YourComponent',
    
    data() {
      return {
        cookiefy: true,
        // ...
      },

      methods: {
        // this method is called when the user accepts 
        onAccept(fields) {
          // handle user response here
        }
      },
    },
  }
</script>
```

## Response Structure
The ``@accept`` event returns all defined cookie fields as an ``Array``.

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
  }
]
```

Now after you got the user response you can set your essential and Google Analytics cookies savely

## Custom Language

You can easily change the language/text of the elements by using the ``lang`` prop.

``` javascript
<template>
  <div>
    <Cookiefy 
      v-model="cookiefy"
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
        cookiefy: true,
        // ...
        lang: {
          accept: 'Akzeptieren',
          privacy: 'Datenschutz',
          close: 'Schließen',
        },
      },
    }
</script>
```

The prop ``lang`` has following changable fields:
| Field       | Type   |
| :---------- | :----- |
| ``accept``  | String |
| ``privacy`` | String |
| ``close``   | String |