export interface IProduct{
    id?: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    colors: string[]
    price:string;
    category: {
        name: string;
        imageURL: string;
    }
}

export interface IFormInput{
    id: string,
    name: "title" | "description" | "price" | "imageURL",
    label:string,
    type: string,
}
