
var appStat = require("./app-stat");

module.exports = {
  add: function(session, application, config){
    var appSession = { name: application };
    
    appStat.statApp(application, config, function(stat){
      appSession.stats = stat;
      console.log(stat);
    });
    
    session.applications[application] = appSession;
  },
  create: function(){
    return {
      applications: {}
    };
  }
}
