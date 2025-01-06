import React from "react";

function PageTitle(props: any) {
  const { data } = props;
  return (
    <section className="page-title-container">
      {data.map((item: any, index: any) => (
        <div key={index} className="title">
          <h4>{item.title}</h4>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default PageTitle;
