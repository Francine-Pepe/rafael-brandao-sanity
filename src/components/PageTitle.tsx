import { useLocation } from "react-router-dom";

function PageTitle(props: any) {
  const location = useLocation().pathname;
  const { data } = props;

  return (
    <section className="page-title-container">
      {(Array.isArray(data) ? data : []).map(
        (item: { name: string; link: string }, index: any) => (
          <div key={index} className="title">
            {location === `${item.link}` && (
              <>
                <h3>{item.name}</h3>
                <div className="page-title-bottom-box"></div>
              </>
            )}
          </div>
        )
      )}
    </section>
  );
}

export default PageTitle;
