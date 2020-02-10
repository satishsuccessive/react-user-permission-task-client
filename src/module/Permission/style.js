import styled from 'styled-components';

const Container = styled.div`
width:500px;
margin: 50px auto;
text-align:center;
padding:50px;
background-color:#eee;
border-radius:10px;
button {
    padding:10px;
    width:200px;
    background-color:#E03616;
    border:1px solid #E03616;
    color:#fff;
    margin-bottom:10px;
    &:disabled {
        background-color:#ddd;
        border:1px solid #ddd;

    }
}

}
`;
export default Container