# Unmaintained

# NodeJS - API Telkom ( Indonesia )

Library sederhana API Telkom buat NodeJS.

  - OAuth(1)
  - API SMS(2)
  - API UPoint(3)
  - API Email(1)
  - API TelkomID(9)
  - API Payment(5)

Dokumentasi lengkap bisa ditemuin dimari : http://ask.bestapps.id/category/api-documentations/

> API gak semuanya di test, ane cuman test buat SMS sama EMAIL aja. Tolong bantu test ya & sorry berantakan codenya, maklum newbie hehe, sekalian push dimari, kayany masih banyak yang error :-))

Ok coba apa yang bisa diakuin sama library ini, silahkan cek.

### Installation

Instol via NPM:

```sh
$ npm install telkom
```
Require library
```javascript
var telkom = require('telkom'),
	ConsumerKey = '',
	ConsumerSecret = '';
```
OAuth via API
```javascript
var Telkomse = new telkom( ConsumerKey, ConsumerSecret, function( err ){
	console.log( err )
}, function( telkomObj ){
}); 
```
API EMail
```javascript
//Send EMail - start
telkomObj.email({
	to		: "semarketir@gmail.com",
	subject	: "subject test via API Telkom",
	content	: "kontent test via API Telkom"
}, function( err ){
	console.log( err )
}, function( result ){
	console.log( result );
});
//Send EMail - end
```
API SMS
```javascript
//Send SMS - start
telkomObj.sms.send({
	requestid	: "1",
	to			: "62822********",
	message		: "test via API Telkom",
	code		: "9147"
}, function( err ){
	console.log( err )
}, function( result ){
	console.log( result.data );
	console.log( result.response );
});
telkomObj.sms.bulk({ /* optionsparams */ }, function( err ){}, function( result){ });
//Send SMS - end
```

API TelkomID
```javascript
//TelkomID - start
telkomObj.telkomid.queryuserprofile({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.activeuser({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.resetpassword({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.queryproductprofile({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.deactivateuser({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.createuserprofile({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.changepassword({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.searchuser({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.telkomid.checkuserexist({ /* optionsparams */ }, function( err ){}, function( result){ });
//TelkomID - end
```

API UPoint
```javascript
//UPoint - start
telkomObj.upoint.speedy({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.upoint.money({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.upoint.generate({ /* optionsparams */ }, function( err ){}, function( result){ });
//UPoint - end
```

API Payment
```javascript
//Payment - start
telkomObj.payment.tmoney({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.payment.finpay195({ /* optionsparams */ }, function( err ){}, function( result){ });
telkomObj.payment.checkstatusfinpay195({ /* optionsparams */ }, function( err ){}, function( result){ });
//Payment - end
```

Kalau mau pake parameter aslinya dari API Telkom, pake .oriparams({ original parameter dimari });
```javascript
//Payment - start
//Send EMail with Original Params - start
telkomObj
.oriparams({
	sendEmail:{
		to		: "semarketir@gmail.com",
		subject	: "subject test via API Telkom parameter ori",
		content	: "kontent test via API Telkom parameter ori"
	}
})
.email(function( err ){
	console.log( err )
}, function( result ){
	console.log( result.data );
});
//Send EMail with Original Params - end
```

License
----

MIT
