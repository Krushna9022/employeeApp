import React from 'react'

function Addemp() {
  return (
    <>
    <form>
    <div className='container mb-3'>
        <h3>Employee Add</h3>
       <div className='form-floating mb-1'>
            <input type="text" className='form-control' placeholder='enter the name of employee'/>
            <label >name</label>
       </div>
       <div className='d-flex gap-3 '>
         <div className='form-floating mb-1  '>
             <input type="text" className='form-control' placeholder='birthof date'/>
             <label > BOD</label>
         </div>
         <div className='form-floating mb-1  '>
            <input type="text" className='form-control' placeholder=''/>
            <label > contact</label>
         </div>
         <div className='form-floating mb-1  '>
            <input type="text" className='form-control' placeholder='birthof date' required/>
            <label > email</label>
         </div>   
       </div>
       <button className='btn btn-primary' > add Employee</button>
    </div>
    </form>
    </>
  )
}

export default Addemp
