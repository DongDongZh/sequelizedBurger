var db = require("../models");

module.exports = function (app) {

  //read
  app.get("/", function (req, res) {
    db.burger.findAll({
      attributes: ["id", "burger_name", "devoured"]
    }).then(function (data) {
      // console.log(data[0].dataValues);
      // console.log(typeof(data));//will log "object" --> because array is a kind of object 
      // console.log(Array.isArray(data));// will log "true"
      
      var arr = [];
      for (var i = 0; i < data.length; i++) {
        arr.push(data[i].dataValues)
      }
      // console.log(arr);
      var hbsObject = {
        burgers: arr
      }
      // console.log("This is my handlebars: ");
      // console.log(hbsObject);

      res.render("index", hbsObject);
    });
  });

  //create
  app.post("/api/burgers", function (req, res) {
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function (result) {
      // console.log(result.burger_name);
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
          id: req.params.id
        }
      }).then(function (result) {
        res.json(result);
        console.log(burger_name);
        console.log(devoured);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
}