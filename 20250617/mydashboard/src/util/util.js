export const getId = () => {
    console.log('[util] getId()');
    return Math.floor(Date.now() / 1000);
}