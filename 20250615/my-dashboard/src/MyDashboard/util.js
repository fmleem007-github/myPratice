export const getCurrentDateTime = () => {
    console.log('getCurrentDateTime');

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate() + 1;
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

}