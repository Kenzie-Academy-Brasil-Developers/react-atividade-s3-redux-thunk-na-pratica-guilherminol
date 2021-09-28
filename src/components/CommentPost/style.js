import styled from "styled-components";
export const UserImg = styled.img`
  border-radius: 50%;
  width: 75px;
  filter: invert(1);
`;
export const Container = styled.div`
  display: flex;
  background-color: lightgrey;
  width: 80%;
  max-width: 80%;
  border-radius: 20px;
  color: #000;
  padding: 10px;
  margin: 10px;
  h3 {
    margin: 10px;
    font-size: 18px;
  }
  p {
    margin: 0 30px;
    word-wrap: break-word;
    text-align: center;
  }
`;
export const Profile = styled.div`
  align-self: flex-start;
  margin: 10px;
`;
