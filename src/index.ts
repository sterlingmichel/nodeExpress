/*
    Developer: Sterling Michel
    emailAddress: smichel@5searches.com
    CreatedDate: Oct 7th, 2020
    License: MIT
*/

import express from "express";
import path from "path";
import * as shell from "shelljs";
import dotenv from "dotenv";

// load all the routes
import ParseVersionOne from './routes/v1/parse';
import ParseVersionTwo from './routes/v2/parse';
import bodyParser from 'body-parser';

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;; // default port to listen

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            return res.sendStatus(400); // Bad request
        }
        next();
    });
});

// define a route handler for the default home page
app.post( "/", ( req, res ) => {
    // res.send( "Hello world!.." );
    res.render("index");
} );

app.post("/api/v1/parse", (req, res) => {
    const body = req.body;
    const parse = new ParseVersionOne();
    const result = parse.run(body)
    res.send(JSON.stringify(result));
});

app.post("/api/v2/parse", (req, res) => {
    const body = req.body;
    const parse = new ParseVersionTwo();
    const result = parse.run(body)
    res.send(JSON.stringify(result));
});

shell.cp("-R", "src/views", "dist/");


// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.info( `server started at http://localhost:${ port }` );
} );