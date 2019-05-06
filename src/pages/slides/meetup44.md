---
path: '/slides/meetup-44'
date: '2018-10-24'
title: 'Meetup #44'
id: 44
---

### Matej Filković
#### Developing Amazon Alexa skills in Node.js

[soure code](https://github.com/matejfilkovic/jszg-alexa)

Alexa is Amazon’s voice service which enables creation of custom interactions (aka skills). Through my talk, we’ll build an interaction model using Alexa Skill Builder and a web service which acts upon requests sent by Alexa. Web service will be developed using Alexa Skills Kit SDK for Node.js and AWS Lambda platform. Step by step, we’ll progress from a fundamental request-response interaction to more complex dialogs.

At Five, we developed a prototype which targets Echo Show, an Alexa device with a display. Currently, the display interface is quite limited, and I’ll share some tips and tricks we figured out while developing the prototype.

### Korotaev Aleksandr
#### JS battle multiplayer game, RxJS, Workers and eval()

One day I got task: make an interactive coding battle game for front-end conference. I want to tell you how to make a really safe code sandbox for JS without eval() using power of Workers. Sharing of state between clients with different roles connected using websocket. And also why reactive programming with RxJS it's much better than typical event-based programming in games. And exactly let's play in this game at the end.