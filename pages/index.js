import { useState } from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import posts from '../data/posts.json';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Space Jelly Blog</title>
        <meta name="description" content="Awesome tutorials!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {showBanner && (
          <div className={styles.signup}>
            <div className={styles.signupBody}>
              <h2>Welcome to Space Jelly!</h2>
              <p>Sign up for my newsletter to get the latest tutorials straight to your inbox.</p>
            </div>
            <div className={styles.signupCta}>
              <p>
                <a href="https://colbyfayock.com/newsletter">Sign Up for Newsletter</a>
              </p>
            </div>
            <button className={styles.signupHide} onClick={() => setShowBanner(false)}>
              Hide
            </button>
          </div>
        )}

        <h1 className={styles.title}>
          My Space Jelly Blog
        </h1>

        <ul className={styles.posts}>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <a href={`https://spacejelly.dev/posts/${post.slug}`}>
                  <h3 className={styles.postTitle}>{ post.title }</h3>
                  <p className={styles.postDate}>{ new Date(post.date).toDateString() }</p>
                  <div className={styles.postExcerpt} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </a>
              </li>
            )
          })}
        </ul>

      </main>

      <footer className={styles.footer}>
        <p>Find the tutorial on <a href="https://spacejelly.dev/">spacejelly.dev</a>!</p>
      </footer>
    </div>
  )
}
