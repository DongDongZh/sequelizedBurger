var db = require("../models");

module.exports = function (app) {

  //read
  app.get("/", function (req, res) {
    db.burger.findAll({}).then(function (data) {
      console.log(data);
      var hbsObject = {
        burgers: data
      }
      res.render("index", hbsObject);
    });
  });

  //create
  app.post("/api/burgers", function (req, res) {
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function (result) {
      res.json(result);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  //update

  app.put("/api/burgers/:id", function (req, res) {
    db.burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (result) {
        res.json(result)
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
}