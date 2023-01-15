# GSAP Learning

- **Tweens**
  A Tween is what does all the animation work (according to GSAP's definition).
  A tween is a sort of animation in the GSAP (GreenSock Animation Platform) that smoothly transitions between two values over a predetermined period of time. The position, rotation, scale, or opacity of an element, for instance, can be animated using tweens.
  We can use the following methods to create a tween to animate almost anything:

```javascript
 gsap.to()
 gsap.from()
 gsap.fromTo()
```
Generally every tween takes 2 parameters **`target`**, **`vars`**. Under the hood GSAP uses **`querySelectorAll()`** method to select a dom element, so we can target the element just as how we target elements with **`querySelectorAll()`** method. We just need to pass the selector within quotes ( double / single ) in the first parameter of tween method. The second parameter GSAP tween methods take is the **`vars`** object, it contains all the properties/values to animate a dom element such as **`x`**, **`y`**, **`top`**, **`bottom`**, **`duration`**, **`ease`**, **`delay`**, **`opacity`** or any **`transform`** property you want to use such as **`scale`**, **`translateX`** as **`x`**, **`translateY`** as **`y`** and many more. We also get some other advanced methods inside the vars object to make our animation smoothly. Along with the properties/values we discussed previously GSAP can animate almost anything as like **`backgroundColor`**, **`width`**, **`height`** etc.

### `One thing to remember is GSAP can animate any numeric property For best performance animate CSS Transform values and opacity. x, y, rotation, rotationX, rotationY, skewX and skewY, scaleX, scaleY, or just scale` 

# Example
```javascript
gsap.to("target",{
  x:"numerical value",
  y:"numerical value",
  delay:"numerical value",
  duration:"numerical value",
  scale:"numerical value",
  rotate/rotation:"degree",
  ease:"numerical value",

  
})

```
##### To change the default behaviors of GSAP we can use 
```javascript
gsap.defaults({duration:1})
// In this code example we have changed the default of gsap animation which is 0.5s/500ms by default
```