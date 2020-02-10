import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getData } from '../../libs/utils/graphql';
import TableContainer from './style';

const Getuser = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, error, data } = useQuery(getData);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
 
    return(
        <div>
          <TableContainer>  
        <table>
          <tbody>
              <tr>
            <th>Sno.</th>
            <th>Trainee Email</th>
            <th>Reviewer Email</th>
            </tr>
    { data.getUser.map((item, index) => (
        <>
            <tr>
    <td>{index+1}</td>
      <td key={index}>
        <p>
          {item.traineeEmail}
        </p>
      </td>
      <td key={index}>
        <p>
          {item.reviewerEmail}
        </p>
      </td>
      </tr>
      </>
    ))
    }
    </tbody>
    </table>
    </TableContainer>
    </div>
    )
  }

  export default Getuser;