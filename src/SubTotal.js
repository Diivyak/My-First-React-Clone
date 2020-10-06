import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProviders";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function SubTotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  let itemsPrice = 0;
  basket.forEach(function (item, index) {
    itemsPrice += item.price;
  });

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({backet.length} items): */}
              Subtotal ({basket?.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
