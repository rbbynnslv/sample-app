import styled from 'styled-components';

export const StyledComponent = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800i&display=swap');
  h1,
  h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
  .card {
    width: 300px;
    height: 110px;
    text-align: center;
    margin: 10px auto;
  }
  .divLoader {
    margin-top: 85px;
  }
  .progress {
    height: 10px;
  }
  .divBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;
  }
  .btn {
    margin-top: 20px;
  }
  .imageDiv {
    width: 450px;
    height: 350px;
  }
`;
