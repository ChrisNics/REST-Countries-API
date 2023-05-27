const Detail = ({ title, value }) => {
  return (
    <h5 className="font-semibold ">
      {title} <span className="ml-1 font-normal">{value ? value : 'No Record'}</span>
    </h5>
  );
};

export default Detail;
