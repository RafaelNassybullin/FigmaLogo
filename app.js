// как не терять контекс для гребаного 'this'
const context = {
    name:'контекст',
    sayHi(here){
        console.log(`Привет я - ${this.name} ${here}`)
    }
}
const f = context.sayHi
f.call(context, 'сюда')
// калл назначает контекст для зис
const f = context.sayHi
f.apply(context, ['сюда'])
// эплай назначает контекст для зис, можно передавать массив аргументов
const f = context.sayHi.bind(context)
f()
f()
f()
// биндит новый контекст для нашей новой переменной, при этом можно вызывать бесконечное количество
// функций не теряяя контекста
setTimeout(context.sayHi.bind(context), 1000);// сетТаймаут больше не теряет контекст bitch!!!
