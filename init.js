dojo.provide('TextFX.init');

dojo.ready(function(){
	var i;
	console.log('Ready, starting init...');

	// Build up an easings store
	var easingStoreData = { identifier: 'name', label: 'name', items: [] };
	for (i in dojo.fx.easing) {
		easingStoreData.items.push({
			name: i
		});
	}
	var easingStore = new dojo.data.ItemFileReadStore({
		data: easingStoreData
	});
	var fadeEasing = new dijit.form.ComboBox({
		id: 'fadeEasing',
		name: 'fadeEasing',
		store: easingStore,
		searchAttr: 'name'
	}, 'fadeEasing');

	// We're done!
	console.log('Loaded!');
});
