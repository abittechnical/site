import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { Badge, CustomLink, Header, WindowFrame } from '../components'

const PostCard = ({ title, date, url }: Post) => (
  <div>
    <p className="text-sm text-gray-500">
      <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
    </p>
    <div className="mt-2 block">
      <p className=" text-xl font-semibold text-gray-900">{title}</p>
      <p className="mt-3 text-base text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam cupiditate dolorum eligendi enim et, ex
        excepturi inventore ipsam ipsum libero minima obcaecati quas sed?
      </p>
    </div>
    <div className="mt-3">
      <CustomLink href={url} className="text-base font-semibold text-secondary-400 hover:text-indigo-500">
        Read full story
      </CustomLink>
    </div>
  </div>
)

const categories = [
  {
    name: 'javascript',
    parent: 'languages',
    posts: 8,
    trending: true,
  },
  {
    name: 'design',
    parent: null,
    posts: 8,
    trending: true,
  },
  {
    name: 'react',
    parent: 'javascript',
    posts: 8,
    trending: true,
  },
  {
    name: 'nlp',
    parent: 'artificial intelligence',
    posts: 8,
    trending: true,
  },
  {
    name: 'software',
    parent: null,
    posts: 8,
    trending: true,
  },
  {
    name: 'node',
    parent: 'javascript',
    posts: 8,
    trending: true,
  },
  {
    name: 'java',
    parent: 'languages',
    posts: 8,
    trending: true,
  },
  {
    name: 'frontend',
    parent: 'software',
    posts: 8,
    trending: true,
  },
  {
    name: 'backend',
    parent: 'software',
    posts: 8,
    trending: true,
  },
]

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>A Bit Technical | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <WindowFrame>
          <div className="text-center">
            <h1 className="display-text  mt-1 text-4xl font-bold tracking-tight  sm:text-5xl lg:text-6xl">
              A Bit&nbsp;
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary-400">
                <span className="relative">Technical</span>
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Start building for free, then add a site plan to go live. Account plans unlock additional features.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <Badge key={category.name} text={category.name} />
            ))}
          </div>
        </WindowFrame>
      </main>
    </>
  )
}
export default Home

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}
