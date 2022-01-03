import nProgressUrl from 'nprogress/nprogress.css'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,
  useCatch
} from 'remix'
import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { StyleContext } from './context'
import GlobalStyles from '~/styles/global'
import theme from '~/styles/theme'
import { useNProgress } from './hooks/use-nprogress'
import { NotFound } from './components/NotFound'
import { ErrorPage } from './components/ErrorPage'

export const meta: MetaFunction = () => {
  return { title: 'Remix Backend BR' }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: nProgressUrl
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200&display=swap'
    }
  ]
}

export default function App() {
  useNProgress()

  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <ErrorPage />
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.statusText}`}>
      <NotFound />
    </Document>
  )
}

function Document({
  children,
  title
}: {
  children: React.ReactNode
  title?: string
}) {
  const styles = useContext(StyleContext)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
        {styles !== null && (
          <style
            dangerouslySetInnerHTML={{
              __html: `</style>${styles}<style>`
            }}
          />
        )}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </ThemeProvider>
      </body>
    </html>
  )
}
