export const paginate = (users) => {
    const itemsPerPage = 9;
    const pages = Math.ceil(users.length / itemsPerPage)
    
    const subSet = Array.from({length: pages}, (_, index) => {
        const start = index * itemsPerPage
        return users.slice(start, start + itemsPerPage)
    })

    return subSet
}