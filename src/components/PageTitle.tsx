import { useLocation } from "react-router-dom";

function PageTitle(props: any) {
  const { data } = props;
  const location = useLocation().pathname;

  return (
    <section className="page-title-container">
      {data.map((item: any, index: any) => (
        <div key={index} className="title">
          {location === `${item.link}` && (
            <>
              <h3>{item.name}</h3>
              <div className="page-title-bottom-box"></div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default PageTitle;
