/**
	*
	*
	*	Author 	: Semar Ketir
	*	Email	: smearketir@gmail.com
	*	URL		: http://semarketir.com
	*	API		: http://ask.bestapps.id/category/api-documentations/
	*
*/

var OAuth = require('oauth');

module.exports = function( ConsumerKey, ConsumerSecret, fnError, fnSuccess ){
	
	var telkom = function( oauth_access_token, oauth_access_token_secret ){
		
		//error handling response API - start
		var doHandlerErrAPI = function( apiType, respData ){
			//ada ide buat parsing? :-))
			//lumayan banyak daftar errornya :-))
		};
		//error handling response API - end
		
		//request ke servernya - start
		var doRequestAPI = function( objCustom, url, input, fnErrorTelkom, fnSuccessTelkom ){
			var bodyPost = JSON.stringify( input );
			oauth.post( url, oauth_access_token, oauth_access_token_secret, bodyPost, "application/json", function (errorX, dataX, responseX) {
				if( errorX ) {
					fnErrorTelkom( errorX );
				}else{
					var dataCallback = {
						data 	 : dataX,
						response : responseX
					};
					fnSuccessTelkom( dataCallback );
				}
			});
		};
		//request ke servernya - end
		
		//API EMail Telkom - Start
		var email = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'email';
			var bodyPost = {
				sendEmail:{
					to		: input['to'],
					subject	: input['subject'],
					subject	: input['content']
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/sendEmail/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		//API EMail Telkom - End
		
		//API SMS Telkom - Send - Start
		var sms_single = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'sms';
			var bodyPost = {
				sendSMS:{
					pinRequestID	: input['requestid'],
					pinDestAddress	: input['to'],
					pinMessageBody	: input['message'],
					pinShortCode	: input['code']
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/sendSMS/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		//API SMS Telkom - Send - End
		
		//API SMS Telkom - Bulk - Start
		var sms_bulk = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'sms';
			var bodyPost = {
				smsBulk: {
					msisdn	: input['msisdn'],
					message	: input['message']
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/sendSmsBulk/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		//API SMS Telkom - Bulk - End
		
		//API TelkomID - Start
		var telkomid_queryuserprofile = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				queryUserProfile:{
					accountID : input['aid']
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/queryUserProfile/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_activeuser = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var activeUser = {
				activeUser:{
					telkomID : input['tid']
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/activeUser/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_resetpassword = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				resetPassword:{
					accountID 		: input['aid'],
					newPasswordMD5 	: input['md5'],
					newPasswordAES 	: input['aes'],
					newPasswordSHA 	: input['sha'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/resetPassword/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_queryproductprofile = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				queryProductProfile:{
					productID 	: input['pid'],
					url 		: input['url'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/queryProductProfile/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_deactivateuser = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				deactivateUser:{
					telkomID 	: input['tid'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/deactivateUser/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_createuserprofile = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				createUserProfile:{
					telkomID 				: input['tid'],
					
					domainType				: input['domain']['type'],
					passwordAES				: input['password']['aes'],
					PasswordMD5				: input['password']['md5'],
					PasswordSHA				: input['password']['sha'],
					
					unameEncrypted			: input['uname']['encrypted'],
					
					productName				: input['product']['name'],
					productPackage			: input['product']['package'],
					productStatus			: input['product']['status'],
					productDesc				: input['product']['desc'],
					productRelation			: input['product']['relation'],
					
					fullName				: input['personal']['fullname'],
					birthPlace				: input['personal']['birthplace'],
					birthDate				: input['personal']['birthdate'],
					gender					: input['personal']['gender'],
					
					personalIDType			: input['personal']['id']['type'],
					personalID				: input['personal']['id']['id'],
					
					address					: input['personal']['address']['address'],
					city					: input['personal']['address']['city'],
					province				: input['personal']['address']['province'],
					zipCode					: input['personal']['address']['zipcode'],
					country					: input['personal']['address']['country'],
					
					mailAlt1				: input['personal']['mail']['1'],
					mailAlt2				: input['personal']['mail']['2'],
					
					mobile1					: input['personal']['mobile']['1'],
					mobile2					: input['personal']['mobile']['2'],
					
					fixedAreaCode			: input['personal']['fixareacode'],
					fixedNo					: input['personal']['fixedno'],
					flexiNo					: input['personal']['flexino'],
					educationLevel			: input['personal']['education'],
					hobby					: input['personal']['hobby'],
					occupation				: input['personal']['occupation'],
					secretQuestion			: input['personal']['secret']['question'],
					secretQuestionAnswer	: input['personal']['secret']['answer'],
					
					motherMaidenName		: input['personal']['family']['mother']['name'],
					
					createdForm 			: input['createdform'],
					
					usernameTS 				: input['ts']['username'],
					passwordTS 				: input['ts']['password'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/createUserProfile/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_changepassword = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				changePassword:{
					accountID 		: input['aid'],
					oldPassword 	: input['old'],
					newPasswordMD5 	: input['md5'],
					newPasswordAES 	: input['aes'],
					newPasswordSHA 	: input['sha'],
					type 			: input['type'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/changePassword/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_searchuser = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				searchUser:{
					telkomID : input['tid'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/searchUser/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var telkomid_checkuserexist = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'telkomid';
			var bodyPost = {
				checkUserExist:{
					telkomID : input['tid'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/checkUserExist/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		//API TelkomID - End
		
		//API UPoint - Start
		var upoint_upointspeedy = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'upoint';
			var bodyPost = {
				upoint:{
					phoneNumber  : input['phone'],
					trxID 		 : input['trxid'],
					amount 		 : input['amount'],
					item 		 : input['item'],
					speedyNumber : input['speedy'],
					ip 			 : input['ip'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/uPointSpeedy/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var upoint_upointtmoney = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'upoint';
			var bodyPost = {
				upoint:{
					phoneNumber  : input['phone'],
					trxID 		 : input['trxid'],
					amount 		 : input['amount'],
					item 		 : input['item'],
					callbackURL  : input['callbackurl'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/uPointTmoney/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var upoint_upointgenerate = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'upoint';
			var bodyPost = {
				upoint:{
					phoneNumber   : input['phone'],
					trxID 		  : input['trxid'],
					amount 		  : input['amount'],
					item 		  : input['item'],
					callbackURL   : input['callbackurl'],
				}
			};
			if( input['miscellaneous'] !== undefined ) {
				bodyPost['upoint']['miscellaneous'] = input['miscellaneous'];
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/uPointGenerate/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		//API UPoint - End
		
		//API Payment - Start
		var payment_tmoney = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'tmoney';
			var bodyPost = {
				tmoney:{
					invoiceNo	 : input['no'],
					serviceID 	 : input['sid'],
					amount 		 : input['amount'],
					returnURL 	 : input['returnurl'],
					merchantCode : input['code'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/tMoney/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var payment_finpay195 = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'finpay195';
			var bodyPost = {
				finPay195 : {
					merchantID	 : input['mid'],
					password 	 : input['password'],
					invoice 	 : input['invoice'],
					amount 		 : input['amount'],
					serviceID 	 : input['sid'],
					addInfo1 	 : input['info']['1'],
					addInfo2 	 : input['info']['2'],
					addInfo3 	 : input['info']['3'],
					addInfo4 	 : input['info']['4'],
					addInfo5 	 : input['info']['5'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/finPay195/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var payment_checkstatusfinpay195 = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'checkstatusfinpay195';
			var bodyPost = {
				checkStatus : {
					merchantID	 : input['mid'],
					password 	 : input['password'],
					paymentCode  : input['code'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/checkStatusFinPay195/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var payment_cekstatusfinpaycc = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'cekstatusfinpaycc';
			var bodyPost = {
				checkStatus : {
					merchantID	 : input['mid'],
					password 	 : input['password'],
					invoice  	 : input['invoice'],
				}
			};
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/finpayCC/cekStatus/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		var payment_getbillfinpaycc = function( input, fnErrorTelkom, fnSuccessTelkom ){
			this._prefix = 'getbillfinpaycc';
			var bodyPost = {
				getBill : {
					merchantID			 : input['mid'],
					password 			 : input['password'],
					invoice  	 		 : input['invoice'],
					amount  			 : input['amount'],
					currencyCode 		 : input['currentcode'],
					custId 		 		 : input['cid'],
					serviceId 			 : input['sid'],
					returnUrl 			 : input['returnurl'],
					service 	 		 : input['service'],
					
					customerFullName 	 : input['customer']['fullname'],
					customerContact 	 : input['customer']['contact'],
					customerEmail 	 	 : input['customer']['email'],
					customerAddress 	 : input['customer']['address'],
					
					billingAdd 			 : input['billing']['add'],
					billingCity 		 : input['billing']['city'],
					billingState 		 : input['billing']['state'],
					billingPostcode 	 : input['billing']['postcode'],
					billingCountry 		 : input['billing']['country'],
					
					addInfo 	 		 : input['addinfo'],
				}
			};
			
			if( input['language'] !== undefined ) {
				bodyPost['getBill']['language'] = input['language'];
			};
			if( input['cust'] !== undefined ) {
				if( input['cust']['firstname'] !== undefined ) {
					bodyPost['getBill']['custFirstName'] = input['cust']['firstname'];
				};
				if( input['cust']['firstname'] !== undefined ) {
					bodyPost['getBill']['custMiddleName'] = input['cust']['middlename'];
				};
				if( input['cust']['firstname'] !== undefined ) {
					bodyPost['getBill']['custLastName'] = input['cust']['lastname'];
				};
				if( input['cust']['birthdate'] !== undefined ) {
					bodyPost['getBill']['custBirthDate'] = input['cust']['birthdate'];
				};
				if( input['cust']['mothername'] !== undefined ) {
					bodyPost['getBill']['custMotherName'] = input['cust']['mothername'];
				};
				if( input['cust']['city'] !== undefined ) {
					bodyPost['getBill']['custCity'] = input['cust']['city'];
				};
				if( input['cust']['region'] !== undefined ) {
					bodyPost['getBill']['custRegion'] = input['cust']['region'];
				};
				if( input['cust']['state'] !== undefined ) {
					bodyPost['getBill']['custState'] = input['cust']['state'];
				};
				if( input['cust']['postcode'] !== undefined ) {
					bodyPost['getBill']['custPostcode'] = input['cust']['postcode'];
				};
				if( input['cust']['countrycode'] !== undefined ) {
					bodyPost['getBill']['custCountryCode'] = input['cust']['countrycode'];
				};
			};
			if( input['billing'] !== undefined ) {
				if( input['billing']['region'] !== undefined ) {
					bodyPost['getBill']['billingRegion'] = input['billing']['region'];
				};
				if( input['billing']['addudprn'] !== undefined ) {
					bodyPost['getBill']['billingAddUdprn'] = input['billing']['addudprn'];
				};
			};
			if( input['shipping'] !== undefined ) {
				if( input['shipping']['address'] !== undefined ) {
					bodyPost['getBill']['shippingAddress'] = input['shipping']['address'];
				};
				if( input['shipping']['city'] !== undefined ) {
					bodyPost['getBill']['shippingCity'] = input['shipping']['city'];
				};
				if( input['shipping']['region'] !== undefined ) {
					bodyPost['getBill']['shippingRegion'] = input['shipping']['region'];
				};
				if( input['shipping']['state'] !== undefined ) {
					bodyPost['getBill']['shippingState'] = input['shipping']['state'];
				};
				if( input['shipping']['postcode'] !== undefined ) {
					bodyPost['getBill']['shippingPostcode'] = input['shipping']['postcode'];
				};
				if( input['shipping']['countrycode'] !== undefined ) {
					bodyPost['getBill']['shippingCountryCode'] = input['shipping']['countrycode'];
				};
			};
			if( input['receiver'] !== undefined ) {
				if( input['receiver']['name'] !== undefined ) {
					bodyPost['getBill']['receiverName'] = input['receiver']['name'];
				};
				if( input['receiver']['contact'] !== undefined ) {
					bodyPost['getBill']['receiverContact'] = input['receiver']['contact'];
				};
				if( input['receiver']['contactno'] !== undefined ) {
					bodyPost['getBill']['receiverContactNo'] = input['receiver']['contactno'];
				};
			};
			if( input['identitycode'] !== undefined ) {
				bodyPost['getBill']['identityCode'] = input['identitycode'];
			};
			if( input['addparam'] !== undefined ) {
				bodyPost['getBill']['addParam'] = input['addparam'];
			};
			
			doRequestAPI( this,  "http://sandbox.appprime.net/TemanDev/rest/finpayCC/getBill/", bodyPost, fnErrorTelkom, fnSuccessTelkom );
		};
		//API Payment - End
		
		return {
			sms 		: {
				send : sms_single,
				bulk : sms_bulk
			},
			email 		: email,
			telkomid	: {
				queryuserprofile 	: telkomid_queryuserprofile,
				activeuser 			: telkomid_activeuser,
				resetpassword 		: telkomid_resetpassword,
				queryproductprofile : telkomid_queryproductprofile,
				deactivateuser 		: telkomid_deactivateuser,
				createuserprofile 	: telkomid_createuserprofile,
				changepassword 		: telkomid_changepassword,
				searchuser 			: telkomid_searchuser,
				checkuserexist 		: telkomid_checkuserexist,
			},
			upoint		: {
				speedy 		: upoint_upointspeedy,
				money 		: upoint_upointtmoney,
				generate 	: upoint_upointgenerate,
			},
			payment		: {
				tmoney 					: payment_tmoney,
				finpay195 				: payment_finpay195,
				checkstatusfinpay195 	: payment_checkstatusfinpay195,
			}
		};
	};
	
	var oauth = new OAuth.OAuth(
		'http://sandbox.appprime.net/TemanDev/rest/RequestToken/',
		'http://sandbox.appprime.net/TemanDev/rest/AccessToken/',
		ConsumerKey,
		ConsumerSecret,
		'1.0',
		null,
		'HMAC-SHA1'
	);
	oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results) {
		if(error) { 
			fnError( error );
		}else {
			oauth.getOAuthAccessToken(oauth_token, oauth_token_secret, function(error2, oauth_access_token, oauth_access_token_secret, results2) {
				if(error2) { 
					fnError( error2 );
				}else {
					fnSuccess( new telkom( oauth_access_token, oauth_access_token_secret ) );
				}
				
			});
		}
	});  
};