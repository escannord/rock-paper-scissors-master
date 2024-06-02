# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![](images\screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- [Jquery](https://jquery.com/) - JS library

### What I learned

I learned how to use events to manipulate the DOM with JavaScript, but later switched to jQuery for speed. I also learned how to create prototypes in JavaScript, although I no longer needed to use them thanks to jQuery.

you just have to do:
```js
HTMLElement.prototype.close=function(){
  return this.style.display=='none';
}
```

And call the close method
```js
  document.getElementById('ID_ELEMENT').close();
```


### Continued development

These notions learned on prototypes will help me to create my own methods to easily manipulate the DOM.
I want to find a way to no longer depend on any library.



### Useful resources

- [W3schools](https://www.w3schools.com/) - she helped me find a way to have round borders with a little gradient.
- [developer Mozilla](https://developer.mozilla.org/) - here is my web toolbox.


## Author

- Website - [Arnold Nguechoung](https://github.com/escannord)
- Frontend Mentor - [@escannord](https://www.frontendmentor.io/profile/escannord)
- Twitter - [@ANguechoung](https://x.com/ANguechoung)



## Acknowledgments

I thank front end mentor
