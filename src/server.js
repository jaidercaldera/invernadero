const express = require("express");
const exphbs = require("express-handlebars");
//const { model } = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const CPS = require("cookie-parser")
//import indexRoutes from "./routes/index.routes";

//Declarando la contante que contiene nuestro servidor
const app = express();

app.use(CPS());

//Estableciendo el uso de cors
app.use(cors());
// Analizar solicitudes con datos de formularios codificados en la URL
app.use(express.urlencoded({ extended: true }));
//Estableciendo la direccion de las vistas
app.set("views", path.join(__dirname, "views"));
//Configurando el gestor de plantilla

app.engine(
    "hbs",
    exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
//Estableciendo el uso de express.json
app.use(express.json());


//Estableciendo el uso de hbs
app.set("view engine", ".hbs");

//Estableciendo la careta con los recusos publicos
app.use(express.static(path.join(__dirname, "public")));




//Estableciendo uso de morgan
app.use(morgan("dev"));




module.exports = app;
