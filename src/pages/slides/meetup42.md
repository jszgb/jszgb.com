---
path: '/slides/meetup-42'
date: '2018-06-21'
title: 'Meetup #42'
id: 41
---

### [Valeri Karpov](https://twitter.com/code_barbarian)
#### TAO: The Essence of Modern JavaScript

Redux, MobX, ngrx, vuex, and other state management libraries seem different on the surface, but the core idea is the same. The core idea is a departure from conventional MVC architecture, where "models" where responsible for tracking changes and notifying listeners of changes, to an architecture where all changes go through "actions" and stores subscribe to a stream of actions.

This architecture has 3 core concepts:

Types: data is represented by POJOs. The key distinction between types and conventional models is types are not responsible for change tracking. Instead, types focus on being serializable and easy to transfer via JSON. In particular, because types aren't tied to any backend data store like conventional MVC models, they're easy to make isomorphic.
Actions: all changes in the system go through actions. Actions behave like functions, but actions also have an object representation to make them easy to inspect.
Observables: while not all state management libraries use observables, every modern state management library has a mechanism to tie in to the stream of actions happening in the system and react to them. Redux has middleware, MobX has middleware, Vuex has plugins, and ngrx has analogous concepts like effects and meta reducers. The key idea is that side effects and cross-cutting concerns like logging are decoupled from actions.
By their powers combined, these concepts make up the TAO architecture. In this talk, I'll demonstrate using the minimal tao library to build both a backend Express API and frontend React and Redux app using this architecture.