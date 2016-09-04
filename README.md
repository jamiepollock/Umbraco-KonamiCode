# Umbraco Konami Code
A simple Angular JS service which allows an Umbraco Angular JS to listen for the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) key input and then produce a given callback.

```
Up, Up, Down, Down, Left, Right, Left, Right, A, B
```

## Usage
To use the Konami Code, simply use the `konamiCode` service in a controller. Currently the intent is for it to be registered once per controller view.

```js
'use strict';
angular.module("umbraco").controller("MyWebsite.BackofficeApp.Controller",
    function ($scope, konamiCode, notificationsService) {
        konamiCode.register(function() {
            notificationsService.add({
                type: "success",
                headline: "Success",
                message: "Konami Code activated!",
                url: "https://en.wikipedia.org/wiki/Konami_Code"
            });
        });

        // The rest of your controller code
    });
```

Adding this code to say multiple dashboard controllers will cause the event listener to register multiple times.