const express = require("express");
// const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const { MongoClient } = require("mongodb");
// const dbconn = require("./dbconn");

/* const articlesInfo = {
   "learn-react": {
      comments:[],
   },
   "learn-node": {
      comments:[],
   },
   "learn-mongodb": {
      comments:[],
   }
}*/

// app.use(cors())
//Initialize express built-in middleware
//recommended to install body parser
//function of express parses incoming JSON payload
app.use(express.json({ extended: false }));

const dbCall = async (operation, res) => {
   try {
      const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
      const db = await client.db('mernblog');
      await operation(db);
      client.close();
   } catch (error) {
      res.status(500).json({message:'Error connecting to database! ', error});  
   }
}

app.get("/api/articles/:name", (req, res) => {
      dbCall (async (db)=>{
      const articleName = req.params.name;
      const articlesInfo = await db
      .collection("articles")
      .findOne({name: articleName});
      res.status(200).json(articlesInfo);
      }, res);
})

//Comments

app.post("/api/articles/:name/add-comments", (req, res)=> {
   const {username, text}= req.body;
   const articleName = req.params.name;
   dbCall (async (db)=>{
      const articleInfo = await db
      .collection("articles")
      .findOne({name: articleName})
      await db.collection("articles").updateOne(
         {name: articleName},
         {
            $set: {
               comments: articleInfo.comments.concat({username, text}),
            }
         }
      );
      const updateArticleInfo = await db
      .collection("articles")
      .findOne({name: articleName});
      res.status(200).json(updateArticleInfo)
   }, res);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));