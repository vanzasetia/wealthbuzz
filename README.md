# WealthBuzz | Fictional Business Advisory

<p align="left">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/vanzasetia/wealthbuzz?style=for-the-badge&logo=github">
  <a href="https://twitter.com/vanzasetia" target="_blank"><img src="https://img.shields.io/twitter/follow/vanzasetia?logo=twitter&style=for-the-badge" alt="Twitter followers." /></a>
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vanzasetia/wealthbuzz?style=for-the-badge&logo=git">
  <img alt="Netlify" src="https://img.shields.io/netlify/4405622a-7b0f-4475-9214-b18b3074b4f5?style=for-the-badge&logo=netlify">
</p>
<p>
  <a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>

## Feedback and Live Review
* [Live Review](https://wealthbuzz.netlify.app/)
* [Give Feedback on Twitter](https://twitter.com/vanzasetia/status/1422524309738713101?s=19)

## Table of contents
- [About this website](#about-this-website)
- [Story](#the-story)
- [What I Learned](#what-i-learned)
- [Technology that I used](#built-with)
- [Useful Resources](#useful-resources)

## About this website
It's a website of a fictional business advisory company called WealthBuzz. ehis website has 4 pages (*home*, *team*, *contact*, and *terms and conditions* page). It's also responsive.

## The Story
I have to design and code this website from scratch on my Android phone. In my opinion, this is **insane**. **It's completely from scratch!**

The first thing that I did was finding a design inspiration from the internet. I took some designs from multiple website templates.

After that I started to pick up the part that I liked. For example, I took the testimonial part from the first design I found. I kept doing that until everything was done. I drew the design on my book using a pen.

Then, I realized that I need a color scheme for my website. Since, I have no idea at all about design, I decided to use black and white color as the color scheme of my website.

Next, I searched and downloaded the assets, all by myself, to be honest, it's hard. Like for example, I need to find a *consistent* image for team members. I also need a logo. I decided to use `W` letter as my logo and the use HTML for the **WealthBuzz** word. I also have optimized all the images, so the website can load fast.

At this point, I started thinking to add the text content. I could just use a bunch of `lorem ipsum`, but I decided to *copy paste* the content from multiple business advisory website. I don't know that this is allowed or not. Please tell me if this is wrong and why? If not, then **good!**

After some planning, I decided to code this website. It's not a smooth journey, since I found there were a lot of mistakes, like for instance the first testimonial from John Doe was too short, so I need to add more content.

So to make the story shorter, I finally be able to finish this website. Not just responsive, but I also did some basic accessibility, like using `aria-label` for links that only contained `img`.

## What I Learned
* I learned that `img` must have `width` and `height` attributes to prevent jumping layout.
* I also found out a link that explain, why you need `role="contentinfo"` on `footer`. The link in [Useful Resources section](#useful-resources).
* I learned that making a good website (accessible, have good design, load fast) is not easy.


## Built With
This project is created using **HTML5**, **CSS3**, and **Sass**. I also use a little bit JavaScript to make sure that the copyright year is always up to date.

I used one of the form features from [Netlify which Forms Spam Filters](https://docs.netlify.com/forms/spam-filters/), using **Honeypot field** and **reCaptcha**.

I also used [Mailgo](https://mailgo.dev/), which is a light JavaScript library for `mailto` and `tel`. It will give you a nice popup for every `mailto` and `tel` link. I really love this library, since it is **easy** and **simple** to use.
<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" width="auto" height="70px">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" width="auto" height="70px">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="" width="auto" height="70px">
  <img src="./icons/mailgo.png" alt="" width="auto" height="70px">
</p>

## Useful Resources
* I used [Responsive Website Tools](http://responsivetesttool.com/), so that I could see my website on various screen size on my Android phone. It's worked for **localhost** and any website url.
* [Optimize Cumulative Layout Shift](https://web.dev/optimize-cls/)
* [ Footer Tag | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer#accessibility_concerns)
* I used [Icomoon](https://icomoon.io) for all the icons and the svg files were optimized using [SVGOMG](https://jakearchibald.github.io/svgomg/)
* I used [Optimizilla](https://imagecompressor.com) to optimize the size of all image files.
* I used [0to255](https://www.0to255.com/) to create the color scheme.
