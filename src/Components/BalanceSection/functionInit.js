
export const initialStore = (name) => {

    const storeIncome = [{name:'Зарплата', id: Date.now()+1, value: 1500},
                {name:'Премии', id: Date.now()+2, value: 900},
                {name:'Подарки', id: Date.now()+3, value: 1200}]

    const storeExpenses = [{name:'Продукты', id: Date.now()+4, value: 700},
                {name:'Квартплата', id: Date.now()+5, value: 800},
                {name:'Одежда', id: Date.now()+6, value: 3000}]
        
    try{
        const store = JSON.parse(localStorage.getItem(`store${name}`))
        return store ? store : name === 'Income' ? storeIncome : storeExpenses
    } catch (e) {
        console.log(e.massage)
        localStorage.removeItem(`store${name}`)       
    }
}
export const title = (name) => name === 'Income' ? 'Доходы' : 'Расходы'  