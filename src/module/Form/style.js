import styled from 'styled-components';

const FormContainer = styled.div`
width:500px;
margin: 50px auto;
text-align:center;
padding:50px;
background-color:#eee;
border-radius:10px;
.text-input{
  
    position: relative;
    margin-top: 30px;
    
    input[type="text"], select{
      display: inline-block;
      width: 500px;
      height: 40px;
      box-sizing: border-box;
      outline: none;
      border: 1px solid lightgray;
      border-radius: 3px;
      padding: 10px 10px 10px 100px;
      transition: all 0.1s ease-out;
      background-color:#fff;
    }
    
    input[type="text"] + label, select+label{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 40px;
      line-height: 40px;
      color: white;
      border-radius: 3px 0 0 3px;
      padding: 0 20px;
      background: #E03616;
      transform: translateZ(0) translateX(0);
      transition: all 0.3s ease-in;
      transition-delay: 0.2s;
    }
    
    input[type="text"]:focus + label{
      transform: translateY(-120%) translateX(0%);
      border-radius: 3px;
      transition: all 0.1s ease-out;
    }
    
    input[type="text"]:focus{
      padding: 10px;
      transition: all 0.3s ease-out;
      transition-delay: 0.2s;
    }
    span {position:absolute;left:0;bottom:-20px;font-size:13px;color:red}

  }
  button {
      padding:10px;
      width:200px;
      background-color:#fff;
      border:1px solid #E03616;
  }
`;
export default FormContainer;