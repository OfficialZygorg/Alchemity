onEvent('recipes',e=>{
    var materials = ['cobblestone','gravel','sand']
    materials.forEach(material=>{
        e.shapeless(`compressedblocks:c0_${material}`,[`9x minecraft:${material}`])
    })
})