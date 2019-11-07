const React = require('react');
const moment = require('moment');
import Layout from './layout';

class HomePage extends React.Component {


    render() {

        let entries = this.props.entries;
        console.log('IN homepage.jsx');
        console.log(entries);

        entries .map(entry => {

            console.log(entry)
            console.log(entry.title)
            console.log(entry.timestamp)
            console.log(entry.message)
        })

        return (
            <Layout title="Notes & Sensors">
                <div id="menu-bar">Notes & Sensors</div>
                    <div id="cards-column">
                        {entries.length == 0 ?
                            <span>No entries yet.</span> :
                            entries
                            .map(entry =>
                                {

                                    return(

                                    <div class="ui card custom-card fluid raised">
                                    <div class="content">
                                    <div class="header">{entry.title}</div>
                                    <div class="meta">
                                        <span>{moment(entry.timestamp).format("LLLL")}</span>

                                    </div>
                                    <p>{entry.message}</p>
                                    </div>
                                    </div>
                                    )
                                }

                            )
                        }
                    </div>
            </Layout>
        );
    }
}

module.exports = HomePage;



// <div class="ui card custom-card fluid">
//     <div class="content">
//         <div class="header">Cute Dog</div>
//         <div class="meta">
//             <span>2 days ago</span>
//             <a>Animals</a>
//         </div>
//             <p>Insert some text</p>
//     </div>
// </div>