dojo.provide('TextFX.init');

// Ugh
var i;

// Build a store for animations
var animStoreData = { identifier: 'name', label: 'name', items: [] };
for (i in dojox.fx.text) {
	if (i.substr(0,1) !== '_') {
		animStoreData.items.push({
			name: i
		});
	}
}
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

dojo.ready(function(){
	console.log('Ready, starting init...');

	// Start off linear
	dijit.byId('fadeEasing').setValue('linear');

	// We're done!
	console.log('Loaded!');
});
