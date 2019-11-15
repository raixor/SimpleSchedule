import React, { useEffect } from "react";
import styled from "styled-components";
import colors from "../utils/theme";
import { IChat } from "../utils/interfaces";
import Line from "./line";

const Container = styled.div`
  display: flex;
  height: 150px;
  background-color: ${colors.blue};
  border-bottom: 1px solid rgba(250, 250, 250, 0.1);
`;
const Body = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 10px 0px 10px 10px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  padding: 10px 0;
`;
const Title = styled.div`
  color: white;
  width: 80%;
  text-align: left;
`;

const Date = styled.div`
  color: rgba(250, 250, 250, 0.5);
`;

const SocialContainer = styled.div``;
const Link = styled.a`
  color: white;
  text-decoration: none;
`;
const Live: React.FC<IChat> = ({ start, end, title, slug }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);
  const getLink = () => {
    return (
      // @ts-ignore-begin
      <a
        href="https://twitter.com/intent/tweet?button_hashtag=DevFestALC19&ref_src=twsrc%5Etfw"
        class="twitter-hashtag-button"
        data-show-count="false"
      >
        Tweet #DevFestALC19
      </a>
    );
    // @ts-ignore-end
  };
  return (
    <Container>
      <Left>
        <Date>
          {start.toDate().getUTCHours()}:
          {start.toDate().getUTCMinutes() === 0
            ? "00"
            : start.toDate().getUTCMinutes()}
        </Date>
        <Line />
        <Date>
          {end.toDate().getUTCHours()}:
          {end.toDate().getUTCMinutes() === 0
            ? "00"
            : end.toDate().getUTCMinutes()}
        </Date>
      </Left>
      <Body>
        <Title>
          <Link href={`https://devfestalicante.com/talk/${slug}`}>{title}</Link>
          />
        </Title>
        <SocialContainer>
          <div className="twitter-embed">{getLink()}</div>
        </SocialContainer>
      </Body>
    </Container>
  );
};
export default Live;
