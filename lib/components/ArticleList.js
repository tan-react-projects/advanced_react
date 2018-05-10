import React from "react";
import Article from "./Article";

const ArticleList = props => {
  return (
    <div>
      {Object.values(props.articles).map(article => (
        <Article
          article={article}
          actions={props.articleActions}
          key={article.id}
        />
      ))}
    </div>
  );
};

export default ArticleList;
