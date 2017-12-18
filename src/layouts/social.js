import React from 'react'
import Link from 'gatsby-link'
import { Timeline } from 'react-twitter-widgets'


const Social = () => (
    <aside id="social">
        <h2><b className="icon-calendar"></b>Upcoming events</h2>
        <table id="events">
        </table>
        <h2><b className="icon-twitter"></b>Follow <a href="https://twitter.com/intent/follow?screen_name=jszgb">@jszgb</a> on Twitter</h2>
        <Timeline 
        dataSource={{
            sourceType: 'widget',
            widgetId: '379957441418375168'
        }}
        options={{
            username: 'jszgb',
            chrome: ["transparent", "nofooter", "noheader", "noborders"],
            tweetLimit: 3
        }}
        />
    </aside>
)

export default Social
