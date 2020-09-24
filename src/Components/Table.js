import React from 'react'

function Table(){
    return(
        <>
        <div className="container">
           <div className="row col s6 m6 l12">
           <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Father Name</th>
                     <th>CNIC</th>
                     <th>Job</th>
                     <th>Obtained Marks</th>
                    <th>Status</th>
                  </tr>
               </thead>
                 <tbody>
                    <tr>
                       <td>Alvin</td>
                       <td>Eclair</td>
                       <td>$0.87</td>
                       <td>Alvin</td>
                       <td>Eclair</td>
                       <td>$0.87</td>
                    </tr>
                </tbody>
            </table>
       </div>
     </div>
        </>
    )
}

export default Table;