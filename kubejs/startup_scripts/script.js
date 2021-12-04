// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('fluid.registry', event =>{
	//Add custom fluids
	event.create('kubejs:basic_petally_fluid').textureThin(0x2b2424).bucketColor(0x2b2424).displayName('Basic Petaly Fluid')
	event.create('kubejs:poorly_concentrated_petally_fluid').textureThin(0xffffff).bucketColor(0xffffff).displayName('Poorly Concentrated Petaly Fluid')
	event.create('kubejs:concentrated_petally_fluid').textureThin(0xf4dfa1).bucketColor(0xf4dfa1).displayName('Concentrated Petaly Fluid')
	event.create('kubejs:highly_concentrated_petally_fluid').textureThin(0xffff00).bucketColor(0xffff00).displayName('Highly Concentrated Petaly Fluid')
	event.create('kubejs:liquid_dirt').textureThin(0xce7e00).bucketColor(0xce7e00).displayName('Liquid Dirt')
	event.create('kubejs:lowly_blue_liquid').textureThin(0x0f3b5c).bucketColor(0xf3b5c).displayName('Lowly Blue Liquid')
	event.create('kubejs:glowy_blue_liquid').textureThin(0x115283).bucketColor(0x115283).displayName('Glowy Blue Liquid')
	event.create('kubejs:precious_blue_liquid').textureThin(0x1168aa).bucketColor(0x1168aa).displayName('Precious Blue Liquid')
	event.create('kubejs:concentrated_blue_liquid').textureThin(0x248ddc).bucketColor(0x248ddc).displayName('Concentrated Blue Liquid')
})