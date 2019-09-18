
export const initialStore = (name) => {

    const storeIncome = [{name:'Зарплата', id: Date.now()+1, value: [0]},
                {name:'Премии', id: Date.now()+2, value: [0]},
                {name:'Подарки', id: Date.now()+3, value: [0]}]

    const storeExpenses = [{name:'Продукты', id: Date.now()+4, value: [0]},
                {name:'Квартплата', id: Date.now()+5, value: [0]},
                {name:'Одежда', id: Date.now()+6, value: [0]}]
        
    try{
        const store = JSON.parse(localStorage.getItem(`store${name}`))
        return store ? store : name === 'Income' ? storeIncome : storeExpenses
    } catch (e) {
        console.log(e.massage)
        localStorage.removeItem(`store${name}`)       
    }
}
export const title = (name) => name === 'Income' ? 'Доходы' : 'Расходы'  