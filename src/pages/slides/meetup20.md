---
path: '/slides/meetup-20'
date: '2015-11-18'
title: 'Meetup #20'
id: 20
---

### [Vladimir Adamić](https://twitter.com/vunovati)
#### [Hugging a syntax tree](http://slides.com/vunovati/hugging-a-syntax-tree)

When reasoning about the content of our JavaScript files we usually think of them as a bunch of alphanumeric characters. Our tools to manipulate those files reflect this. What we usually forget is that each of those files has a life of its own and eventually becomes a programmatically inspectable syntax tree. What if we took advantage of this and used it to make smarter coding tools? I tried to examine this concept and created a small command line toolkit which tries to utilize it. I will explain how a syntax-aware diff could be created and exploit the syntax tree further to create a smarter merge tool as well.


