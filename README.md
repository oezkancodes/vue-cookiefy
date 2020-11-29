> :warning: **Note**
> This project is in status: _**work in progress**_

> :warning: **Note**
> This documentation is in the making

<h1 align="center" >
  <div>
    <img src="https://raw.githubusercontent.com/oezkancodes/vue-cookiefy/796228b0e2a4ff0090e307ee92f1c4ab9226e2ab/static/logo.svg" alt="cookiefy">
  </div>
  Cookiefy for Vue
</h1>
<p align="center">
  A minimal <b>Cookie Manager</b> for Vue.js
</p>

---

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Response Structure](#response-structure)

## Features
* Cookie banner overlay
* Privacy overlay
* Custom color
* Custumizable fields for cookies 

## Installation
``` bash
npm install vue-cookiefy
```

## Usage
Go to your ``main.js`` file and use Cookiefy
``` javascript
import Vue from 'vue'
import Cookiefy from 'vue-cookiefy'

Vue.use(Cookiefy)
```
Then you can add Cookiefy in any of your components
``` javascript
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

## Props
| Props            | Type       | Default     | Description                                                          |
| :--------------- | :--------- | :---------- | :------------------------------------------------------------------- |
| ``cookieField``  | ``Array``  | ``[]``      | Array of Objects containing the fields showed in the cookie overlay  |
| ``privacyField`` | ``Array``  | ``[]``      | Array of Objects containing the fields showed in the privacy overlay |
| ``color``        | ``String`` | ``#ff3d17`` | Color of the Elements                                                |

``` javascript
<template>
  <div>
    <Cookiefy 
      v-model="cookiefy"
      :cookieFields="cookieFields"
      :privacyFields="privacyFields"
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
      cookieFields: [
        {
          text: 'Essential Cookies',
          checked: true,
          readonly: true,
        },
      ],
      privacyFields: [
        {
          title: 'Essential Cookie Usage',
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
      onAccept(fields) {
        // handle user response here
      }
    },
  },
}
</script>
```

## Response Structure
``` javascript
[
  {
    text: 'Essential Cookies', 
    checked: true,
  },
  {
    text: 'GA', 
    checked: true
  }
]
```

Now after the user response you can set your essential and Google Analytics cookies savely