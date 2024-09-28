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
