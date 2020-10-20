import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PC Part Giver</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='//cdn-images.mailchimp.com/embedcode/classic-10_7.css'
          rel='stylesheet'
          type='text/css'
        />					
      </Head>

      <img
        style={{
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: 0,
          left: 50,
          height: '100px',
        }}
        src='/PCPGLogo.png'
      />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to PC Part Giver</h1>

        <p className={styles.description}>Our Current Giveaway</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>G Skill Ripjaws V 16GB (2 x 8GB) DDR4-3200</h3>
            <img src='/gskillripjawsblack.png' />
          </div>
        </div>
        <div
          id='mc_embed_signup'
          style={{
            width: '100%',
            background: '#fff',
            clear: 'left',
            font: '14px Helvetica,Arial,sans-serif',
          }}
        >
          <form
            action='https://pcpartgiver.us2.list-manage.com/subscribe/post?u=241411f01d259548b64f1fa7e&amp;id=6790b7f75b'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            class='validate'
            target='_blank'
            novalidate
          >
            <div id='mc_embed_signup_scroll'>
              <div class='indicates-required'>
                <span class='asterisk'>*</span> indicates required
              </div>
              <div class='mc-field-group'>
                <label for='mce-EMAIL'>
                  Email Address <span class='asterisk'>*</span>
                </label>
                <input
                  type='email'
                  value=''
                  name='EMAIL'
                  class='required email'
                  id='mce-EMAIL'
                />
              </div>
              <div class='mc-field-group'>
                <label for='mce-GRAMHANDLE'>
                  Instagram Handle <span class='asterisk'>*</span>
                </label>
                <input
                  type='text'
                  value=''
                  name='GRAMHANDLE'
                  class='required'
                  id='mce-GRAMHANDLE'
                />
              </div>
              <div id='mce-responses' class='clear'>
                <div
                  class='response'
                  id='mce-error-response'
                  style={{ display: 'none' }}
                ></div>
                <div
                  class='response'
                  id='mce-success-response'
                  style={{ display: 'none' }}
                ></div>
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden='true'
              >
                <input
                  type='text'
                  name='b_241411f01d259548b64f1fa7e_6790b7f75b'
                  tabindex='-1'
                  value=''
                />
              </div>
              <div class='clear'>
                <input
                  type='submit'
                  value='Enter Now'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  class='button'
                  style={{background: '#ff5757', color: '#ffffff'}}
                />
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://www.instagram.com/pcpartgiver/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src="/instagram.png" height='50px' />
        </a>
      </footer>
        <div>
          Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/pixel-perfect'
            title='Pixel perfect'
          >
            Pixel perfect
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
    </div>
  );
}
