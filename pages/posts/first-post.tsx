import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/Layout';

const MyComponent: React.FC = () => {
  return <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    {/* Loading third-party script */}
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <Image
      src="/assets/MyAvatar.png"
      height={114}
      width={114}
      alt="My photo"
    />


    <h2>
        <Link href="/">← Back to home</Link>
    </h2>
  </Layout>;
}

export default MyComponent;