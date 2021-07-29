const url = 'https://crossoutdb.com'

export let  query = async (id) => {
    const response = await fetch(`${url}/api/v1/item/${id}`);
    let [responseJSON] = await response.json();
    return {
        name: responseJSON.name,
        img: `${url}${responseJSON.imagePath}`,
        sell: responseJSON.formatSellPrice,
        craftVsBuy: responseJSON.craftVsBuy,
        min: responseJSON === "Craft" ? responseJSON.formatCraftingBuySum : responseJSON.formatBuyPrice,
    };
}

;