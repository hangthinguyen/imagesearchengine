const Item = ({ pic }) => {
  return (
    <div className="h-60">
      <img src={pic} alt="pic" className="w-full object-cover h-full rounded" />
    </div>
  );
};

export default Item;
