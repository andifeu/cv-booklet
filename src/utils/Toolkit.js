export default class Toolkit {
    
    static delayedExecution(functionToCall, delay, timer) {
        if (timer) {
            clearTimeout(timer);
        }
        return window.setTimeout(functionToCall, delay);
    }
}
