import React, { useContext } from "react";
import "./News.css";
import { GlobalContext } from "../../../context/GlobalState";

export default function News() {
  const { listNews } = useContext(GlobalContext);

  return (
    <div>
      <>
        {listNews.map((item, index) => {
          //<!--TODO
          // change dangerouslySetInnerHTML to react-html-parser (npm install)
          // import ReactHtmlParser from "react-html-parser";
          //<div>{ReactHtmlParser(item.news.about.text)}</div>

          return (
            <div className="news" key={index}>
              <>
                <p className={item.news.title.className}>
                  {item.news.title.text}
                </p>
                <p
                  className={item.news.about.className}
                  dangerouslySetInnerHTML={{ __html: item.news.about.text }}
                ></p>
              </>
              <p className={item.news.when.className}>
                <a href={item.news.when.link}> {item.news.when.text}</a>
              </p>
            </div>
          );
        })}
      </>
    </div>
  );
}
