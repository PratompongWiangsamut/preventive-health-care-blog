import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as firebaseHelper from 'firebase-functions-helper/dist';



admin.initializeApp(functions.config().firebase);

const app=express()
const main=express()

main.use('/',app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({extended:false}))

const contactsCollection = 'contacts';

const db=admin.firestore()

export const webApi=functions.https.onRequest(main)


interface Product 
{

    productName:string,
    productPrice:string

}

interface Post 

{

    PostName: String
    PostTag: String
    Detail: String
    Belong: String
    Rank:number

}

// Add new contact
app.post('/Post', async (req, res) => {
    try {
        const Post: Post = {
            PostName: req.body['postname'],
            PostTag: req.body['posttag'],
            Detail: req.body['detail'],
            Belong: req.body['belong'],
            Rank: req.body['rank']
        }

        const newDoc = await firebaseHelper.firestore
            .createNewDocument(db, contactsCollection, Post);
        res.status(201).send(`Created a new post: ${newDoc.id}`);
    } catch (error) {
        res.status(400).send(`Contact should only contains postname, posttag, detail, belong and rank!!!`)
    }        
})



app.post('/saveProduct',async(req,res)=>{



const product:Product={



    productName:"Bag",


    productPrice:"1000"


}



await db.collection("productOnSale").add(product)



})