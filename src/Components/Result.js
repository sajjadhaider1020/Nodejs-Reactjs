import React, { useEffect, useState } from 'react';
import './Result.css';
import axios from 'axios';


const Result = () => {
  const [user, setuser] = useState(null);
  const [RollNo, UpdateRollNo] = useState(null);
  const [Result, UpdateResult] = useState(null);

               useEffect(() => {
               console.log('firstTime')
                }, []);

               useEffect(() => {
                 console.log('2nd:  Roll Number Updated', RollNo)
                 axios.get(`http://localhost:5000/result?roll_no=${RollNo}`)
                .then((result) => {
                console.log(result.data)
                UpdateResult(result.data)
                })
                }, [RollNo]);
              //  useEffect(() => {
              //    console.log('roll updated', user)
              //    axios.get(`http://localhost:5000/result?roll_no=${user}`)
              //   .then((result) => {
              //   console.log(result.data)
              //   setuser(result.data)
              //   })
              //   }, [user]);

              // Button 
               const showresult = (e) => {
               let value = e.target.value;
               console.log(value)
               UpdateRollNo(value)
            }
            const handleresult = (e) => {
              let value = e.target.value;
              console.log(value)
              setuser(value)
           }

  return (
          <div className="container center blue-grey darken-4">
              <h1 className="title-result">Military Lands and Cantonments (MLC)</h1>
                <hr className="hr-tag" />
                    <div className="row text-area">
                    <h1 className="col s6 left roll-num">Roll Number :</h1>
               <form className="col s12 ">
                    <div className="row in-field ">
                       <div className="input-field block col s12 m12 l6">
                      <input type="number" id="rollnum" className="materialize-textarea" style={{ height: "45px" }}
                        placeholder="Roll Number"
                        onChange={(e) => {showresult(e)}}
                        >
                      </input>
                    {/* <label className='active'>Textarea</label> */}
                      </div>
                   <div >
                       <button type="button" className="waves-effect btn-s btn btn-large center waves-light col s8 m3 s12 m8 offset-m2 l3 offset-l4 xl4"
                       onClick={(e) => {handleresult(e)}}
                      >Search</button> 
                   </div>
                 </div>
              </form>
                 {Result ?
                 (
                 <table className=" col s6 l12 centered  blue-grey lighten-5 responsive-table" >
                 <thead >
                      {/* Table Head Row */}
                 <tr>
                   <th>Name</th>
                   <th>Father Name</th>
                   <th>CNIC</th>
                   <th>Roll Number</th>
                   <th>Job</th>
                   <th>Obtained Marks</th>
                   <th>Status</th>
                 </tr>
                </thead>
                <tbody> 
                        {/* Table Body Row   */}
                  <tr>
                   <td>{Result.Name}</td>
                   <td>{Result.TotalMarks}</td>
                   <td>{Result.CNIC}</td>
                 </tr>
                </tbody>
             </table>
              ):
          <div>     
        </div>
         }
     </div>
   </div>
  )}
export default Result;

