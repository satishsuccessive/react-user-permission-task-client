import styled from 'styled-components';

const TableContainer = styled.div`
margin:50px auto;
text-align:center;
table {
    margin: 0 auto;
    border-collapse: collapse;
    tr:nth-of-type(odd) { 
        background: #eee; 
        }
    
    th { 
        background: #E03616; 
        color: white; 
        font-weight: bold; 
        }
    
    td, th { 
        padding: 10px; 
        border: 1px solid #ccc; 
        text-align: left; 
        font-size: 18px;
        }
}
`;
export default TableContainer