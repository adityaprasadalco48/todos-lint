const Product = () => {
  const arr = ['apple', 'mango', 'orange'];

  return (
    <div>
      {arr.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default Product;
