import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>•Being on time</p>
        <p>•Making an effort</p>
        <p>•Being high energy</p>
        <p>•Having a positive attitude</p>
        <p>•Being passionate</p>
        <p>•Using good body language</p>
        <p>•Being coachable</p>
        <p>•Doing a little extra</p>
        <p>•Being prepared</p>
        <p>•Having a strong work ethic</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
