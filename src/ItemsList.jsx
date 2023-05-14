import Item from "./Item";

const ItemsList = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 mx-auto gap-8">
      {images?.map((image) => (
        <Item pic={image.urls.thumb} key={image.id} />
      ))}
    </div>
  );
};

export default ItemsList;
