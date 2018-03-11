var express=require('express');
var router=express.Router();
// var ZoneController=require('../controllers/ZoneController');
var controllers=require('../controllers');

// Set router to find data from DB
router.get('/:resource',function(req,res,next){
	var resource= req.params.resource;
	var controller=controllers[resource];
    if(controller == null){
    	res.json({
     				confirmation: 'Fail',
     				message: 'Invalid Resourse request ' + resource
     			})
    	return;
    }

	 controller.find(req.query,function(err, results){
     		if(err){
     			res.json({
     				confirmation: 'Fail',
     				message: err
     			})
     			return;
            }
     		else{
     				res.json({
     				confirmation: 'Success',
     				results: results
     			})
     		}


     // if(resource=='zone'){
     // 	ZoneController.find(req.query,function(err, results){
     // 		if(err){
     // 			res.json({
     // 				confirmation: 'fail',
     // 				message: err
     // 			})
     // 			return;
     // 		}
     // 		else{
     // 				res.json({
     // 				confirmation: 'Success',
     // 				results: results
     // 			})
     // 		}
 
     // 	})
     // }
     // else{
     // 	res.json({
     // 				confirmation: 'Not a zone',
     // 				results: resource
     // 			})
     // }
     
});
});

// Set new rout to findById

router.get('/:resource/:id',function(req,res,next){

var resource= req.params.resource;
var id= req.params.id;
var controller=controllers[resource];
    if(controller == null){
    	res.json({
     				confirmation: 'Fail',
     				message: 'Invalid Resourse request ' + resource
     			})
    	return;
    }
     	controller.findById(id,function(err, result){
     		if(err){
     			res.json({
     				confirmation: 'fail',
     				message: "Not found"
     			})
     			return;
     		}
     		else{
     				res.json({
     				confirmation: 'Success',
     				result: result
     			})
     		}
 
     	})



     // if(resource=='zone'){
     // 	ZoneController.findById(id,function(err, result){
     // 		if(err){
     // 			res.json({
     // 				confirmation: 'fail',
     // 				message: "Not found"
     // 			})
     // 			return;
     // 		}
     // 		else{
     // 				res.json({
     // 				confirmation: 'Success',
     // 				result: result
     // 			})
     // 		}
 
     // 	})
     // }
     // else{
     // 	res.json({
     // 				confirmation: 'Not a zone',
     // 				results: resource
     // 			})
     // }

});



// Set new rout to insert data into db creatzone

router.post('/:resource/',function(req,res,next){

var resource= req.params.resource;


var id= req.body.id;

// process.exit(1);
var controller=controllers[resource];
    if(controller == null){
    	res.json({
     				confirmation: 'Fail',
     				message: 'Invalid Resourse request ' + resource
     			})
    	return;
    }

    if(id == '' || id == null){
    controller.create(req.body,function(err, result){
     		if(err){
     			res.json({
     				confirmation: 'fail',
     				message: err
     			})
     			return;
     		}
     		else{
     				res.json({
     				confirmation: 'Success',
     				result: result
     			})
     		}
 
     	});
    }
    else{
    controller.update(id,req,function(err, result){
     		if(err){
     			res.json({
     				confirmation: 'fail',
     				message: err
     			})
     			return;
     		}
     		else{
     				res.json({
     				confirmation: 'Success',
     				result: result
     			})
     		}
 
     	});	
    }


     // if(resource=='zone'){
     // 	ZoneController.create(req.body,function(err, result){
     // 		if(err){
     // 			res.json({
     // 				confirmation: 'fail',
     // 				message: err
     // 			})
     // 			return;
     // 		}
     // 		else{
     // 				res.json({
     // 				confirmation: 'Success',
     // 				result: result
     // 			})
     // 		}
 
     // 	})
     // }
     // else{
     // 	res.json({
     // 				confirmation: 'Not a zone',
     // 				results: resource
     // 			})
     // }

});


module.exports = router;