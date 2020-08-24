import React from 'react'

import '../styles/wine.css'
import banner from '../assets/wine/wine-banner.png.svg'
import one from '../assets/wine/Artboard – 2.svg'
import two from '../assets/wine/recommendEvent.gif'
import three from '../assets/wine/badges.gif'
import four from '../assets/wine/scanWine.gif'
import five from '../assets/wine/ourProcess.png.svg'
import six from '../assets/wine/analysis.svg'
import seven from '../assets/wine/Persona.png.svg'
import eight from '../assets/wine/ideation.svg'
import nine from '../assets/wine/key_features.png.svg'
import sitemap from '../assets/wine/sitemap.svg'
import sketches from '../assets/wine/sketches.png.svg'
import styleguide from '../assets/wine/style-guide.svg'
import addWine from '../assets/wine/add-wine.svg'
import eventDetails from '../assets/wine/Event Details color.svg'
import userProfile from '../assets/wine/Profile_ User Profile color.svg'
import settings from '../assets/wine/settings color.svg' 
import events from '../assets/wine/events.svg'
import badgeIdea from '../assets/wine/badges/badges idea post meeting.svg'
import unobtained from '../assets/wine/badges/Badge Details_ unobtained color.svg'
import obtained from '../assets/wine/badges/Badge Details_ obtained color.svg'
import sortPage from '../assets/wine/badges/sort page color.svg'
import eventsAgain from '../assets/wine/events-wines-sort/Events.svg'
import eventsTwo from '../assets/wine/events-wines-sort/sort events color.svg'
import passport from '../assets/wine/events-wines-sort/Passport_ Wines idea post meeting sort by my wines.svg'
import filterWines from '../assets/wine/events-wines-sort/filter wines color.svg'
import questions from '../assets/wine/questions.svg'
import beforeAndAfter from '../assets/wine/events-before-and-after.svg'
import sortEvents from '../assets/wine/sort-events-by-price.svg'

export default class Vynd extends React.Component {
    render() {
        return (
<>
<div class="banner">
    <img src={banner} alt="" />
</div>
<div class="container">
    <div class="sidebar">
        <ul class="sidebar-list">
            <li class="sidebar-item"><a href="#overview" class="sidebar-item-link">Overview</a></li>
            <li class="sidebar-item"><a href="#research" class="sidebar-item-link">Research</a></li>
            <li class="sidebar-item"><a href="#design" class="sidebar-item-link">Design</a></li>
            <li class="sidebar-item"><a href="#evaluate" class="sidebar-item-link">Evaluate & Iterate</a></li>
            <li class="sidebar-item"><a href="#prototype" class="sidebar-item-link">Latest Prototype</a></li>
            <li class="sidebar-item"><a href="#future" class="sidebar-item-link">Future Steps</a></li>
          </ul>
    </div>
    <div class="content-wrapper">
        <section id="overview">
            <h1 class="overview-title">Overview</h1>
            <div class="problem">
                <div class="problem-description section">
                    <h1>Problem</h1>
                    <p>
                      Wine is quickly becoming our parents beverage, and being our parents
                       anything is almost always the kiss of death for consumer products. 
                       Millennials aren’t yet embracing wine consumption as many had predicted, 
                       and with baby boomers moving into retirement 
                       this is bad news for the wine industry as a whole.
                  </p>
                </div>
                <div class="problem-chart">
                </div>
            </div>
            <div class="the-facts">
                <img src={one} alt="" class="the-facts-image" />
            </div>
            <div class="solution">
                <div class="solution-description">
                    <h1>Solution</h1>
                    <p>
                            Funded and sponsored by the NSF I-Corps program, we designed Vynd, a mobile applications which redefines the winery experience, by recommending wine events tailored to users interests and price range, and gamifying the experience by allowing users to collect badges and wines to earn promotional discounts, we are making wine cool again.
                    </p>
                </div>
                <div class="involvement">
                    <div class="my-role-group my-role">
                        <h3>My Role</h3>
                        <p>Lead Designer(UI/UX)</p>
                    </div>
                    <div class="my-role-group my-role">
                        <h3>Timeline</h3>
                        <p>March 2018 - Present</p>
                    </div>
                    <div class="my-role-group my-role">
                        <h3>Team Members</h3>
                        <p>Sherif Elmetwally, Astha Sharma, Sarah Ryu</p>
                    </div>
                    <div class="my-role-group my-role">
                        <h3>Tools</h3>
                        <p>Figma, Trello, Lucid Chart</p>
                    </div>
                </div>
            </div>
            <div class="show-features">
                <div class="recommend-events feature">
                    <img src={two} alt="" class="recommend-event-gif gif" />
                    <div class="recommend-features-description feature-description">
                        <h1>Custom Recommendations</h1>
                        <p>Vynd recommends events to users based on their own specific interests and price range.</p>
                    </div>
                </div>
                <div class="passport feature">
                    <div class="passport-description feature-description">
                        <h1>Collect Badges</h1>
                        <p>Collect badges and earn promotional discounts and special offers</p>
                    </div>
                    <img src={three} alt="" class="passport-gif gif" />
                </div>
                <div class="scan-wine feature">
                    <img src={four} alt="" class="scan-wine-gif gif" />
                    <div class="scan-wine-description feature-description">
                        <h1>Scan Wines</h1>
                        <p>Scan wines and add them to your collection</p>
                    </div>
                </div>
                <a href="#prototype" class="jump-to-prototype">Jump to Prototype</a>
            </div>
            <div class="our-approach section">
                <h1>Our Approach</h1>
                <img src={five} alt="" />
            </div>
            <div class="my-contribution section">
                <h1>My Contribution</h1>
                <p>As the Lead UX Designer and Researcher on the team, I advocated for conducting user interviews, synthesis sessions and brainstorming sessions before arriving at solutions.</p>
                <p>I led all the research & design activities with other students, created wireframes, high-fidelity designs, and interactive prototypes for user feedback & testing. I created the concept and led the presentation of the app during the NSF I-Corps showcase.
                </p>
            </div>
          </section>
          <section id="research">
              <div class="research-title">Research</div>
              <div class="analysis section">
                  <h1>Competitive Analysis</h1>
                  <p>We looked into the market to see what applications currently involve wine, scanning, badges, or event planning</p>
                  <img src={six} alt="" />
                  <table>
                    <tr>
                      <th class="colored-td">Name</th>
                      <th class="colored-td">Vivino</th>
                      <th class="colored-td">Untappd</th>
                      <th class="colored-td">Eventbrite</th>
                    </tr>
                    <tr>
                      <td class="colored-td">Description</td>
                      <td>Vivino is the world’s largest online marketplace and most downloaded wine app. </td>
                      <td>Geosocial networking service and mobile application about beer.</td>
                      <td> Mobile application to find events</td>
                    </tr>
                    <tr>
                      <td class="colored-td">Platform</td>
                      <td>iOS, Android</td>
                      <td>iOS, Android</td>
                      <td>Web, iOS, Android</td>
                    </tr>
                    <tr>
                        <td class="colored-td">Feature Overview</td>
                        <td>
                            Allows users to scan wine labels.
                            <br />
                            Suggests wines to user
                            <br />
                            Allows in app purchases
                        </td>
                        <td>
                            Allows users to collect badges.
                            <br />
                            Allows users to rate beer that they are drinking
                            <br />
                            App suggest similar beers
                        </td>
                        <td>
                            Allows users to buy tickets in app.
                            <br />
                            Allows users to view a large variety of different events
                        </td>
                      </tr>
                      <tr>
                        <td class="colored-td">Strength</td>
                        <td>
                            Massive database of wines
                            <br />
                            Complete information about most wines
                            <br />
                            Contains reviews from users
                            <br />
                            Great sorting functionality
                        </td>
                        <td>
                        - Extensive database for beers
                            <br />
                            - Great community of beer enthusiasts
                            <br />
                            - Linked with Uber
                        </td>
                        <td>
                        Extensive database of events
                            <br />
                            Great sorting functionality
                        </td>
                      </tr>
                      <tr>
                        <td class="colored-td">Weakness</td>
                        <td>
                        Pricing varies so much from state to state that it is often inaccurate
                        </td>
                        <td>
                            Poor User Interface
                            <br />
                            Poor search functionality
                        </td>
                        <td>
                        Buggy user interface on iOS
                            <br />
                            Poor search functionality
                        </td>
                      </tr>
                    </table>
                    <p class="list-header">We found that:</p>
                    <ul>
                        <li>There are no applications currently on the market that involve wineries</li>
                        <li>No applications that gamify the winery experience</li>
                        <li>No applications are centered around wine events themselves</li>
                        <li>With a total of 8 million users, Untappd proves that there is a market for badge collecting applications</li>
                    </ul>
                    <p>Therefore we hope to create an application which gamifies the winery experience, makes it easy for users to discover and purchase tickets for wine events, and for users to earn discounts and rewards through collecting badges.</p>
              </div>
              <div class="interviews section">
                  <h1>Interviews</h1>
                  <p>To better understand young people’s feelings about wine we interviewed young people at two wine related events in New York City, Wine Riot, and, Smorgasbord, as well as interviewing friends and other students on campus.</p>
                  <p>We interviewed more than 40 people between the ages of 21 and 35. We found that:</p>
                  <ul>
                      <li>People will rarely spend more than $25 dollars on a bottle of wine</li>
                      <li>Price is the number one factor when someone is considering whether or not to go to a wine event</li>
                      <li>More than half of the interviewees said they are interested in going to a winery or wine event</li>
                  </ul>
                  <p></p>
              </div>
              <div class="persona section">
                  <h1>Persona</h1>
                  <p>To better guide our design and enable everyone on the team to empathize with our users, I further synthesized the interview results and came up with the following persona:</p>
                  <img src={seven} alt="" />
              </div>
          </section>
          <section id="design">
                <h1 class="design-title">Design</h1>
                <div class="ideation section">
                    <h1>Ideation</h1>
                    <p>With our research findings and personas in mind, I invited our researchers and the other designer to brainstorm solutions together. I encouraged them to come up with as many ideas as possible without considering development or project scope at this stage.</p>
                    <img src={eight} alt="" />
                    <p>We then went through the ideas and discussed their implementation feasibility. For example, allowing users to buy wine through the app would be ideal, but building out this feature would be too complex without some sort of API. Therefore allowing users to save and keep track of wines they like would be the best compromise.</p>
                    <p>Eventually we settled on the following core functionalities</p>
                    <img src={nine} alt="" class="core-features" />
                </div>
                <div class="sitemap section">
                    <h1>Sitemap</h1>
                    <p>Next I made a sitemap to view all of the application pages and key user interactions.</p>
                    <img src={sitemap} alt="" />
                </div>
                <div class="wireframes section">
                    <h1>Wireframes</h1>
                    <p>We created the following wireframes and began testing our application for feedback.</p>
                    <img src={sketches} alt="" />
                </div>
                <div class="first-round-feedback section">
                    <h1>User feedback</h1>
                    <p>All users liked that they could push events to social media and add them to their google calendar</p>
                    <p>However most users had trouble finding events, since there was no page for them to directly search for them</p>
                    <p>Users did not have a consistent way to quickly visualize and track their wines and badges</p>
                    <h1>Feature Changes</h1>
                    <p>Because of this we decided to create a discover page, where users could search for events or get events recommended to them directly</p>
                    <p>We also added a dashboard feature to the profile page, where the total number of the users badges and wines would be there to see.</p>
                </div>
                <div class="style-guide section">
                    <h1>Style Guide</h1>
                    <p>Next I developed a styleguide to make the design process easier and quicker for everyone working on the project</p>
                    <img src={styleguide} alt="" />
                </div>
                <h1 class="high-fidelity-v1">High Fidelity Design - Iteration 1</h1>
                <div class="add-wine section">
                    <h1>Scan Wine Bottle Flow</h1>
                    <img src={addWine} alt="" />
                </div>
                <div class="profile-settings section">
                    <div class="container">
                        <div class="event-details">
                            <h1>Event Details</h1>
                            <img src={eventDetails} alt="" />
                        </div>
                        <div class="profile">
                            <h1>Profile</h1>
                            <img src={userProfile} alt="" />
                        </div>
                        <div class="settings">
                            <h1>Settings</h1>
                            <img src={settings} alt="" />
                        </div>
                    </div>
                </div>
                <div class="events-flow section">
                    <h1>Discover Events Flow</h1>
                    <img src={events} alt="" />
                </div>
                <div class="badges section">
                    <h1>Badges & Sort Feature</h1>
                    <div class="badges-container">
                        <div class="image-container">
                        <img src={badgeIdea} alt="" />
                        </div>
                        <div class="image-container">
                        <img src={unobtained} alt="" />
                        </div>
                        <div class="image-container">
                        <img src={obtained} alt="" />
                        </div>
                        <div class="image-container">
                        <img src={sortPage} alt="" />
                        </div>
                    </div>
                </div>
                <div class="events-wine-sort section">
                    <h1>Events + Wines & Sort feature</h1>
                    <div class="events-wine-sort-container">
                        <div class="image-container">
                            <img src={eventsAgain} alt="" />
                        </div>
                        <div class="image-container">
                            <img src={eventsTwo} alt="" />
                        </div>
                        <div class="image-container">
                            <img src={passport} alt="" />
                        </div>
                        <div class="image-container">
                            <img src={filterWines} alt="" />
                        </div>
                    </div>
                </div>
          </section>
          <section id="evaluate">
           <h1 class="evaluate-title">Evaluate & Iterate</h1>
           <div class="user-testing section">
               <h1>User Testing Process</h1>
               <p>With the goals I had for this iteration in mind, I moderated user feedback sessions with 10 users with different attitudes towards wine and different levels of interest in attending wine events in Hudson Valley (the wine region I used in my prototype). Here's a brief overview of the process:</p>
               <ul>
                   <li>Introduce and explain the project</li>
                   <li>Give the users a set of tasks, and let users use the app while thinking aloud</li>
                   <li>Ask follow up questions and gather feedback</li>
                   <li>Had users fill out a questionnaire</li>
               </ul>
               <p><b>Users were asked to rate their response on a scale from 1-5 (1 being the lowest and 5 being the highest) and then explain why they answered the way they did</b></p>
               <img src={questions} alt="" />
           </div>
           <div class="results section">
                <h1>Results</h1>
                <p>I was able to gain a lot of positive from the prototype and the questionnaire, both from answers to the questionnaire and comments on what users thought could improve the design.</p>
               <div class="interview-findings">
                   <div class="question-results">
                        <h3>Question 1</h3>
                        <ul>
                            <li>3/10 interviewees responded with a score of 5</li>
                            <li>2/10 interviewees with a score of 4</li>
                            <li>1/10 interviewees responded with a score of 3</li>
                            <li>1/10 interviewees responded with a score of 2</li>
                            <li>3/10 interviewees responded with a score of 1</li>
                        </ul>
                   </div>
                   <div class="question-results">
                        <h3>Question 2</h3>
                    <ul>
                        <li>5/10 interviewees responded with a score of 5</li>
                        <li>2/10 interviewees with a score of 4</li>
                        <li>2/10 interviewees responded with a score of 3</li>
                        <li>1/10 interviewees responded with a score of 2</li>
                        <li>0/10 interviewees responded with a score of 1</li>
                    </ul>
                   </div>
                   <div class="question-results">
                        <h3>Question 3</h3>
                        <ul>
                            <li>4/10 interviewees responded with a score of 5</li>
                            <li>2/10 interviewees with a score of 4</li>
                            <li>0/10 interviewees responded with a score of 3</li>
                            <li>1/10 interviewees responded with a score of 2</li>
                            <li>3/10 interviewees responded with a score of 1</li>
                        </ul>
                   </div>
               </div>   
               <div class="feedback-and-iterations">
                   <h1>Feedback & Design Iterations</h1>
                   <h3>Upcoming Events</h3>
                   <p>Since price is the most important thing to a lot of young people, many interviewees responded that the price of the event should be readily available on the discover page</p>
                   <img src={beforeAndAfter} alt="" />
                   <h3>Sorting events by price</h3>
                   <p>Keeping on the topic of price we thought it would be beneficial to add price as one of the options users can manipulate while selecting events they are interested in.</p>
                   <img src={sortEvents} alt="" class="sort-events-by-price" />
                   <p>So far, I've only made changes to the main functionalities based on user feedback. I'm still working on redesigning other screens & functionalities, and I'll post updates to them as soon as I finish the redesign.</p>
               </div> 
           </div>
          </section>
          <section id="prototype" class="prototype">
              <h1 class="prototype-title">Latest Prototype</h1>
              <p>Here's the latest prototype with some of my updated changes. Further changes to the design based on user feedback will be posted soon.</p>
              <iframe class="prototype-screen" style={{border: 'none', width: '800', height: 800}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fr7fn77kWYqFyAYGtswqqu0%2FHigh-Fidelity-Take-2%3Fnode-id%3D181%253A407%26scaling%3Dscale-down" allowfullscreen></iframe>
          </section>
          <section id="future">
              <h1 class="future-title">Future Steps</h1>
              <div class="future-steps section">
                  <h1>Allow users to follow wineries</h1>
                  <p>Allowing users to follow specific wineries they are interested in or have had a positive experience with, and allowing these wineries to send the users notifications for new events or new wines they have will most likely increase the likelihood that a user will return to that winery.</p>
                  <h1>Add a social aspect</h1>
                  <p>Wineries and wine events are inherently social. Allowing users to stay up to date with what other people and their friends are doing will make this application much more appealing, as we can see with other applications such as Untappd. Ideally we would like to implement some sort of leaderboard or competetive aspect, to further encourage users to attend events and collect badges.</p>
                  <h1>Allow users to buy wines through the application</h1>
                  <p>Since the overarching goal of this application is to increase millenial "throat share" of the wine industry, allowing users to buy wines from a specific winery is an obvious next step</p>
                  <h1>User reviews</h1>
                  <p>This last one ties in nicely with the social aspect, I think that allowing users to review certain wineries or wine events will go a long way in attracting younger people to wineries and wine events, since word of mouth is incredibly important when considering events or anything you will spend money on.</p>
                  <h1>For Development</h1>
                  <p>Since we plan on bringing this product to market we really have to design with development in mind. Being a small group of students we have to design around what we can implement and that means utilizing as many APIs, and available technologies as possible to help lighten our load.</p>
                  <h1>API for Events and in app purchases: <a href="https://www.eventbrite.com/platform/api#/reference/order" target="_blank" rel="noopener noreferrer">EventBrite</a></h1>
                  <ul>
                      <li>Most wineries in Hudson Valley use eventbrite to handle ticket sales</li>
                      <li>Allows users to buy tickets and earn badges easily through our application</li>
                  </ul>
                  <h1>Database for wines in Hudson Valley: <a href="https://www.wine-searcher.com/api" target="_blank" rel="noopener noreferrer">Wine-searcher</a></h1>
                  <ul>
                      <li>Used by 95,905 wine businesses</li>
                      <li>210 million searches a year</li>
                      <li>Has a specific database for the hudson river valley region</li>
                  </ul>
                  <h1>Data for map functionality: <a href="https://developer.foursquare.com/" target="_blank" rel="noopener noreferrer">Foursquare</a></h1>
                  <ul>
                      <li>105 million places</li>
                  </ul>
                  <h1>Technology for scanning functionalith: <a href="https://services.tineye.com/WineEngine" target="_blank" rel="noopener noreferrer">WineEngine</a></h1>
                  <ul>
                      <li>Technology specifically made to scan wine labels</li>
                  </ul>
              </div>
          </section>
    </div> 
</div>
</>
        )
    }
}