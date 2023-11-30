(async () => {

    const database = require('./db');
    const Usuário = require('./Repositorio/usuario');
    await database.sync();
})();
