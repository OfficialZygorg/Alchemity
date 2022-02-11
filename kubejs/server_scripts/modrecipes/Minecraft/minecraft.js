onEvent('recipes',e=>{
    //Shaped recipes
    e.shaped('minecraft:cobblestone',['PP','PP'],{P:'pebbles:stone_pebble'})
    e.shaped('minecraft:oak_planks',['SS','SS'],{S:'minecraft:stick'})
    e.shaped('minecraft:crafting_table',['PP','PP'],{P:'minecraft:oak_planks'})
    e.shaped('minecraft:stone_pickaxe',['CCC',' S ',' S '],{C:'minecraft:cobblestone',S:'minecraft:stick'})
    e.shaped('minecraft:stone_axe',[' CC',' SC',' S '],{C:'minecraft:cobblestone',S:'minecraft:stick'})

    //Shapeless recipes
    e.shapeless('minecraft:iron_block',['9x minecraft:iron_ingot'])
    e.shapeless('minecraft:gold_block',['9x minecraft:gold_ingot'])
    e.shapeless('9x minecraft:iron_ingot',['minecraft:iron_block'])
    e.shapeless('9x minecraft:gold_ingot',['minecraft:gold_block'])
    e.shapeless('9x minecraft:iron_nugget',['minecraft:iron_ingot'])
    e.shapeless('9x minecraft:gold_nugget',['minecraft:gold_ingot'])
})