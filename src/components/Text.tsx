function Text(props: any) {
  const { data } = props;
  return (
    <section className="text-container">
      <div className="text-content">
        {data.map((item: { text: string; image: string }, index: any) => (
          <p key={index}>{item.text}</p>
        ))}
      </div>
    </section>
  );
}

export default Text;
