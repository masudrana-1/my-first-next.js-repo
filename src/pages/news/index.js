import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
    return (
        <div>
            <h1>News Home page</h1>
            <Button type="primary">
                <Link href="/">Back To Home</Link>
            </Button>
        </div>
    );
};

export default NewsPage;