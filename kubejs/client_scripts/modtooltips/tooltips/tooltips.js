// // onEvent('item.tooltip',e=>{
// //     function tooltip(item, message) {
// //         e.add(item, message)
// //     }

//     tooltip(Item.of('custommachinery:custom_machine_item',{machine:'custommachinery:basic_refiner'}),[
//         'A machine to simply melt down cobblestone via unknown means.',
//         '§4§lWARNING: DONT DRINK THE UNREFINED COBBLESTONE'])
// })

// onEvent('item.tooltip', e=> {
//     e.addAdvanced(Item.of('custommachinery:custom_machine_item'), (item, adv, text) => {
//         if(item.hasNBT({machine:'custommachinery:basic_refiner'})) { // Check if the item has NBT
//             // Add further logic here if you'd like.
//             text.add(
//                 'A machine to simply melt down cobblestone via unknown means.',
//                 '§4§lWARNING: DONT DRINK THE UNREFINED COBBLESTONE');
//         }else{
//             text.add();
//         }
//     })
// })