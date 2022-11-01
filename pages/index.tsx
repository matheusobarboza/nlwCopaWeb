import Head from 'next/head';

interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  console.log(props.count)
  return (
    <div>
      <Head>
        <title>Bolão da Copa</title>
      </Head>

      <h1>Count: {props.count}</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3333/pools/count')
  const data = await res.json()

  return {
    props: {
      count: data.count,
    }
  }
}
