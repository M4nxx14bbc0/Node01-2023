import createConnectionPool, { sql } from "@databases/connection-pool";

async function run(){
    const pool = createConnectionPool('mysql://')
}