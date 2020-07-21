import React from 'react';
import {Bar} from 'react-chartjs-2';

// const state = {
//   labels: ["Car Note", "Car Insurance", "Rent", "Phone Bill", "Utilities", "WiFi", "WellBeing"],
//   datasets: [
//     {
//       label: 'Monthly Graph',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: []
//     }
//   ]
// }
export default function BudgetDetail (props){
        return (
            <>
             <div>
                       <Bar
                         data={{labels: ["Car Note", "Car Insurance", "Rent", "Phone Bill", "Utilities", "WiFi", "WellBeing"],
                         datasets: [
                           {
                             label: 'Monthly Graph',
                             backgroundColor: 'rgba(75,192,192,1)',
                             borderColor: 'rgba(0,0,0,1)',
                             borderWidth: 2,
                             data: []
                           }
                                ]}}
                         options={{
                           title:{
                             display:true,
                             text:'Month',
                             fontSize:20
                           },
                           legend:{
                             display:true,
                             position:'right'
                           }
                         }}
                       />
                     </div>
            </>
        )
    }


