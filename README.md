# betterNOTE
An OS X note-taking app for the Markdown-writing, Vim-loving folks out there!  Still in development.  Not ready for prime time.

## Backstory
Okay, so the name is definitely a little cheeky.  But let's set that aside and talk about the motivation for building this app.  I'm an active Evernote user and generally I find it to be mostly, generally, kinda pretty alright.  Sort of.

Spending the better part of every day in a code editor, I regularly come up against two main pain points when I have to jump over to Evernote to jot something down:

1. No support for Vim-keybindings
2. Despite a [post on Evernote's blog](https://blog.evernote.com/blog/2015/09/22/the-future-of-writing-in-evernote/) from September 25, 2015 indicating that "basic markdown will be a reality", support for Markdown in Evernote does not yet exist.

So, I set out to build something for myself that will address those issues.  But truthfully, the biggest reason for betterNOTE was to give me an excuse to play with Electron and dive deeper into React and other cutting edge JavaScript technologies that I don't encounter in my daily work.  Which brings me to...

## The Technologies
The technologies I'm using to build betterNOTE are taken from my ever-growing laundry-list of things I want to learn.  I originally planned to build this as a web app, but after reading about Electron, I decided this project lent itself very well to being built as a desktop app.

So, here's what I'm currently using to build the app:

- [Electron](http://electron.atom.io/) - a JavaScript framework for creating native desktop applications for Mac, Linux, and Windows using web technologies.
- [React](https://facebook.github.io/react/) - a JavaScript library for building UIs
- [Dexie.js](http://dexie.org/) - a wrapper around IndexedDB, which is being used for persistence
- [Ace](https://ace.c9.io/#nav=about) - an embeddable code editor written in JavaScript
- [Showdown](https://github.com/showdownjs/showdown) - a Markdown to HTML converter
- [Babel](https://babeljs.io/) - for writing JSX and ES2015
- [Webpack](https://webpack.github.io/) - for bundling modules

## The Current State of Things
This project is very much a work-in-progress.  The basic functionality of adding, editing, and deleting note is built out but there's much more to do:

- Testing
- Add the ability to organize notes into different collections
- Add support for tagging notes
- Add support for keyboard searching
- Add support for sorting notes
- Add support for cloud-based syncing of notes
- Add support for keyboard shortcuts to better navigate the app
- Add support for exporting notes as Markdown, rendered HTML, or PDF
- Give users the ability to configure settings in the text editor like font, font size, etc.
- Give some TLC to designing the look, feel, and interface
