import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  background-color: green;
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 16px 0;
`;

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin bottom: 5%;
  height: 30%;
`;

const AvatarLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 75%;
  margin bottom: 5%;
  height: 60px;
`;

export { Layout, Header, CardLayout, AvatarLayout };
