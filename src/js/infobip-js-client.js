if(typeof(ib) == 'undefined') {
    /**
    * @namespace Basic SDK namespace
    */
    ib = {};    
// -- Account balance ----------------------------------------------------------
ib.DmAccountBalance = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.DmAccountBalance, FM.DmObject); 

// properties
ib.DmAccountBalance.prototype.objectSubClass = "";

// methods
ib.DmAccountBalance.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        currency: {
            id: '',
            currencyName: '',
            symbol: ''
        },
        balance: ''
    });
    this.objectSubClass = "AccountBalance";
}
        
ib.DmAccountBalance.prototype.getDataID = function() {
    return this.getID();
}
ib.DmAccountBalance.className = "DmAccountBalance";
ib.DmAccountBalance.fullClassName = 'dm.DmAccountBalance';
FM.DmObject.addSubClassType('AccountBalance',ib.DmAccountBalance,"AppOneAPI");
// Inbound sms message 
ib.DmInboundSmsMessage = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmInboundSmsMessage, FM.DmObject); // extends FM.Object

// properties
ib.DmInboundSmsMessage.prototype.objectSubClass = "";

// methods
ib.DmInboundSmsMessage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        messageId: '',
        dateTime: '',
        destinationAddress: '',    
        message: '',
        resourceURL: '',
        senderAddress: ''
    });
    this.objectSubClass = "InboundSmsMessage";
}
        
ib.DmInboundSmsMessage.prototype.getDataID = function() {
    return this.getAttr('messageId','');
}

ib.DmInboundSmsMessage.className = "DmInboundSmsMessage";
ib.DmInboundSmsMessage.fullClassName = 'dm.DmInboundSmsMessage';
FM.DmObject.addSubClassType('InboundSmsMessage',ib.DmInboundSmsMessage,"AppOneAPI");
// -- timezones ----------------------------------------------------------------
ib.DmTimezone = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmTimezone, FM.DmObject); 

// properties
ib.DmTimezone.prototype.objectSubClass = "";

// methods
ib.DmTimezone.prototype._init = function(attrs) {            
    this._super("_init",attrs, {
        id: '',
        name: '',
        standardUtcOffset: '',
        dstOffset: '',
        dstStartTime: '',
        dstEndTime: '',
        countryId: '',
        title: ''
    });
    this.objectSubClass = "Timezone";

    var utcOff = parseInt(this.getAttr('standardUtcOffset',0));
    var utcH = utcOff / 60.0;
    var offH = Math.floor(Math.abs(utcH)) * (utcH < 0 ? -1 : 1);
    var offM = Math.floor(Math.abs(utcH - offH) * 60);
    var offStr = '(UTC ' + (offH < 0 ? '-' : '+');
    
    offStr += (offH < 10 && offH > -10 ?
        '0' + '' + Math.abs(offH) :
        '' + Math.abs(offH)) +
    ':' +
    (offM < 10 && offM > -10 ?
        '0' + '' + offM :
        '' + offM) +
    ') '
    ;
    
    this.setAttr('title',offStr + this.getAttr('name',''));
}
        
ib.DmTimezone.prototype.getDataID = function() {
    return this.getAttr('id','');
}


ib.DmTimezone.className = "DmTimezone";
ib.DmTimezone.fullClassName = 'dm.DmTimezone';

FM.DmObject.addSubClassType('Timezone',ib.DmTimezone,"AppOneAPI");
ib.DmApiError = function() {
    this._init.apply(this, arguments);
}
FM.extendClass(ib.DmApiError, FM.DmGenericError);

// properties
ib.DmApiError.prototype.objectSubClass = "";

ib.DmApiError.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        clientCorrelator: '',        
        serviceException: {},
        policyException: {},
        messageId: '',
        text: ''
    });
    
    this.objectSubClass = "ApiErrors";
    
    if(this.getAttr('messageId','') == '') {
        var messageId = this.getAttr('serviceException.messageId',this.getAttr('policyException.messageId',''));
        var text = this.getAttr('serviceException.text', this.getAttr('policyException.text',''));
        var variables = this.getAttr('serviceException.variables', this.getAttr('policyException.variables',''));
        if(FM.isArray(variables)) {
            for(var i=variables.length-1; i > -1; i--) {
                text = text.replace('%' + (i+1),variables[i]);
            }
        }

        this.setAttr('messageId',messageId);
        this.setAttr('text',text);
    }
}

ib.DmApiError.className = "DmApiError";
ib.DmApiError.fullClassName = 'dm.DmApiError';

FM.DmObject.addSubClassType('ApiErrors',ib.DmApiError,"AppOneAPI");
// -- languages ----------------------------------------------------------------
ib.DmLanguage = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmLanguage, FM.DmObject); 

// properties
ib.DmLanguage.prototype.objectSubClass = null;

// methods
ib.DmLanguage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        languageCode: '',
        languageName: '',
        languageNameLocal: ''
    });
    this.objectSubClass = "Language";
}
        
ib.DmLanguage.prototype.getDataID = function() {
    return this.getAttr('languageCode','');
}


ib.DmLanguage.className = "DmLanguage";
ib.DmLanguage.fullClassName = 'dm.DmLanguage';

FM.DmObject.addSubClassType('Language',ib.DmLanguage,"AppOneAPI");

ib.DmTopupItem = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.DmTopupItem, FM.DmObject); 

// properties
ib.DmTopupItem.prototype.objectSubClass = "";

// methods
ib.DmTopupItem.prototype._init = function(attrs) {
    this._super("_init",attrs, {  
        service: 'google',
        userid: '',
        amount: 0,
        fee: 0,
        vat: 0,
        total: 0,
        vatPercentage: 0,
        feePercentage: 0
    });
    this.objectSubClass = "TopupItem";    
}
        
ib.DmTopupItem.prototype.getDataID = function() {
    return this.getID();
}
ib.DmTopupItem.className = "DmTopupItem";
ib.DmTopupItem.fullClassName = 'dm.DmTopupItem';
FM.DmObject.addSubClassType('TopupItem',ib.DmTopupItem,"AppOneAPI");

// -- countries ----------------------------------------------------------------
ib.DmPasswordChange = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmPasswordChange, FM.DmObject); 

// properties
ib.DmPasswordChange.prototype.objectSubClass = "";

// methods
ib.DmPasswordChange.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        oldPassword: '', 
        newPassword: '', 
        newPassword2: ''
    });
    this.objectSubClass = "PasswordChange";
}
        
ib.DmPasswordChange.prototype.getDataID = function() {
    return this.getID();
}


ib.DmPasswordChange.className = "DmPasswordChange";
ib.DmPasswordChange.fullClassName = 'dm.DmPasswordChange';

FM.DmObject.addSubClassType('PasswordChange',ib.DmPasswordChange,"AppOneAPI");
// -- captcha ------------------------------------------------------------------
ib.DmCaptcha = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmCaptcha, FM.DmObject); 

// properties
ib.DmCaptcha.prototype.objectSubClass = "";

// methods
ib.DmCaptcha.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        width: 0,
        height: 0,
        imageFormat: 'png',
        image: ''
    });
    this.objectSubClass = "Captcha";
}
        
ib.DmCaptcha.prototype.getDataID = function() {
    return this.getAttr('id','');
}

ib.DmCaptcha.prototype.getImageUrl = function() {
    return "data:image/" + this.getAttr('imageFormat','png') + 
    ";base64," +  this.getAttr('image','')
;
}

ib.DmCaptcha.className = "DmCaptcha";
ib.DmCaptcha.fullClassName = 'dm.DmCaptcha';

FM.DmObject.addSubClassType('Captcha',ib.DmCaptcha,"AppOneAPI");
ib.DmTopupItemQuery = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.DmTopupItemQuery, FM.DmObject); 

// properties
ib.DmTopupItemQuery.prototype.objectSubClass = "";

// methods
ib.DmTopupItemQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {   
        service: 'google',
        from: 100,
        to: null,
        step: 1
    });
    this.objectSubClass = "TopupItemQuery";    
}
        
ib.DmTopupItemQuery.prototype.getDataID = function() {
    return this.getID();
}
ib.DmTopupItemQuery.className = "DmTopupItemQuery";
ib.DmTopupItemQuery.fullClassName = 'dm.DmTopupItemQuery';
FM.DmObject.addSubClassType('TopupItemQuery',ib.DmTopupItemQuery,"AppOneAPI");
// -- countries ----------------------------------------------------------------
ib.DmCountry = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmCountry, FM.DmObject); 

// properties
ib.DmCountry.prototype.objectSubClass = "";

// methods
ib.DmCountry.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        code: '',
        prefix: '',
        name: '',
        locale: ''
    });
    this.objectSubClass = "Country";
}
        
ib.DmCountry.prototype.getDataID = function() {
    return this.getAttr('code','');
}


ib.DmCountry.className = "DmCountry";
ib.DmCountry.fullClassName = 'dm.DmCountry';

FM.DmObject.addSubClassType('Country',ib.DmCountry,"AppOneAPI");
ib.DmMoAvailableNumber = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmMoAvailableNumber, FM.DmObject); // extends FM.Object

// properties
ib.DmMoAvailableNumber.prototype.objectSubClass = "";

// methods
ib.DmMoAvailableNumber.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        //id: '',
        number: '',
        free: '',
        networkId: '',
        networkName: '',
        setupFee: 0.0,
        monthlyFee: 0.0,
        // added after fetch
        _query: {}
    });
    this.objectSubClass = "MoAvailableNumber";
}
        
ib.DmMoAvailableNumber.prototype.getDataID = function() {
    return this.getID();
}

ib.DmMoAvailableNumber.className = "DmMoAvailableNumber";
ib.DmMoAvailableNumber.fullClassName = 'dm.DmMoAvailableNumber';
FM.DmObject.addSubClassType('MoAvailableNumber',ib.DmMoAvailableNumber,"AppOneAPI");
// -- user credentials ---------------------------------------------------------
ib.DmUserCredentials = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmUserCredentials, FM.DmObject); 

// properties
ib.DmUserCredentials.prototype.objectSubClass = "";

// methods
ib.DmUserCredentials.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: "",
        key: "",
        accountKey: "",
        username: "",
        ibAuthCookie: "",
        verified: false
    });
    this.objectSubClass = "UserCredentials";
}
        
ib.DmUserCredentials.prototype.getDataID = function() {
    return this.getAttr('ibAuthCookie','');
}

ib.DmUserCredentials.prototype.isAuthenticated = function() {
    return this.getAttr('ibAuthCookie','') != '';
}

ib.DmUserCredentials.prototype.isVerified = function() {
    return this.getAttr('ibAuthCookie','') != '' && this.getAttr('verified',false);
}

ib.DmUserCredentials.className = "DmUserCredentials";
ib.DmUserCredentials.fullClassName = 'dm.DmUserCredentials';

FM.DmObject.addSubClassType('UserCredentials',ib.DmUserCredentials,"AppOneAPI");
// -- customer profile ---------------------------------------------------------
ib.DmCustomerProfile = function() {
    this._init.apply(this, arguments); // new poziva 
    
    this._init = function(a,b,c) {
        
    }
}
FM.extendClass(ib.DmCustomerProfile, FM.DmObject); // extends FM.Object

// properties
ib.DmCustomerProfile.prototype.objectSubClass = "";

// methods
ib.DmCustomerProfile.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        id: '',
        accountId: '',
        accountKey: '',
        canSendTraffic: '',
        city: '',
        countryCode: '',
        countryId: '',
        email: '',
        enabled: '',
        fax: '',
        forename: '',
        gsm: '',
        key: '',
        locked: '',
        msn: '',
        primaryLanguageId: '',
        secondaryLanguageId: '',
        skype: '',
        street: '',
        surname: '',
        telephone: '',
        username: '',
        zipCode: '',
        _custom: ''
    });
    this.objectSubClass = "CustomerProfile";
}
        
ib.DmCustomerProfile.prototype.getDataID = function() {
    return this.getAttr('key','');
}
ib.DmCustomerProfile.className = "DmCustomerProfile";
ib.DmCustomerProfile.fullClassName = 'dm.DmCustomerProfile';
FM.DmObject.addSubClassType('CustomerProfile',ib.DmCustomerProfile,"AppOneAPI");
// inbound available numbers query
ib.DmMoAvailableQuery = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.DmMoAvailableQuery, FM.DmObject); 

// properties
ib.DmMoAvailableQuery.prototype.objectSubClass = "";

// methods
ib.DmMoAvailableQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        countryId: '',
        countryCode: '',
        dateFrom: '',
        dateTo: '',
        criteria: '',
        page: '1',
        pageSize: '20'
    });
    this.objectSubClass = "MoAvailableQuery";    
}
        
ib.DmMoAvailableQuery.prototype.getDataID = function() {
    return this.getID();
}
ib.DmMoAvailableQuery.className = "DmMoAvailableQuery";
ib.DmMoAvailableQuery.fullClassName = 'dm.DmMoAvailableQuery';
FM.DmObject.addSubClassType('MoAvailableQuery',ib.DmMoAvailableQuery,"AppOneAPI");
// -- user login data ----------------------------------------------------------
ib.DmUserLoginData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmUserLoginData, FM.DmObject); 

// properties
ib.DmUserLoginData.prototype.objectSubClass = "";

// methods
ib.DmUserLoginData.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        username: '',
        password: '',
        allowChangeIP: false
    });
    this.objectSubClass = "UserLoginData";
}
        
ib.DmUserLoginData.prototype.getDataID = function() {
    return this.getAttr('username','');
}


ib.DmUserLoginData.className = "DmUserLoginData";
ib.DmUserLoginData.fullClassName = 'dm.DmUserLoginData';

FM.DmObject.addSubClassType('UserLoginData',ib.DmUserLoginData,"AppOneAPI");
// Delivery info !! dupli (DmDeliveryInfoNotification)
ib.DmDeliveryInfo = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmDeliveryInfo, FM.DmObject); // extends FM.Object

// properties
ib.DmDeliveryInfo.prototype.objectSubClass = "";

// methods
ib.DmDeliveryInfo.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        address: '',
        deliveryStatus: '',
        deliveryInfoMessage: ''
    });
    this.objectSubClass = "DeliveryInfo";
}
        
ib.DmDeliveryInfo.prototype.getDataID = function() {
    return this.getID();
}

ib.DmDeliveryInfo.className = "DmDeliveryInfo";
ib.DmDeliveryInfo.fullClassName = 'dm.DmDeliveryInfo';
FM.DmObject.addSubClassType('DeliveryInfo',ib.DmDeliveryInfo,"AppOneAPI");
// MO subscription
ib.DmMoSubscription = function() {
    this._init.apply(this, arguments);
}
FM.extendClass(ib.DmMoSubscription, FM.DmObject); 

// properties
ib.DmMoSubscription.prototype.objectSubClass = "";

// methods
ib.DmMoSubscription.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        subscriptionId: '',
        notifyURL: '',
        callbackData: '',
        criteria:"",
        destinationAddress: '',
        notificationFormat: '',
        title: ''
    });
    this.objectSubClass = "MoSubscription";
    this.setAttr('title',this.getAttr('destinationAddress','') + ', ' + this.getAttr('criteria',''));
    this.setChanged(false,false);
}

ib.DmMoSubscription.prototype.getDataID = function() {
    return this.getAttr('subscriptionId','');
}
ib.DmMoSubscription.className = "DmMoSubscription";
ib.DmMoSubscription.fullClassName = 'dm.DmMoSubscription';
FM.DmObject.addSubClassType('MoSubscription',ib.DmMoSubscription,"AppOneAPI");
//-- usename check -------------------------------------------------------------
ib.DmUsernameCheck = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmUsernameCheck, FM.DmObject); 

// properties
ib.DmUsernameCheck.prototype.objectSubClass = "";

// methods
ib.DmUsernameCheck.prototype._init = function(attrs) {
    this._super("_init",attrs, {
    	usernameCheck: ''
    });
    this.objectSubClass = "UsernameCheck";
}
        
ib.DmUsernameCheck.prototype.getDataID = function() {
    return this.getID();
}

ib.DmUsernameCheck.className = "DmUsernameCheck";
ib.DmUsernameCheck.fullClassName = 'dm.DmUsernameCheck';

FM.DmObject.addSubClassType('UsernameCheck',ib.DmUsernameCheck,"AppOneAPI");
// delivery status of SMS message
ib.DmDeliveryInfoNotification = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmDeliveryInfoNotification, FM.DmObject); // extends FM.Object

// properties
ib.DmDeliveryInfoNotification.prototype.objectSubClass = "";

// methods
ib.DmDeliveryInfoNotification.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        deliveryInfo: {
            address: '',
            deliveryStatus: ''
        },
        callbackData: ''
    });
    this.objectSubClass = "DeliveryInfoNotification";
}
        
ib.DmDeliveryInfoNotification.prototype.getDataID = function() {
    return this.getID();
}

ib.DmDeliveryInfoNotification.className = "DmDeliveryInfoNotification";
ib.DmDeliveryInfoNotification.fullClassName = 'dm.DmDeliveryInfoNotification';
FM.DmObject.addSubClassType('DeliveryInfoNotification',ib.DmDeliveryInfoNotification,"AppOneAPI");
// -- REST resource reference --------------------------------------------------
ib.DmResourceReference = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmResourceReference, FM.DmObject); // extends FM.Object

// properties
ib.DmResourceReference.prototype.objectSubClass = "";

// methods
ib.DmResourceReference.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        resourceURL: '',
        resourceObject: null
    });
    this.objectSubClass = "ResourceReference";
}
        
ib.DmResourceReference.prototype.getDataID = function() {
    return this.getAttr('resourceURL','');
}
ib.DmResourceReference.className = "DmResourceReference";
ib.DmResourceReference.fullClassName = 'dm.DmResourceReference';
FM.DmObject.addSubClassType('ResourceReference',ib.DmResourceReference,"AppOneAPI");

// -- user signup data ---------------------------------------------------------
ib.DmUserSignupData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmUserSignupData, FM.DmObject); 

// properties
ib.DmUserSignupData.prototype.objectSubClass = "";

// methods
ib.DmUserSignupData.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        username: '',
        forename: 'Unknown',
        surname: 'Unknown',
        email: '',
        gsm: '',
        countryCode: '',
        timezoneId: '1',
        password: '',
        password2: '', // dummy 
        captchaId: '',
        captchaAnswer: '',
        terms: false
    });
    this.objectSubClass = "UserSignupData";
}
        
ib.DmUserSignupData.prototype.getDataID = function() {
    return this.getAttr('username','');
}

ib.DmUserSignupData.className = "DmUserSignupData";
ib.DmUserSignupData.fullClassName = 'dm.DmUserSignupData';

FM.DmObject.addSubClassType('UserSignupData',ib.DmUserSignupData,"AppOneAPI");
//-- GSM number validate -------------------------------------------------------
ib.DmGSMnumberInfo = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.DmGSMnumberInfo, FM.DmObject);

// properties
ib.DmGSMnumberInfo.prototype.objectSubClass = "";

// methods
ib.DmGSMnumberInfo.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        network: {
            id: '',
            countryId: '',
            name: '',
            visible: '',
            nnc: ''
        },
        country: {
            id: '',
            code: '',
            prefix: '',
            name: '',
            locale: ''
        },
        msisdn: ''
    });
    this.objectSubClass = "GSMnumberInfo";
}
        
ib.DmGSMnumberInfo.prototype.getDataID = function() {
    return this.getAttr('msisdn','');
}

ib.DmGSMnumberInfo.className = "DmGSMnumberInfo";
ib.DmGSMnumberInfo.fullClassName = 'dm.DmGSMnumberInfo';
FM.DmObject.addSubClassType('GSMnumberInfo',ib.DmGSMnumberInfo,"AppOneAPI");
// -- SMS message --------------------------------------------------------------
ib.DmSMSMessage = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmSMSMessage, FM.DmObject); // extends FM.Object

// properties
ib.DmSMSMessage.prototype.objectSubClass = "";

// methods
ib.DmSMSMessage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        senderAddress: '',
        senderName: '',
        message: '',
        address: '',
        notifyURL: '',
        callbackData: '',
        dataCoding: '0',
        clientCorrelator: ''
    });
    this.objectSubClass = "SMSMessage";
}
        
ib.DmSMSMessage.prototype.getDataID = function() {
    return this.getAttr('clientCorrelator','');
}
ib.DmSMSMessage.className = "DmSMSMessage";
ib.DmSMSMessage.fullClassName = 'dm.DmSMSMessage';
FM.DmObject.addSubClassType('SMSMessage',ib.DmSMSMessage,"AppOneAPI");
ib.DmUSSDQuery = function() {
    this._init.apply(this, arguments);
}
FM.extendClass(ib.DmUSSDQuery, FM.DmObject);

// properties
ib.DmUSSDQuery.prototype.objectSubClass = "";

// methods
ib.DmUSSDQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        address: '',
        message:'',
        stopSession: 'false',
        _ussd_function: null
    });
    this.objectSubClass = "USSDQuery";
}
        
ib.DmUSSDQuery.prototype.getDataID = function() {
    return this.getID();
}
ib.DmUSSDQuery.className = "DmUSSDQuery";
ib.DmUSSDQuery.fullClassName = 'dm.DmUSSDQuery';
FM.DmObject.addSubClassType('USSDQuery',ib.DmUSSDQuery,"AppOneAPI");
// -- inbound message ----------------------------------------------------------
ib.DmInboundMessage = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmInboundMessage, FM.DmObject); // extends FM.Object

// properties
ib.DmInboundMessage.prototype.objectSubClass = "";

// methods
ib.DmInboundMessage.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        dateTime: '',
        destinationAddress: '',
        messageId: '',
        message: '',
        resourceURL: '',
        senderAddress: ''
    });
    this.objectSubClass = "InboundMessage";
}
        
ib.DmInboundMessage.prototype.getDataID = function() {
    return this.getID();
}

ib.DmInboundMessage.className = "DmInboundMessage";
ib.DmInboundMessage.fullClassName = 'dm.DmInboundMessage';
FM.DmObject.addSubClassType('InboundMessage',ib.DmInboundMessage,"AppOneAPI");
// -- Hlr requests -------------------------------------------------------------
ib.DmTerminalRoamingQuery = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmTerminalRoamingQuery, FM.DmObject); // extends FM.Object

// properties
ib.DmTerminalRoamingQuery.prototype.objectSubClass = "";

// methods
ib.DmTerminalRoamingQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {        
        address: '',
        notifyURL:'',
        includeExtendedData:'',
        clientCorrelator: '',
        callbackData: ''
    });
    this.objectSubClass = "TerminalRoamingQuery";
}
        
ib.DmTerminalRoamingQuery.prototype.getDataID = function() {
    return this.getAttr('address','');
}
ib.DmTerminalRoamingQuery.className = "DmTerminalRoamingQuery";
ib.DmTerminalRoamingQuery.fullClassName = 'dm.DmTerminalRoamingQuery';
FM.DmObject.addSubClassType('TerminalRoamingQuery',ib.DmTerminalRoamingQuery,"AppOneAPI");
// inboud query
ib.DmInboundQuery = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmInboundQuery, FM.DmObject); // extends FM.Object

// properties
ib.DmInboundQuery.prototype.objectSubClass = "";

// methods
ib.DmInboundQuery.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        subscriptionId: '',
        maxBatchSize: '100'
    });
    this.objectSubClass = "InboundQuery";
}
        
ib.DmInboundQuery.prototype.getDataID = function() {
    return this.getAttr('subscriptionId','');
}

ib.DmInboundQuery.className = "DmInboundQuery";
ib.DmInboundQuery.fullClassName = 'dm.DmInboundQuery';
FM.DmObject.addSubClassType('InboundQuery',ib.DmInboundQuery,"AppOneAPI");
ib.DmTerminalRoamingStatus = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.DmTerminalRoamingStatus, FM.DmObject); // extends FM.Object

// properties
ib.DmTerminalRoamingStatus.prototype.objectSubClass = "";

// methods
ib.DmTerminalRoamingStatus.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        address: '',
        currentRoaming: '',
        currentRoamingInfoMessage: '',
        servingMccMnc: {
            mcc: '',
            mnc: ''
        },
        resourceURL: '',
        retrievalStatus: '',
        extendedData: '',
        callbackData: ''
    });
    this.objectSubClass = "TerminalRoamingStatus";
}
        
ib.DmTerminalRoamingStatus.prototype.getDataID = function() {
    return this.getAttr('resourceURL','');
}
ib.DmTerminalRoamingStatus.className = "DmTerminalRoamingStatus";
ib.DmTerminalRoamingStatus.fullClassName = 'dm.DmTerminalRoamingStatus';
FM.DmObject.addSubClassType('TerminalRoamingStatus',ib.DmTerminalRoamingStatus,"AppOneAPI");
// -- countries ----------------------------------------------------------------
ib.DmApidoc = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.DmApidoc, FM.DmObject); 

// properties
ib.DmApidoc.prototype.objectSubClass = "";

// methods
ib.DmApidoc.prototype._init = function(attrs) {
    this._super("_init",attrs, {
        method: '',
        path: '',
        httpExchangeExamples: [],
        description: '',
        version: ''
    });
    this.objectSubClass = "Apidoc";
}
        
ib.DmApidoc.prototype.getDataID = function() {
    return this.getAttr('path','');
}


ib.DmApidoc.className = "DmApidoc";
ib.DmApidoc.fullClassName = 'dm.DmApidoc';

FM.DmObject.addSubClassType('Apidoc',ib.DmApidoc,"AppOneAPI");
/* =============================================================================
 * List helper functions 
 * ========================================================================== */
// -- urls & proxy -------------------------------------------------------------
ib.apiURL = '';
ib.proxyURL= '';
ib.setProxy = function(url) {  
    ib.proxyURL = FM.isset(url) && url ? url : '';
}

ib.setAPIurl = function(url) {  
    ib.apiURL = FM.isset(url) && url ? url : '';
}


//options = {dmList: this, arguments: args};
ib.getApiUrl = function(options) {
    var dmList = FM.getAttr(options,'dmList',null);
    
    var url = ib.proxyURL != '' ? 
    ib.proxyURL :
    ib.apiURL + (
        dmList && FM.isset(dmList['getAttr']) ? 
        dmList.getProperty('config.resourcePath','') : 
        ''
        )
    ;
    
    if(url.substr(url.length-1) == "/") {
        url = url.substr(0,url.length-1);
    }
    return url;
}


// -- ajax call headers --------------------------------------------------------
ib.getApiHeaders = function(options) {
    var dmList = FM.getAttr(options,'dmList',null);
    var hdrs = {};
    if(ib.proxyURL != '') {
        if(ib.apiAuth.getAttr("ibAuthCookie",'') != '') {
            hdrs['P-Authorization'] = 'IBSSO ' + ib.apiAuth.getAttr("ibAuthCookie",'');
        }
        hdrs['P-Rest-Service'] = dmList ? dmList.getProperty('config.resourcePath','') : '';
        hdrs['P-Http-Headers'] = 'Authorization';
        hdrs['P-Http-Method']  = dmList ? dmList.getProperty('config.resourceMethod','POST') : 'POST';
    } else {
        if(ib.apiAuth.getAttr("ibAuthCookie",'') != '') {
            hdrs['Authorization'] = 'IBSSO ' + ib.apiAuth.getAttr("ibAuthCookie",'');
        }
    }
    
    return hdrs;
}

// -- ajax call method ---------------------------------------------------------
ib.getApiMethod = function(dmList) {
    if(ib.proxyURL != '') {
        return 'POST';
    } else {
        return dmList ? dmList.getProperty('config.resourceMethod','POST') : 'POST';
    }
}

// -- ajax response parsing ----------------------------------------------------
// {dmList: this, utAjax: oAjax, response: response.getAttr('value',null)}
ib.isErrorResponse = function(options) {  
    var oData = FM.getAttr(options,'response',{});
    
    if(!FM.isObject(oData)) {
        oData = FM.unserialize(oData,{});
    }
    var response = FM.isset(oData) && oData ? oData : null;
    return response && FM.isset(response['requestError']);
}

ib.errorParser = function(options) {
    var response = FM.getAttr(options,'response',{});
    if(!FM.isObject(response)) {
        response = FM.unserialize(response,{});
    }
    return new ib.DmApiError(FM.getAttr(response,'requestError',{}));
}

ib.responseParser = function(options) {
    var oData = FM.getAttr(options,'response',{});
    var oList = FM.getAttr(options,'dmList',null);
    
    if(!oList || !FM.isset(oList.getProperty)) {
        return new FM.DmGenericValue({
            value: oData
        });
    }
    
    var cls = oList.getProperty('config._responseClass',null);
    if(!cls) return new FM.DmGenericValue({
        value: oData
    });
    
    
    if(FM.isString(cls)) {
        cls = FM.stringPtrToObject(cls);
        if(!cls) return null;
    }
    
    if(!FM.isFunction(cls)) return null;
    return new cls(oData); 
}


/* =============================================================================
 * List configurations
 * ========================================================================== */
// == cache ====================================================================
FM.DmList.addConfiguration('cache', {},"AppOneAPI");

// == user managment ===========================================================
// -- user login ---------------------------------------------------------------
FM.DmList.addConfiguration('USER_login', {
    resourcePath: '/customerProfile/login',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true,
        password: true,
        allowChangeIP: true
    },
    headers: ib.getApiHeaders,
    auth: null,        
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: 'login',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmUserCredentials
},"AppOneAPI");

// -- user logout --------------------------------------------------------------
FM.DmList.addConfiguration('USER_logout', {
    resourcePath: '/customerProfile/logout',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '204', // nocontent
    listType: 'single',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser    
},"AppOneAPI");

// == utils ====================================================================
// -- validate GSM number ------------------------------------------------------
FM.DmList.addConfiguration('UTIL_validateGSMnumber', {
    resourcePath: '/networks/resolve/[:number]',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        number: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmGSMnumberInfo
},"AppOneAPI");

// -- validate username --------------------------------------------------------
FM.DmList.addConfiguration('UTIL_validateUsername', {
    resourcePath: '/customerProfile/username/check',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmUsernameCheck
},"AppOneAPI");

// -- list of countries --------------------------------------------------------
FM.DmList.addConfiguration('UTIL_countries', {
    resourcePath: '/countries/[:id]',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        id: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'collection',
    dataProperty: 'countries',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmCountry
},"AppOneAPI");

// -- list of timezones --------------------------------------------------------
FM.DmList.addConfiguration('UTIL_timezones', {
    resourcePath: '/timezones/[:id]',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        id: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'collection',
    dataProperty: 'timeZones',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmTimezone
},"AppOneAPI");

// -- list of languages --------------------------------------------------------
FM.DmList.addConfiguration('UTIL_languages', {
    resourcePath: '/languages/[:id]',
    method: ib.getApiMethod,
    url: ib.getApiUrl,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        id: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'collection',
    dataProperty: 'languages',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmLanguage
},"AppOneAPI");

// == profile managment ========================================================
// -- customer profile ---------------------------------------------------------
// ovo bi trebalo odraditi poziv sa i bez id-a
FM.DmList.addConfiguration('CUSTOMER_profile_get', {
    resourcePath: '/customerProfile/[:key]',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        key: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',    
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmCustomerProfile    
},"AppOneAPI");

// -- customer profile update --------------------------------------------------
FM.DmList.addConfiguration('CUSTOMER_profile_update', {
    resourcePath: '/customerProfile',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        //id: true,
        key: true,
        username: true,
        forename: true,
        surname: true,
        street: true,
        city: true,
        zipCode: true,
        telephone: true,
        gsm: true,
        fax: true,
        email: true,
        msn: true,
        skype: true,
        countryId: true,
        //countryCode: true,
        timezoneId: true,
        primaryLanguageId: true,
        secondaryLanguageId: true,
        enabled: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201', // ??   
    listType: 'single',    
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmCustomerProfile
},"AppOneAPI");

// == MO =======================================================================
FM.DmList.addConfiguration('SMS_inbound_update', {
    resourcePath: '/smsmessaging/inbound/subscriptions',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'PUT',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        notifyURL: true,
        subscriptionId: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser
},"AppOneAPI");

FM.DmList.addConfiguration('SMS_inbound_sub_get', {
    resourcePath: '/smsmessaging/inbound/subscriptions',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        page: '',
        pageSize: ''
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'subscriptions',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmMoSubscription
},"AppOneAPI");

FM.DmList.addConfiguration('SMS_inbound_sub_add', {
    resourcePath: '/smsmessaging/inbound/subscriptions',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        destinationAddress: '',
        criteria: '',
        notifyURL: '',
        notificationFormat: '',
        callbackData: '',
        clientCorrelator: ''  ,
        dateFrom: '',
        dateTo: ''
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: FM.DmGenericValue
},"AppOneAPI");

FM.DmList.addConfiguration('SMS_inbound_sub_delete', {
    resourcePath: '/smsmessaging/inbound/subscriptions/[:subscriptionId]',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'DELETE',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        subscriptionId: ''
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '204',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser
},"AppOneAPI");

FM.DmList.addConfiguration('SMS_inbound_get_messages', {
    resourcePath: '/smsmessaging/inbound/registrations/[:subscriptionId]/messages',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        subscriptionId: true,
        maxBatchSize: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'inboundSMSMessageList.inboundSMSMessage',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    
    // custom
    _responseClass: ib.DmInboundMessage
},"AppOneAPI");

// == SMS ======================================================================
FM.DmList.addConfiguration('SMS_send', {
    resourcePath: '/smsmessaging/outbound/[:senderAddress]/requests',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        senderAddress: true,
        senderName: true,
        message: true,
        address: true,
        notifyURL: true,
        callbackData: true,
        dataCoding: true,
        clientCorrelator: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201',
    listType: 'single',
    dataProperty: 'resourceReference',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmResourceReference
},"AppOneAPI");

// Delivery info
FM.DmList.addConfiguration('DELIVERY_INFOS_get', {
    resourcePath: '/smsmessaging/outbound/[:senderAddress]/requests/[:requestID]/deliveryInfos',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        senderAddress: true,
        requestID: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'deliveryInfoList.deliveryInfo',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    
    // custom
    _responseClass: ib.DmDeliveryInfo
},"AppOneAPI");

// == HLR ======================================================================
FM.DmList.addConfiguration('HLR_send', {
    resourcePath: '/terminalstatus/queries/roamingStatus',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {        
        address: true,
        notifyURL: true,
        includeExtendedData: true,
        clientCorrelator: true,
        callbackData: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: 'roaming',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    
    // custom
    _responseClass: ib.DmTerminalRoamingStatus
},"AppOneAPI");

    
// == USSD =====================================================================
FM.DmList.addConfiguration('USSD_send', {
    resourcePath: '/ussd/outbound',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        address: true,
        message: true,
        stopSession: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmInboundMessage
},"AppOneAPI");

FM.DmList.addConfiguration('USSD_send_stop', {
    resourcePath: '/ussd/outbound',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        address: true,
        message: true,
        stopSession: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser
},"AppOneAPI");

// == Account balance ==========================================================
FM.DmList.addConfiguration('CUSTOMER_balance_get', {
    resourcePath: '/customerProfile/balance',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    
    // custom
    _responseClass: ib.DmAccountBalance
},"AppOneAPI");

// -- resend Verification Code -------------------------------------------------
FM.DmList.addConfiguration('USER_resend_verification_code', {  
    resourcePath: '/customerProfile/generateNewVerificationCode',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: ib.getApiHeaders,
    auth: null,        
    responseFormat: 'TEXT',
    validResponseCodes: '200',
    listType: '',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: FM.DmGenericValue
},"AppOneAPI");
 
// -- username check ----------------------------------------------------------------
FM.DmList.addConfiguration('USER_username_check', {  
    resourcePath: '/customerProfile/username/check',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true
    },
    headers: ib.getApiHeaders,
    auth: null,        
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmUsernameCheck
},"AppOneAPI");


// -- captcha ------------------------------------------------------------------
FM.DmList.addConfiguration('UTIL_captcha', {  
    resourcePath: '/captcha/generate',
    url: ib.getApiUrl,
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        width: true,
        height: true,
        imageFormat: true
    },
    headers: ib.getApiHeaders,
    auth: null,        
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmCaptcha
},"AppOneAPI");

// -- user signup --------------------------------------------------------------
FM.DmList.addConfiguration('USER_signup', {
    resourcePath: '/customerProfile/signup',
    url: ib.getApiUrl,
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true,
        password: true,
        forename: true,
        surname: true,
        email: true,
        gsm: true,
        countryCode: true,
        timezoneId: true,
        // captcha
        captchaId: true,
        captchaAnswer: true        
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201', // created            
    listType: 'single',
    dataProperty: 'signup',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmUserCredentials    
},"AppOneAPI");

// -- user verify --------------------------------------------------------------
FM.DmList.addConfiguration('USER_verify', {
    resourcePath: '/customerProfile/verify',
    url: ib.getApiUrl,
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        verificationCode: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser
},"AppOneAPI");

// -- user password check ------------------------------------------------------
FM.DmList.addConfiguration('USER_password_check', {
    resourcePath: '/customerProfile/password/check',
    url: ib.getApiUrl,
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        password: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single'
},"AppOneAPI");

// -- user password generate ---------------------------------------------------
FM.DmList.addConfiguration('USER_password_generate', {
    resourcePath: '/customerProfile/password/generate',
    url: ib.getApiUrl,
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '201',
    listType: 'single'
},"AppOneAPI");

// -- user username check for avialibility -------------------------------------
FM.DmList.addConfiguration('USER_username_check', {
    resourcePath: '/customerProfile/username/check',
    url: ib.getApiUrl,
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        username: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single'
},"AppOneAPI");

// -- user password change -----------------------------------------------------
FM.DmList.addConfiguration('USER_password_change', {
    resourcePath: '/customerProfile/changePassword',
    url: ib.getApiUrl,
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        oldPassword: true,
        newPassword: true,
        newPassword2: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'single',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser    
},"AppOneAPI");


// -- MO -----------------------------------------------------------------------
FM.DmList.addConfiguration('SMS_inbound_available', {
    resourcePath: '/smsmessaging/inbound/available',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        // countryId: true,
        countryCode: true,
        dateFrom: true,
        dateTo: true,
        criteria: true,
        free: true,
        page: true,
        pageSize: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '',
    listType: 'collection',
    dataProperty: 'availableNumbers',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmMoAvailableNumber
},"AppOneAPI");

FM.DmList.addConfiguration('SMS_inbound_trial', {
    resourcePath: '/smsmessaging/inbound/freeTrial',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        notifyURL: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'availableNumbers',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmMoAvailableNumber
},"AppOneAPI");

// == payments =================================================================
// topup link
FM.DmList.addConfiguration('TOPUP_get_redir_link', {
    resourcePath: '/topup/[:service]/getRedirectUrl',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        service: true,
        credits: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'TEXT',
    validResponseCodes: '200',
    listType: 'single',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser
},"AppOneAPI");

// list of items
FM.DmList.addConfiguration('TOPUP_get_items', {
    resourcePath: '/topup/items',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {
        service: true,
        from: true,
        to: true,
        step: true
    },
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: '',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmTopupItem
},"AppOneAPI");


// list of items
FM.DmList.addConfiguration('API_doc', {
    resourcePath: '/api/doc',
    url: ib.getApiUrl,
    
    // ajax config
    method: ib.getApiMethod,
    resourceMethod: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    params: {},
    headers: ib.getApiHeaders,
    auth: null,
    responseFormat: 'JSON',
    validResponseCodes: '200',
    listType: 'collection',
    dataProperty: 'methods',
    //
    isErrorResponse: ib.isErrorResponse,
    errorParser: ib.errorParser,
    responseParser: ib.responseParser, 
    // custom
    _responseClass: ib.DmApidoc
},"AppOneAPI");
// -- API errors --------------------------------------------------------------
ib.MlHostApiErrors = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostApiErrors, FM.MlHost);

ib.MlHostApiErrors.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="ApiErrors";
}

ib.MlHostApiErrors.prototype.run = function(oErr) {
    this._super("run");
    this.setDmObject(FM.isset(oErr) && oErr ? oErr : this.getApp().getLastError());
}

ib.MlHostApiErrors.className = "MlHostApiErrors";
ib.MlHostApiErrors.fullClassName = 'lm.MlHostApiErrors';

FM.MlHost.addHost("ApiErrors",ib.MlHostApiErrors,"AppOneAPI");

// -- SMS delivery status query ------------------------------------------------
ib.MlHostQuerySMSDeliveryStatus = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostQuerySMSDeliveryStatus, FM.MlHost);

ib.MlHostQuerySMSDeliveryStatus.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="QuerySMSDeliveryStatus";
    
    this.oResourceReference = null;
    this.oTimer = null;
    this.infoMessage = this.getAttr('data-fmml-info-message','Queryng SMS delivery status ...');
    this.queryInterval = this.getAttr('data-fmml-interval','0');
    this.finished = true;  
}

ib.MlHostQuerySMSDeliveryStatus.prototype.run = function() {
    this._super("run");
    this.setDmObject(new ib.DmSMSMessage({}));
}

    
ib.MlHostQuerySMSDeliveryStatus.prototype.onQueryDeliveryStatus = function() {
    this._querySMSDeliveryStatus();
}
            

ib.MlHostQuerySMSDeliveryStatus.prototype._setStatusCss = function(newstatus) {
    newstatus = FM.isset(newstatus) ? newstatus : '';
    var node = this.getNode();
    if(node) {
        // izbaci staru css klasu
        var rmcls = "";     
        var clsstr = $(node).attr('class');
        if(!FM.isset(clsstr)) clsstr = "";
        var classes = clsstr.split(" ");
        for(var i in classes) {
            if(FM.startsWith(classes[i],'fmmlSMSStatus') && classes[i] !== 'fmmlSMSStatus') {
                rmcls = rmcls + (rmcls == "" ? "" : " ") + classes[i];
            }
        }
        if(rmcls != "") $(node).removeClass(rmcls);

        // postavi css klasu
        $(node).addClass('fmmlSMSStatus' + newstatus);
    }
}
        
ib.MlHostQuerySMSDeliveryStatus.prototype._querySMSDeliveryStatus = function() {
    var me = this;
    if(this.queryInterval <= 0) return; 
    var suspended = false;
    if(this.oTimer && !this.oTimer.isStarted()) {
        this.oTimer.suspend();                
        suspended = true;
    }


    this.app.queryDeliveryStatus(
        this.oResourceReference.getAttr('resourceObject.senderAddress',''),
        this.oResourceReference.getAttr('resourceObject.clientCorrelator',''),
        function(ok, ds) {
            if(ok) {
                ds.setAttr(
                    'deliveryInfoMessage',
                    FM.isset(ib.MlHostQuerySMSDeliveryStatus.statusMapping[ds.getAttr('deliveryStatus','')]) ? 
                    ib.MlHostQuerySMSDeliveryStatus.statusMapping[ds.getAttr('deliveryStatus','')] : ds.getAttr('deliveryStatus','')
                );
                me.setDmObject(ds);
                if(ds.getAttr('deliveryStatus','') == 'DeliveredToTerminal') {
                    if(me.oTimer && me.oTimer.isStarted()) {
                        me.oTimer.dispose();
                        this.finished = true;
                    }
                }
                me._setStatusCss(ds.getAttr('deliveryStatus',''));
            } else {                        
                me._setStatusCss('MessageError');
            }

            if(me.oTimer && suspended && !this.finished) {
                me.oTimer.resume();
            }
        });
}
            
ib.MlHostQuerySMSDeliveryStatus.prototype.run = function(oResRef) {
    if(!oResRef) return;

    this._super("run");      
    this.oResourceReference = oResRef;
    if(this.oTimer) this.oTimer.dispose();

    this.setDmObject(new ib.DmDeliveryInfo({
        deliveryStatus: 'DeliveryQueryStart',
        deliveryInfoMessage: this.infoMessage
    }));

    if(this.queryInterval > 0) {
        this.finished = false;                    
        this.oTimer = new FM.UtTimerJob('onQueryDeliveryStatus',{},this.queryInterval,10); // 10 times                
        this.oTimer.addListener(this);
    } 

    this._setStatusCss();
    this._querySMSDeliveryStatus();  
    this.oTimer.start();
}
ib.MlHostQuerySMSDeliveryStatus.className = "MlHostQuerySMSDeliveryStatus";
ib.MlHostQuerySMSDeliveryStatus.fullClassName = 'lm.MlHostQuerySMSDeliveryStatus';

FM.MlHost.addHost("QuerySMSDeliveryStatus",ib.MlHostQuerySMSDeliveryStatus,"AppOneAPI");

ib.MlHostQuerySMSDeliveryStatus.statusMapping = {
    DeliveryQueryStart: '',
    DeliveryImpossible: 'Message not sent',
    DeliveredToNetwork: 'Message was successfully sent!',
    DeliveredToTerminal: 'Message was successfully sent!',
    DeliveryUncertain: 'Message is waiting for delivery',
    MessageWaiting: 'Message is waiting for delivery'
};


// -- topup query --------------------------------------------------------------
ib.MlHostTopupQuery = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostTopupQuery, FM.MlHost);    
    
ib.MlHostTopupQuery.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass = "TopupQuery";
}

ib.MlHostTopupQuery.prototype.run = function(oObj) {
    this._super("run");
    this.setDmObject(oObj ? oObj : new ib.DmTopupItemQuery({}));
}
                 
ib.MlHostTopupQuery.className = "MlHostTopupQuery";
ib.MlHostTopupQuery.fullClassName = 'lm.MlHostTopupQuery';

FM.MlHost.addHost('TopupQuery', ib.MlHostTopupQuery,"AppOneAPI");
// -- Customer Balance ---------------------------------------------------------
ib.MlHostCustomerBalance = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostCustomerBalance, FM.MlHost);

ib.MlHostCustomerBalance.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="CustomerBalance";
}

ib.MlHostCustomerBalance.prototype.run = function() {
    this._super("run");
    
    var me = this;
    this.app.getAccountBalance(function(ok, cp) {
        if(ok) {
            me.setDmObject(cp);
        }                    
    });    
}

ib.MlHostCustomerBalance.className = "MlHostCustomerBalance";
ib.MlHostCustomerBalance.fullClassName = 'lm.MlHostCustomerBalance';

FM.MlHost.addHost("CustomerBalance",ib.MlHostCustomerBalance,"AppOneAPI");
// -- resend verification code -------------------------------------------------
ib.MlHostResendVerificationCode = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostResendVerificationCode, FM.MlHost);

ib.MlHostResendVerificationCode.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="ResendVerificationCode";
}

ib.MlHostResendVerificationCode.prototype.run = function() {
    this._super("run");
    this.setDmObject(new FM.DmGenericValue({})); 
}

ib.MlHostResendVerificationCode.className = "MlHostResendVerificationCode";
ib.MlHostResendVerificationCode.fullClassName = 'lm.MlHostResendVerificationCode';

FM.MlHost.addHost("ResendVerificationCode",ib.MlHostResendVerificationCode,"AppOneAPI");

// -- User credentials ---------------------------------------------------------
ib.MlHostUserCredentials = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostUserCredentials, FM.MlHost);

ib.MlHostUserCredentials.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="UserCredentials";
}

ib.MlHostUserCredentials.prototype.run = function() {
    this._super("run");
    this.setDmObject(ib.apiAuth); 
}

ib.MlHostUserCredentials.className = "MlHostUserCredentials";
ib.MlHostUserCredentials.fullClassName = 'lm.MlHostUserCredentials';

FM.MlHost.addHost("UserCredentials",ib.MlHostUserCredentials,"AppOneAPI");

// -- Customer profile ---------------------------------------------------------
ib.MlHostCustomerProfile = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostCustomerProfile, FM.MlHost);

ib.MlHostCustomerProfile.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="CustomerProfile";
}

ib.MlHostCustomerProfile.prototype.run = function() {
    this._super("run");
    
    // provjeri ima li takav objekt        
    var id = this.getAttr("data-fmml-customer-id",'me');
    var me = this;
    if(id == 'me' && !this.app.isAuthenticated()) {
        id = 'new';
    }
    this.app.getCustomerProfile(id,function(ok, cp) {
        if(ok) {
            me.setDmObject(cp);
        }                    
    });    
}

ib.MlHostCustomerProfile.className = "MlHostCustomerProfile";
ib.MlHostCustomerProfile.fullClassName = 'lm.MlHostCustomerProfile';

FM.MlHost.addHost("CustomerProfile",ib.MlHostCustomerProfile,"AppOneAPI");
// -- SMS message --------------------------------------------------------------
ib.MlHostSMSMessage = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostSMSMessage, FM.MlHost);

ib.MlHostSMSMessage.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="SMSMessage";
}

ib.MlHostSMSMessage.prototype.run = function(oObj) {
    var dmobj = null;
    
    if(!FM.isset(oObj) || !oObj) { 
        var lhost = this.getLinkedHost();
        if(lhost) {
            oObj = lhost.getDmObject();
        }
    }

    if(oObj) {
        if(oObj.getSubClassName() == 'SMSMessage') {
            dmobj = oObj;
        } else {
            dmobj = new ib.DmSMSMessage({});
            if(oObj.getSubClassName() == 'CustomerProfile') {
                dmobj.setAttr('address',oObj.getAttr("gsm",""));
                dmobj.setAttr('senderAddress',oObj.getAttr("gsm",""));
            }
        }
    } else {
        dmobj = new ib.DmSMSMessage({});
    }
    
    this._super("run",dmobj);
}

ib.MlHostSMSMessage.className = "MlHostSMSMessage";
ib.MlHostSMSMessage.fullClassName = 'lm.MlHostSMSMessage';

FM.MlHost.addHost("SMSMessage",ib.MlHostSMSMessage,"AppOneAPI");
// -- Login data ---------------------------------------------------------------
ib.MlHostUserLoginData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostUserLoginData, FM.MlHost);

ib.MlHostUserLoginData.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="UserLoginData";
}

ib.MlHostUserLoginData.prototype.run = function() {
    this._super("run");
    var obj =  new ib.DmUserLoginData({
        username: this.getAttr('data-fmml-username',''),
        password: this.getAttr('data-fmml-password','')
    });
    this.setDmObject(obj);
    
    var me = this;
    if(this.getAttr('data-fmml-login-on-run','false') == 'true') {
        //pokreni proces
        this.fireEvent('onDoLogin',{
            object: obj,
            callback: function(isok,oResponse) {

                var redir = '';
                if(isok) {
                    redir = me.getAttr('data-fmml-redirect-on-success','');
                    if(redir != '') {
                        window.location = FM.applyTemplate (oResponse.getAttr(),redir);
                    }
                    var hostToRun =  me.getAttr('data-fmml-run-on-success','');
                    if(hostToRun != '') {
                        var node = document.getElementById(hostToRun);
                        if(node && FM.isset(node.fmmlHost) && node.fmmlHost) {
                            node.fmmlHost.run(oResponse);
                        }
                    }
                } else {
                    redir = me.getAttr('data-fmml-redirect-on-error','');
                    if(redir != '') {
                        window.location = FM.applyTemplate (oResponse.getAttr(),redir);
                    }
                }
            }
        });
    }
}

ib.MlHostUserLoginData.prototype.onAuthChanged = function() {
    return true;
}

ib.MlHostUserLoginData.className = "MlHostUserLoginData";
ib.MlHostUserLoginData.fullClassName = 'lm.MlHostUserLoginData';

FM.MlHost.addHost("UserLoginData",ib.MlHostUserLoginData,"AppOneAPI");
// -- MO av query --------------------------------------------------------------
ib.MlHostInboundAvailableToBuy = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostInboundAvailableToBuy, FM.MlHost);    

ib.MlHostInboundAvailableToBuy.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass = "InboundAvailableToBuy";
}

ib.MlHostInboundAvailableToBuy.prototype.run = function(oQry) {
    this._super("run");
    this.setDmObject(oQry ? oQry : new ib.DmMoAvailableQuery({}));
}

ib.MlHostInboundAvailableToBuy.className = "MlHostInboundAvailableToBuy";
ib.MlHostInboundAvailableToBuy.fullClassName = 'lm.MlHostInboundAvailableToBuy';

FM.MlHost.addHost('InboundAvailableToBuy', ib.MlHostInboundAvailableToBuy,"AppOneAPI");
// -- HLR query ----------------------------------------------------------------
ib.MlHostTerminalRoamingQuery = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostTerminalRoamingQuery, FM.MlHost);

ib.MlHostTerminalRoamingQuery.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="TerminalRoamingQuery";
}

ib.MlHostTerminalRoamingQuery.prototype.run = function(oObj) {
    var dmobj = null;
    
    if(!FM.isset(oObj) || !oObj) { 
        var lhost = this.getLinkedHost();
        if(lhost) {
            oObj = lhost.getDmObject();
        }
    }
    
    if(oObj) {
        if(oObj.getSubClassName() == 'TerminalRoamingQuery') {
            dmobj = oObj;            
        } else {
            dmobj = new ib.DmTerminalRoamingQuery({});
            if(oObj.getSubClassName() == 'CustomerProfile') {
                dmobj.setAttr('address',oObj.getAttr("gsm",""));
            }
        }
    }
    
    this._super("run",dmobj);
}

ib.MlHostTerminalRoamingQuery.className = "MlHostTerminalRoamingQuery";
ib.MlHostTerminalRoamingQuery.fullClassName = 'lm.MlHostTerminalRoamingQuery';

FM.MlHost.addHost('TerminalRoamingQuery',  ib.MlHostTerminalRoamingQuery,"AppOneAPI");


// -- username check -----------------------------------------------------------
ib.MlHostUsernameCheck = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostUsernameCheck, FM.MlHost);    

ib.MlHostUsernameCheck.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass = "UsernameCheck";
}

ib.MlHostUsernameCheck.prototype.run = function(oObj) {
    this._super("run");
    this.setDmObject(oObj ? oObj : new ib.DmUsernameCheck({}));
}

ib.MlHostUsernameCheck.className = "MlHostUsernameCheck";
ib.MlHostUsernameCheck.fullClassName = 'lm.MlHostUsernameCheck';

FM.MlHost.addHost('UsernameCheck', ib.MlHostUsernameCheck,"AppOneAPI");
// -- MO message ---------------------------------------------------------------
ib.MlHostInboundMessage = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostInboundMessage, FM.MlHost);    

ib.MlHostInboundMessage.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass = "InboundMessage";
}

ib.MlHostInboundMessage.prototype.run = function(oMsg) {
    this._super("run");
    this.setDmObject(oMsg ? oMsg : new ib.DmInboundMessage({}));
}

ib.MlHostInboundMessage.className = "MlHostInboundMessage";
ib.MlHostInboundMessage.fullClassName = 'lm.MlHostInboundMessage';

FM.MlHost.addHost('InboundMessage', ib.MlHostInboundMessage,"AppOneAPI");
// -- HLR response -------------------------------------------------------------
ib.MlHostTerminalRoamingStatus = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostTerminalRoamingStatus, FM.MlHost);
    
ib.MlHostTerminalRoamingStatus.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="TerminalRoamingStatus";
}

ib.MlHostTerminalRoamingStatus.prototype._setStatusCss = function(newstatus) {
    newstatus = FM.isset(newstatus) ? newstatus : '';
    var node = this.getNode();
    if(node) {
        // izbaci staru css klasu
        var rmcls = "";     
        var clsstr = $(node).attr('class');
        if(!FM.isset(clsstr)) clsstr = "";
        var classes = clsstr.split(" ");
        for(var i in classes) {
            if(FM.startsWith(classes[i],'fmmlHLRStatus') && classes[i] !== 'fmmlHLRStatus') {
                rmcls = rmcls + (rmcls == "" ? "" : " ") + classes[i];
            }
        }
        if(rmcls != "") $(node).removeClass(rmcls);

        // postavi css klasu
        $(node).addClass('fmmlHLRStatus' + newstatus);
    }
}

ib.MlHostTerminalRoamingStatus.prototype.run = function(oStatus) {
    this._super("run");
    oStatus = oStatus ? oStatus : new ib.DmTerminalRoamingStatus({
        currentRoaming: 'Unknown'
    })
    oStatus.setAttr(
        'currentRoamingInfoMessage', 
        ib.MlHostTerminalRoamingStatus.statusMapping[oStatus.getAttr('currentRoaming','Unknown')]
    );
    this.setDmObject(oStatus);
    this._setStatusCss(oStatus.getAttr('currentRoaming','Unknown'));
}

ib.MlHostTerminalRoamingStatus.statusMapping = {
    Unknown: 'Unknown roaming',
    NotRoaming: 'Not in roaming',
    DomesticRoaming: 'Domestic roaming',
    InternationalRoaming: 'International roaming'
};
ib.MlHostTerminalRoamingStatus.className = "MlHostTerminalRoamingStatus";
ib.MlHostTerminalRoamingStatus.fullClassName = 'lm.MlHostTerminalRoamingStatus';

FM.MlHost.addHost('TerminalRoamingStatus', ib.MlHostTerminalRoamingStatus,"AppOneAPI");

// -- Signup data --------------------------------------------------------------
ib.MlHostUserSignupData = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlHostUserSignupData, FM.MlHost);

ib.MlHostUserSignupData.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="UserSignupData";
}

ib.MlHostUserSignupData.prototype.run = function() {
    this._super("run");
    this.setDmObject(new ib.DmUserSignupData({}));
}

ib.MlHostUserSignupData.className = "MlHostUserSignupData";
ib.MlHostUserSignupData.fullClassName = 'lm.MlHostUserSignupData';
FM.MlHost.addHost("UserSignupData",ib.MlHostUserSignupData,"AppOneAPI");
// -- MO query -----------------------------------------------------------------
ib.MlHostInboundQuery = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostInboundQuery, FM.MlHost);    
           
ib.MlHostInboundQuery.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="InboundQuery";
}

ib.MlHostInboundQuery.prototype.run = function() {
    this._super("run");
    this.setDmObject(new ib.DmInboundQuery({}));
}
ib.MlHostInboundQuery.className = "MlHostInboundQuery";
ib.MlHostInboundQuery.fullClassName = 'lm.MlHostInboundQuery';

FM.MlHost.addHost('InboundQuery', ib.MlHostInboundQuery,"AppOneAPI");
ib.MlHostTopupItem = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostTopupItem, FM.MlHost);    

ib.MlHostTopupItem.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass = "TopupItem";
}
ib.MlHostTopupItem.prototype.run = function(oObj) {
    this._super("run");
    var me = this;
    this.app.topupQuery(
        oObj ? oObj : new ib.DmTopupItemQuery({from: 100,to:null, step:25}),
        function(ok, titem) {
            if(ok) {
                me.setDmObject(titem);
            }
        });
}

ib.MlHostTopupItem.className = "MlHostTopupItem";
ib.MlHostTopupItem.fullClassName = 'lm.MlHostTopupItem';

FM.MlHost.addHost('TopupItem', ib.MlHostTopupItem,"AppOneAPI");
// -- USSD query ---------------------------------------------------------------
ib.MlHostUSSDQuery = function() {
    this._init.apply(this, arguments); 
}
FM.extendClass(ib.MlHostUSSDQuery, FM.MlHost);    
    
ib.MlHostUSSDQuery.prototype._init = function(attrs,n,t) {            
    this._super("_init",attrs,n,t);
    this.objectSubClass ="USSDQuery";
}

ib.MlHostUSSDQuery.prototype.run = function() {
    this._super("run");
    this.setDmObject(new ib.DmUSSDQuery({}));
}
                 
ib.MlHostUSSDQuery.className = "MlHostUSSDQuery";
ib.MlHostUSSDQuery.fullClassName = 'lm.MlHostUSSDQuery';

FM.MlHost.addHost('USSDQuery', ib.MlHostUSSDQuery,"AppOneAPI");

/* 
 * 
 * OneAPI MlObservers validation rules
 */
FM.MlObserver.addValidationRule('validGSM',function(observer, ruleParams,cbFn) {
    if(!FM.isset(observer.node) || !observer.node) return true;
    
    var value = FM.isset(observer.node.value) ? 
        observer.node.value : 
        observer.node.innerHTML
    ;
    
    // EMPTY, VALID
    if(value==null || value == '') {
        return true;
    }    
    
    // last check
    var lastValue = FM.isset(observer.node.fmmlValidationGSMnumber) ? observer.node.fmmlValidationGSMnumber : '';
    if(value == lastValue) {
        return FM.isset(observer.node.fmmlValidationGSMisValid) ? observer.node.fmmlValidationGSMisValid : true;
    }
    
    // API call
    var host = observer.getHost();
    if(!host) {
        return true;
    }
    
    host.app.validateGSMnumber(value,function(isok,oResponse) {
        observer.node.fmmlValidationGSMnumber = value;
        observer.node.fmmlValidationGSMisValid = isok;
        
        host.verifyAllObservers();
    });
    
    return true;
},"AppOneAPI");

FM.MlObserver.addValidationRule('validUsername',function(observer, ruleParams,cbFn) {
    if(!FM.isset(observer.node) || !observer.node) return true;
    
    var value = FM.isset(observer.node.value) ? 
        observer.node.value : 
        observer.node.innerHTML
    ;
    
    // EMPTY, VALID
    if(value==null || value == '') {
        return true;
    }    
    
    // last check
    var lastValue = FM.isset(observer.node.fmmlValidationUsername) ? observer.node.fmmlValidationUsername : '';
    if(value == lastValue) {
        return FM.isset(observer.node.fmmlValidationUsernameisValid) ? observer.node.fmmlValidationUsernameisValid : true;
    }
    
    // API call
    var host = observer.getHost();
    if(!host) {
        return true;
    }
    
    host.app.validateUsername(value,function(isok,oResponse) {
        observer.node.fmmlValidationUsername = value;
        observer.node.fmmlValidationUsernameisValid = isok && oResponse.getAttr('usernameCheck',false) == true;
        
        host.verifyAllObservers();
    });
    
    return true;
},"AppOneAPI");
/**
* ML Captcha extensions class. 
* 
* @class ib.MlCaptcha
* @extends FM.MlExtension
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
*/
ib.MlCaptcha = function() {
    this._init.apply(this, arguments); 
}

FM.extendClass(ib.MlCaptcha,FM.MlExtension); 

// properties
ib.MlCaptcha.prototype.objectSubClass = "";
ib.MlCaptcha.prototype.appListener = null;

// methods
ib.MlCaptcha.prototype.run = function(obs) {
    this._super("run",obs);
    this.appListener = null;
    this._initCaptcha(obs);
}

ib.MlCaptcha.prototype.dispose = function(obs) {
    if(this.appListener && obs.getHost()) {
        this.getHost().getApp().removeListener(this.appListener);
    }
    this.appListener = null;
    this._super("dispose",obs);
    
}

ib.MlCaptcha.prototype._initCaptcha = function(obs) {
    var fetchFn = function(w,h,obs,attr,captchaImgNode) {
        var listOpt =  {
            width: w,
            height: h,
            imageFormat: 'png'
        };

        var dmlist = new FM.DmList(listOpt,'UTIL_captcha',obs.getApp());

        var lstnr = {
            onListStart: function(sender,data) {
                return true;
            },
            onListEnd: function(sender,data) {
                dmlist.removeListener(lstnr);
                var oCaptcha = null;
                dmlist.forEachListElement(function(index,obj) {
                    oCaptcha = obj;
                    return false;
                });
                dmlist.dispose();
                if(oCaptcha) {
                    if(obs) {
                        var dmObject = obs.getDmObject();
                        dmObject.setAttr(attr,oCaptcha.getAttr('id',''),true);
                    }
                    if(FM.isset(captchaImgNode)) {
                        $('#' + captchaImgNode).attr('src',oCaptcha.getImageUrl());
                    }
                }
            },    
            onListError: function(sender,data) {
                dmlist.removeListener(lstnr);
                dmlist.dispose();
                return true;
            }
        };
        dmlist.addListener(lstnr);
        dmlist.getData();                        
    }        

    var captchaImgNode = obs.getAttr('data-fmml-captcha-image-node','');
    var captchaReloadNode = obs.getAttr('data-fmml-captcha-reload-node','');
    var attr = obs.getAttr('data-fmml-attr-name','');
        
    var w=200,h=150;
    var captchaImg = $('#' + captchaImgNode);
    if(FM.isset(captchaImg) && captchaImg) {
        if(FM.isset(captchaImg.attr('width'))) {
            w = captchaImg.attr('width');
        }
        if(FM.isset(captchaImg.attr('height'))) {
            h = captchaImg.attr('height');
        }
    }
        
    if(FM.isset(captchaReloadNode) && captchaReloadNode) {
        $('#' + captchaReloadNode).click(function() {
            fetchFn(w,h,obs,attr,captchaImgNode);
            return false;
        });
    }
        
    var reloadCond = obs.getAttr('data-fmml-captcha-reload-on','');
    if(reloadCond != '') {
        var reloadEvents = reloadCond.split(".");
        // ako imamo ev onda se nakaci i na app (host & app events)
        if(reloadEvents.length > 0) {
            if(obs.getHost()) {
                var app = obs.getHost().getApp();
                if(app) {
                    this.appListener = {};
                    for(var rei = 0; rei < reloadEvents.length; rei++) {
                        this.appListener[reloadEvents[rei]] = function(sender,data) {
                            fetchFn(w,h,obs,attr,captchaImgNode);
                            return true;
                        }
                    }
                    app.addListener(this.appListener);                            
                }
            }
        }
    }
    
    fetchFn(w,h,obs,attr,captchaImgNode);
}

FM.MlExtension.addExtensionType('MlCaptcha', ib.MlCaptcha);
/**
* ML Slider extensions class. 
* 
* @class ib.MlSlider
* @extends FM.MlExtension
 * @param {object} [attrs] DOM node attributes
 * @param {DOMnode} node DOM node
*/
ib.MlSlider = function() {
    this._init.apply(this, arguments); // new poziva _init()
}

FM.extendClass(ib.MlSlider,FM.MlExtension); 

// properties
ib.MlSlider.prototype.objectSubClass = "";

// methods
ib.MlSlider.prototype.run = function(obs) {
    this._super("run",obs);
    this._createSliderCtrl(obs);
}

ib.MlSlider.prototype._createSliderCtrl = function(obs) {
    var attr,value=0,vmin=0,vmax=100,vstep=1, vpostfix, vformat,vskin;
/*
 *data-fmml-slider-min="25" 
data-fmml-slider-max="1000" 
data-fmml-slider-step="25" 
data-fmml-slider-postfix=" €" 
data-fmml-slider-format="##.00" 
data-fmml-slider-skin="round" 
*/    
    if(obs) {
        var dmobj = obs.getDmObject();
        var domnode = obs.node;
        attr = obs.getAttr('data-fmml-attr-name','');
        attr = attr ? attr : '';
        if(dmobj && attr != '') {
            value = dmobj.getAttr(attr,value);
        }            
        vmin = parseInt(obs.getAttr('data-fmml-slider-min',value));
        if(vmin == 'NaN' || vmin > value) vmin = value;
        vmax = parseInt(obs.getAttr('data-fmml-slider-max',value));
        if(vmax == 'NaN' || vmax < value) vmax = value;
        vstep = parseInt(obs.getAttr('data-fmml-slider-step',1));
        vstep = vstep > 0 ? vstep : 1;
        vpostfix = obs.getAttr('data-fmml-slider-postfix','');
        vformat = obs.getAttr('data-fmml-slider-format','');
        vskin = obs.getAttr('data-fmml-slider-skin','round');
        
        $(domnode).slider({ 
            from: vmin, 
            to: vmax, 
            step: vstep, 
            format: { 
                format: vformat, 
                locale: 'en' 
            }, 
            dimension: vpostfix, 
            skin: vskin,
            callback: function(value) {
                var obs = domnode.fmmlObserver;
                if(obs && dmobj) {
                    if(FM.isset(attr) && attr && attr != '') {
                        dmobj.setAttr(attr,value,true);
                    }
                }
                return true;                
            }
        });        
    }

}

// static
ib.MlSlider.className = "MlSlider";
ib.MlSlider.fullClassName = 'gui.MlSlider';

FM.MlExtension.addExtensionType('MlSlider', ib.MlSlider);
// -- osnovna APP klasa --------------------------------------------------------
ib.AppOneAPI = function() {
    this._init.apply(this, arguments); // new poziva _init()
}
FM.extendClass(ib.AppOneAPI,FM.AppObject); 

// properties
ib.AppOneAPI.prototype.objectSubClass = "";
ib.AppOneAPI.prototype.applicationObjectsSpace = null;

ib.AppOneAPI.prototype.customersList = null;
ib.AppOneAPI.prototype.userID = '';
ib.AppOneAPI.prototype.persistent = true;
ib.AppOneAPI.prototype.appRegistry = null;
ib.AppOneAPI.prototype.dmCountries = null;

ib.AppOneAPI.prototype._init = function(attrs) {            
    // set date format
    FM.dateTimeDivider = 'T';
    
    // reset user id
    this.userID =  ''; 
    this.setPersistent(FM.getAttr(attrs,'persistent',true));
    
    // registry init
    this.appRegistry = new FM.UtRegistry();
    
    // cache for user profiles
    this.customersList = new FM.DmList({},'cache',this);
    
    // etc init
    this._super("_init",attrs);    
    this.objectSubClass = "AppOneAPI";
    this.applicationObjectsSpace = [];
    this.setLastError();
    
    // load credentials from cookie
    this.loadCredentials();
}

// init 
ib.AppOneAPI.prototype.mlInit = function(node) {
    return FM.MlHost.initChildNodes(this, node);
}
       
ib.AppOneAPI.prototype.run = function() {
    this._super("run");
    this.userID =  ''; 
}

ib.AppOneAPI.prototype.dispose = function() {        
    this._super("dispose");
}

ib.AppOneAPI.prototype.setPersistent = function(p) {
    this.persistent = FM.isset(p) && p == false ? false : true;
}


// --  auth ------------------------------------------------------------
ib.AppOneAPI.prototype._clearAuthData = function() {
    var dom = document.domain;
    if(dom.indexOf('.') > 0) {
        dom = dom.substr(dom.indexOf('.'));
    }
    FM.deleteCookie('IbAuthCookie',dom);

    ib.apiAuth.setAttr("username","");
    ib.apiAuth.setAttr("password","");
    ib.apiAuth.setAttr("verified",false);
    ib.apiAuth.setAttr("ibAuthCookie","");
    
}

ib.AppOneAPI.prototype.saveCredentials = function() {
    if(!this.persistent) return;
    
    if(ib.apiAuth)  {        
        var dom = location.hostname == 'localhost' ? '' : location.hostname;
        var domarr = dom.split(".");
        if(domarr.length > 2) {
            dom = dom.substr(dom.indexOf('.'));
        }
        
        //console.log("Saving cookie, domain: [" + dom + "]");
        //alert(dom);
        FM.saveCookie('IbAuthCookie', ib.apiAuth.getAttr('ibAuthCookie',''), -1,dom);
        FM.saveCookie(
            'IbAuthCookieInfo', {
                username:   ib.apiAuth.getAttr('username',''),
                ibAuthCookie: ib.apiAuth.getAttr('ibAuthCookie',''),
                verified: ib.apiAuth.getAttr('verified','false') == 'true'
            }, 
            -1,dom
        );
    }
}

ib.AppOneAPI.prototype.loadCredentials = function() {
    if(this.persistent) {
        var authArr = FM.loadCookie('IbAuthCookieInfo');    
        var authKey = FM.loadCookie('IbAuthCookie',true);
        authArr['ibAuthCookie'] = authKey;
        authArr = authArr && FM.isObject(authArr) ? authArr : {
            username: "",
            ibAuthCookie: "",
            verified: false        
        };

        // if credentials object is not created yet
        if(!ib.apiAuth) {
            ib.apiAuth = FM.DmObject.newObject(this,'UserCredentials', {
                username:   FM.getAttr(authArr,'username',''),
                ibAuthCookie: FM.getAttr(authArr,'ibAuthCookie',''),
                verified: FM.getAttr(authArr,'verified','false') == 'true'
            });
            ib.apiAuth.addListener(this);        // add app listener
        }
    } else {
        ib.apiAuth = FM.DmObject.newObject(this,'UserCredentials', {});
        ib.apiAuth.addListener(this);        // add app listener        
    }

}

ib.AppOneAPI.prototype.login = function(username, password,allowChangeIP, cbfn) {
    if(FM.isObject(username) && FM.isset(username.getSubClassName) && username.getSubClassName() == 'UserLoginData') {
        cbfn = password;
        var o = username;
        username = o.getAttr('username','');
        password = o.getAttr('password','');
        allowChangeIP = o.getAttr('allowChangeIP','false') == true;
    }
    var me = this;
    var dmlist = new FM.DmList({
        username: username, 
        password: password,
        allowChangeIP: allowChangeIP
    },
    'USER_login',this
    );
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            oCred.forEachAttr(function(name,value) {
                ib.apiAuth.setAttr(name,value);
                return true;
            });
            ib.apiAuth.setAttr('username',username);
            me.saveCredentials();
            ib.apiAuth.setChanged(true,true); // posalji event
            
            // posalji auth changed
            //me.fireEvent('onAuthChanged',ib.apiAuth);
            
            callbackFn(true,ib.apiAuth);
            
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    
    dmlist.addListener(lstnr);
    dmlist.getData();
}


ib.AppOneAPI.prototype.logout = function(cbfn) {
    var me = this;
    var dmlist = new FM.DmList({},'USER_logout',this);
        
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var dom = document.domain;
    if(dom.indexOf('.') > 0) {
        dom = dom.substr(dom.indexOf('.'));
    }
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        
        onListEnd: function(sender,data) {
            me._clearAuthData();
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            ib.apiAuth.setChanged(true,true);
            callbackFn(true,ib.apiAuth);
            //me.fireEvent('onAuthChanged',ib.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            me._clearAuthData();
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            ib.apiAuth.setChanged(true,true);
            callbackFn(true,ib.apiAuth);
            //me.fireEvent('onAuthChanged',ib.apiAuth);
            return true;
        }
      
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
     
    return true;
}


ib.AppOneAPI.prototype.getCountries = function(code,cbfn) {
    // check cache
    if(this.dmCountries) {
        callbackFn(true,this.dmCountries);
        return this.dmCountries;        
    }
    // 
    code = FM.isset(code) && code ? code : '';
    var me = this;
    var dmlist = new FM.DmList({
        countryCode: code 
    },'UTIL_countries',this
    );
    
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            this.dmCountries = dmlist;
            callbackFn(true,dmlist);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);

            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();
    return null;
}

ib.AppOneAPI.prototype.getLanguages = function(code,cbfn) {        
    // 
    code = FM.isset(code) && code ? code : '';
    var me = this;
    var dmlist = new FM.DmList({
        countryCode: code 
    },'UTIL_languages',this
    );
    
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            callbackFn(true,dmlist);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.sendSMS = function(oSmsMessage,cbfn) {        
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset(oSmsMessage) || !oSmsMessage) {
        callbackFn(false,null);
        return;
    }
    
    var me = this;
    var dmlist = new FM.DmList(oSmsMessage.getAttr(),'SMS_send',this);
    if(oSmsMessage.getAttr('clientCorrelator','') == '') {
        dmlist.setAttr('clientCorrelator',FM.generateNewID());
    }
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oRef = null;
            FM.forEach(data.Added,function(id, obj) {
                oRef = obj;
                oRef.setAttr('resourceObject',oSmsMessage.getAttr());
                oRef.setAttr('resourceObject.clientCorrelator',dmlist.getAttr('clientCorrelator',''));
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oRef);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));            
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.deleteInboundSubscription = function(oSub,cbfn) {
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {
        subscriptionId: oSub.getAttr('subscriptionId','')
    };
    
   
    var dmlist = new FM.DmList(params,'SMS_inbound_sub_delete',this);    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oNums = [];
            FM.forEach(data.Added,function(id, obj) {
                oNums.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oNums);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();                
}


ib.AppOneAPI.prototype.retrieveInboundSubscriptions = function(
    /*
    destinationAddress,notifyURL,
    criteria,notificationFormat,
    callbackData,
    clientCorrelator,
*/
    page,pageSize,
    cbfn
    ) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {};
    if(FM.isset(page) && page) params['page'] = page;
    if(FM.isset(pageSize) && pageSize) params['pageSize'] = pageSize;
    
    /*
    var params = {
        destinationAddress: destinationAddress
    };
    if(FM.isset(notifyURL) && notifyURL) params['notifyURL'] = notifyURL;
    if(FM.isset(criteria) && criteria) params['criteria'] = criteria;
    if(FM.isset(notificationFormat) && notificationFormat) params['notificationFormat'] = notificationFormat;
    if(FM.isset(callbackData) && callbackData) params['callbackData'] = callbackData;
    if(FM.isset(clientCorrelator) && clientCorrelator) params['clientCorrelator'] = clientCorrelator;
    */
   
    var dmlist = new FM.DmList(params,'SMS_inbound_sub_get',this);
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oMsgs = [];
            FM.forEach(data.Added,function(id, obj) {
                oMsgs.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oMsgs);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.subscribeToInboundMessagesNotifications = function(
    destinationAddress,
    notifyURL,
    criteria,
    notificationFormat,
    callbackData,
    clientCorrelator,
    dateFrom,
    dateTo,
    cbfn
    ) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {
        destinationAddress: destinationAddress,
        dateFrom: dateFrom,
        dateTo: dateTo
        
    };
    if(FM.isset(notifyURL) && notifyURL) params['notifyURL'] = notifyURL;
    if(FM.isset(criteria) && criteria) params['criteria'] = criteria;
    if(FM.isset(notificationFormat) && notificationFormat) params['notificationFormat'] = notificationFormat;
    if(FM.isset(callbackData) && callbackData) params['callbackData'] = callbackData;
    if(FM.isset(clientCorrelator) && clientCorrelator) params['clientCorrelator'] = clientCorrelator;
   
    var dmlist = new FM.DmList(params,'SMS_inbound_sub_add',this);
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,data);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}
        
ib.AppOneAPI.prototype.retrieveRoamingStatus = function(
    sAddress,sNotifyURL,
    bExternalData, sClientCorrelator, sCallbackData, 
    cbfn
    ) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset(sAddress) || sAddress == '') {
        callbackFn(false,null);
        return;
    }
    
    var me = this;
    var params = {
        address: sAddress
    };
    if(FM.isset(sNotifyURL) && sNotifyURL != '' && sNotifyURL != null) {
        params['notifyURL'] = sNotifyURL;
    }
    /*
    if(FM.isset(bExternalData) && bExternalData != null) {
        params['includeExtendedData'] = bExternalData != true;
    }
    if(FM.isset(sClientCorrelator) && sClientCorrelator != '' && sClientCorrelator != null) {
        params['clientCorrelator'] = sClientCorrelator;
    }
    if(FM.isset(sCallbackData) && sCallbackData != '' && sCallbackData != null) {
        params['callbackData'] = sCallbackData;
    }
    */
    var dmlist = new FM.DmList(params,'HLR_send',this);
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oRef = null;
            FM.forEach(data.Added,function(id, obj) {
                oRef = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(!oRef.isAttr('currentRoaming'))  { // not found                
                callbackFn(
                    false,
                    me.setLastError(
                        new FM.DmGenericError({
                            messageId: 'CLI0001', 
                            text: 'Unable to query roaming status'
                        })
                    )
                );
                callbackFn(false,me.getLastError());
                return true;
            }
            callbackFn(true,oRef);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.updateInboundSubscription = function(oSub,cbfn) {
    var me = this;
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var dmlist = new FM.DmList({
        notifyURL: oSub.getAttr('notifyURL',''),
        subscriptionId: oSub.getAttr('subscriptionId','')
        },'SMS_inbound_update',this);    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,null);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.isAuthenticated = function() {
    return ib.apiAuth.isAuthenticated();
}

ib.AppOneAPI.prototype.onDoLogin = function(sender,evdata) {
    var dmobj = FM.getAttr(evdata,'object',null);
    if(!dmobj) return;
    
    this.login(
        dmobj.getAttr('username',''), 
        dmobj.getAttr('password',''),
        dmobj.getAttr('allowChangeIP',"false"),
        FM.getAttr(evdata,'callback',null)
    );
}

ib.AppOneAPI.prototype.onDoLogout = function(sender,evdata) {
    this.logout(FM.getAttr(evdata,'callback',null));
}


// ------ !!
ib.AppOneAPI.prototype.getCustomerId = function() {
    return(ib.apiAuth.getAttr('id',''));
}

ib.AppOneAPI.prototype.getCustomerKey = function() {
    return(ib.apiAuth.getAttr('key',''));
}

ib.AppOneAPI.prototype.getCustomerProfile = function(key,callbackFn) {    
    var oProfile = null;
    var me = this;
    
    // ako je new
    if(key == 'new') {
        oProfile = new ib.DmCustomerProfile({
            key: 'new'
        });
        if(FM.isset(callbackFn)) {
            callbackFn(true,oProfile);
        }
        return(oProfile);        
    }
        
    // ako nisi auth
    if(!ib.apiAuth.isAuthenticated()) {
        if(FM.isset(callbackFn)) {
            callbackFn(false,oProfile);
        }
        return(oProfile);                
    }
    
    // auth je ok i nije new
    if(key == 'me' || key == ib.apiAuth.getAttr('key','')) {        
        key = '';
    }
    
    oProfile = this.customersList.get(key == '' ? ib.apiAuth.getAttr('key','') : key);

    // ako nije fetchan a callback nije poslan vrati null
    // samo u slucaju kad je auth prosao
    if(!oProfile && FM.isset(callbackFn)) {
        return this.fetchCustomerProfile(key,function(ok, cp) {
            if(ok && cp && (cp.getAttr('key','y') == ib.apiAuth.getAttr('key','x') || key !='')) {
                ib.apiAuth.setAttr('username',cp.getAttr('username',''));
                ib.apiAuth.setAttr('key',cp.getAttr('key',''));
                me.saveCredentials();                
            }
            if(callbackFn) {
                callbackFn(ok,cp);
            }
        });
    } else if(
        oProfile && 
        (oProfile.getAttr('key','y') == ib.apiAuth.getAttr('key','x') || key !='')
    ) {
        ib.apiAuth.setAttr('username',oProfile.getAttr('username',''));
        ib.apiAuth.setAttr('key',oProfile.getAttr('key',''));
        this.saveCredentials();
    }

    // kraj
    if(FM.isset(callbackFn)) {
        callbackFn(true,oProfile);
    }
    return(oProfile);
}


// 
ib.AppOneAPI.prototype.fetchCustomerProfile = function(key,callbackFn) {
    key = key == 'me' ? '' : key;
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        key: key
    },'CUSTOMER_profile_get',this);
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oProfile = null;
            FM.forEach(data.Added,function(id, obj) {
                oProfile = obj;
                return false;
            });
            oProfile.setAttr(
                'forename',
                oProfile.getAttr('forename','Unknown') == 'Unknown' ? 
                    '' : 
                    oProfile.getAttr('forename','')
            );
            oProfile.setAttr(
                'surname',
                oProfile.getAttr('surname','Unknown') == 'Unknown' ? 
                    '' : 
                    oProfile.getAttr('surname',''))
                ;
            oProfile.setChanged(false,false);
            
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.customersList.refreshList(data,false,'', false,true);
            
            if(key == '') {
                ib.apiAuth.setAttr('key',oProfile.getAttr('key',''));
            }
            try {
                callbackFn(true,oProfile);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {                                   
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();
}

ib.AppOneAPI.prototype.updateCustomerProfile = function(oCustomer,callbackFn) {
    callbackFn = FM.isset(callbackFn) && callbackFn && FM.isFunction(callbackFn) ? 
        callbackFn : 
        function() {}
    ;
    oCustomer = !FM.isset(oCustomer) || !oCustomer || oCustomer == '' || oCustomer == 'me'?
        this.getCustomerProfile() :  
        oCustomer
    ;

    if(!oCustomer || oCustomer.getSubClassName() != 'CustomerProfile') { 
        if(FM.isset(callbackFn)) {
            try {
                callbackFn(false,null);
            } catch(e) {}
        }
        return false;
    }

    var dmlist = new FM.DmList(oCustomer.getAttr(),'CUSTOMER_profile_update',this);
    var me = this;
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            me.customersList.refreshList(data,false,'', false,true);
            callbackFn(true,me.customersList.get(oCustomer.getDataID()));
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }  
    };

    dmlist.addListener(lstnr);                
    dmlist.getData();
    return true;
}

ib.AppOneAPI.prototype.createCustomerProfile = function(oCustomer,callbackFn) {            
    callbackFn = FM.isset(callbackFn) && callbackFn && FM.isFunction(callbackFn) ? 
        callbackFn : 
        function() {}
    ;
    oCustomer = FM.isset(oCustomer) && oCustomer && oCustomer.getSubClassName() == 'CustomerProfile' ?
        oCustomer : 
        null
    ;

    if(!oCustomer) { 
        if(FM.isset(callbackFn)) {
            try {
                callbackFn(false,null);
            } catch(e) {}
        }
        return false;
    }

    var uname = oCustomer.getAttr('username','');
    var pass = oCustomer.getAttr('password','');

    var dmlist = new FM.DmList(oCustomer.getAttr(),'CUSTOMER_profile_create',this);
    var me = this;
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            // nadji novi cp                     
            var oNewCustomer = null;
            dmlist.forEachListElement(function(pname,value) {
                oNewCustomer = value;
                return false;
            });                    

            // disposaj listu
            dmlist.removeListener(lstnr);
            dmlist.dispose();

            // akjo nismo nasli novi cp
            if(!oNewCustomer) {
                if(FM.isset(callbackFn) && callbackFn) callbackFn(false,oNewCustomer);
                return true;
            }

            // da bi nam ml host radio moramo new objekt "prepisati" (da ptr. na dmobjekt ostane isti)
            var oOldCustomer = me.customersList.get('new');
            if(oOldCustomer) {
                oOldCustomer.forEachAttr(function(name, value) {
                    oOldCustomer.setAttr(name,oNewCustomer.getAttr(name,''));
                    return true;
                });
                me.customersList.addToList(oOldCustomer,oOldCustomer.getDataID(),true);
                me.customersList.removeFromList('new',true);
                oOldCustomer.setChanged(true,true);                        
            } else {
                me.customersList.addToList(oNewCustomer,oNewCustomer.getDataID(),true);
                oOldCustomer = oNewCustomer;
            }


            if(FM.isset(callbackFn) && callbackFn) callbackFn(true,oOldCustomer);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }  
    };

    dmlist.addListener(lstnr);                
    dmlist.getData();
    return true;
}

ib.AppOneAPI.prototype.deleteCustomerProfile = function(key,callbackFn) {
    key = FM.isset(key) ? (key == 'me' ? this.getCustomerId() : key) : this.getCustomerId();
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        key: key
    },'CUSTOMER_profile_delete',this);
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(me.customersList.get(key)) {
                me.customersList.removeFromList(key,true);
            }
            try {
                callbackFn(true);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();
}

ib.AppOneAPI.prototype.getAccountBalance = function(callbackFn) {
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        },'CUSTOMER_balance_get',this);
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            var oBalance = null;
            FM.forEach(data.Added,function(id, obj) {
                oBalance = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            
            try {
                callbackFn(true,oBalance);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();
}

ib.AppOneAPI.prototype.queryDeliveryStatus = function(
    address,
    clientCorrelatorOrResourceReference,
    callbackFn
) {
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        senderAddress: address,
        requestID: clientCorrelatorOrResourceReference        
    },'DELIVERY_INFOS_get',this);
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            var oDeliveryInfo = null;
            FM.forEach(data.Added,function(id, obj) {
                oDeliveryInfo = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            
            try {
                callbackFn(true,oDeliveryInfo);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();        
}

ib.AppOneAPI.prototype.validateGSMnumber = function(gsm,callbackFn) {
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        number: gsm
    },'UTIL_validateGSMnumber',this);
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            var oInfo = null;
            FM.forEach(data.Added,function(id, obj) {
                oInfo = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            
            try {
                callbackFn(true,oInfo);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();        
}

ib.AppOneAPI.prototype.validateUsername = function(username,callbackFn) {
    callbackFn = FM.isset(callbackFn) ? callbackFn : function() {};

    var me = this;
    var dmlist = new FM.DmList({
        username: username
    },'UTIL_validateUsername',this);
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            var oInfo = null;
            FM.forEach(data.Added,function(id, obj) {
                oInfo = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            
            try {
                callbackFn(true,oInfo);
            } catch(e) {}
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();        
}

ib.AppOneAPI.prototype.onUpdateCustomerProfile = function(sender,evdata) {
    evdata = FM.isset(evdata) && FM.isObject(evdata) ? evdata : {};
    
    var oCustomer = FM.getAttr(evdata,'object',null);
    // 
    if(!oCustomer || (this.isAuthenticated() != true && oCustomer.getAttr('id','') != 'new')) return false;
    
    
    return  (
        oCustomer.getAttr('id','') != "new" ? 
        this.updateCustomerProfile(oCustomer,FM.getAttr(evdata,'callback',null)) : 
        this.createCustomerProfile(oCustomer,FM.getAttr(evdata,'callback',null))
        );
}

ib.AppOneAPI.prototype.onCreateCustomerProfile = function(sender,evdata) {
    var oCustomer = this.customersList.get('new');
    if(!oCustomer) return false;
    return this.createCustomerProfile(oCustomer);            
}

ib.AppOneAPI.prototype.onChange = function(oObj) {
    
    if(oObj == this.getLastError() && oObj.getAttr("messageId") == 'SVC0003') {
        this._clearAuthData();
        //this.setLastError();
        ib.apiAuth.setChanged(true,true);
        //this.fireEvent('onAuthChanged',ib.apiAuth);
    }
}

// -- util ---------------------------------------------------------------------
ib.AppOneAPI.prototype.getCaptcha = function(width,height,imageFormat,cbfn) {
    var me = this;
    var dmlist = new FM.DmList({
            width: FM.isset(width) && width != null ? width : 200,
            height: FM.isset(height) && height != null ? width : 75,
            imageFormat: FM.isset(imageFormat) && imageFormat && imageFormat != ''? imageFormat : 'png'
        },
        'UTIL_captcha',this
    );
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oCaptcha = null;
            
            FM.forEach(data.Added,function(id, obj) {
                oCaptcha = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(oCaptcha) {
                callbackFn(true,oCaptcha);
            } else {
                callbackFn(false,null);
            }
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();
}

// --  auth --------------------------------------------------------------------
ib.AppOneAPI.prototype.signup = function(oSignupData,cbfn) {
    var me = this;
    
    var dmlist = new FM.DmList(oSignupData.getAttr(),'USER_signup',this);
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            oCred.forEachAttr(function(name,value) {
                ib.apiAuth.setAttr(name,value);
                return true;
            });
            ib.apiAuth.setAttr('username',oSignupData.getAttr('username',''));
            me.saveCredentials();
            ib.apiAuth.setChanged(true,true); // posalji event
            callbackFn(true,ib.apiAuth);
            
            // posalji auth changed
            //me.fireEvent('onAuthChanged',ib.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            me.fireEvent('onAuthError',data);
            return true;
        }
    };                
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.verifyAccount = function(vercode,cbfn) {
    if(FM.isObject(vercode) && FM.isset(vercode.getSubClassName) && vercode.getSubClassName() == 'GenericValue') {
        var o = vercode;
        vercode = o.getAttr('value','');
    }
    
    var me = this;
    var dmlist = new FM.DmList({
        verificationCode: vercode
    },'USER_verify',this
    );
        
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var username = ib.apiAuth.getAttr('username','');
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            ib.apiAuth.setAttr('verified',oCred.getAttr('value.verify',false));
            me.saveCredentials();
            ib.apiAuth.setChanged(true,true); // posalji event
            callbackFn(true,ib.apiAuth);
            
            // posalji auth changed
            //me.fireEvent('onAuthChanged',ib.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.checkPasswordStrength = function(password,cbFn) {
    
}

ib.AppOneAPI.prototype.generatePassword = function(cbFn) {
    
}

// !
ib.AppOneAPI.prototype.changePassword = function(oldPassword,newPassword,newPassword2,cbfn) {    
    var me = this;
    var dmlist = new FM.DmList({
        oldPassword: oldPassword,
        newPassword: newPassword,
        newPassword2: newPassword2
        },'USER_password_change',this
    );
        
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oObj = null;
            FM.forEach(data.Added,function(id, obj) {
                oObj = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oObj);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();                
}


ib.AppOneAPI.prototype.verifyAccount = function(vercode,cbfn) {
    if(FM.isObject(vercode) && FM.isset(vercode.getSubClassName) && vercode.getSubClassName() == 'GenericValue') {
        var o = vercode;
        vercode = o.getAttr('value','');
    }
    
    var me = this;
    var dmlist = new FM.DmList({
            verificationCode: vercode
        },'USER_verify',this
    );
        
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var username = ib.apiAuth.getAttr('username','');
            var oCred = null;
            FM.forEach(data.Added,function(id, obj) {
                oCred = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            ib.apiAuth.setAttr('verified',oCred.getAttr('value.verify',false));
            me.saveCredentials();
            ib.apiAuth.setChanged(true,true); // posalji event
            callbackFn(true,ib.apiAuth);
            
            // posalji auth changed
            //me.fireEvent('onAuthChanged',ib.apiAuth);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


// --  MO ----------------------------------------------------------------------
ib.AppOneAPI.prototype.getAvailableNumbersToBuy = function(oMoAvQuery,cbfn) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset() || !oMoAvQuery) {
        callbackFn(false,null);
        return;
    }
    
    var me = this;
    var params = {
        countryId: oMoAvQuery.getAttr('countryId',''),
        dateFrom: oMoAvQuery.getAttr('dateFrom',''),
        dateTo: oMoAvQuery.getAttr('dateTo',''),
        criteria: oMoAvQuery.getAttr('criteria',''),
        page: oMoAvQuery.getAttr('page','1'),
        pageSize: oMoAvQuery.getAttr('pageSize','20')
    };
    
   
    var dmlist = new FM.DmList(params,'SMS_inbound_available',this);
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oNums = [];
            FM.forEach(data.Added,function(id, obj) {
                obj.setAttr('_query.countryId',oMoAvQuery.getAttr('countryId',''));
                obj.setAttr('_query.dateFrom',oMoAvQuery.getAttr('dateFrom',''));
                obj.setAttr('_query.dateTo',oMoAvQuery.getAttr('dateTo',''));
                obj.setAttr('_query.criteria',oMoAvQuery.getAttr('criteria',''));
                oNums.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oNums);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


ib.AppOneAPI.prototype.getFreeTrialNumber = function(
    notifyURL,
    cbfn
) {
    // 
    if(FM.isObject(notifyURL) && FM.isset(notifyURL.getSubClassName)) {
        var o = notifyURL;
        notifyURL = o.getAttr('notify_url',o.getAttr('value',''));
    }
    
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {
        notifyURL: notifyURL
    };
    
    var dmlist = new FM.DmList(params,'SMS_inbound_trial',this);
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oNums = [];
            FM.forEach(data.Added,function(id, obj) {
                oNums.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oNums);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.buyMoNumber = function(obj, cbfn) {
    //     
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    
    var me = this;
    var params = {
        notifyURL: notifyURL
    };
    
   
    var dmlist = new FM.DmList(params,'SMS_inbound_buy',this);
    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oNums = [];
            FM.forEach(data.Added,function(id, obj) {
                oNums.push(obj);
                return true;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oNums);
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


// --  USSD --------------------------------------------------------------------
ib.AppOneAPI.prototype.sendUSSD = function(oUSSDQuery,cbfn) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};
    if(!FM.isset(oUSSDQuery) || !oUSSDQuery) {
        callbackFn(false,null);
        return;
    }
    
    
    var appFnName = oUSSDQuery.getAttr('_ussd_function','');
    var appFn = FM.isFunction(window[appFnName]) ? window[appFnName] : null;
    
    var me = this;
    
    // ako je appfn provjeri
    if(appFn) {
        if(!appFn(oUSSDQuery,null)) { // stop
            callbackFn(false,null);
        }
    }
    
    var params = { 
        address: oUSSDQuery.getAttr('address',''),
        stopSession: oUSSDQuery.getAttr('stopSession','false'),
        message: oUSSDQuery.getAttr('message','').replace("|","\n")
    };

    var dmlist = new FM.DmList(params,'USSD_send',this);    
    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {
            var oSms = null;
            if(FM.isString(data)) { // STOP
                callbackFn(true,null);
                return false;
            }
        
            FM.forEach(data.Added,function(id, obj) {
                oSms = obj;
                return false;
            });
            if(oSms == null) {
                FM.forEach(data.Updated,function(id, obj) {
                    oSms = obj;
                    return false;
                });                
            }
            
            callbackFn(true,oSms);
            
            if(oUSSDQuery.getAttr('stopSession','false') != 'true' && appFn) {
                if(appFn(oUSSDQuery,oSms)) { // resend                    
                    if(oUSSDQuery.getAttr('stopSession','false') == 'true') {
                        dmlist.removeListener(lstnr);
                        dmlist.dispose();            
                        dmlist = new FM.DmList(params,'USSD_send_stop',this);
                        dmlist.addListener(lstnr);
                    } 
                    dmlist.setAttr('address', oUSSDQuery.getAttr('address','')),
                    dmlist.setAttr('stopSession', oUSSDQuery.getAttr('stopSession','false')),
                    dmlist.setAttr('message', oUSSDQuery.getAttr('message','').replace(/\|/g,"\n"))
                    
                    dmlist.getData(); // new api call
                    return true;
                }
            }
            dmlist.removeListener(lstnr);
            dmlist.dispose();            
            return dmlist;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            dmlist.removeListener(lstnr);
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


/* events */
ib.AppOneAPI.prototype.onSignup = function(sender,evdata) {
    this.signup(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

ib.AppOneAPI.prototype.onSignupVerify = function(sender,evdata) {
    this.verifyAccount(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

ib.AppOneAPI.prototype.onFreeTrial = function(sender,evdata) {
    this.getFreeTrialNumber(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

ib.AppOneAPI.prototype.onSendSMS = function(sender,evdata) {
    this.sendSMS(FM.getAttr(evdata,'object',null),FM.getAttr(evdata,'callback',null));
}

ib.AppOneAPI.prototype.onRetrieveRoamingStatus = function(sender,evdata) {
    var oParams = FM.getAttr(evdata,'object',null);
    
    this.retrieveRoamingStatus(
        oParams.getAttr('address',''),
        oParams.getAttr('notifyURL',''),
        oParams.getAttr('includeExtendedData',''),
        oParams.getAttr('clientCorrelator',''),
        oParams.getAttr('callbackData',''),
        FM.getAttr(evdata,'callback',null)
    );
}

ib.AppOneAPI.prototype.onSubscribeToInboundMessagesNotifications = function(sender,evdata) {
    var oObj = FM.getAttr(evdata,'object',null);
    if(!oObj) return;
    
    this.subscribeToInboundMessagesNotifications(
        oObj.getAttr('destinationAddress',''),
        oObj.getAttr('notifyURL',''),
        oObj.getAttr('criteria',''),
        oObj.getAttr('notificationFormat',''),
        oObj.getAttr('callbackData',''),
        oObj.getAttr('clientCorrelator',''),
        oObj.getAttr('dateFrom',''),
        oObj.getAttr('dateTo',''),
        FM.getAttr(evdata,'callback',null)    
    );
}

ib.AppOneAPI.prototype.onUpdateInboundSubscription = function(sender,evdata) {
    this.updateInboundSubscription(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );
}

ib.AppOneAPI.prototype.onSendUSSD = function(sender,evdata) {
    this.sendUSSD(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );
}

ib.AppOneAPI.prototype.onGetAvailableNumbersToBuy = function(sender,evdata) {
    this.getAvailableNumbersToBuy(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );    
}

ib.AppOneAPI.prototype.onBuyMoNumber = function(sender,evdata) {
    this.buyMoNumber(
        FM.getAttr(evdata,'object',null),
        FM.getAttr(evdata,'callback',null)
    );    
}


    
// -- verification code resend -------------------------------------------------
ib.AppOneAPI.prototype.resendVerificationCode = function(
    oParam,
    cbfn
) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};

    var me = this;
    var params = {};


    var dmlist = new FM.DmList(params,'USER_resend_verification_code',this);

    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oResult = null;
            FM.forEach(data.Added,function(id, obj) {
                oResult = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            
            if(oResult) {
                oResult.setAttr('value',true);
            } else {
                oResult = new FM.DmGenericValue({value: true});
            }
            
            callbackFn(true,oResult);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();	            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

// -- username check -------------------------------------------------------
ib.AppOneAPI.prototype.usernameCheck = function(
    oParam,
    cbfn
) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};

    var me = this;
    var params = {
        username: oParam.getAttr('value','')
    };


    var dmlist = new FM.DmList(params,'USER_username_check',this);

    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oResult = null;
            FM.forEach(data.Added,function(id, obj) {
                oResult = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oResult);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();	            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.onUsernameCheck = function(sender,evdata) {
    this.usernameCheck(
            FM.getAttr(evdata,'object',null),
            FM.getAttr(evdata,'callback',null)
        );	
}
ib.AppOneAPI.prototype.onChangePassword = function(sender,evdata) {
    var obj = FM.getAttr(evdata,'object',null);
    var cbfn = FM.getAttr(evdata,'callback',null);
    if(!obj) return;
        
    this.changePassword(
        obj.getAttr('oldPassword',''), 
        obj.getAttr('newPassword',''), 
        obj.getAttr('newPassword2',''),
        cbfn
    );
}

ib.AppOneAPI.prototype.onResendVerificationCode = function(sender,evdata) {
    this.resendVerificationCode(
            FM.getAttr(evdata,'object',null),
            FM.getAttr(evdata,'callback',null)
        );	
}


// -- topup query --------------------------------------------------------------
ib.AppOneAPI.prototype.onTopupRedirect = function(sender,evdata) {
    var obj = FM.getAttr(evdata,'object',null);
    var cbfn = FM.getAttr(evdata,'callback',null);
    if(!obj) return;
        
    this.topupRedirect(obj,cbfn);
}

ib.AppOneAPI.prototype.topupRedirect = function(oTopupQuery,cbfn) {
    // get redirect url
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};

    var me = this;
    var params = {
        service: oTopupQuery.getAttr('service','google'),
        credits: oTopupQuery.getAttr('amount','0')
    };


    var dmlist = new FM.DmList(params,'TOPUP_get_redir_link',this);

    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oResult = null;
            FM.forEach(data.Added,function(id, obj) {
                oResult = obj;
                return false;
            });
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            if(oResult) {
                var url = oResult.getAttr('value','');
                console.log("topupRedirect:" + url);
                window.location = url;
            }
            callbackFn(true,oResult);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();	            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}

ib.AppOneAPI.prototype.topupQuery = function(
    oParam,
    cbfn
) {
    // 
    var callbackFn = FM.isset(cbfn) && FM.isFunction(cbfn) ? cbfn : function() {};

    var me = this;
    var params = {
        from: oParam.getAttr('from',0),
        to: oParam.getAttr('to',oParam.getAttr('from',0)),
        step: oParam.getAttr('step',1),
        service: oParam.getAttr('service','google')
    };


    var dmlist = new FM.DmList(params,'TOPUP_get_items',this);

    var lstnr = {
        onListStart: function(sender,data) {
            me.setLastError();
            return true;
        },
        onListEnd: function(sender,data) {            
            var oResult = null;
            FM.forEach(data.Added,function(id, obj) {
                oResult = obj;
                return false;
            });
            if(oResult) {
                oResult.setAttr('service',oParam.getAttr('service','google'));
                oResult.setAttr('userid', ib.apiAuth.getAttr('id',''));
            }
            dmlist.removeListener(lstnr);
            dmlist.dispose();
            callbackFn(true,oResult);
            return true;
        },
        onListError: function(sender,data) {
            dmlist.removeListener(lstnr);
            dmlist.dispose();	            
            callbackFn(false,me.setLastError(me.getErrorObject(data)));
            return true;
        }
    };
    dmlist.addListener(lstnr);
    dmlist.getData();            
}


ib.AppOneAPI.className = "AppOneAPI";
ib.AppOneAPI.fullClassName = 'ib.AppOneAPI';
      

ib.AppOneAPI.startApp = function(args) {
    ib.setProxy("/proxy/cdproxy.php");
    ib.setAPIurl("http://api.ib.com/1");
    var app = FM.AppObject.startApp({
        appClass: 'ib.AppOneAPI',
        options: args
    });
    if(app) {
        app.mlInit();
    }
    return app;
}

}
