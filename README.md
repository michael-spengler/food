# Food Module

Deno module for food lovers. This module leverages data from https://world.openfoodfacts.org/ and more providers about to come.  
Feel free to add recipes etc.

## Usage example for your code

```

import { FoodInfoProvider } from "https://deno.land/x/food/food-info-provider.ts"

const productID = '737628064502'
const foodInfo = await FoodInfoProvider.getProductInfo(productID)

console.log(`I found the following info for product ${productID}: \n${JSON.stringify(foodInfo)}\n`)

```

## Test it via command line
```
deno run --allow-net https://raw.githubusercontent.com/michael-spengler/food/master/test-it.ts
<!-- deno run --allow-net https://deno.land/x/food/test-it.ts -->
```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things.