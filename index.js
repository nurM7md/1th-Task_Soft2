import express from 'express';
import { engine } from 'express-handlebars';



const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

const students =[
    {
        id:1,
        name:"NUR",
        city:"tanta"
    },
    {
        id:2,
        name:"Knan",
        city:"shebin"
    },
    {
        id:3,
        name:"Asiim",
        city:"elmaady"
    },
    {
        id:4,
        name:"Teia",
        city:"tanta"
    },
    {
        id:5,
        name:"Asma",
        city:"tanta"
    },
    {
        id:6,
        name:"Alora",
        city:"tanta"
    },
    {
        id:7,
        name:"Lana",
        city:"tanta"
    },
    {
        id:8,
        name:"Eiias",
        city:"tanta"
    },
    {
        id:9,
        name:"Fahd",
        city:"tanta"
    },
    {
        id:10,
        name:"Yazan",
        city:"tanta"
    }
];

const studentFunction = (request , response) =>{
   response.render("students" , { layout: false , students })
};

app.get("/students" , studentFunction);

app.get("/students/:id", (req , res) => {
    const id = req.params.id;

    const student = students.find((item) => {
        return item.id == id;
    });

    res.render("student" , { layout: false , student });
})


app.get('/students' , studentFunction);


app.listen(3000);