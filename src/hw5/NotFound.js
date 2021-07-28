import React from "react";
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const NotFound = ()=>{
    const { notFound } = useParams();
    
    return (notFound === 'ReactExample')? <Redirect to='/'/> :
    (
        <div className='notFound'>
            <h1>
                {`${notFound === 'competiton_notfound' ? 'Competition': 'Page'} not found!!!`}
            </h1>
        </div>
    );
}

export default NotFound;