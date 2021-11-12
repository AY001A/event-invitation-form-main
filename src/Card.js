import React from 'react'






const Card = ({data}) => {
    
    return (
        
            
              <div className="col">

<div className="card-body p-9">

<div className="fs-2 fw-bolder text-dark">{`${data.firstName} ${data.lastName}`}</div>

<p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">{data.email}{" "}{data.phone}</p>

<div className="d-flex flex-wrap mb-4">

    <div className="border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
        <div className="fs-6 text-gray-800 fw-bolder">Jan 28, 2021</div>
        <div className="fw-bold text-gray-400">Date</div>
    </div>

    <div className="border-dashed rounded min-w-125px py-3 px-4 mb-3">
        <div className="fs-6 text-gray-800 fw-bolder">9am</div>
        <div className="fw-bold text-gray-400">Time</div>
                              </div>

                          </div>

                      </div>

              </div>
          
      
    
    );
};


export default Card
