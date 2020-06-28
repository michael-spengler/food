
import { FoodInfoProvider } from "https://raw.githubusercontent.com/michael-spengler/food/master/food-info-provider.ts"
// import { FoodInfoProvider } from "https://deno.land/x/food/food-info-provider.ts"

const productID = '737628064502'
const foodInfo = FoodInfoProvider.getProductInfo(productID)

console.log(`I found the following info for product ${productID}: \n${foodInfo}\n`)
