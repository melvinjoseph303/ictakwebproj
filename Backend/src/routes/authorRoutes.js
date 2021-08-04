const express = require('express');
const AuthorData = require('../model/Authordata');
const authorsRouter = express.Router();
const jwt = require('jsonwebtoken')
function router(){
// var authors = [
//     {
//        name:'Joseph Barbera',
//        age:'60',
//        type:'cartoon artist',
//        img:'JosephBarbera.jpg'
//     },
//     {
//        name:'J K Rowling',
//        age:'55',
//        type:'fantasy',
//        img:'JKRowling.jpg'
//     },
//     {
//        name:'Basheer',
//        age:'Basheer',
//        type:'novelist',
//        img:'Basheer1.jpg'
//     }
//  ]
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
authorsRouter.post('/insertauthor',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var author = {       
        name : req.body.author.name,
        age : req.body.author.age,
        type : req.body.author.type,
        image : req.body.author.image,
   }       
   var author = new AuthorData(author);
   author.save();
});
authorsRouter.get('/authors',function(req,res){
    
    AuthorData.find()
                .then(function(authors){
                    res.send(authors);
                });
});
authorsRouter.get('/:id',  (req, res) => {
 // app.get('/authors/:id',  (req, res) => {  
  //const id = req.params.author_id;
  const id = req.params.id;
  //is_author = AuthorData.findOne({"_id":id});
//  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    AuthorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });
//  }
})

authorsRouter.put('/updateauthor',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  name = req.body.name,
  age = req.body.age,
  type = req.body.type,
  image = req.body.image
 AuthorData.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "name":name,
                              "age":age,
                              "type":type,
                              "image":image}})
 .then(function(){
     res.send();
 })
})

authorsRouter.delete('/removeauthor/:id',(req,res)=>{

 id = req.params.id;
 AuthorData.findByIdAndDelete({"_id":id})
 .then(()=>{
     console.log('success')
     res.send();
 })
})





 return authorsRouter;
}
module.exports = router;
//module.exports = booksRouter;