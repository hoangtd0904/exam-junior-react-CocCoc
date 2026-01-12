// TODO: update this function params
export const formatCurrency = (amount, locale = 'de-DE', options = { style: 'currency', currency: 'VND', currencyDisplay: 'code' }) => {
    if (!amount) throw new Error('Invalid number')

    const isNumber = typeof amount === 'number' || amount instanceof Number
    if (!isNumber) throw new Error('Converting currency must be a number')

    try {
        const convertingNumber = Number(amount)
        return new Intl.NumberFormat(locale ?? 'de-DE', options).format(convertingNumber)

    } catch (error) {
        throw new Error(`Can not format currency due to error: ${error}`)
    }
}