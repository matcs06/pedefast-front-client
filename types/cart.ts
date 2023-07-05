interface ChoosedOptions {
   optionTitle: string,
   optionName: string,
   optionQuantity: number,
   optionPrice: number
}

export default interface IOrderProducts {
   id: string;
   productName: string,
   productQuantity: number,
   productOrderPrice: number,
   product_image_url?: string,
   options: ChoosedOptions[]
}
