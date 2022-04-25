//подсчет общей суммы
export function totalPriceCount(order) {
    return order.price*order.count;
}
// добавление валюты
export function localCurrency(val) {
    return val.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB' })
}