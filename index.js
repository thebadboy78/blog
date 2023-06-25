import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose'

mongoose.connect(
    'mongodb+srv://admin:wwwwww@cluster0.16mvkw0.mongodb.net/')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/register', (req, res) => {

});

app.listen(4444, (err) => {
    if(err){
        return console.log(err);
    }

    console.log('Server OK');
});




// app.post('/auth/login', (req, res) => {
//     console.log(req.body);

// const token = jwt.sign(
//     {
//         email: req.body.email,
//         fullName: 'Вася Пупкин',
//     },
//     'secret23',
// );

//     res.json({
//         success:true,
//         token,
//     });
// });

// app.get('/', (req, resp) => {
//     resp.send('Hello World!');
// });