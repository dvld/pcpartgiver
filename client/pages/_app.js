import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script type='text/javascript'>awm = false;</script>
        <script
          src='http://www.contentlockingnetworks.com/gLoader.php?GID=58365&go=&sid='
          type='text/javascript'
        ></script>
        {/* <script type='text/javascript'>
          if (!awm){' '}
          {
            (window.location =
              'http://contentlockingnetworks.com/help/removeAB.php')
          }
        </script> */}
        <noscript>
          Please enable JavaScript to access this page.{' '}
          <meta
            httpEquiv='refresh'
            content='0;url=http://contentlockingnetworks.com/help/enableJS.php'
          />
        </noscript>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
