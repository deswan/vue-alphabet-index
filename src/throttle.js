export default function throttle(fn, interval){
    let time;
    let timer;

    return function(...args){
        let callFn = (...args) => {
            timer && clearTimeout(timer);
            let new_time = +new Date();
            if(!time || new_time >= time + interval){
                fn.call(this, ...args);
                time = new_time;
            }else{
                timer = setTimeout(() => callFn(...args), time + interval - new_time);
            }
        }
        callFn(...args);
    }
}