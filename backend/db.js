const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')
const adapter = new FileSync('catdb.json')
const db = low(adapter)

db._.mixin(require('underscore-db'))

db.defaults({ cats: [ ]})
  .write()

function get(id) {
    return db.get('cats')
             .getById(id)
             .value()
}

module.exports = function() {

   return {

     add: function(body) {
        let postId = shortid.generate()

        db.get('cats')
          .push({ id: postId, name: body.name  })
          .write()
                   
        return get(postId)
      },              

      get: get,

      update: function(id, body) {
        db.get('cats')
          .getById(id)
          .assign({ name: body.name })
          .write()

        return get(id)
      },

      delete: function(id) {
        return db.get('cats')
                 .removeById(id)
                 .write()
      }
   }
}