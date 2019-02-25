import fetch from 'isomorphic-fetch';

class Story extends React.Component {
    static async getInitialProps ({ req, res, query }) {
        let story;
        try {
            let storyId = query.id;
            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
            story = await response.json()
        }
        catch (error) {
            console.log(error);
            story = null
        }
    }
}

export default Story;