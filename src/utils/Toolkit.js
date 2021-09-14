export default class Toolkit {
    
    static delayedExecution(functionToCall, delay, timer) {
        if (timer) {
            clearTimeout(timer);
        }
        return window.setTimeout(functionToCall, delay);
    }

    static isFirefox() {
        return navigator.userAgent.indexOf("Firefox") > -1;
    }
}
