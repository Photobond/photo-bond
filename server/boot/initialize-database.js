module.exports = function(app) {
    var throwError = function(err) {
      if (err) {
        throw err;
      }
    };

    app.dataSources.mysqlDb.automigrate('User', throwError);          

    app.dataSources.mysqlDb.automigrate('AccessToken', throwError);

    app.dataSources.mysqlDb.automigrate('ACL', throwError);

    app.dataSources.mysqlDb.automigrate('RoleMapping', throwError);

    app.dataSources.mysqlDb.automigrate('Role', throwError);
 };
