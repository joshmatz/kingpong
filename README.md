# What is this?
King Pong is an annual ping pong tournament for agencies in Austin, Texas. Different agencies design the site every year and in 2012 I had the pleasure of developing [Springbox's](http://springbox.com) design (by [Brett Johnson](https://twitter.com/byBrettJohnson)).

## Demo
You might be able to view it at [staging.springbox.com/kingpong](http://staging.springbox.com/kingpong). If that's not loading, it's up for your viewing pleasure, without web fonts, at [joshmatz.github.io/kingpong](http://joshmatz.github.io/kingpong)

## The design
Brett shot a video of over 400 ping pong balls dropping onto a ping pong table and we used it as a background on the site. The user's scroll position acts as a scrubber for which frame they're viewing in the movie. As they scroll down, the movie movies forward.

With mobile browsers being where they were at the time, we also created a version that would be loaded without the fanciness if we didn't detect the features we wanted. The mobile version is fully responsive and looks great even on desktops.

## The technology
The site features some interesting development details:

- Responsive (mostly) with Modernizr feature detection to load a fallback for browsers that we couldn't support.
- Typekit for webfonts (which won't work here, sadly). 
- Canvas to render the movie images.
  - For enhanced performance, we made spritesheets and progressively load higher resolution sprites, from 40px wide frames up to 720px.
- Codekit was used to compile JS and CSS. (I've since moved on to other build tools like Gulp and Grunt.)
