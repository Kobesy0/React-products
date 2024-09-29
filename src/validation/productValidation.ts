export const  productValidation = (product: { title: string; description: string; imageURL: string; price: string})=>{

    const errors:{ title: string; description: string; imageURL: string; price: string} = {
        title: "",
        description: "",
        imageURL: "",
        price: "",
    };

    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

    if(!product.title.trim() || product.title.length < 8 || product.title.length > 80){
         errors.title =  `Product title must be between 8 and 80 characters`
    }
    if(!product.description.trim() || product.description.length < 8 || product.description.length > 800){
         errors.description =  `Product description must be between 8 and 800 characters`
    }
    if(!product.imageURL.trim() || !validUrl){
         errors.imageURL =  `Product image URL is required`
    }
    if(!product.price.trim() || isNaN(Number(product.price))){
         errors.price =  `Product price is required`
    }
    return errors
}

