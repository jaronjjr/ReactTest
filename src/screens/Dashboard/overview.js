

// const styles = (theme) => ({
//     container: {
//       paddingTop: "37px",
//       paddingLeft: "14px",
//     },
//     openContainer: {
//       paddingTop: "37px",
//       paddingLeft: "16px",
//       paddingRight: "6px",
//     },
//     cardIcon: {
//       width: "34px",
//       height: "26px",
//     },
//     cardIcon1: {
//       width: "34px",
//       height: "26px",
//       fill: "#28AC47",
//     },
//   });

// export  const Overview=()=>{
     

//     return (
//         <Grid
//           container
//           className={
//             this.props.showAppDrawer ? styles().openContainer :  styles().container
//           }
//         >
//           <OverviewCard
//             cardTitle="Total Vehicles"
//             cardTitleNumeric={0}
//             showDrawer={this.props.showAppDrawer}
//             cardTitleNumeric={
//                 20
//             //   overviewData.vehicle_count ? overviewData.vehicle_count : 0
//               //  === null ? 0
//             }
//             footerText="Passed today"
//             cardIcon={<TotalCount />}
//             //footerIcon={<InfoIcon />}
//           />
  
//           <OverviewCard
//             cardTitle="Commercial vehicles"
//             showDrawer={this.props.showAppDrawer}
//             cardTitleNumeric={
//               overviewData.commercial_vehicle_count
//                 ? overviewData.commercial_vehicle_count
//                 : 0
//             }
//             footerText="Passed Today"
//             cardIcon={<CommercialCount />}
//             // footerIcon={<InfoIcon />}
//           />
//           <OverviewCard
//             cardTitle="Alerts"
//             showDrawer={this.props.showAppDrawer}
//             cardTitleNumeric={
//               overviewData.alert_count ? overviewData.alert_count : 0
//             }
//             footerText="Generated today"
//             cardIcon={<AlertCount />}
//             //footerIcon={<InfoIcon />}
//           />
  
//           <OverviewCard
//             cardTitle="E-way bill Valid/Invalid"
//             showDrawer={this.props.showAppDrawer}
//             cardTitleNumeric={
//               (overviewData.validEwayBillCount
//                 ? overviewData.validEwayBillCount
//                 : 0) +
//               "/" +
//               (overviewData.invalidEwayBillCount
//                 ? overviewData.invalidEwayBillCount
//                 : 0)
//             }
//             footerText="Count for today"
//             cardIcon={<EwaybillCount />}
//             //footerIcon={<InfoIcon />}
//           />
//         </Grid>
//       );
// }