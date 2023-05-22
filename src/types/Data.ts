export type TCategories = {
    id: number,
    name: string,
    order: number
}

export type TDishes = {
    name: string,
    description: string,
    price: number,
    discountprice: number,
    weight_big: number,
    weight_small: number,
    ingredient: "Рыба" | "Курица" | "Свинина",
    image_link: string
}

export type TPromo = {
    id?: number;
    image_link: string;
    description: string;
    title: string;
}

export type TSeason = {
    id?: number;
    image_link: string
}