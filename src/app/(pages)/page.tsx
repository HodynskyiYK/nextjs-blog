import React from 'react';
import Link from 'next/link'

const Main = () => {
    return (
        <>
            <h1>Main page</h1>
            <Link href={'/posts'}>Go to posts</Link>
        </>
    );
};

export default Main;