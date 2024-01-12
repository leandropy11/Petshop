import pg from 'pg'; // Usado para poder fazer a conexão com o postgreSQL

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: process.env.DB_CONFIG,
    });

    global.connection = pool;

    return pool.connect();
}

export {
    connect
}