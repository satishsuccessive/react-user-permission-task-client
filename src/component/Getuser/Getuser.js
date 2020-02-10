
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getData } from '../../Apollo/query';

const Getuser = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(getData);
    console.log(data,"<<<Dataa",loading,error)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
 
    return data.getUser.map((item, index) => (
      <div key={index}>
        <p>
          {item.traineeEmail}
        </p>
      </div>
    ));
  }

  export default Getuser;