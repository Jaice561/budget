import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ["jan", "feb", "mar", "fri"],
  datasets: [
    {
      label: 'Monthly Graph',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [1, 2, 3, 4]
    }
  ]
}
export default class BudgetDetail extends React.Component {
    render() {
        return (
            <>
             <div>
                       <Bar
                         data={state}
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
}

