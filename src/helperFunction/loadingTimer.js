export const loaderTimer = (setloading, time) => {
    setTimeout(() => {
        setloading(false)
    }, time);
}