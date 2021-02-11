import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post! w0000</title>
      </Head>
      <h1>First Post!</h1>
      <h2>
        <Link href='/'><a>Back to home</a></Link>
      </h2>
    </Layout>
  )
}