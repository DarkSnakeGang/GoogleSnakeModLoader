# Why did we switch to userscripts? What happened to the bookmarks?

The bookmark method no longer works since the code of snake changed in a way that happens to prevent this.
We don't think that google did this because they wanted to make modding more difficult, but rather that this was an unintended side effect.

The short explanation for why bookmarks don't work is that we can't change the snake code whilst it is still running any more.
A userscript can get around this by running as soon as the website gets visited. It can then make alterations to the google snake code before it has had a chance to run.

The more complex explanation is as follows: 
The change that triggered this was that google moved all the snake code inside an immediately invoked function expression (IIFE). So the google snake code now looks like the below (javascript)

```js
this._s=this._s||{};
(function(_){
  var window=this;
  //All of google snake code goes here
})(this._s);
```

Previously we could override functions within the google snake code to make changes (e.g. overriding the function that sets the map size, to enable different map sizes).
This is now impossible to do from a bookmark.

By using userscripts we can now intercept the google snake script right at the start, make changes to this script and then run the code from this script.