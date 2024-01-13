import "@styles/globals.css"

export const metadata = {
    title:"Proptopia",
    description:"Discover & share prompt"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="app">
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout;