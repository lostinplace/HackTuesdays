(function() {
  var Q = Quintus( );

  Q.include( "Sprites, Scenes, Input, 2D,Touch, UI");

  Q.setup( );

  Q.controls( );

  Q.touch( );

  Q.Sprite.extend( "Duck", {
    init: function( p ) {
      this._super( p, {
        sheet: "duck",
        x: 32,
        y: 384
      } );

      this.add( "2d, platformerControls" );
    }
  } );

  Q.scene( "1-1", function( s ) {
    s.collisionLayer( new Q.TileLayer( {
      dataAsset: "1-1.json",
      sheet: "tiles"
    } ) );

    s.insert( new Q.Duck() );
  } );

  Q.load( "sprites.png, sprites.json, tiles.png, 1-1.json", function( ) {
    Q.sheet( "tiles", "tiles.png", { tilew: 32, tileh: 32 } );

    Q.compileSheets( "sprites.png", "sprites.json" );

    Q.stageScene( "1-1" );
  } );
}());
