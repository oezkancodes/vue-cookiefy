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
- [Props](#props)
- [Events](#events)

## Features
* Cookie banner overlay
* Privacy overlay
* Custom color
* Custumizable fields for cookies 

## Installation
* Cookie banner overlay
* Privacy overlay
* Custom color
* Custumizable fields for cookies 

## Props

| Prop             | Type       | Description                            | Default     |
| :--------------- | :--------- | :------------------------------------- | :---------- |
| ``cookieField``  | ``Array``  | Fields to be                           | ``[]``      |
| ``privacyField`` | ``Array``  | Like this                              | ``[]``      |
| ``color``        | ``String`` | Custom color applying for all elements | ``#ff3d17`` |

## Events
| Event      | Description                  | Return                                                                       |
| :--------- | :--------------------------- | :--------------------------------------------------------------------------- |
| ``accept`` | On user clicks accept Button | Returns an Array which contains all fields and results of the user selection |