(function() {
  var Q = Quintus( );

  Q.include( "Sprites, Anim, Scenes, Input, 2D, Touch, UI");

  Q.setup( );

  Q.controls( );

  Q.touch( );

  Q.animations( "duck", {
    run_right: { frames: [0,1], rate: 1/15 },
    run_left: { frames: [2,3], rate: 1/15 },
    stand_right: { frames: [0], rate: 1/5 },
    stand_left: { frames: [3], rate: 1/5 }
  } );

  Q.Sprite.extend( "Canon", {
    init: function( p ) {
      this._super( p, {
        sheet: "canon",
        x: 256,
        y: 320 - 16,
        vx: -100
      } );
    },

    step: function( dt ) {
      this.p.x += this.p.vx * dt;
    }
  } );

  Q.Sprite.extend( "Duck", {
    init: function( p ) {
      this._super( p, {
        sprite: "duck", //< it seems this must match the animations name created above
        sheet: "duck",
        x: 128,
        y: 400,
        vx: 9.8,
        vy: 9.8
      } );

      this.add( "2d, platformerControls, animation" );
    },

    step: function( dt ) {
      // augment (rather than replace) build in platformerControls velocity management
      //this.p.x += this.p.vx * dt;
      //this.p.y += this.p.vy * dt;

      if ( this.p.vx > 0 ) {
        this.play( "run_right" );
      } else if ( this.p.vx < 0 ) {
        this.play( "run_left" );
      } else {
        // if using platformerControls, this.p.direction is the text: right | left (rather than a number as in their example)
        this.play( "stand_" + this.p.direction );
      }
    }
  } );

  Q.scene( "1-1", function( s ) {
    s.collisionLayer( new Q.TileLayer( {
      dataAsset: "1-1.json",
      sheet: "tiles"
    } ) );

    var duck = new Q.Duck();
    s.insert( duck );

    s.insert( new Q.Canon( ) );
  } );

  Q.load( "sprites.png, sprites.json, tiles.png, 1-1.json", function( ) {
    Q.sheet( "tiles", "tiles.png", { tilew: 32, tileh: 32 } );

    Q.compileSheets( "sprites.png", "sprites.json" );

    Q.stageScene( "1-1" );

  } );
}());
