interface ContainerProps {
    children: React.ReactNode
}

import { Children } from "react";

const Container = (props: ContainerProps) => {
    const { children } = props
    return (
        <div className="px-12 py-10 md:px-40 md:py-36 max-w-3xl mx-auto">
            {children}
        </div>
    );
}

export default Container;