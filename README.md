# Food Module

This module leverages data from https://world.openfoodfacts.org/ and more providers about to come.  


## Usage example for your code

```
  

import { FoodInfoProvider } from "https://deno.land/x/food@1.1.1/food-info-provider.ts"

const productID = '737628064502'
const foodInfo = await FoodInfoProvider.getProductInfo(productID)

console.log(`I found the following info for product ${productID}: \n${JSON.stringify(foodInfo)}\n`)
  

```

## Test it via command line
```
  

deno run --allow-net https://deno.land/x/food@1.1.1/test-it.ts
  
  
```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things like adding recipes etc.
  

## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
