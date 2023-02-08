import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const CustomerTable = () => {
  const context = useContext(AppContext);
  const results = context.results;

  const createRows = () => {
    return results ? (
      <div className="content">
        {Object.keys(results).map((key, index) => (
          <div className="customer" key={`customer_${index}`}>
            <Link to={`/${key}`}>{results[key][0].name}</Link>
          </div>
        ))}
      </div>
    ) : null;
  };

  return <>{createRows()}</>;
};

export default CustomerTable;
