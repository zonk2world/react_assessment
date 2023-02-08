import React from "react";

import { calcPointsForEachMonth, formattedDate } from "../../utils";
import "./style.scss";

const RewardsTable = (props) => {
  const transactions = props.transactions;

  if (transactions?.length === 0) {
    return <p>No transactions found.</p>;
  }

  const [monthlyRewards, total] = calcPointsForEachMonth(transactions);

  return (
    <>
      <div className="rewards">
        {Object.keys(monthlyRewards).map((key, index) => (
          <div className="rewards__row" key={`transaction_${index}`}>
            <div>{formattedDate(key)}</div>
            <div className="text-center">{monthlyRewards[key]}</div>
          </div>
        ))}

        <div className="rewards__row rewards__row--total">
          <div className="text-center">
            <b>Total</b>
          </div>
          <div className="text-center">
            <b>{total}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsTable;
