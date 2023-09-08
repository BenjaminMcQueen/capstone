import React from "react";
import cincinnatiDowntown from "./images/cincinnatiDowntown.jpeg";
// import cincinnati_musicfest from "./images/cincinnati_musicfest.jpeg";
import sportscinn from "./images/sportscinn.jpeg";
import attractionscinn from "./images/attractionscinn.jpeg";
import cincinnatimusichall from "./images/cincinnatimusichall.jpeg";

function Home() {
  return (
    <div className="home-container">
      {/* Section 1 starts here */}
      <div class="section1">
        <div class="img-container">
          <img class="img" src={attractionscinn} alt="Cincinnati downtown" />
          {/* Content for image 1 */}
          <div class="overlay">
            <h1>Explore Downtown Cincinnati</h1>
            <h4>Discover the beauty of Cincinnati's downtown ariel view</h4>
          </div>
        </div>
      </div>

      {/* section 2 starts here */}
      <h1>History of Cincinnati</h1>
      <div className="history-text">
        <p>
          Cincinnati's history is as vibrant and diverse as its chili toppings –
          a melting pot of intriguing stories and quirky anecdotes that make you
          wonder if the city's past was scripted by a sitcom writer. Often
          crowned as the "Queen City" with all the regal charm and none of the
          stuffy formality, Cincinnati boasts a history that's as colorful as a
          riverfront sunset. From its early days as a humble riverfront
          settlement to its role as a bustling hub of river trade, Cincinnati
          has seen it all. If these streets could talk, they'd regale us with
          tales of mustachioed riverboat captains, wily entrepreneurs peddling
          pork products, and even a quirky phase of German singing societies –
          because nothing says "progress" like a good old-fashioned sing-along.
          The city's history is an eclectic mix of innovation, sports fervor
          that borders on fanaticism, and more chili debates than you'd believe
          a person could handle. So, welcome to Cincinnati, where history isn't
          just in textbooks; it's on street corners, whispered in local
          eateries, and celebrated with a side of good-natured humor.
        </p>
      </div>
      <div className="culture">
        <h3>Culture</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                From its historic neighborhoods to modern galleries,
                Cincinnati's cultural journey is a captivating tapestry of
                tradition and innovation. Stroll through the Over-the-Rhine
                district, where cobblestone streets whisper stories of immigrant
                roots, and intricate architecture showcases the city's past. Art
                enthusiasts find their haven at the Cincinnati Art Museum, where
                masterpieces from around the world create a dialogue across
                centuries. But Cincinnati doesn't merely honor the past; it
                embraces the present with dynamic galleries and creative spaces
                that pulse with contemporary energy. As the city evolves, its
                cultural scene dances between timeless charm and avant-garde
                expression, an ever-changing melody that reflects Cincinnati's
                passion for both heritage and exploration.
              </p>
            </div>
            <img
              class="home-img"
              src={cincinnatimusichall}
              alt="cincinnati culture"
            />
          </div>
        </div>
      </div>
      <div className="attractions">
        <h3>Attractions</h3>
        <p>
          Cincinnati's allure lies in its myriad attractions that span the
          spectrum of interests. Delve into its rich history at the National
          Underground Railroad Freedom Center, where the echoes of emancipation
          resonate. Embark on a wild adventure at the Cincinnati Zoo & Botanical
          Garden, one of the oldest in the nation, where endangered species find
          sanctuary. The city's architectural gems, like the iconic Carew Tower,
          offer breathtaking skyline views, while a journey on the Cincinnati
          Bell Connector streetcar winds through scenic routes. For sports
          enthusiasts, the Great American Ball Park and Paul Brown Stadium stand
          as citadels of athletic excitement. Whether you're drawn to history,
          nature, architecture, or sports, Cincinnati's attractions beckon with
          a diverse array of experiences that cater to every curiosity.
        </p>
        <img
          class="home-img"
          src={cincinnatiDowntown}
          alt="cincinnati attractions"
        />
      </div>
      <div className="sports">
        <h3>Sports</h3>
        <p>
          Cincinnati is home to passionate sports fans. Cincinnati's history in
          sports reads like a playbook of passion and triumph. From roaring
          crowds at Riverfront Stadium to the electrifying chants echoing
          through Great American Ball Park, the city has woven its love for
          sports into the very fabric of its identity. Legendary figures like
          the Big Red Machine have etched their names in baseball lore, while
          the Bengals have brought football fever to life on crisp autumn
          Sundays. Cincinnati isn't just a spectator; it's a player, from
          hosting the first professional baseball team to fostering the vibrant
          tennis community of the Western & Southern Open. With rivalries that
          spark fireworks and fans that roar with pride, Cincinnati's sports
          history is a testament to its enduring love affair with the games that
          keep hearts racing and spirits soaring.
        </p>
        <img class="home-img" src={sportscinn} alt="cincinnati Sports spot" />
      </div>
      {/* Section 3 starts here*/}
      <div className="container">
        <h2>Why visit Cincinnati?</h2>
        <p>
          Visit Cincinnati, a city where history and innovation intertwine to
          create an unforgettable experience. Immerse yourself in its rich
          history, wandering through cobblestone streets and iconic landmarks
          that tell tales of the past. Embrace the diverse culture that infuses
          every corner, from vibrant arts scenes to eclectic neighborhoods
          bursting with flavors from around the world. With a thriving culinary
          landscape, renowned museums, and a passion for sports that runs deep,
          Cincinnati invites you to explore its unique blend of tradition and
          modernity. Whether you're captivated by historic gems or seeking
          cutting-edge experiences, Cincinnati promises a journey filled with
          charm, culture, and endless discoveries.
        </p>
      </div>
      {/* 5 most visit places */}

      <div className="main">
        <h1 className="main_heading">Top 5 things to do in Cincinnati</h1>
        <div className="cards">
          <div className="cards_inner">
            <div className="card">
              <h2 className="card_heading">Cincinnati Art Museum</h2>
              <p className="card_info">
                Immerse yourself in the world of art at the Cincinnati Art
                Museum, where a diverse collection of masterpieces from various
                cultures and time periods await your exploration. From ancient
                artifacts to contemporary works, this museum offers a
                captivating journey through human creativity and expression2
              </p>
              <ul className="m5">
                <li>Impressive Collection</li>
                <li> Free Admission</li>
                <li>Ancient Artifacts</li>
              </ul>
              <a href="https://www.cincinnatiartmuseum.org/" className="more">
                Find more
              </a>
            </div>
            <div className="card">
              <h2 className="card_heading">Ohio Riverfront (Downtown)</h2>
              <p className="card_info">
                Discover the serenity and beauty of the Ohio River as you
                leisurely stroll along its picturesque riverfront. The scenic
                views, charming parks, and bustling riverboats provide a perfect
                backdrop for a relaxing afternoon or a romantic evening, making
                it a must-visit destination for those seeking tranquility and
                natural beauty in Cincinnati.
              </p>
              <ul className="m5">
                <li>Underground Railroad History</li>
                <li>Paddlewheelers</li>
                <li>Spectacular Sunsets</li>
              </ul>
              <a
                href="https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/smale-riverfront-park/"
                className="more">
                Find more
              </a>
            </div>
            <div className="card">
              <h2 className="card_heading">
                Cincinnati Zoo & Botanical Garden
              </h2>
              <p className="card_info">
                Embark on a wildlife adventure at the Cincinnati Zoo & Botanical
                Garden, one of the oldest zoos in the United States. This
                family-friendly destination not only showcases a diverse array
                of exotic animals but also boasts stunning botanical gardens,
                offering a perfect blend of education and natural wonder.
              </p>
              <ul className="m5">
                <li>Fiona the Hippo</li>
                <li>Botanical Diversity:</li>
                <li>Conservation Efforts</li>
              </ul>
              <a href="https://cincinnatizoo.org/" className="more">
                Find more
              </a>
            </div>
            <div className="card">
              <h2 className="card_heading">
                Great American Ball Park
              </h2>
              <p className="card_info">
                Experience the thrill of America's favorite pastime by catching
                a Cincinnati Reds baseball game at the iconic Great American
                Ball Park. Join the enthusiastic fans, savor ballpark snacks,
                and cheer for the home team as you immerse yourself in the rich
                history and excitement of baseball in Cincinnati.
              </p>
              <ul className="m5">
                <li>Big Red Machine</li>
                <li>First Professional Baseball Team</li>
                <li>The Gap</li>
              </ul>
              <a href="https://www.mlb.com/reds/" className="more">
                Find more
              </a>
            </div>
            <div className="card">
              <h2 className="card_heading">Over-the-Rhine (neighborhood)</h2>
              <p className="card_info">
                Dive into the vibrant and eclectic neighborhood of
                Over-the-Rhine, where historic architecture, trendy boutiques,
                lively restaurants, and a thriving arts scene converge. Whether
                you're exploring its charming streets by day or enjoying the
                buzzing nightlife after sunset, Over-the-Rhine promises a
                delightful and culturally rich experience in the heart of
                Cincinnati.
              </p>
              <ul className="m5">
                <li>Historical Architecture</li>
                <li>Renovation and Revival</li>
                <li>Brewery Heritage</li>
              </ul>
              <a href="https://www.otrchamber.com/" className="more">
                Find more
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="anchors">
          <a className="anchors-footer" href="/home">
            Home
          </a>
          <a className="anchors-footer" href="/aboutus">
            About us
          </a>
          <a className="anchors-footer" href="/attractions">
            Attractions
          </a>
          <a className="anchors-footer" href="/contact">
            contact us
          </a>
        </div>
        <div className="copyright">
          <div className="container">
            &copy; 2023 Aaditya Acharya. All rights reserved.
            <ul>
              <li>
                <a href="home">site map</a>
              </li>
              <li>
                <a href="home">Terms of Use</a>
              </li>
              <li>
                <a href="home">Privacy Statements</a>
              </li>
            </ul>
            <hr />
            <br />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
