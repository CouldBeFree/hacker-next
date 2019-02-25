import Link from 'next/link';

const Layout = ({children}) => (
    <div className="container">
        <nav>
            <Link href="/">
                <a>
                    <span className="main-title">Hacker Next</span>
                </a>
            </Link>
        </nav>
        {children}
        <style jsx>
            {`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: #f6f6ef;
                }
                nav {
                    background: #f60;
                    padding: 1em;
                }
                nav > * {
                    display: inline-block;
                    color: black;
                }
                nav a {
                    text-decoration: none;
                }
                nav .main-title {
                    font-weight: bold;
                }
            `}
        </style>
        <style global jsx>
            {`
                background: white;
                font-family: Verdana, Geneva, sans-serif;
            `}
        </style>
    </div>
);

export default Layout;