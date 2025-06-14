import React from 'react';
import Link from 'next/link'

const Posts = () => {
    return (
        <>
            <h1>Posts page</h1>
            <Link href={'/'}>Back to home</Link>
        </>
    );
};

export default Posts;