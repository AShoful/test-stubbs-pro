export const initialStore = (name) => {

    const storeIncome = [{name:'Зарплата', id: Date.now()+1, value: []},
                {name:'Премии', id: Date.now()+2, value: []},
                {name:'Подарки', id: Date.now()+3, value: []}]

    const storeExpenses = [{name:'Продукты', id: Date.now()+4, value: []},
                {name:'Квартплата', id: Date.now()+5, value: []},
                {name:'Одежда', id: Date.now()+6, value: []}]
        
    try{
        const store = JSON.parse(localStorage.getItem(`store${name}`))
        return store ? store : name === 'Income' ? storeIncome : storeExpenses
    } catch (e) {
        console.log(e.massage)
        localStorage.removeItem(`store${name}`)       
    }
}

export const title = (name) => name === 'Income' ? 'Доходы' : 'Расходы'  

export const onSaveState = (name, store) => {
    localStorage.removeItem(`store${name}`)
    localStorage.setItem(`store${name}`, JSON.stringify(store))
    alert(`Раздел ${title(name)} успешно сохранен`)
}

export const includes = (store, str) => store.map(item => 
    item.name.toLowerCase()).includes(str.trim().toLowerCase())

export const  total = (store) => store.reduce((res, i) =>
    res += i.value.reduce((res, i) => res += i.value, 0), 0)

export const  clearState = (str) => {
    if (window.confirm('Вы хотите очистить раздел?')) {
    localStorage.removeItem(`store${str}`);
    window.location.reload()
    }
} 
 