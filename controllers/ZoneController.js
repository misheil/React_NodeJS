var Zone = require('../models/Zone');

module.exports = {
	find: function(params,callback){
        Zone.find(params,function(err,zones){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,zones);
        })
	},

	findById: function(id,callback){
		Zone.findById(id,function(err,zone){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,zone);
        })

	},

	create: function(params,callback){
        var zips=params['zipCodes'];
        // process.exit(1);

        var zip=zips.split(',');
        var newZips=[];
        zip.forEach(function(zipCode){
        	newZips.push(zipCode.trim());
        });
        params['zipCodes']=newZips;

        Zone.create(params,function(err,zone){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,zone);
        })
	},

	update: function(id,params,callback){
		Zone.updateOne({"_id":id},{ $set:{"name":params.body.name,"zipCodes":params.body.zipCodes}},function(err,zone){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,zone);
        })
	},

	delete: function(id,callback){
		Zone.findByIdِAndRemove(id,function(err){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,null);
        })

	}
}