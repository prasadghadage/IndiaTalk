import React from "react";

const NewsContent = ({ newsArray }) => {
  return (
    <div className="app-content">
      {}
      {newsArray
       // .filter((item, newsItem) => newsItem < 15)
        .map((props) => {
          const {
            author,
            title,
            date,
            content,
            imageUrl,
            url,
            readMoreUrl
           // source: { name },
          } = props;

          return (
            <div className="newsCard">
              <img
                className="newsImage"
                src={
                  imageUrl
                    ? imageUrl
                    : "https://www.unityhighschool.org/wp-content/uploads/2014/08/default-placeholder.png"
                }
                alt="News"
              />
              <div className="newsText">
                {" "}
                <span className="title">
                  {title}
                  <br />
                  <span className="author">
                    <a style={{color:'black'}} href={url} target="_blank" rel="noreferrer">
                      <b>News</b>{" "}
                    </a>
                    <span style={{color:'black'}} className="muted" >
                      by {author ? author : "unknown"} on{" "}
                      <span className="publishedAt">{date}</span>
                    </span>
                  </span>
                  <div className="lowerNewsText">
                    <div className="description">
                      <p style={{color:'black'}}>{content}</p>
                    </div>
                  </div>
                </span>
                <div>
                  <span className="readmore">
                    {" "}
                    <a href={readMoreUrl} style={{color:'black'}} target="_blank" rel="noreferrer">
                      CLick to Read More...{" "} 

                      <span style={{ color: "black" }}>
                        {" "}
                        <b></b>{" "}
                      </span>{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NewsContent;
