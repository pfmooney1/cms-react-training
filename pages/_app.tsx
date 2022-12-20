import '../styles/globals.css'
type Props = {
  Component: Function;
  pageProps: any;
}
function MyApp({ Component, pageProps } : Props) {
  return <Component {...pageProps} />
}

export default MyApp
