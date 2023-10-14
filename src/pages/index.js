import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>
          Next home page
        </title>
        <meta name='Home page' description='This page is created by next js'/>
      </Head>
      <h1 style={{color: 'black'}}>This is home page</h1>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}