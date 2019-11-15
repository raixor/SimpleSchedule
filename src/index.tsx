import { render } from "react-dom";
import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import Live from "./components/live";
import PrevNext from "./components/prevNext";
import colors from "./utils/theme";
import { IChat } from "./utils/interfaces";
import styled from "styled-components";

const Hour = styled.div`
  display: flex;
  justify-content: center;
`;
const Widget: React.FC = () => {
  const [time, setTime] = useState(moment());
  const [chats, setChats] = useState<IChat[]>([]);
  const [prev, setPrev] = useState<IChat>();
  const [live, setLive] = useState<IChat>();
  const [next, setNext] = useState<IChat>();
  let interval: any;
  const addZeroBefore = (n: number) => {
    return (n < 10 ? "0" : "") + n;
  };
  useEffect(() => {
    interval = setInterval(
      () =>
        setTime(
          moment()
            .add(1, "days")
            .subtract(8, "hours")
        ),
      1000
    );
    const getChats = async () => {
      const res = await fetch("https://devfestalicante.com/api/talks/public");
      setChats(
        [
          ...(await res.json()).map(
            ({ title, start, end, image, speaker, slug }: IChat) => {
              return {
                title,
                start: moment(start),
                end: moment(end),
                image: `https://devfestalicante.com${image}`,
                speaker: {
                  ...speaker,
                  avatar: `https://devfestalicante.com${speaker.avatar}`
                },
                slug
              };
            }
          )
        ].sort(
          (a, b) => a.start.toDate().valueOf() - b.start.toDate().valueOf()
        )
      );
    };
    getChats();
  }, []);
  useEffect(() => {
    if (time) {
      chats.map((chat, i) => {
        if (moment(time).isBetween(chat.start, chat.end)) {
          setLive(chat);
          setPrev(chats[i - 1]);
          setNext(chats[i + 1]);
        }
      });
    }
  }, [time]);
  return (
    <div
      style={{ fontFamily: "Product sans", backgroundColor: colors.blueDark }}
      className="App"
    >
      {/* <div style={{ borderWidth: 1, borderColor: "black" }}>
        {chats.map(c => {
          return (
            <div style={{ margin: 10 }}>
              <div>title: {c.title}</div>
              <div>start: {c.start.toDate().toUTCString()}</div>
              <div>end: {c.end.toDate().toUTCString()}</div>
            </div>
          );
        })}
      </div> */}
      <Hour>
        <h2 style={{ color: "white" }}>
          DevFest Alicante {time.toDate().getUTCHours()}:
          {addZeroBefore(time.toDate().getUTCMinutes())}
        </h2>
      </Hour>
      {prev && <PrevNext {...prev} />}
      {live && <Live {...live} />}
      {next && <PrevNext {...next} />}
    </div>
  );
};
export default Widget;

const rootElement = document.getElementById("root");
render(<Widget />, rootElement);
