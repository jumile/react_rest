import { useState } from 'react';

/* в БД добавки хранятся в виде массива под св-вом toppings. Каждый элемент этого массива - строка.
Функция получает этот массив, перебирает и превращает строковые элементы в объекты. 
Название элемента из исходного массива попадает в св-во name + новому объекту добавляется 
св-во checked, к-ое будет указывать, выбрана ли добавка
*/
/* этот вариант сложнее в записи: слишком много скобок и return */
/*  function getTopping(toppings) { 
    //  if(!toppings) return false;   // мой вариант для ситуации, когда добавок нет
    const obj = toppings.map((item) => {
        return ({
            name: item,
            checked: false
         })         
    })
    return obj;
} */
 const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false,
})); 

/*
selectedItem - выбранный товар
selectedItem.toppings - св-во с добавками из объекта выбранного товара, преобразованное в массив объектов
*/
export function useTopping(selectedItem) {    
    /* при редактировании заказа: 
    если добавки уже выбраны, показываем их (в модал. окне ставятся флажки); 
    если нет - флажки не ставятся;
    если добавки у товара возможны, показываем их, если нет - пустой массив
    */
    const readyTopping = selectedItem.topping ? selectedItem.topping :
                         selectedItem.toppings ? getTopping(selectedItem.toppings) : 
                         [];
     const [toppings, setToppings ] = useState(readyTopping);
    /* index - индекс добавки в массиве, по к-ой щелкнули; приходит из Toppings.js из свойств 
    флажка <ToppingCheckbox />
    перебираем массив с добавками из хука и если индекс (i) добавки (item) совпадает с индексом 
    (index), то меняем св-во checked на противоположное
    */
    const checkedToppings = (index) => {
        //if(!toppings) return false;  // мой вариант для ситуации, когда добавок нет
        setToppings(toppings.map((item, i) => {
            const newItem = {...item}
            if(i === index) {newItem.checked = !newItem.checked  }      
            return newItem;
        }));
    } 
 
    return { toppings, checkedToppings };
}