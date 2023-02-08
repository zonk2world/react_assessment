import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AppContext } from "../../App";
import RewardsTable from "../../components/RewardsTable";

function Customer() {
  const { customerId } = useParams();

  const context = useContext(AppContext);
  const transactions = context.results[customerId];

  return (
    <section>
      <Link to="/">&lt; Back</Link>
      <h3 className="page-title">{transactions[0].name}'s Rewards</h3>
      <p className="intro">Here is the rewards for last 3 months.</p>
      <RewardsTable transactions={transactions} />
    </section>
  );
}

export default Customer;
