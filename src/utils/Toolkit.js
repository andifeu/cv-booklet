import React from "react";
import { withRouter } from "react-router-dom";

export default class Toolkit {
    
    static delayedExecution(functionToCall, delay, timer) {
        if (timer) {
            clearTimeout(timer);
        }
        return window.setTimeout(functionToCall, delay);
    }


    static withRouterAndRef(WrappedComponent) {
        const RoutableComponent = withRouter(WrappedComponent);
        const RoutableComponentWithRef = React.forwardRef((props, ref) => (
            <RoutableComponent {...props} wrappedComponentRef={ref} />
        ));
        const name = WrappedComponent.displayName || WrappedComponent.name;
        RoutableComponentWithRef.displayName = `withRouterAndRef(${name})`;
        return RoutableComponentWithRef;
    }
    
}
