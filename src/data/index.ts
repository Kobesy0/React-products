import { ICategory, IFormInput, IProduct } from "../interfaces/interface";
import { v4 as uuid } from 'uuid';

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: "Audi car",

        description:"Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.",
        imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_UkHsdZDnE71ZtEivxRhE741tVYWq3La7Q&s",
        price: "5000",
        colors: ["#008600", "#2563eb","#FF6e31" ],
        category:{
            name: "Cars",
            imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_UkHsdZDnE71ZtEivxRhE741tVYWq3La7Q&s",
        }
    },
    {
        id: uuid(),
        title: "Computer",
        description:"Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.",
        imageURL : "https://static.ffx.io/images/$zoom_0.135%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/6fa631de81437f5f9f66ea5c590371388493dbb1",
        price: "50400",
        colors: ["#122535", "#2563eb","#FF6e31" ],
        category:{
            name: "PC",
            imageURL : "https://static.ffx.io/images/$zoom_0.135%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/6fa631de81437f5f9f66ea5c590371388493dbb1",
        }
    },
    {
        id: uuid(),
        title: "Bicycle",
        description:"Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.",
        imageURL : "https://static.standard.co.uk/2022/08/25/17/lifestyle.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000",
        price: "1500",
        colors: ["#7895bb", "#2563eb","#FF6e31" ],
        category:{
            name: "Bicycles",
            imageURL : "https://static.standard.co.uk/2022/08/25/17/lifestyle.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000",
        }
    },
    {
        id: uuid(),
        title: "Ferrir car",
        description:"Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.",
        imageURL : "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg",
        price: "5000",
        colors: ["#000000", "#2563eb","#dfa56f" ],
        category:{
            name: "Cars",
            imageURL : "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg",
        }
    },
    {
        id: uuid(),
        title: "Books",
        description:"Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.",
        imageURL : "https://images.squarespace-cdn.com/content/v1/5876279bbebafb82a7c81c00/f4e17d6a-81db-4a04-9bda-63c86c517778/IMG_3105.jpg",
        price: "5000",
        colors: ["#53edbb", "#2563eb","#546520" ],
        category:{
            name: "Books",
            imageURL : "https://images.squarespace-cdn.com/content/v1/5876279bbebafb82a7c81c00/f4e17d6a-81db-4a04-9bda-63c86c517778/IMG_3105.jpg",
        }
    },
    {
        id: uuid(),
        title: "Laptop",
        description:"Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.",
        imageURL : "https://www.cnet.com/a/img/resize/54e722ee0ade506ca77e1661594622eaaeb88f9f/hub/2022/09/22/41242b48-7968-44bf-bcdd-59a29cc26a23/hp-pavilion-plus-14-laptop-02-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
        price: "5000",
        colors: ["#000000", "#ffffff","#655656" ],
        category:{
            name: "Laptop",
            imageURL : "https://www.cnet.com/a/img/resize/54e722ee0ade506ca77e1661594622eaaeb88f9f/hub/2022/09/22/41242b48-7968-44bf-bcdd-59a29cc26a23/hp-pavilion-plus-14-laptop-02-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
        }
    },
    {
        id: uuid(),
        title: "Ferrir car",
        description:"Ferraris are what dreams are made of. Fast, sexy, and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir wherever they go. The sensually styled Roma coupe is the most accessible in terms of price, but even it is far too expensive for most people.",
        imageURL : "https://optim.tildacdn.net/tild6666-3964-4837-b736-333931393161/-/resize/824x/-/format/webp/AI_10_year_car_exter.png",
        price: "5000",
        colors: ["#FF6e81", "#2563eb","#FF6e31" ],
        category:{
            name: "Cars",
           imageURL : "https://optim.tildacdn.net/tild6666-3964-4837-b736-333931393161/-/resize/824x/-/format/webp/AI_10_year_car_exter.png",
        }
    },
]

export const formInputsList :IFormInput[] = [
    {
        id: "title",
        name: "title",
        label:"Product title",
        type: "text",
    },
    {
        id: "description",
        name: "description",
        label:"Product Description",
        type: "text",
    },
    {
        id: "image",
        name: "imageURL",
        label:"Product ImageURL",
        type: "text",
    },
    {
        id: "price",
        name: "price",
        label:"Product Price",
        type: "text",
    },
]

export const colors : string[]= [
    "#000000",
    "#2563eb",
    "#FF6e31",
    "#dfa56f",
    "#546520",
    "#FFFFFF",
    "#655656",
    "#FF6e81",
    "#FFF666",
    "#FFC400",
    "#FF9500",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#13005A"
]

export const categories : ICategory[] = [
    {
        id:uuid(),
        name: "Cars",
        imageURL : "https://optim.tildacdn.net/tild6666-3964-4837-b736-333931393161/-/resize/824x/-/format/webp/AI_10_year_car_exter.png",
    },
    {
        id:uuid(),
        name: "T-Shirt",
        imageURL : "https://i.etsystatic.com/24100936/r/il/3098fe/3706835619/il_570xN.3706835619_os1o.jpg",
    },
    {
        id:uuid(),
        name: "PC",
        imageURL : "https://cf-images.us-east-1.prod.boltdns.net/v1/static/734546229001/869bfaca-9962-4ad1-892e-61110c5407c9/2212939c-5b90-4be2-9cee-673c290b8a1a/1920x1080/match/image.jpg",
    },
    {
        id:uuid(),
        name: "Laptop",
        imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94pUnPIS7fr7LGCjetEQwERZVQ0ftm46xvQ&s",
    },
    {
        id:uuid(),
        name: "Sports",
        imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStE40pWkS0kREns_mESXDh-Wm9uoXUbP0img&s",
    },
    {
        id:uuid(),
        name: "Books",
        imageURL : "https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1",
    },
    {
        id:uuid(),
        name: "bicycles",
        imageURL : "https://static.standard.co.uk/2022/08/25/17/lifestyle.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000",
    },
]