'use strict';
const express = require("express");
const router = express.Router()
const sql = require("mssql")

var dbconfig = require("../dbconfig")

router.get('/gettask', function (req, res) {
    sql.connect(dbconfig.dbconnection()).then(() => {
        return sql.query("SELECT * FROM dummy2");
    }).then(result => {
        res.send(result.recordset);
    }).catch(err => {
        res.status(500).send("Something going Wrong...");
    })
});

router.post('/addtask', function (req, res) {
    sql.connect(dbconfig.dbconnection()).then(() => {
        // return sql.query("INSERT INTO todos VALUES ('" + req.body.username + "', '" + req.body.task + "','" + req.body.status + "')")
        // return sql.query("INSERT INTO dummy1 VALUES('" + req.body.username + "', " + req.body.task + ", " + req.body.status + ")");
        return sql.query("INSERT INTO dummy2 VALUES('" + req.body.username + "', " + req.body.task + ", " + req.body.age + ", " + req.body.gender + ")");
    }).then(result => {
        res.status(200).send("Task Added Successfully")
    }).catch(err => {
        res.status(415).send(err)
        console.log(err);
    })
});

router.delete('/deletetask/:id', function (req, res) {
    sql.connect(dbconfig.dbconnection()).then(() => {
        return sql.query("DELETE FROM tabletodo WHERE ID = " + req.params.ID);
    }).then(result => {
        res.status(415).send("Task deleted successfully");
    }).catch(err => {
        res.status(500).send("something went wrong...");
    })
});

router.put('/updateTask/:id', function (req, res) {
    sql.connect(dbconfig.dbconnection()).then(() => {
        return sql.query("UPDATE tabletodo SET [userName] = '" + req.body.userName + "', task = " + req.body.task + "WHERE ID = " + req.body.ID);
    }).then(result => {
        res.status(200).send("Task Updated successfully...")
    }).catch(err => {
        res.status(500).send("Something went wrong");
    })
});

router.get('/editTask/:id', function (req, res) {
    sql.connect(dbconfig.dbconnection()).then(() => {
        return sql.query("SELECT * FROM tabletodo WHERE id=" + req.params.id);
    }).then(result => {
        res.send(result.recordset);
    }).catch(err => {
        res.status(500).send("Something went wrong");
    })
})
module.exports = router;