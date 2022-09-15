export const customFetch = (articles) =>

{
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(articles)
        },2000)

    })


}
