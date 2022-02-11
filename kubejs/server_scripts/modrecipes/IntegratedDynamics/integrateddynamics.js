onEvent('recipes',e=>{
    e.shaped('6x integrateddynamics:cable',['CCC',' P ','CCC'],{
        C:'minecraft:cobblestone',
        P:'minecraft:oak_planks'
    })
    e.shaped('6x integratedtunnels:part_interface_item',['C C','CcC','C C'],{
        C:'minecraft:cobblestone',
        c:'integrateddynamics:cable'
    })
    e.shaped('6x integratedtunnels:part_interface_fluid',['CCC',' c ','CCC'],{
        C:'minecraft:cobblestone',
        c:'integrateddynamics:cable'
    })
    e.shaped('2x integratedtunnels:part_exporter_item',['CCC',' cC','CCC'],{
        C:'minecraft:cobblestone',
        c:'integrateddynamics:cable'
    })
    e.shaped('2x integratedtunnels:part_importer_item',['CCC','Cc ','CCC'],{
        C:'minecraft:cobblestone',
        c:'integrateddynamics:cable'
    })
    e.shaped('2x integratedtunnels:part_exporter_fluid',['CCC',' cE','CCC'],{
        C:'minecraft:cobblestone',
        c:'integrateddynamics:cable',
        E:'integratedtunnels:part_exporter_item'
    })
    e.shaped('2x integratedtunnels:part_importer_fluid',['CCC','Ic ','CCC'],{
        C:'minecraft:cobblestone',
        c:'integrateddynamics:cable',
        I:'integratedtunnels:part_importer_item'
    })
    e.shaped('integrateddynamics:portable_logic_programmer',['cEc','eCi','cIc'],{
        c:'integrateddynamics:cable',
        e:'integratedtunnels:part_exporter_item',
        i:'integratedtunnels:part_importer_item',
        E:'integratedtunnels:part_exporter_fluid',
        I:'integratedtunnels:part_importer_fluid',
        C:'integratedtunnels:part_interface_item'
    })
    e.shaped('16x integrateddynamics:variable',['CPC','PPP','CPC'],{
        C:'integrateddynamics:cable',
        P:'minecraft:oak_planks'
    })
})