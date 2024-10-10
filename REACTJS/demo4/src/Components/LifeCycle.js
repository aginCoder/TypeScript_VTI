import React, {Component} from "react";

class LifeCycle extends Component {
// Hàm constructor
    constructor (props) {
        super(props);
        console.log("1. contrustor");
        
    }

    // Ham render()
    render() {
        console.log("2. render");
        
        return (
            <div>
                <div>
                    <h3>Hello VTI</h3>
                </div>
            </div>
        );
    }
    // Hàm componentDidMount
    componentDidMount() {
        console.log("3. componentDidMount");
        
    }
}
export default LifeCycle;