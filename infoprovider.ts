import axiod from "https://deno.land/x/axiod/mod.ts"

export class FoodInfoProvider {

    public static async getProductInfo(productID: string): Promise<any> {
        const infoProviderURL = `https://world.openfoodfacts.org/api/v0/product/${productID}.json`
        let apiResult
        try {
            apiResult = await axiod.get(infoProviderURL)
        } catch (error) {
            throw new Error(`The following error occurred while retrieving data for product ${productID}: ${error.message}`)
        }

        if (apiResult.status === 200) {
            return apiResult.data.product
        }
        throw new Error(`Unexpected status from API call: ${apiResult.status} - ${apiResult.statusText}`)
    }
}