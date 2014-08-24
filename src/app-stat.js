
var exec = require("child_process").exec;
var ps_command = "ps ux";

module.exports = {
  statApp: function(name, config, callback){
    exec(ps_command + " | grep \"" + name + "\"", function(err, stdout){
      if(err) throw new Error(err);
      
      var list = stdout.toString().split("\n");
      
      var appStat={
        isRunning: false,
        instances: []
      };
      for(i in list){
        var line = list[i];
        var pid = line.split(" ")[2];
        if(typeof pid !== "undefined"){
          appStat.instances.push({name: name, pid: pid});
          appStat.isRunning = true;
        }
      }
      callback(appStat);
    });
  }
}
