//Modify harvest level
onEvent('block.modification',e=>{
    e.modify('%astralsorcery.crystals'),block=>block.harvestLevel=1
})