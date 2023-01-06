import React, { FC, ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

const BackdropGradient: FC<Props> = ({ children }) => {
    return (
        <div className="flex w-full h-screen bg-gradient-reversed p-1 sm:p-4">
            <div className="flex w-full bg-gradient rounded-lg shadow-lg">
                {children}
            </div>
        </div>
    )
};

export default BackdropGradient;
