import React, { useState,useEffect } from "react";
import {Line }  from 'react-chartjs-2'
import {Fetch} from '../../../common/actions'
import {Spinner} from '../../layouts/spinner/spinner'

const LineChart = (props) => {

  const dataChart = {
    labels:  props.data.line.label,
    datasets: [
      {
        label: "Products",
        data: props.data.line.products,
        fill: true,
        showLines: true,
        backgroundColor: "#19d895",
        borderColor: "#19d895",
      },
      {
        label: "Sales", 
        data: props.data.line.orders,
        fill: true,
        showLines: true,
        backgroundColor: "#2196f3",
        borderColor: "#178ce4",
      },
    ],
  };

  return(
    <Line
      data={dataChart}
      // options={defaults}
      height={40}
      width={100}
    />
  )
}
const Dashboard = () => {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true);
    // Fetch('dashboard').then(res => {
    //   if (res.status) {
    //     setData(res.data);
    //     setLoading(true);

    //   }
    // })
  }, []);


  if(loading){
    return(
      <div>Hello</div>
    )
    // return (
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
    //         <div className="card card-statistics">
    //           <div className="card-body">
    //             <div className="clearfix">
    //               <div className="float-left">
    //                 <i className="mdi mdi-cube text-danger icon-lg"></i>
    //               </div>
    //               <div className="float-right">
    //                 <p className="mb-0 text-right text-dark">Total Revenue</p>
    //                 <div className="fluid-container">
    //                   <h3 className="font-weight-medium text-right mb-0 text-dark">
    //                     SAR {data.revenue}
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <p className="text-muted mt-3 mb-0">
    //               <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i>{" "}
    //               65% lower growth{" "}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div   className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
    //         <div className="card card-statistics">
    //           <div className="card-body">
    //             <div className="clearfix">
    //               <div className="float-left">
    //                 <i className="mdi mdi-receipt text-warning icon-lg"></i>
    //               </div>
    //               <div className="float-right">
    //                 <p className="mb-0 text-right text-dark">Orders</p>
    //                 <div className="fluid-container">
    //                   <h3 className="font-weight-medium text-right mb-0 text-dark">
    //                     {data.orders}
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="d-flex text-center justify-content-center">
    //             <p className="text-muted mt-3 mr-2 ml-2 mb-0">
    //               <i
    //                 className="mdi mdi-vanish mr-1"
    //                 aria-hidden="true"
    //               ></i>{" "}
    //               {data.status.progress}
    //             </p>
    //             <p className="text-muted mt-3 mr-2 ml-2 mb-0">
    //               <i
    //                 className="mdi mdi-read mr-1"
    //                 aria-hidden="true"
    //               ></i>{" "}
    //               {data.status.active}
    //             </p>
    //             <p className="text-muted mt-3 mr-2 ml-2 mb-0">
    //               <i
    //                 className="mdi mdi-cancel mr-1"
    //                 aria-hidden="true"
    //               ></i>{" "}
    //               {data.status.cancel}
    //             </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
    //         <div className="card card-statistics">
    //           <div className="card-body">
    //             <div className="clearfix">
    //               <div className="float-left">
    //                 <i className="mdi mdi-poll-box text-success icon-lg"></i>
    //               </div>
    //               <div className="float-right">
    //                 <p className="mb-0 text-right text-dark">Sales</p>
    //                 <div className="fluid-container">
    //                   <h3 className="font-weight-medium text-right mb-0 text-dark">
    //                     {data.sales}
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <p className="text-muted mt-3 mb-0">
    //               <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i>{" "}
    //               Weekly Sales{" "}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
    //         <div className="card card-statistics">
    //           <div className="card-body">
    //             <div className="clearfix">
    //               <div className="float-left">
    //                 <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
    //               </div>
    //               <div className="float-right">
    //                 <p className="mb-0 text-right text-dark">Products</p>
    //                 <div className="fluid-container">
    //                   <h3 className="font-weight-medium text-right mb-0 text-dark">
    //                     {data.products}
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <p className="text-muted mt-3 mb-0">
    //               <i className="mdi mdi-reload mr-1" aria-hidden="true"></i>{" "}
    //               Product-wise sales{" "}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  
    //     <div className="row">
    //       <div className="col-12 grid-margin stretch-card">
    //         <div className="card">
    //           <div className="card-body">
    //             <div className="d-flex justify-content-between align-items-center mb-4">
    //               <h2 className="card-title mb-0">Sales Analysis</h2>
    //               <div className="wrapper d-flex">
    //                 <div className="d-flex align-items-center mr-3">
    //                   <span className="dot-indicator bg-success"></span>
    //                   <p className="mb-0 ml-2 text-muted">Products</p>
    //                 </div>
    //                 <div className="d-flex align-items-center">
    //                   <span className="dot-indicator bg-primary"></span>
    //                   <p className="mb-0 ml-2 text-muted">Sales</p>
    //                 </div>
    //               </div>
    //             </div>
  
    //             <div className="chart-container">
    //                 <LineChart data={data} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }else{
    return <Spinner />;
  }
};

export default Dashboard;
