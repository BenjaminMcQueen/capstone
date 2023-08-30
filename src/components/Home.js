import React from "react";
import cincinnatiDowntown from "./images/cincinnatiDowntown.jpeg"
// import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Section 1 starts here */}
      <section className="section1">
        {/* Cincinnati downtown image */}
        <div className="image-with-text">
          <img
            src={ cincinnatiDowntown }
            alt="Downtown Cincinnati"/>
          <div className="overlay">
            <h2>Explore Downtown Cincinnati</h2>
            <p>Discover the beauty of Cincinnati's downtown ariel view</p>
          </div>
        </div>
        {/* musical festival of cincinnati */}
        <div className="image-with-text">
          <img
            src="/Users/aadityaacharya/Desktop/FullTimeWebDev/capstone/src/components/images/cincinnati_musicfest.jpeg"
            alt="Cincinnati Culture"/>
          <div className="overlay">
            <h2>Experience the Culture here in cincinnati</h2>
            <p>Immerse yourself in Cincinnati's vibrant arts of music scene.</p>
          </div>
        </div>
      </section>

      {/* section 2 starts here */}
      <section className="section2">
        <h2>History of Cincinnati</h2>
        <div className="history-text">
          <p>
            Cincinnati's history is as vibrant and diverse as its chili toppings
            – a melting pot of intriguing stories and quirky anecdotes that make
            you wonder if the city's past was scripted by a sitcom writer. Often
            crowned as the "Queen City" with all the regal charm and none of the
            stuffy formality, Cincinnati boasts a history that's as colorful as
            a riverfront sunset. From its early days as a humble riverfront
            settlement to its role as a bustling hub of river trade, Cincinnati
            has seen it all. If these streets could talk, they'd regale us with
            tales of mustachioed riverboat captains, wily entrepreneurs peddling
            pork products, and even a quirky phase of German singing societies –
            because nothing says "progress" like a good old-fashioned
            sing-along. The city's history is an eclectic mix of innovation,
            sports fervor that borders on fanaticism, and more chili debates
            than you'd believe a person could handle. So, welcome to Cincinnati,
            where history isn't just in textbooks; it's on street corners,
            whispered in local eateries, and celebrated with a side of
            good-natured humor.
          </p>
        </div>
        <div className="culture">
          <h3>Culture</h3>
          <p>
            From its historic neighborhoods to modern galleries, Cincinnati's
            cultural journey is a captivating tapestry of tradition and
            innovation. Stroll through the Over-the-Rhine district, where
            cobblestone streets whisper stories of immigrant roots, and
            intricate architecture showcases the city's past. Art enthusiasts
            find their haven at the Cincinnati Art Museum, where masterpieces
            from around the world create a dialogue across centuries. But
            Cincinnati doesn't merely honor the past; it embraces the present
            with dynamic galleries and creative spaces that pulse with
            contemporary energy. As the city evolves, its cultural scene dances
            between timeless charm and avant-garde expression, an ever-changing
            melody that reflects Cincinnati's passion for both heritage and
            exploration.
          </p>
        </div>
        <div className="attractions">
          <h3>Attractions</h3>
          <p>
            Cincinnati's allure lies in its myriad attractions that span the
            spectrum of interests. Delve into its rich history at the National
            Underground Railroad Freedom Center, where the echoes of
            emancipation resonate. Embark on a wild adventure at the Cincinnati
            Zoo & Botanical Garden, one of the oldest in the nation, where
            endangered species find sanctuary. The city's architectural gems,
            like the iconic Carew Tower, offer breathtaking skyline views, while
            a journey on the Cincinnati Bell Connector streetcar winds through
            scenic routes. For sports enthusiasts, the Great American Ball Park
            and Paul Brown Stadium stand as citadels of athletic excitement.
            Whether you're drawn to history, nature, architecture, or sports,
            Cincinnati's attractions beckon with a diverse array of experiences
            that cater to every curiosity.
          </p>
        </div>
        <div className="sports">
          <h3>Sports</h3>
          <p>
            Cincinnati is home to passionate sports fans. Cincinnati's history
            in sports reads like a playbook of passion and triumph. From roaring
            crowds at Riverfront Stadium to the electrifying chants echoing
            through Great American Ball Park, the city has woven its love for
            sports into the very fabric of its identity. Legendary figures like
            the Big Red Machine have etched their names in baseball lore, while
            the Bengals have brought football fever to life on crisp autumn
            Sundays. Cincinnati isn't just a spectator; it's a player, from
            hosting the first professional baseball team to fostering the
            vibrant tennis community of the Western & Southern Open. With
            rivalries that spark fireworks and fans that roar with pride,
            Cincinnati's sports history is a testament to its enduring love
            affair with the games that keep hearts racing and spirits soaring.
          </p>
        </div>
      </section>
      {/* Section 3 starts here*/}
      <section className="section3">
        <h2>Why Visit Cincinnati?</h2>
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
        <div className="top-5">
          <h3>Top 5 Things to Do in Cincinnati</h3>
          <ol>
            <li>Visit the Cincinnati Art Museum</li>
            <li>Take a stroll along the Ohio Riverfront</li>
            <li>Explore the Cincinnati Zoo & Botanical Garden</li>
            <li>Attend a Cincinnati Reds baseball game</li>
            <li>Experience the entertainment of Over-the-Rhine</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Home;
