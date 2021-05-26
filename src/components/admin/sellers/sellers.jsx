import React, { useState, useEffect } from "react";
import { Fetch } from '../../common/actions'
import { Spinner } from '../layouts/spinner/spinner'
import { useTranslation } from "react-i18next";
import Table from "../../common/table";
import Columns from "../../common/columnTable";

const Dashboard = () => {

  const [data, setData] = useState([{ id: "Loading ..." }]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    Fetch("seller").then((res) => {
      if (res.status) {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      } else {
        setData([]);
      }
    });

  }, []);

  const columns = [
    {
      label: "ID",
      name: "id",
    },
    {
      label: 't("name")',
      name: "name",
    },
    {
      label: t("email"),
      name: "email",
    },
  ];

  if (loading) {
    return (
      <div className="products-dropbox">
        <div className="products-table">
          <Table
            dataTable={data}
            table="seller"
            Columns={Columns("seller", columns)}
          />
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Dashboard;
