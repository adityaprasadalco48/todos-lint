const Product = () => {
  const arr = ['apple', 'mango', 'orange'];

  return (
    <div>
      {arr.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};

export default Product;
