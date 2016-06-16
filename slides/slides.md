---
layout: default
title: Slides
---
# jsZgb Slides

Slides and other stuff from JavaScript Zagreb meetups.

## Meetup #27 (15.6.2016)
### [Luka Blažecki](https://twitter.com/LukaBlazecki)
#### [Writing readable async code in JS](http://share.snacktools.com/97F65E6EFB5/b7xcspmu)

Intro to callbacks, promises and async/await. 

We all started writing JS code with callbacks (hell). And it sucked a lot. Then promises came. They solved a lot of problems, like error handling and timing. But sometimes flow and readability are too complicated or hold too much additional syntax. This is what async/await is resolving. 
Now JS can finally be fun to write even when there is complicated flow!

Some additional resources on Promises:

[Bluebird promise library](http://bluebirdjs.com/docs/getting-started.html)

[Promise nuggets](https://promise-nuggets.github.io/)

[Promises: All The Wrong Ways](https://blog.getify.com/promises-wrong-ways/)

[You're Missing the Point of Promises](https://blog.domenic.me/youre-missing-the-point-of-promises/#toc_1)

## Meetup #25 (20.3.2016)
### [Miłosz Chmura](https://twitter.com/chmuraOrg)
#### [Streaming in JavaScript](https://slides.com/miloszchmura/streaming-in-javascript/)

In programming, problems can be tackled using various ways. When it comes to data processing, a useful approach is using pipes and streaming.

In this presentation I will show you how I came up with solution to a simple interview task using streaming approach in Node.js. Furthermore, I will show you the great benefits of this approach: performance and processing of infinite amount of data.

### [Ivan Lučin](https://twitter.com/lucinivan)
#### [Cheating on Rails with Ember](http://bit.ly/cheating-on-rails-with-ember)

Maintaining client side of a big saas product can be hard in a monolithic, server oriented architecture like Rails - UX, performance and code quality usually suffer. In a pool of popular framework options Ember JS was chosen for the client side rewrite! Ember is great and well established JS framework which shares a lot of design decisions and ideas with Rails.

This talk will cover the process of switching from Rails only app to API based backend + Ember JS app and it will try to show why choosing Ember really was a good decision.

***

## Meetup #24 (16.3.2016)
### [Vjekoslav Ratkajec](https://twitter.com/vratkajec)
#### [Introduction to Electron](http://www.slidesnack.com/my-slidesnack/details/?slide=bhkmwifj)

Electron enables you to create cross-platform desktop apps with web technologies. It is based on Chromium and uses Node.js to enable working with OS, and HTML, CSS and JavaScript for UI.

For years I've been working as an ActionScript developer making cross-platform apps in Adobe AIR. Few months ago I've started to work with Electron. I'm also writing my thoughts and findings on my blog [Electron Rocks](http://electron.rocks/)!

### [Mihaela Mihaljević Jakić](https://twitter.com/civeljahim)
#### [ngrok - Secure tunnels to localhost](https://github.com/mihaelamj/ngrockdemo)

Save time and be more productive. Expose local servers behind NATs and firewalls to the public internet over secure tunnels.

***

## Meetup #23 (17.2.2016)
### [Tomislav Gajšak](https://twitter.com/gajo4256)
#### [Backbone stickit - how to do two way data binding in backbone](http://www.slidesnack.com/my-slidesnack/details/?slide=b7x349ik)

When developing Backbone apps we often need the view to be in sync with model and vice versa. To avoid getting lost in Backbone boilerplate code with multiple listeners and events, we can easily use Stickit - one of the two-way data binding implementations available for Backbone. In this small presentation I will show you how you can use it with simple input element and more complex elements like select.

### [Tomislav Bacinger](https://twitter.com/bacinger)
#### [Forget Google Maps. Meet D3.js](http://svemir.co/d3/#/)

D3.js is JavaScript library for manipulating documents based on data to create interactive data visualizations. By interactive data visualizations, I do not mean only charts, but much more interesting stuff, like interactive maps for example. In this talk, we will cover everything needed to create an interactive map with D3.js, including where to find free data, how to add interactivity, and how to style the map using only CSS.

***

## Meetup #22 (20.1.2016)
### [Luka Blažecki](https://twitter.com/lukablazecki)
#### [Integration tests in node.js](http://www.slidesnack.com/my-slidesnack/details/?slide=b7n07fa3)

Everyone is talking about how testing is important, but there is little talk about what the tests look like in a slightly bigger Node.js application. Nor is there talk about the encountered problems or possible solutions. Through this talk I would like to start a discussion about one part of the testing through integration tests in the web / API Node.js.


### [Matija Marohnić](https://twitter.com/silvenon)
#### [Unpacking Webpack](https://github.com/silvenon/jszg-webpack)

There seems to be a new build tool released every month. Grunt, Gulp, Broccoli, Brunch... So why should you care about Webpack? Because it's so much more than a build tool, it's a complete module bundler with less configuration required. It's extremely powerful and deserves much more attention.

***

## Meetup #21 (16.12.2015)
### [Ivan Vuković](https://twitter.com/sohotsoup)
#### [Add space after {](http://slides.com/ivanvukovic/add-space#/2)

Have you ever received or sent pull request and most of code review comments was about code formatting and variable naming? This talk will introduce some code style linters and static code analysis tools for JavaScript to you. Also, we will take a look on some popular JavaScript style guides, and I will show some strategies on how to incorporate this to your workflow to improve your code quality and how that is done in ShoutEm. After this talk, you will focus yourself much more on code quality and real improvements over code formatting issues.

***

## Meetup #20 (18.11.2015)
### [Vladimir Adamić](https://twitter.com/vunovati)
#### [Hugging a syntax tree](http://slides.com/vunovati/hugging-a-syntax-tree)

When reasoning about the content of our JavaScript files we usually think of them as a bunch of alphanumeric characters. Our tools to manipulate those files reflect this. What we usually forget is that each of those files has a life of its own and eventually becomes a programmatically inspectable syntax tree. What if we took advantage of this and used it to make smarter coding tools? I tried to examine this concept and created a small command line toolkit which tries to utilize it. I will explain how a syntax-aware diff could be created and exploit the syntax tree further to create a smarter merge tool as well.

***

## Meetup #19 (22.10.2015)
### [Matija Marohnić](https://github.com/silvenon)
#### [Creating and Testing UIs with React](https://github.com/silvenon/jszg-react) (Part 1)

We’ll set up JavaScript compilation with Babel and Webpack, so we can split our app into separate modules (i.e. files). We will execute these tasks inside `package.json`, but it doesn’t really matter which one you use.

Once we get that working, we will build a very simple UI to demonstrate basic React concepts and best practices. You will learn what React is, by seeing how it works first-hand. We will not go into much theory, no comparisons with existing MV\* frameworks. Just hands-on LIVE CODING! \*gasp\*

### [Dino Trojak](https://twitter.com/dinodsaurus)
#### [Creating and Testing UIs with React](https://github.com/silvenon/jszg-react) (Part 2)

After Matija is done with his app, we will explain how tests in React work and we will install all necessary things to run them. Tests will be done using Jest. Jest is an open source testing utility from Facebook. It makes unit testing React a lot easier. There wont be any theoretical stuff. Live examples only. We will also run our tests on Travis, so you’ll see how to add that shiny Travis badge to your repo.

***

## Meetup #18 (16.9.2015)
### [Nikola Henezi](https://github.com/nhenezi)
#### FirefoxOS

FirefoxOS is a truly open source operating system for mobile phones, tablets and smart TVs based on web technologies. In this talk I will explain why is FirefoxOS needed, its architecture, what problems we avoided using web technologies, what challenges we had to solve, how we solved them and what can we expect from FirefoxOS in the near future.

### [Matija Marohnić](https://twitter.com/silvenon)
#### [Selenium Testing Workflow](https://github.com/silvenon/jszg-selenium)

Matija će nam pokazati jedan od mogućih Node.js workflowa za Selenium testiranje, pomoću WebdriverIO-a, Moche i Gulpa. Naučit ćete kako izvršiti testove lokalno, na Travis CI-u i na cloud servisu s pravim browserima.

***

## Meetup #17 (3.6.2015)
### Matija Šmaljcelj
#### WinJS izlazi na globalnu pozornicu

Najbitnija novost u WinJS 3.0 je podrška za najpopularnije desktop i mobilne preglednike. Sva ljepota i elegancija WinJSa donedavno ograničena samo na Windows ekosustav, sada postaje dostupna posvuda, pa čak i u hibridnim aplikacijama izrađenim pomoću Apache Cordove. Predefinirane kontrole su bitno poboljšane i prilagođene različitim veličinama ekrana, a kad se tome još pribroji nova modularizacija koda za lakše održavanje i bolje performanse, stvarno nema isprike da vaša iduća web aplikacija ne koristi WinJS

### [Senko Rašić](https://twitter.com/senkorasic)
#### AwwApp Case Study

[AwwApp](https://www.awwapp.com/) je web whiteboard nastao u radionici [Dobrog Koda](http://goodcode.io/). Ovom prilikom, Senko će nam ispričati kako je do tog proizvoda došlo i kako se jedan tradicionalni Python shop snašao u razvoju full-stack realtime web aplikacije u JavaScriptu, s čim su se susreli, kako su to riješili, kome su to prodali i kad ćemo Senka vidjeti za volanom Tesle.

***

## Meetup #16 (5.6.2015)
### Joso Mrša
#### WebGL – The Third Dimension of the Web

WebGL compatibility has come to most platforms, so its time to see what all the fuss is about. We will exlore the basics of presenting 3D content using three.js Javascript library.

### Mario Jurić
#### [Backbone JS + Web Components, Make 'em Dance](http://slides.com/jurza/backbonejs-and-web-components#/)

Web Components are a set of standards that aim to solve some of the problems web developers are currently facing. On a small demo app we'll try to showcase some Web Components concepts and with the help of basic Backbone features bring some structure to the code. Music wishes will be free :)

***

## Meetup #15 (1.4.2015).
### Andrija Jambrović
#### [Why you should use Marionette.js](http://slides.com/andrijajambrovic/presentation-6#/)

(Explained on an legacy app re-write to a product.)

Marionette is a framework on top of Backbone.js library which brought a set of standard patterns and best practices to Backbone-based Single Page Apps stack. You really should use it, and now you have a chance to learn why.

### Luka Mužinić
#### How to add falling snowflakes in DHTML

No, srsly...

### Davor Jerbić
#### Phantom.js

We'll present basics of Phantom.js and how to use it for testing JavaScript. Phantom's use in TestDome's tests will be discussed as a case study.

***

## Meetup #14 (4.3.2015)
### Neven Falica
#### KnockoutJS

Prošli smo do sada nekolicinu client-side MV* frameworka, red je da se dotaknemo i KnockoutJS-a. MVVM framework, više orijentiran na view dio, odličan je kao nadogradnja na server-side HTML kojem treba strukturirane klijentske logike. A možda može i nešto više? Saznat ćemo od Nevena...

### Grga Ćurković
#### Multi-touch gesture recognizers

Single and multi touch gestures are integral part of almost all smartphone and tablet application. Take a look at Mireo's in-house gesture recognisers used in both native and web applications. Learn how basic gestures are defined, how they coexist and what events are needed to implement general purpose controls.

***

## Meetup #13 (4.2.2015)
### Dino Trojak
#### [Zašto koristit jsDoc](http://dinodsaurus.github.io/jsDoc-presentation/#/)

Kako postaviti gulp task za generiranje dokumentacije iz komentara te kako koristiti jsDoc unutar postojećeg projekta.

### Matija Kovačić
#### Hands-on Grunt

Što je Grunt i zašto ga koristiti. Na konkretnom primjeru ćemo automatizirati tipičan web workflow.

***

## Meetup #12 (3.12.2014)
### Matija Marohnić
#### Yeoman generatori

Što su Yeoman generatori i zašto su bolji od običnog boilerplate koda. Pokazat će kako napraviti jednostavan generator sa sub-generatorima.

### Grga Ćurković
#### JavaScript GUI u native smartphone aplikacijama

Prvo u seriji predavanja o nacinu na koji je tvrtka Mireo upotrijebila javascript za izvedbu GUI-a u native smartphone aplikacijama za vise platformi. U ovom predavanju posvetit cemo se razlozima javascripta, integracijom sa nasom platformom te nacinom pisanja koda koji smo odabrali.

***

## Meetup #11 (5.11.2014)
### Dino Trojak
#### [Uvod u mobilne aplikacije pomoću Ionic frameworka](https://github.com/dinodsaurus/jszgIonic)

***

## Meetup #10 (1.10.2014)
### [Week of WebCamp special](http://2014.webcampzg.org/week-of-webcamp/wednesday/)

***

## Meetup #9 (3.11.2014)
### Alex Kuhn
#### [Using D3 to make interactive data visualizations](http://d3.alexckuhn.com)

D3 is a powerful library for using JavaScript to manipulate documents with data. This talk will cover what the D3 library is and what it can do. We will walkthrough creating sample data visualizations and then add interactivity to them.

### Zlatko Đurić
#### [Row, row, row your boat](https://speakerdeck.com/zladuric/node-dot-js-streams)

How to gently row your boat down Node.js Streams? A talk to introduce the topic of streams and streaming, how it works in node and how it didn't work out before.

### Davor Jerbić
#### [Google Chromecast development](http://slides.com/djerbic/chromecastintro#/)

Google Chromecast is miniature and simple device that enables you to bring customised apps to any TV. In this talk an introduction to developing apps for this platform will be presented and some experiences from an actual project will be discussed.

***

## Meetup #8 (3.6.2014).
### Vedran Maršić aka Fosna
#### [Što s tipovima u JavaScriptu](https://github.com/Fosna/TypeBoxes)

TypeScript je za .NET programere ono što je CoffeeScript za Ruby programere. TypeScript je JavaScript uz provjeru tipova tijekom prevođenja. To je paranoični JSLint. Pogledajmo kako to iskoristiti.

### Mihael Konjević
#### JSON Schema u teoriji i praksi

Štogod nam Mihael sakrio iza ovog naslova, ne može bit nezanimljivo

### Tomislav Capan
#### Codebase struktura za full-stack JS (MEAN) projekte

Pregled osobnih iskustava s klijentskih projekata, najčešćih grešaka, te željenih ciljeva na osnovu tih iskustava. Praktičan rezultat je kvalitetno postavljen boilerplate za REST API + SPA projekt.

***

## Meetup #7 (5.5.2014)
### Matija Marohnić
#### [Hands-on Bower](https://speakerdeck.com/matija/bower)

Nakon što smo pred dva meetupa čuli što je to Bower, Matija će nam pokazati kako iskoristiti Bowerov potencijal u Rails, Grunt i Gulp workflowu. Usput će dotaknuti i Yeoman generatore, koji služe za scaffolding aplikacija.

### Krešimir Antolić
#### [Kako i zasto održavati kvalitetu koda](http://www.slideshare.net/kresimirantolic/code-quality-34322219)

Ovo predavanje pokazat će vam zašto je važno održavati kvalitetu koda u svojim projektima i preporučit će alate te praktične savjete za bezbolno integriranje 'provjere kvalitete' u svoj razvojni proces.

### Hrvoje Šimić
#### [Testiranje (EmberJS) aplikacija uz Jasmine](https://github.com/shime/micro-machine-js)

Nakon što smo prošli kako raditi aplikacije u Emberu, dotaknut ćemo se testiranja. Hrvoje će objasniti kako pravilno postaviti infrastrukturu za test-driven razvoj vaših client-side (ne samo Ember) aplikacija pomoću Jasmine testing frameworka.

***

## Meetup #6 (3.4.2014)
### Zlatko Đurić
#### JavaScript Promises

Kako koristiti u jQueryju, Node.js-u, client-side MV* frameworcima i uz koje libraryje, te u konacnici sto nam donosi standard i kad ce biti dostupan.

### Hrvoje Šimić
#### [Ember.js](https://github.com/shime/ember-is-a-mistery)

Drugi dio predstavljanja ovog client-side MVC frameworka odvest ce nas dalje u razvoju nase aplikacije zapocete u prvom nastavku.

***

## Meetup #5
### Ivan Nikolić
#### Bower

Zašto bi dizajner ili UI developer željeli koristiti Bower?

### Hrvoje Šimić
#### [Ember.js](https://github.com/shime/ember-is-a-mistery)

Zašto Ember.js a ne Angular?

### Tomislav Capan
#### Node.js: Express Middleware

Kako funkcionira, te kada i zašto kreirati svoj middleware

***

## Meetup #4 (5.2.2014)
### Zlatko Đurić
#### Node.js autentikacija

### Darko Kukovec
#### JavaScript task runneri

Što su task runneri, zašto su korisni te neki primjeri i usporedba Grunta i Gulpa.

### Ivan Rukavina
#### AngularJS

U trećem dijelu bit će objašnjen rad s podacima i komunikacija sa serverskim API-jima.

***

## Meetup #3 (8.1.2014)
### Zlatko Đurić
#### NodeJS, Express i MongoDB

JSON all the way!

### Ivan Rukavina
#### Angular

Što su direktive, kontroleri, rute i "Moja prva Angular aplikacija".

***

## Meetup #2 (4.12.2013)
### Mihael Konjević
#### jQuery plugin

Od nule do realizacije.

### Ivan Rukavina
#### Angular

Hm, što je to?

### Tomislav Capan i Zlatko Đurić
#### HTML rendering i REST API uz NodeJS i Express

***

## Meetup #1 (6.11.2013)

(...)
