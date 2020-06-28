import { FoodInfoProvider } from "https://raw.githubusercontent.com/michael-spengler/food/master/food-info-provider.ts"
// import { FoodInfoProvider } from "https://deno.land/x/food/food-info-provider.ts"

const foodId = '1234'
const foodInfo = FoodInfoProvider.getInfo(foodId)

console.log(`I found the following info for foodId ${foodId}: \n${foodInfo}\n`)


