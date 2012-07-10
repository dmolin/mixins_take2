mix = {
	create: function( proto ) {
		var F = function(){},
			o;
		F.prototype = proto;
		o = new F();

		if( typeof o.constructor === 'function' ) {
			o.constructor( Array.prototype.slice( arguments, 1 ) );
		}
		o.mixin = function( proto ) { return mix.mixin( this, proto  ); };
		return o;
	},

	mixin: function( dest, proto ) {
		//mix an object into another
		for( prop in proto ) {
			//console.log( "adding " + prop + " to dest" );

			if( typeof dest.constructor.prototype[prop] === 'function' ) {
				//override.
				dest.constructor.prototype[prop] = function() {

				};
			} else {
				//define in instance
				dest[prop] = proto[prop];
			}

			//dest.constructor.prototype[prop] = proto[prop];
		}
		return dest;
	}
};