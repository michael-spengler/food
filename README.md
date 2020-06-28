# Food Module

## Usage example for your code

```

import { FoodInfoProvider } from "./food-info-provider.ts"

const foodId = '1234'
const foodInfo = FoodInfoProvider.getInfo(foodId)

console.log(`I found the following info for foodId ${foodId}: \n${foodInfo}\n`)


```

## Test it via command line
```
deno run --allow-net https://deno.land/x/food/test-it.ts
```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things.