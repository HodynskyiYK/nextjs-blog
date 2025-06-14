import React from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Posts page'
}

const Layout = ({
    children
}: Readonly<{
    children?: React.ReactNode
}>) => {
    return (
        <main>{children}</main>
    );
};

export default Layout;