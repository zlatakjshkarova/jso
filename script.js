Объект
const ovd = {
    // ключ :'название'
    name: 'Иван',
    lastName: 'Петров'
}
//отдельные объекты можно оБЪединять  в массивы
const friends = [
    {
        name: 'Иван',
        lastName: 'Петров'
    },
    {
        name: '',
        lastName: 'Петров'
    }
]


//JSON.stringify(ovd) - берет Объект и преобразует его в строку 
//Получиная страка   json  называется JSON - форматированием или сериализованным объектом.
//Мы можем отправлять его по сети или поместить в обычное чранилище данных.

//
console.log(typeof (obj))
const jsonString = JSON.stringify(Obj)

console.log(typeof (jsonString));

//JSON.parse- извлечение объекта из строки
const stringJson = '{"name"}'
const objFromSTR = JSON.parse(stringJson);
console.log(objFromSTR)


//
let json = '[1,2,3,4,5,"a"]'
let json2 = '{"a":"aaa","c":"ccc"}'
let json3 = [{

}]