const shortid = require('shortid')
const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({
    ads: []
}).write()

function createAd(name, website, uid){
    db
    .get('ads')
    .push({ name, website, uid, id: shortid.generate(), clicks: 0, users: [], stats: {} })
    .write()
}

function getAds() {
    return db.get('ads').value()
}

module.exports.createAd = createAd
module.exports.getAds = getAds
module.exports.d = db