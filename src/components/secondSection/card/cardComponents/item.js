const Item = ({ texto, isFirst }) => {
  return (
    isFirst ? (
    <p className='text-plg sm:text-pxl lg:text-plg text-center mt-3'>{texto}</p>
    ) : (
    <p className='text-plg sm:text-pxl lg:text-plg text-center'>{texto}</p>
    )
  );
};

export default Item;