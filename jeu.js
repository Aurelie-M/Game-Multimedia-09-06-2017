/* jeu ultimedia
 *
 * /jeu.js - code de jeu
 *
 * coded by aurélie
 * started at 09/06/2017
 */

( function() {

    "use strict";

    var Jeu;

    // Game Manager

    Jeu = function( oApp ) {

        var game = this;

        this.app = oApp;

        // Background
        this.background = {
            "frame": {
                "sx": 0,
                "sy": 0,
                "sw": 500,
                "sh": 300,
                "dx": 0,
                "dy": 0,
                "dw": game.app.width,
                "dh": game.app.height
            },
            "draw": function() {
                game._drawSpriteFromFrame( this.frame );
            }
        };

        // Utils
        this._drawSpriteFromFrame = function( oFrame ) {
            this.app.context.drawImage(
                this.spriteSheet,
                oFrame.sx,
                oFrame.sy,
                oFrame.sw,
                oFrame.sh,
                oFrame.dx,
                oFrame.dy,
                oFrame.dw,
                oFrame.dh
            );
        };

        // Setup Animation loop
        this.animate = function() {
            this.time.current = Date.now();
            this.animationRequestID = window.requestAnimationFrame( this.animate.bind( this ) );

            // draw: clear
            this.app.context.clearRect( 0, 0, this.app.width, this.app.height );
            // draw: background
            this.background.draw();
        };    

        // Init game
        this.init = function() {

            // Load spritesheet
            this.spriteSheet = new Image();
            this.spriteSheet.addEventListener( "load", this.init.bind( this ) );
            this.spriteSheet.src = "./resource/sprite.png";
    };

    window.Jeu = Jeu;

} )();
