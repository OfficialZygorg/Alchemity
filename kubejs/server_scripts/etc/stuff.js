settings.logAddedRecipes = true
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//On login, apply fly
onEvent('player.logged_in',e=>{
    let username = e.player.name
    if (!e.player.stages.has('joined')) {
        e.player.stages.add('joined');
        e.player.stages.remove('left');
        e.server.runCommand(`fly ${username}`);
        e.server.runCommand(`say Enabled fly for ${username}`);
    }
})

//On logout, remove fly
onEvent('player.logged_out',e=>{
    let username = e.player.name
    if (!e.player.stages.has('left')) {
        e.player.stages.add('left');   
        e.player.stages.remove('joined');
        e.server.runCommand(`fly ${username}`);
        e.server.runCommand(`say Disabled fly for ${username}`);
    }
})

//Perma commands
onEvent('player.tick',e=>{
    e.server.runCommandSilent('/difficulty peaceful')
    e.server.runCommandSilent('/gamerule doMobSpawning false')
})