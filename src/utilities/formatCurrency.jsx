
const CURRENCY_FORMATTER = new Intl.NumberFormat("da-DK", {
    currency : "DKK",
    style: "currency",
})

export function formatCurrency(number){
    return CURRENCY_FORMATTER.format(number);
}