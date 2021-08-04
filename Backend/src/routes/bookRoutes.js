const express = require('express');
const BookData = require('../model/Bookdata');
const booksRouter = express.Router();
const jwt = require('jsonwebtoken')
function router(){
// var books = [
//     {
//        title:'Tom And Jerry',
//        author:'Joseph Barbera',
//        genre:'cartoon',
//        img:'TomandJerry.jpg'
//     },
//     {
//        title:'Harry Potter',
//        author:'J K Rowling',
//        genre:'fantasy',
//        img:'harrypotter.jpg'
//     },
//     {
//        title:'Paathummayude Aadu',
//        author:'Basheer',
//        genre:'drama',
//        img:'Basheer.jpg'
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
booksRouter.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var book = {       
        title : req.body.book.title,
        author : req.body.book.author,
        genre : req.body.book.genre,
        image : req.body.book.image,
   }       
   var book = new BookData(book);
   book.save();
});

booksRouter.get('/books',function(req,res){
    
    BookData.find()
                .then(function(books){
                    res.send(books);
                });
});

booksRouter.get('/:id',  (req, res) => {
 // app.get('/books/:id',  (req, res) => {  
  const id = req.params.id;
  // is_book = BookData.findOne({"_id":id});
 //  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    BookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
 // }
})

booksRouter.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    title = req.body.title,
    author = req.body.author,
    genre = req.body.genre,
    image = req.body.image
   BookData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "title":title,
                                "author":author,
                                "genre":genre,
                                "image":image}})
   .then(function(){
       res.send();
   })
 })
 
 booksRouter.delete('/remove/:id',(req,res)=>{
 
   id = req.params.id;
   BookData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })
 

 return booksRouter;
}
module.exports = router;
//module.exports = booksRouter;