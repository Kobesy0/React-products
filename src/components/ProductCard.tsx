import { IProduct } from "../interfaces/interface";
import { formatNumber, txtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";


interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: ()=> void;
  index: number;
  setProductToEditIndex: (index: number) => void
  openRemoveModal: ()=> void;
}
function ProductCard({ product, setProductToEdit , openEditModal , index,setProductToEditIndex, openRemoveModal}: IProps) {
  const { description, imageURL, price, colors ,title, category } = product;

  const onEdit = () => {
    setProductToEdit(product);
    setProductToEditIndex(index);
    openEditModal();
  };
  const onRemove =()=>{
    setProductToEdit(product);
    openRemoveModal()
    console.log("onRemove")
  }
    // Make map on the color to render them 
  const renderColorsList = colors.map(color => <CircleColor key={color} color={color} />)
  return (
    <div className="max-w-sm md:max-w-lg  mx-auto md:mx-0 border p-2 flex flex-col rounded-md">
      <Image
        className="rounded-md h-52 w-full lg:object-cover"
        imageUrl={imageURL}
        alt="Audi car!"
      />
      <h3 className="font-bold mt-1">{title}</h3>
      <p className="h-95 max-w-sm  w-full">{txtSlicer(description, 150)}</p>
      <div className="flex gap-1 flex-wrap my-5">{renderColorsList}</div>
      <div className="flex items-center justify-between">
        <span className="text-indigo-600 font-semibold">${formatNumber(price)}</span>
        <div className="gap-1 flex items-center">
        <Image
          className="h-10 w-10 rounded-full object-contain"
          imageUrl={category.imageURL}
          alt={category.name}
        />
        <span>{category.name}</span>
        </div>
      </div>
      <div className="flex items-center  text-white space-x-1 mt-5">
        <Button className="bg-indigo-500 hover:bg-indigo-700" onClick={onEdit}>Edit</Button>
        <Button className="bg-red-600 hover:bg-red-700" onClick={onRemove}>Delete</Button>
      </div>
    </div>
  );
}

export default ProductCard;
