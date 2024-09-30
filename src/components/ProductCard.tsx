import { IProduct } from "../interfaces/interface";
import { txtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProps {
  product: IProduct;
}
function ProductCard({ product }: IProps) {
  const { description, imageURL, price, colors ,title } = product;

  
  

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
        <span>${price}</span>
        <Image
          className="h-10 w-10 rounded-full object-contain"
          imageUrl={imageURL}
          alt="Audi car!"
        />
      </div>
      <div className="flex items-center  text-white space-x-1 mt-5">
        <Button
          onClick={() => console.log("Hello i'm Clicked")}
          className="bg-indigo-500 hover:bg-indigo-700"
        >
          Edit
        </Button>
        <Button className="bg-red-600 hover:bg-red-700 ">Delete</Button>
      </div>
    </div>
  );
}

export default ProductCard;
