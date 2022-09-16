function ItemFetch(tempo, homework) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(homework);
        }, tempo);
    })
}
export default ItemFetch