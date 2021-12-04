// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('recipes', event => {
	// Remove recipes by mod here
	event.remove({mod: 'exnihilosequentia'})
	event.remove({mod: 'usrg'})
})

onEvent('recipes', event => {
	// Remove recipes by id here
	event.remove({id: 'minecraft:furnace'})
	event.remove({id: 'minecraft:clay'})
	event.remove({id: 'minecraft:clay_ball'})
	event.remove({id: 'minecraft:cobblestone'})
	event.remove({id: 'minecraft:iron_ingot'})
	event.remove({id: 'minecraft:glowstone_dust'})
	event.remove({id: 'minecraft:glowstone'})
	event.remove({id: 'integrateddynamics:crystalized_menril_chunk'})
})

onEvent('recipes', event => {
	// Remove recipe by output here
	event.remove({output: 'minecraft:clay'})
	event.remove({output: 'minecraft:clay_ball'})
	event.remove({output: 'minecraft:iron_ingot'})
	event.remove({output: 'minecraft:glowstone_dust'})
	event.remove({output: 'minecraft:glowstone'})
	event.remove({output: 'minecraft:gravel'})
	event.remove({output: 'integrateddynamics:crystalized_menril_block'})
	event.remove({output: 'tconstruct:molten_clay'})
	event.remove({output: 'tconstruct:molten_clay_bucket'})
	event.remove({output: 'minecraft:blue_dye'})
})

onEvent('recipes', event => {
	// Add shapeless recipes here
	event.shapeless('minecraft:oak_planks', ['4x minecraft:stick'])
	event.shapeless('minecraft:cobblestone', ['compressedblocks:c0_oak_planks'])
	event.shapeless('minecraft:glowstone_dust', ['minecraft:iron_pickaxe', 'minecraft:torch', 'exnihilosequentia:dust']).damageItem('minecraft:iron_pickaxe', '1')
	event.shapeless('minecraft:redstone', ['minecraft:iron_pickaxe', 'minecraft:torch', 'minecraft:gravel']).damageItem('minecraft:iron_pickaxe', '1')
	event.shapeless('minecraft:gravel', ['minecraft:iron_pickaxe', 'minecraft:cobblestone']).damageItem('minecraft:iron_pickaxe', '1')
	event.shapeless('minecraft:sand', ['minecraft:iron_pickaxe', 'minecraft:gravel']).damageItem('minecraft:iron_pickaxe', '1')
	event.shapeless('3x minecraft:dirt', ['minecraft:cobblestone', 'minecraft:gravel', 'minecraft:sand'])
	event.shapeless('2x integrateddynamics:menril_berries', ['minecraft:apple', 'integrateddynamics:crystalized_menril_chunk'])
	event.shapeless('integrateddynamics:crystalized_menril_block', ['9x integrateddynamics:crystalized_menril_chunk'])
	event.shapeless('exnihilosequentia:dust', ['minecraft:iron_pickaxe', 'minecraft:sand']).damageItem('minecraft:iron_pickaxe', '1')
	event.shapeless('minecraft:blue_dye',['botania:blue_petal', 'botania:pestle_and_mortar']).keepIngredient('botania:pestle_and_mortar')
	event.shapeless('3x minecraft:blue_dye',['minecraft:lapis_lazuli'])
})

onEvent('recipes', event => {
	// Add shaped recipes here
	event.shaped('minecraft:furnace',[
		'CXC',
		'X X',
		'CXC'
	],{
		C: 'minecraft:cobblestone',
		X: 'compressedblocks:c0_cobblestone'
	})
	event.shaped('3x integrateddynamics:crystalized_menril_chunk',[
		' D ',
		'PG ',
		' S '
	],{
		D: 'minecraft:dirt',
		P: Item.of('minecraft:iron_pickaxe').ignoreNBT(),
		G: 'minecraft:glowstone_dust',
		S: 'minecraft:sand'
	}).damageItem('minecraft:iron_pickaxe', '1')
	event.shaped('minecraft:oak_sapling',[
		' X ',
		'XMX',
		' X '
	],{
		X: 'compressedblocks:c0_dirt',
		M: 'integrateddynamics:crystalized_menril_chunk'
	})
	event.shaped('integratedterminals:menril_glass',[
		' M ',
		'MGM',
		' M '
	],{
		M: 'integrateddynamics:crystalized_menril_chunk',
		G: 'minecraft:glass'
	})
	event.shaped('minecraft:water_bucket',[
		'LLL',
		'LBL',
		'LLL'
	],{
		L: 'minecraft:oak_leaves',
		B: 'minecraft:bucket'
	})
	event.shaped('4x minecraft:slime_ball',[
		'LDL',
		'DWD',
		'LDL'
	],{
		L: 'minecraft:oak_leaves',
		D: 'minecraft:dirt',
		W: 'minecraft:water_bucket'
	})
	event.shaped('create:andesite_cobblestone',[
		' G ',
		'GCG',
		' G '
	],{
		C: 'minecraft:cobblestone',
		G: 'minecraft:gravel'
	})
	event.shaped('create:blaze_burner',[
		'IGI',
		'BCB',
		'IGI'
	],{
		I: 'minecraft:iron_block',
		G: 'minecraft:glowstone',
		C: 'minecraft:coal_block',
		B: 'minecraft:iron_bars'
	})
	event.shaped('4x minecraft:bone_meal',[
		' D ',
		'DID',
		' D '
	],{
		D: 'exnihilosequentia:dust',
		I: 'minecraft:dirt'
	})
	event.shaped('create:belt_connector',[
		'LLL',
		'LLL',
		'   '
	],{
		L: 'thermal:rubber'
	})
})

onEvent('recipes', event => {
	//Add smelting recipes here
	event.smelting('4x minecraft:iron_ingot', ['compressedblocks:c0_cobblestone'])
})

onEvent('recipes', event => {
	//Create Mixing recipes here
	event.recipes.createMixing('minecraft:gold_ingot',['4x minecraft:glowstone_dust','minecraft:iron_ingot']).heated()
	event.recipes.createMixing('minecraft:coal',['4x minecraft:charcoal']).heated()
	event.recipes.createMixing(Fluid.of('kubejs:basic_petally_fluid', 500),['#botania:petals',Fluid.of('minecraft:water',1000)])
	event.recipes.createMixing(Fluid.of('kubejs:poorly_concentrated_petally_fluid', 500),['minecraft:bone_meal',Fluid.of('kubejs:basic_petally_fluid',1000)])
	event.recipes.createMixing(Fluid.of('kubejs:concentrated_petally_fluid', 500),['minecraft:glowstone_dust',Fluid.of('kubejs:poorly_concentrated_petally_fluid',1000)])
	event.recipes.createMixing(Fluid.of('kubejs:highly_concentrated_petally_fluid', 500),['minecraft:gold_ingot',Fluid.of('kubejs:concentrated_petally_fluid',1000)]).heated()
	event.recipes.createMixing(Fluid.of('kubejs:liquid_dirt', 250),['minecraft:dirt',Fluid.of('minecraft:water',500)])
	event.recipes.createMixing(Fluid.of('tconstruct:molten_lead',144),[Fluid.of('tconstruct:molten_iron',144), Fluid.of('tconstruct:molten_obsidian',250)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_iron',144),['minecraft:iron_ingot']).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_obsidian',1000),['minecraft:obsidian']).heated()
	event.recipes.createMixing('8x minecraft:snowball',['minecraft:ice'])
})

onEvent('recipes', event => {
	//Create Pressing recipes here
	event.recipes.createPressing('minecraft:diamond', ['compressedblocks:c0_coal_block']).heated()
})

onEvent('recipes', event => {
	//Create Compacting recipes here
	event.recipes.createCompacting('minecraft:terracotta' ,[Fluid.of('kubejs:liquid_dirt', 1000)])
	event.recipes.createCompacting('minecraft:ice',[Fluid.of('minecraft:water',1000)])
})

onEvent('recipes', event => {
	//Create Milling recipes here
	event.recipes.createMilling('4x create:crushed_copper_ore',['compressedblocks:c0_gravel'])
	event.recipes.createMilling('4x create:crushed_tin_ore',['compressedblocks:c0_sand'])
	event.recipes.createMilling('2x create:crushed_silver_ore',['excompressum:compressed_dust'])
})

onEvent('recipes', event => {
	//Thermal Chiller recipes here
	event.recipes.thermal.chiller('minecraft:iron_ingot',[Fluid.of('tconstruct:molten_iron',144), 'thermal:chiller_ingot_cast']).energy(5000)
})

onEvent('recipes', event => {
	//Thermal Fractioning Still recipes here
	event.recipes.thermal.refinery(Fluid.of('tconstruct:molten_nickel',144), [Fluid.of('tconstruct:molten_iron',144)])
	event.recipes.thermal.refinery('minecraft:lapis_lazuli',[Fluid.of('kubejs:concentrated_blue_liquid',125)])
})

onEvent('recipes', event => {
	//Thermal Magma Crucible recipes here
	event.recipes.thermal.crucible(Fluid.of('tconstruct:molten_iron',144),['minecraft:iron_ingot'])
})

onEvent('recipes', event => {
	//Thermal Alchemical Imbuer recipes here
	event.recipes.thermal.brewer(Fluid.of('kubejs:lowly_blue_liquid', 250),[Fluid.of('kubejs:highly_concentrated_petally_fluid',500), 'botania:blue_petal']).energy(10000)
	event.recipes.thermal.brewer(Fluid.of('kubejs:glowy_blue_liquid', 250),[Fluid.of('kubejs:lowly_blue_liquid',500), 'minecraft:glowstone_dust']).energy(15000)
	event.recipes.thermal.brewer(Fluid.of('kubejs:precious_blue_liquid', 250),[Fluid.of('kubejs:glowy_blue_liquid',500), 'minecraft:gold_ingot']).energy(20000)
	event.recipes.thermal.brewer(Fluid.of('kubejs:concentrated_blue_liquid', 250),[Fluid.of('kubejs:precious_blue_liquid',500), 'minecraft:blue_dye']).energy(25000)
})



onEvent('recipes', event => {
	//Extended Crafting recipes here
	event.recipes.extendedcrafting.shaped_table('minecraft:black_dye',[
		'IIIII',
		'I   I',
		'IIIII'
	],{
		I: 'minecraft:ink_sac'
	})
})