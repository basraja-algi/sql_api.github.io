exports.dbconnection = function () {
    var dbconfig = {
        user: "basraja",
        password: "123456",
        server: "DESKTOP-JJ3EHJC",
        trustServerCertificate: true,
        database: "task1",
        dialect: "mssql",
        port: 1433,

    };

    return dbconfig;
};