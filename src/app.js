import express from "express"
import { create } from 'express-handlebars';

const app = express();
const hbs = create({
    defaultLayout: "main",
    layoutsDir: "views/layouts",
    partialsDir: "views/partials"
})

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars');
app.set('views', 'views/pages');

app.use(express.static("public"));

app.get("/homepage", (req, res) => {
    res.render('homepage')
});

app.get("/shop", (req, res) => {
    res.render('shop')
});

app.get("/shop-detail", (req, res) => {
    res.render('shop-detail')
});

app.get("/shop-detail", (req, res) => {
    res.render('shop-detail')
});

app.get("/cart", (req, res) => {
    res.render('cart')
});

app.get("/chackout", (req, res) => {
    res.render('chackout')
});

app.get("/testimonial", (req, res) => {
    res.render('testimonial')
});

app.get("/404", (req, res) => {
    res.render('404')
});

app.get("/contact", (req, res) => {
    res.render('contact')
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});