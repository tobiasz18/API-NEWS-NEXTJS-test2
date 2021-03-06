import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import data from '../data/bbc-news.json'

const Bbc = (props) => (
  <Layout>
    <h1>BBC template</h1>
    <ul>
      {props.data.map((item) => (
        <li>
          <Link as={`/Bbc_News/${item.title.replace(/ /g, "_")}`} href={`/detail?title=${item.title.replace(/ /g, "_")}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
       h1 {
        text-align: center;
        margin-top: 50px;
        letter-spacing: 2px;
        font-weight: 800;
      }
      ul li a {
        line-height: 2;
        text-decoration: none;
        font-size: 21px;
        font-weight: 500;
        color: black;
        padding-left: 15px;
      }
      ul li:hover {
        background: #f7f7f7;
        padding: 1px;
      }
    `}</style>
  </Layout>
)

Bbc.getInitialProps = async function() {
  return {
    data
  }
}

export default Bbc
