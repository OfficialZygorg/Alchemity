onEvent('fluid.registry',e=>{
	//Add custom fluids
	e.create('kubejs:basic_petally_fluid').textureThin(0x2b2424).bucketColor(0x2b2424).displayName('Basic Petaly Fluid')
	e.create('kubejs:poorly_concentrated_petally_fluid').textureThin(0xffffff).bucketColor(0xffffff).displayName('Poorly Concentrated Petaly Fluid')
	e.create('kubejs:concentrated_petally_fluid').textureThin(0xf4dfa1).bucketColor(0xf4dfa1).displayName('Concentrated Petaly Fluid')
	e.create('kubejs:highly_concentrated_petally_fluid').textureThin(0xffff00).bucketColor(0xffff00).displayName('Highly Concentrated Petaly Fluid')
	e.create('kubejs:liquid_dirt').textureThin(0xce7e00).bucketColor(0xce7e00).displayName('Liquid Dirt')
	e.create('kubejs:lowly_blue_liquid').textureThin(0x0f3b5c).bucketColor(0xf3b5c).displayName('Lowly Blue Liquid')
	e.create('kubejs:glowy_blue_liquid').textureThin(0x115283).bucketColor(0x115283).displayName('Glowy Blue Liquid')
	e.create('kubejs:precious_blue_liquid').textureThin(0x1168aa).bucketColor(0x1168aa).displayName('Precious Blue Liquid')
	e.create('kubejs:concentrated_blue_liquid').textureThin(0x248ddc).bucketColor(0x248ddc).displayName('Concentrated Blue Liquid')

	//Machine Liquids
	//Cobblestone Refiner
	e.create('kubejs:fluids/unrefined_cobblestone').textureThick(0x999999).displayName('Unrefined Cobblestone')
	e.create('kubejs:fluids/unrefined_iron').textureThick(0x808080).displayName('Unrefined Iron')
	e.create('kubejs:fluids/unrefined_copper').textureThick(0xce7e00).displayName('Unrefined Copper')
	e.create('kubejs:fluids/unrefined_tin').textureThick(0x9fc5e8).displayName('Unrefined Tin')
	e.create('kubejs:fluids/unrefined_silver').textureThick(0xcfe2f3).displayName('Unrefined Silver')
})