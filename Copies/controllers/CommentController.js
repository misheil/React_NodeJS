var comment = require('../models/comment');

module.exports = {
	find: function(params,callback){
        comment.find(params,function(err,comments){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,comments);
        })
	},

	findById: function(id,callback){
		comment.findById(id,function(err,comment){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,comment);
        })

	},

	create: function(params,callback){
                comment.create(params,function(err,comment){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,comment);
        })
	},

	update: function(id,params,callback){
                comment.updateOne({"_id":id},{ $set:{"username":params.body.username,"body":params.body.body}},function(err,comment){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,comment);
        })
	},

	delete: function(id,res,callback){
                // findByIdِAndRemove
                
		comment.deleteOne({_id:id},function(err){
        	if(err){
        		callback(err,null);
        		return;
        	}
        	callback(null,'Deleted');

        }.bind(this));

	}
}