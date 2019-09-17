export const initialStore = (name) => {
    try{
        const store = JSON.parse(localStorage.getItem(`store${name}`))
        return store ? store : []
    } catch (e) {
        console.log(e.massage)
        localStorage.removeItem(`store${name}`)       
    }
}
export const title = (name) => name === 'Income' ? 'Доходы' : 'Расходы'  