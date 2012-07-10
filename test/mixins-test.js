buster.testCase( "Mixins Test", {
	"basic usage" : function() {
		var Thing, Living, brick, human;

		Thing = {
			constructor: function() {
				console.log( "I'm a simple thing.." );
			}
		};

		Living = {
			constructor: function() {
				console.log( "..but I learnt how to breath!" );
			}
		};
		Object.defineProperty( Living, "breathing", {
			value: true,
			writable: false,
			enumerable: true
		});

		brick = mix.create( Thing );
		assert.equals( typeof brick, 'object' );
		assert.equals( typeof brick.constructor, 'function' );

		assert.equals( typeof brick.mixin, 'function' );
		human = mix.create( Thing ).mixin( Living );
		assert.equals( human.breathing, true, 'breathing should exist' );
	}
});