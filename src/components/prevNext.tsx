import React from "react";
import styled from "styled-components";
import { IChat } from "../utils/interfaces";
import colors from "../utils/theme";
import Line from "./line";

const Container = styled.div`
  display: flex;
  height: 100px;
  background-color: ${colors.blue};
  border-bottom: 1px solid rgba(250, 250, 250, 0.1);
`;
const Body = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px 10px 10px;
`;
const Title = styled.div`
  color: white;
  width: 80%;
  text-align: left;
`;

const Date = styled.div`
  color: rgba(250, 250, 250, 0.25);
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 10px 0;
`;
const Link = styled.a`
  color: rgba(250, 250, 250, 0.25);
  text-decoration: none;
`;
const PrevNext: React.FC<IChat> = ({ start, end, title, slug }) => {
  const goTo = () => {};
  return (
    <Container>
      <Left>
        <Date>
          {start.toDate().getUTCHours()}:
          {start.toDate().getUTCMinutes() === 0
            ? "00"
            : start.toDate().getUTCMinutes()}
        </Date>
        {/* <Line /> */}
        <Date>
          {end.toDate().getUTCHours()}:
          {end.toDate().getUTCMinutes() === 0
            ? "00"
            : end.toDate().getUTCMinutes()}
        </Date>
      </Left>
      <Body onClick={() => goTo()}>
        <Title>
          <Link href={`https://devfestalicante.com/talk/${slug}`}>{title}</Link>
          />
        </Title>
      </Body>
    </Container>
  );
};
export default PrevNext;
