// -- osnovna APP klasa --------------------------------------------------------
ib.AppSendSmsWpPlugin = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.AppSendSmsWpPlugin,ib.AppOneAPI); 

ib.AppSendSmsWpPlugin.prototype._init = function(attrs) {            
    // etc init
    this._super("_init",attrs);    
    this.objectSubClass = "AppSendSmsWpPlugin";
    this.applicationObjectsSpace = ['AppOneAPI'];    
    ib.apiAuth.setAttr('ibAuthCookie',this.getAttr('ibsso',''));
}


ib.AppSendSmsWpPlugin.className = "AppSendSmsWpPlugin";
ib.AppSendSmsWpPlugin.fullClassName = 'ib.AppSendSmsWpPlugin';
      

ib.AppSendSmsWpPlugin.startApp = function(args) {
    ib.setAPIurl("https://oneapi.infobip.com/1");
    var app = FM.AppObject.startApp({
        appClass: 'ib.AppSendSmsWpPlugin',
        options: args
    });
    if(app) {
        app.mlInit();
    }
    return app;
}


