//在 index.js 中配置 Express 伺服器，並讓它render index.ejs 頁面。

import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;


app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout'); 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


let posts = [];

// 路由設置
app.get('/', (req, res) => {
    res.render('index');  // render views/index.ejs 作為主頁
});

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => res.render('about'));

app.get('/projects', (req, res) => res.render('projects'));

app.get('/contact', (req, res) => res.render('contact'));


// guestbook 相關路由
app.get('/guestbook',(req,res)=>{
    res.render('guestbook',{ posts })
});

app.get('/guestbook/new', (req, res) => {
    res.render('create'); 
});

app.post('/guestbook/new', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        title,
        content,
        date: new Date().toLocaleString() // 取得當前時間
    };
    posts.push(newPost);
    res.redirect('/guestbook');
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
