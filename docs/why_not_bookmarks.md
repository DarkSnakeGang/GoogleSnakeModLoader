# Why did we switch to user scripts? What happened to the bookmarks?

The bookmark method no longer works since the code of Snake changed in a way that happens to prevent this.
We don't think that Google did this because they wanted to make modding more difficult, but instead, it was an unintended side effect.

The short explanation for why bookmarks don't work is that we can't change the snake code while it is running anymore.
A user script can get around this by running once the website is visited. It can then alter the google snake code before it has had a chance to run.

The more complex explanation is as follows: 
The change that triggered this was that Google moved all the snake code inside an immediately invoked function expression (IIFE). So the Google snake code now looks like the below (javascript)

```js
this._s=this._s||{};
(function(_){
  var window=this;
  //All of the google snake code goes here
})(this._s);
```

Previously we could override functions within the Google snake code to make changes (e.g. overriding the part that sets the map size to enable different map sizes).
This is now impossible to do from a bookmark.

Using user scripts, we can now intercept the google snake script right at the start, make changes to this script and then run the code from this script.
