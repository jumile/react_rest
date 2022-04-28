//подсчет общей суммы
export function totalPriceCount(order) {
    /* кол-во выбранных добавок: смотрим добавки в заказе, 
                                отбираем те, у к-ых item.checked,
                                получаем их в новый массив и смотрим его длину (=получаем кол-во добавок)
    фильтрация происходит только если добавки есть (условие с &&)
    */
    const toppingsKol = order.topping && order.topping.filter(item => item.checked).length;
    const toppingsPrice = order.price * 0.1 * toppingsKol;
   
    return (order.price + toppingsPrice)* order.count;
}
// добавление валюты
export function localCurrency(val) {
    return val.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB' })
}
