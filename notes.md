# GSAP Learning

- **Tweens**
  A Tween is what does all the animation work (according to GSAP's definition).
  A tween is a sort of animation in the GSAP (GreenSock Animation Platform) that smoothly transitions between two values over a predetermined period of time. The position, rotation, scale, or opacity of an element, for instance, can be animated using tweens.
  We can use the following methods to create a tween to animate almost anything:

```javascript
gsap.to();
gsap.from();
gsap.fromTo();
```

Generally every tween takes 3 parameters **`target`**, **`vars`** and **`position`**. Under the hood GSAP uses **`querySelectorAll()`** method to select a dom element, so we can target the element just as how we target elements with **`querySelectorAll()`** method. We just need to pass the selector within quotes ( double / single ) in the first parameter of tween method. The second parameter GSAP tween methods take is the **`vars`** object, it contains all the properties/values to animate a dom element such as **`x`**, **`y`**, **`top`**, **`bottom`**, **`duration`**, **`ease`**, **`delay`**, **`opacity`** or any **`transform`** property you want to use such as **`scale`**, **`translateX`** as **`x`**, **`translateY`** as **`y`** and many more. We also get some other advanced methods inside the vars object to make our animation smoothly. Along with the properties/values we discussed previously GSAP can animate almost anything as like **`backgroundColor`**, **`width`**, **`height`** etc. Lastly the position parameter is used to place tween's literally anywhere in the timeline.

#### `One thing to remember is GSAP can animate any numeric property For best performance animate CSS Transform values and opacity. x, y, rotation, rotationX, rotationY, skewX and skewY, scaleX, scaleY, or just scale`

# Example

```javascript
gsap.to("target",{
  x:"numerical value",
  y:"numerical value",
  xPercent:"numerical value / suggested (0 - 100)" // moves the element according to its width
  yPercent:"numerical value / suggested (0 - 100)" // moves the element according to its height
  delay:"numerical value",
  duration:"numerical value",
  scale:"numerical value",
  rotate/rotation:"degree",
  delay:"numerical value",
  repeat:"numerical value"/ Infinity / "-1",
  yoyo:true/false,
  repeatDelay:"numerical value" // how much time it should take between repeat
  ease:"eases provided by gsap",
  stagger:"numerical value" 
  or 
  stagger:{
     each:"num",
     amount:"num",
     from:"start" / "end" / "center"/ "edges" / "random" / "any numerical value",
     grid:["rows count","columns count"]
     }


})

```

##### To change the default behaviors of GSAP we can use

```javascript
gsap.defaults({ duration: 1 });
// In this code example we have changed the default of gsap animation which is 0.5s/500ms by default
```
### position parameters 

```javascript
"any number" // the tween will start to play at a absolute time
"+=1" // represents that the following tween will be played with a delay of 1 second after the previous tween has been played, no matter how long the previous tween takes
"-=1" // represents that the following tween will be played with a delay of -1 second after the previous tween has been played, no matter how long the previous tween takes
"<" // represents that the following tween will start to play immediately when the previous tween starts playing. it means that the following tween's previous tween and the following tween will start to play at the same time
"<1" // represents that the following tween will start to play after 1 second immediately when the previous tween starts`
```