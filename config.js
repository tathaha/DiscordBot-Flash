module.exports = {
    "token": "process.env.TOKEN",
    "prefix": "",
    "MEMER_API_TOKEN": "", // Get The Memer API Token from https://discord.com/invite/emD44ZJaSA
    "TENOR_API_KEY": "", // Get The Tenor API Key from https://www.tenor.co/api/v1/key/
    "mongooseConnectionString": "", 
    "id": "process.env.ID",  // https://discordapp.com/developers/applications/ID/information,
    "clientSecret": "process.env.SECRET",  // https://discordapp.com/developers/applications/ID/information,
    "domain": "http://localhost:3000",
    "port": 3000,
    "usingCustomDomain": true
}

/**
 * !!!
 * You need to add a redirect url to https://discordapp.com/developers/applications/ID/oauth2.
 * Format is: domain:port/callback example http://localhost:8080/callback
 * - Do not include port if the port is 80.
 * !!!
 */


