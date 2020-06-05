//importar a denpendencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

//utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {
//     //Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `);

//     //Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     // const values = [
//     //     "https://cdn.pixabay.com/photo/2012/03/04/01/05/battery-22225_960_720.jpg",
//     //     "Colectoria",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos Eletrônicos, Lâmpadas"
//     // ]

//     // const values = [
//     //     "https://cdn.pixabay.com/photo/2016/11/23/15/49/bundle-1853667_960_720.jpg",
//     //     "Paperside",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 250",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]

    

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err);
//         }

//         console.log("Cadastrado com sucesso");
//         console.log(this);
//     };

//     // db.run(query, values, afterInsertData);


//     //Consultar dados na tabela
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros:");
//         console.log(rows);
//     });

//     //deletar dados na tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     //     if(err) {
//     //         return console.log(err);
//     //     }

//     //     console.log("Registro deletado com sucesso!");
//     // });
// })