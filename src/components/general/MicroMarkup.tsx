import { FC, useEffect } from "react";
import { IMicroMarkupProps } from "../../types.ts";

const MicroMarkup: FC<IMicroMarkupProps> = ({ json }) => {

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = json;
    
        document.head.appendChild(script);
    
        return () => script.remove();
    }, []);

    return <></>;
}

export default MicroMarkup;