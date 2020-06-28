import axiod from "https://deno.land/x/axiod/mod.ts"

export class FoodInfoProvider {

    public static async getProductInfo(productID: string): Promise<any> {
        const infoProviderURL = `https://world.openfoodfacts.org/api/v0/product/${productID}.json`
        const apiResult = await axiod.get(infoProviderURL)
        
        return apiResult
    }
}