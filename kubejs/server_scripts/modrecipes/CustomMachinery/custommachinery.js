

onEvent('recipes',e=>{

    events.listen("recipes", function (event) {

        // ==================================================================================================================================================
        // =========================================================== Recipes in Custom Machines ===========================================================
        // ==================================================================================================================================================
        
        function assembler(tier, ticktime, input1, amount1, input2, amount2, input3, amount3, input4, amount4, result, resultamount, energy) {
        event.custom({
        type: 'custommachinery:custom_machine',
        machine: tier,
        time: ticktime,
        requirements: [
          {type: 'custommachinery:item', mode: 'input', item: input1, amount: amount1},
          {type: 'custommachinery:item', mode: 'input', item: input2, amount: amount2},
          {type: 'custommachinery:item', mode: 'input', item: input3, amount: amount3},
          {type: 'custommachinery:item', mode: 'input', item: input4, amount: amount4},
        
          {type: 'custommachinery:energy_per_tick', mode: 'input', amount: energy},
        
          {type: 'custommachinery:item', mode: 'output', item: result, amount: resultamount}
        ]})}})
    
    //Machine recipes

    // function machine(custommachine,time,requirements){
    //     e.recipes.custommachinery.custon_machine('custommachinery:'+`${custommachine}`,time).requirements
    // }

    // machine('basic_cobble_refiner',200)
    //     .requireItem("minecraft:cobblestone","slot1")
    //     .produceFluid(Fluid.of('kubejs:fluids/unrefined_cobblestone',100),"fluid1")

    e.recipes.custommachinery.custom_machine('custommachinery:basic_cobble_refiner',200)
        .requireItem("minecraft:cobblestone","slot1")
        .produceFluid(Fluid.of('kubejs:fluids/unrefined_cobblestone',100),"fluid1")
        // .runCommandOnEnd("/playsound minecraft:block.anvil.use ambient @a ~ ~ ~ 0.25",2,false).hide()
        

    var materials = ['cobblestone','iron','copper','tin','silver']
    materials.forEach(material=>{
        e.recipes.custommachinery.custom_machine('custommachinery:filler',60)
        .requireItem('minecraft:bucket',"slot1")
        .requireFluid(Fluid.of(`kubejs:fluids/unrefined_${material}`,1000),"fluid1")
        .produceItem(`kubejs:fluids/unrefined_${material}_bucket`,"slot2")
    })   

    e.recipes.custommachinery.custom_machine('custommachinery:basic_refiner',400)
        .requireFluid(Fluid.of('kubejs:fluids/unrefined_cobblestone',1000),"fluid1")
        .produceFluid(Fluid.of('kubejs:fluids/unrefined_iron',100),"fluid2")
        .produceFluid(Fluid.of('kubejs:fluids/unrefined_copper',25),"fluid3").chance(0.3)
        .produceFluid(Fluid.of('kubejs:fluids/unrefined_tin',10),"fluid4").chance(0.2)
        .produceFluid(Fluid.of('kubejs:fluids/unrefined_silver',5),"fluid5").chance(0.1)
    
    e.recipes.custommachinery.custom_machine('custommachinery:cobble_gen_mk1',100)
        .produceItem('minecraft:cobblestone',"slot1")
        .requireStructure([
            ["ccc","ccc","ccc"],
            ["ccc","ccc","ccc"],
            ["ccc","ccc","ccc"],
            ["   "," m ","   "]
        ],{c:"minecraft:cobblestone"})

    //Crafting machines
    e.shaped(Item.of('custommachinery:custom_machine_item',{machine:'custommachinery:basic_cobble_refiner'}),['CCC','EcF','CCC'],{
        C:'compressedblocks:c0_cobblestone',
        c:'integrateddynamics:cable',
        E:'integratedtunnels:part_exporter_item',
        F:'integratedtunnels:part_importer_fluid'
    })
    e.shaped(Item.of('custommachinery:custom_machine_item',{machine:'custommachinery:basic_refiner'}),['CCC','EMI','CCC'],{
        M:Item.of('custommachinery:custom_machine_item','{machine:"custommachinery:basic_cobble_refiner"}'),
        C:'compressedblocks:c0_cobblestone',
        E:'integratedtunnels:part_exporter_fluid',
        I:'integratedtunnels:part_importer_fluid'
    })  
    e.shaped(Item.of('custommachinery:custom_machine_item',{machine:'custommachinery:filler'}),['CCC','EBI','CeC'],{
        C:'compressedblocks:c0_cobblestone',
        E:'integratedtunnels:part_exporter_item',
        I:'integratedtunnels:part_importer_item',
        e:'integratedtunnels:part_exporter_fluid',
        B:'minecraft:bucket'
    })
})