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
		label: 'Words',
		desc: 'If true, text will be split into words, rather than characters',
		type: 'boolean',
		default: false
	},
	random: {
		label: 'Random',
		desc: 'If set, pieces fly to random distances, for random durations, in slightly random directions',
		type: 'float',
		default: null
	},
	distance: {
		label: 'Distance',
		desc: 'How far the pieces travel',
		type: 'float',
		default: 1.0
	},
	fade: {
		label: 'Fade',
		desc: 'If true, pieces fade out while in motion',
		type: 'boolean',
		default: true
	},
	fadeEasing: {
		label: 'Fade Easing',
		desc: 'If fade is true, the fade animation uses this easing',
		type: 'boolean',
		dependencies: [{
			effect: 'fade',
			value: true
		}],
		default: null
	},
	sync: {
		label: 'Sync',
		desc: 'All the pieces converge at the same time',
		type: 'boolean',
		default: true
	}
	/*
	template: {
		label: '',
		desc: '',
		type: '',
		default: null
	}
	*/
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

// Set up some stuff when ready
dojo.ready(function () {
	dojo.connect(anim, 'onChange', function (effect) {
		// Get our item
		animStore.fetch({
			query: { effect: effect },
			onComplete: function (items) {
				// Sanity check
				if (items.length != 1) {
					throw new Exception('Query returned ' + items.length + ' items!');
				}

				// Get some stuff
				var item = items[0],
					args = animStore.getValue(item, 'args'),
					unhide = animStore.getValue(item, 'unhide');

				console.log('stuff',item,effect,args,unhide);
			}
		}); // animStore.fetch
	}); // dojo.connect(anim, 'onChange'...)
}); // dojo.ready(...);
