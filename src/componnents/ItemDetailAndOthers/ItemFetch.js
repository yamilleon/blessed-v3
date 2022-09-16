function ItemFetch(tempo, work) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(work);
        }, tempo);
    })
}
export default ItemFetch