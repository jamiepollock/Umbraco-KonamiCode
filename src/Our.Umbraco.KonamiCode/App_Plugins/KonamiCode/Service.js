angular.module("umbraco")
    .service("konamiCode", function ($rootScope) {
    	// a key map of allowed keys
    	var allowedKeys = {
    		37: "left",
    		38: "up",
    		39: "right",
    		40: "down",
    		65: "a",
    		66: "b"
    	};
    	// the 'official' Konami Code sequence
    	var konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "a", "b"];

        this.register = function(successCallback) {
            var konamiCodePosition = 0;

            var keyDownListener = function(e) {
                // get the value of the key code from the key map
                var key = allowedKeys[e.keyCode];
                // get the value of the required key from the konami code
                var requiredKey = konamiCode[konamiCodePosition];
                // compare the key with the required key
                if (key == requiredKey) {
                    // move to the next key in the konami code sequence
                    konamiCodePosition++;

                    // if the last key is reached, activate cheats
                    if (konamiCodePosition == konamiCode.length) {
                        konamiCodePosition = 0;

                        successCallback();
                    }
                } else {
                    konamiCodePosition = 0;
                }
            };

			//add event
            document.addEventListener("keydown", keyDownListener);
			
			//remove event
            $rootScope.$on("$routeChangeStart", function (event, next, prev) {
            	document.removeEventListener("keydown", keyDownListener);
            });
        };
    });