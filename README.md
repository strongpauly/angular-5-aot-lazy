# angular-5-aot-lazy

Project to illustrate issues with lazy loading aot compiled in angular 5.0.2

This consists of a simple express server which serves the angular app through a pug index file - which is the reason
that the cli cannot be used.

To install run

```
npm install
```

To start the server and compile using jit run:

```$xslt
npm run jit
```

Then navigate to http://localhost:3000.

Home module will be loaded by default and Home! should be displayed.

Navigating to http://localhost:3000/routes/lazy displays the Lazy route.

Conversely starting using...

```
npm run aot
```

... will start the server and compile angular using aot successfully, but when navigating to either url this error is displayed:

```$xslt
ERROR Error: Uncaught (in promise): Error: Cannot find module './routes/lazy/lazy.module.ngfactory'.
Error: Cannot find module './routes/lazy/lazy.module.ngfactory'.
```

Apologies for the large list of dependencies, but this is a stub from another project.