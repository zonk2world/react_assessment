import React from "react";
import CustomerTable from "../../components/CustomerTable";

function Home() {
  return (
    <section>
      <h3 className="page-title">Customers</h3>
      <p className="intro">Click each row to see the rewards.</p>

      <CustomerTable />
    </section>
  );
}

export default Home;
