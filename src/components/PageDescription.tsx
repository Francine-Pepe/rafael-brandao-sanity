
function PageDescription(props: any) {
  const { data } = props;

  return (
    <section className="text-container">
      <div className="text-content">
        <p>{data}</p>
      </div>
    </section>
  );
}

export default PageDescription;
