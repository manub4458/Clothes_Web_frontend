import React from 'react'

const Header = ({
    label
}) => {
    return (
        <div className="w-full flex flex-col space-y-4 items-center justify-center overflow-hidden">
            <p className="text-muted-foreground font-semibold">
                {label}
            </p>
        </div>
    );
};

export default Header;
