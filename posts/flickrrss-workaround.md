---
title: 'FlickrRSS workaround'
date: 2008-10-27
draft: false
tags: ['flickr', 'Net', 'wordpress']
---

Since I upgraded my [wordpress](http://wordpress.org/) install, the [FlickrRSS plugin](http://eightface.com/wordpress/flickrrss/) I used to show thumbnails of my photos at the top of my blog has stopped working. Nothing serious, just a bit annoying. Over the weekend I took the time to finally get the pics back. The Plugin still didn't work, so I decided to throw out both the plugin and the associated PHP code in the main template. Instead I took the one [flickr](http://flickr.com) provides for badges, removed all the CSS that comes with it and kept only the single line of JavaScript, within which I changed the amount of shown thumbnails from 10 to 9. Then I wrapped a <div> around it to assign the former used style sheet again et voilà. It looks exactly the way it did before and beautifies my template again. Isn't that sweet? And a hint to those who were wondering (or coming from a feedreader): it's on the [startpage of the blog](), not on those pages that show one article only. :)