import { displayWrapper, display, input } from "../css/Display.module.css"

const Display = () => {
    return ( 
        <div className={displayWrapper}>
            <div className={display}>
                <span className={input}>
                    Data is here
                </span>
            </div>
        </div>
     );
}
 
export default Display;