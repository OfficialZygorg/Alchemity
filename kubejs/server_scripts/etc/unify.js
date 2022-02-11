// onEvent('recipes',e=>{  
// var mods = ['thermal','mekanism','immersiveengineering']
// var names = ['copper','tin','silver']
// names.forEach(name => {
//     mods.forEach(mod => {
//         if(mod != 'mekanism' && mod != 'immersiveengineering'){
//             e.shapeless(`9x ${mod}:${name}_nugget`, `${mod}:${name}_ingot`)
//             e.shapeless(`${mod}:${name}_ingot`, `9x ${mod}:${name}_nugget`)
//             e.shapeless(`${mod}:${name}_block`, `9x ${mod}:${name}_ingot`)
//             e.shapeless(`9x ${mod}:${name}_ingot`, `${mod}:${name}_block`)
//             } else {
//             e.shapeless(`9x ${mod}:nugget_${name}`, `${mod}:ingot_${name}`)
//             e.shapeless(`${mod}:ingot_${name}`, `9x ${mod}:nugget_${name}`)
//             e.shapeless(`${mod}:block_${name}`, `9x ${mod}:ingot_${name}`)
//             e.shapeless(`9x ${mod}:ingot_${name}`, `${mod}:block_${name}`)
//             }
//         })
//     })
// })