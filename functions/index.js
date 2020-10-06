const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HVjF8FFZHSFPTHs9ajRX5icaGpyhUOchpLxc3CKnoi0HF6CRml4sO09k8RcZjTA7ln8c8Q4xA0PnBXSurguppx600UyOBDjC1"
);

// API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello World!!!")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request Received !!! for this total>>" + total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  //OK- Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

// Example end point
// http://localhost:5001/clone-547d4/us-central1/api
