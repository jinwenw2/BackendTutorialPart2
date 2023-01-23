const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Hello there');
})


const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name:'Cybersecurity'}
]
app.get('/api/courses/', (req,res)=>{
  res.send(courses);
})
app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Course ID not found");
        return
    }
    res.send(course);
})

//HTTP POST REQUESTS

app.post('/api/courses', (req,res)=>{
    if (req.body.name.length < 3)
    {
        res.status(404).send("Name must contain 3 characters or more");
        return;
    }
    const course ={
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course)
    res.status(200).send(course);
});

app.put('/api/courses/:id', (req,res)=>{
if (!req.body.name)
{
    res.status(404).send("Missing subject");
    return;
}
if (req.params.id < 0 || req.params.id > music.length)
{
    res.status(400).send("Invalid ID");
    return;
}
if (req.body.name.length < 4)
{
    res.status(400).send("Name must contain 4 characters or more");
    return;
}

courses[req.params.id - 1] = {
    id: parseInt(req.params.id),
    name: req.body.name
}


res.status(200).send(courses[req.params.id - 1]);
});
    
app.delete('/api/courses/:id', (req,res)=>{
    const course = courses.find(s => s.id === parseInt(req.params.id));

    if (!course)
    {
        res.status(404).send("Course not found");
        return;
    }
    let objIndex = courses.indexOf(course);
    
    courses.splice(objIndex, 1);
    
    courses.forEach((obj, index) =>
    {
        obj.id = index + 1;
    })

    res.status(200).send("Course deleted");

});

app.listen(3000, () =>
{
console.log("Listening on port 3000");
})

