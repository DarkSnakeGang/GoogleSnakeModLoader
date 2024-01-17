# xhr sync issue

If you're reading this, you have likely seen a very rare message about an issue with loading the modloader. Lucky you! If you just want the solution - try disabling extensions one-by-one and refreshing the page until it start to work again. 
If none of this works, please tell us about it by raising an issue [here](https://github.com/DarkSnakeGang/GoogleSnakeModLoader/issues) or joining the [discord](https://discord.gg/NA6vHg62An). Joining the discord is preferable.

The error happens because a piece of code (XMLHttpRequest) is behaving in one way (asynchronously) instead of another way (synchronously).
This should be very rare, however, it could happen if extensions are interfering with the webpage. We've seen this before with a particular antivirus extension \*cough\* McAfee WebAdvisor \*cough\* that decided one day to break sync xhr for the modloader and likely hundreds of thousands of different websites.

It's also possible (although highly unlikely) that browser specific quirks could cause this behaviour, so if all else fails, try changing browsers.
