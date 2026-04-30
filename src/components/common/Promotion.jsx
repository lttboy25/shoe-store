function Promotion({title}) {
  return(
    <>
      <span className="badge bg-danger rounded-lg py-2">
      - {title} %
    </span>
    </>
  );
}

export default Promotion;
