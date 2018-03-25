---
path: '/slides/meetup-40'
date: '2018-02-21'
title: 'Meetup #40'
id: 40
---

### [Matija Marohnić](https://twitter.com/silvenon)
#### Writing codemods with jscodeshift

Our dependencies update quickly so frontend code often needs to be refactored to keep up. Doing this manually is manageable up to a certain point, but sometimes there is just too much code to update, and search & replace is very often not enough. This is what codemods are for—they are scripts that you can run across your files to refactor them.
In my talk I'll introduce you to jscodeshift, Facebook's tool for writing codemods. Step by step you'll get familiar with JavaScript AST, I'll be extra careful to keep things at a very basic level so you can see the potential of refactoring code programmatically.


### Hrvoje Bagarić
#### TypeScript and React - the complete solution

TypeScript has been around for some time now. With the constant monthly releases, it has come a long way. Its static typing and support for the upcoming JavaScript features makes it interesting for small projects as well as the large ones. With the @types modules, you can use almost every JavaScript library natively. It even had a first day support for the new fragments React syntax. So how does TypeScript behave with React?
I will start the talk with the demo of TypeScript basic types and features. I will show how to setup your TypeScript with React project from tsconfig to webpack, even including tslint rules. To round up the talk, I will show how we can leverage TypeScript to write robust React applications.