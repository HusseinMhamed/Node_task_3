const express = require('express');
const app = express();

const port= process.env.PORT || 3000;
    /*
})

app.get('/prices',(req,res)=>{
    res.send("<h2>hello from Prices</h2>")
})

app.get('/about',(req,res)=>{
    res.send("<h2>hello from About</h2>")
})
    */
path=require('path')
app.set('view engine','hbs')
const hbs = require('hbs');


const viewpath = path.join(__dirname , '../temp/views');
// const viewpath = path.join(process.argv[1] , '../../temp/views');
app.set("views", viewpath);
// console.log(viewpath)
app.get('/', (req,res)=>{
    res.render('index',{
        title: "Home",
        desc : "this is Home Page"
    })
})

const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))


const partialspath = path.join(__dirname , '../temp/partials');
// const partialspath = path.join(process.argv[1] , '../../temp/partials');
hbs.registerPartials(partialspath);
// console.log(partialspath)

app.get('/service', (req,res)=>{
    res.render('index',{
        title: "Service",
        desc : "this is Service Page"
    })
})

app.get('/about',(req,res)=>{
    res.render('index',{
        title: "About",
        desc : "this is About Page"
    })
})
app.get('/team',(req,res)=>{
    res.render('index',{
        title: "Team",
        desc : "this is Team Page"
    })
})
app.get('/others',(req,res)=>{
    res.render('index',{
        title:"others",
        desc:"this is others Page"
    })
})





app.listen(port,()=>{
    console.log("works successfully")
})