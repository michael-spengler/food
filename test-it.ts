import { FoodInfoProvider } from "./food-info-provider.ts"

const foodId = '1234'
const foodInfo = FoodInfoProvider.getInfo(foodId)

console.log(`I found the following info for foodId ${foodId}: \n${foodInfo}\n`)


