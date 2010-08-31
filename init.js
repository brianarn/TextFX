dojo.provide('TextFX.init');

// Ugh
var i;

// Set up a structure of known animation arguments
var animArgs = {
	crop: {
		label: 'Crop',
		desc: 'If true, pieces will be positioned relatively rather than absolutely',
		type: 'boolean',
		default: false
	},
	words: {
		label: 'Crop',
		desc: 'If true, text will be split into words, rather than characters',
		type: 'boolean',
		default: false
	}
};
// Build a store for animations
var animStoreData = {
	identifier: 'effect',
	label: 'name',
	items: [{
		effect: 'explode',
		name: 'Explode',
		args: ['crop', 'words', 'random', 'distance', 'fade', 'fadeEasing'],
		unhide: false
	},{
		effect: 'converge',
		name: 'Converge',
		args: ['crop', 'words', 'random', 'distance', 'fade', 'fadeEasing', 'sync'],
		unhide: true
	}]
};
var animStore = new dojo.data.ItemFileReadStore({ data: animStoreData });

// Build up an easings store
var easingStoreData = { identifier: 'name', label: 'name', items: [] };
for (i in dojo.fx.easing) {
	easingStoreData.items.push({
		name: i
	});
}
var easingStore = new dojo.data.ItemFileReadStore({ data: easingStoreData });

// Events
var fadeChange = function (checked) {
	// Simply tweak our easing
	dijit.byId('fadeEasing').setAttribute('disabled', !checked);
}

/*
dojo.ready(function(){
	console.log('Ready, starting init...');

	// Start off linear
	dijit.byId('fadeEasing').setValue('linear');

	// We're done!
	console.log('Loaded!');
});
*/
