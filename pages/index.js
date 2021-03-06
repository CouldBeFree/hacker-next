import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component {
    static async getInitialProps ({req, res, query}) {
        let page = Number(query.page) || 1;
        let stories;
        try {
            const response = await fetch (
                `https://node-hnapi.herokuapp.com/news?page=${page}`
            );
            stories = await response.json();
        }
        catch (err){
            console.log(err);
            stories = [];
        }

        return {stories, page};
    }

    render() {
        const { stories, page } = this.props;

        if(stories.length === 0) {
            return <Error statusCode={503} />
        }

        return (
            <Layout title="Hacker Next" description="Hacker news clone made with Next.js">
                <StoryList stories={stories}/>
                <footer>
                    <Link href={`/?page=${page + 1}`}>
                        <a>Next page({page + 1})</a>
                    </Link>
                </footer>
                <style jsx>{`
                    footer {
                        padding: 1em;
                    }
                    footer a {
                        font-weight: bold;
                        color: black;
                        text-decoration: none;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Index;