
import { FoodInfoProvider } from "https://deno.land/x/food@1.1.1infoprovider.ts"

const productID = '737628064502'
const foodInfo = await FoodInfoProvider.getProductInfo(productID)

console.log(`I found the following info for product ${productID}: \n${JSON.stringify(foodInfo)}\n`)
