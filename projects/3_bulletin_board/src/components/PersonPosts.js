// Every individual's section of postit notes

import React from "react"
import Post from './Post';

import './PersonPosts.css'

export default class PersonPosts extends React.Component {
    render () {
        return (
            <div className="PersonPostsContainer">
                <span id='Aaron'> Aaron </span>
                <div className = "PersonPosts">
                    <Post 
                        title = "CSS-Tricks"
                        text = "A guide to all things FlexBox!"
                        link = 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
                    />
                    <Post 
                        title = "Grid Garden"
                        text = "Learn how to use CSS Grid Today!"
                        link = 'https://cssgridgarden.com'
                    />
                </div>
                <span id='Devin'> Devin </span>
                <div className = "PersonPosts">
                    <Post 
                        title = "W3 Schools"
                        text = "Great resource for the basics of html and css!"
                        link = 'https://www.w3schools.com/html/'
                    />
                    <Post 
                        title = "Stack Overflow"
                        text = "Community of programmers which can be very helpful for questions while coding!"
                        link = 'https://stackoverflow.com/'
                    />
                </div>
                <span id='Josh'> Josh </span>
                <div className = "PersonPosts">
                    <Post 
                        title = "React Reference"
                        text = "On getting started with React"
                        link = 'https://reactjs.org/docs/getting-started.html'
                    />
                    <Post 
                        title = "Bootstrap Documentation"
                        text = "Documentation for bootstrap classes and css components"
                        link = 'https://getbootstrap.com/docs/4.0/getting-started/introduction/'
                    />
                    <Post 
                        title = "React Bootstrap Documentation"
                        text = "Documentation for react wrapper for bootstrap"
                        link = 'https://react-bootstrap.netlify.app/components/alerts'
                    />
                </div>
                <span id='Rohit'> Rohit </span>
                <div className = "PersonPosts">
                    <Post 
                        title = "Github is hard"
                        text = "Github Cheat Sheet"
                        link = "https://education.github.com/git-cheat-sheet-education.pdf"
                    />
                    <Post 
                        title = "Geeks for Geeks"
                        text = "HTML and CSS Tutorials"
                        link = "https://www.geeksforgeeks.org/web-technology/html-css/"
                    />
                </div>
            </div>
        )
    }
}
