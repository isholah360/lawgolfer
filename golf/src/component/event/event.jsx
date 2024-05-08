import "./event.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Event() {
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
  const parallaxy = useRef(null);
  useEffect(() => {
    // Set up a GSAP timeline for the parallax animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top center", // Adjust the start point as needed
        end: "bottom center",
        once: true, // Enables scrubbing for a smoother effect
      },
    });

    // Define your parallax animation
    tl.fromTo(
      parallaxa.current,
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0, duration: 2 } // Final state
    );
    tl.fromTo(
      parallaxy.current,
      { opacity: 0, x: -100 }, // Initial state
      { opacity: 1, x: 0, duration: 1 } // Final state
    );

  }, []);
  return (
    <div style={{overflowX:"hidden"}} ref={parallaxRef}>
      <div className="event-complete">
        <div className="the-main-event">
          <div className="event-golfer-img" ref={parallaxy}>
            <img src="assets/g3.jpeg" alt="" />
          </div>
          <div className="the-three-events" ref={parallaxa}>
            <div className="our-event">OUR EVENTS</div>
            <div className="let-plan">Let’s Make It A Golf Day</div>
            {/* Event two */}
            <div className="event-date-hr">
              <div className="the-event-date">
                <div className="eve-time-date">
                  <div className="event-date">20 AUGUST 2024</div>
                  <div className="event-time">10:00AM</div>
                </div>
                <div className="event-desc-name">
                  <div className="event-name">25th Goolfs Anniversary</div>
                  <div className="event-descript">
                    Celebrating 25 years of tradition, our polo club has
                    fostered excellence, camaraderie, and a vibrant community of
                    equestrian enthusiasts.
                  </div>
                </div>
                <div className="event-button">
                  <button>BOOK TICKET</button>
                </div>
              </div>

              <hr style={{ background: "#e08f5c", borderColor: "#e08f5c" }} />
            </div>
            {/* Event two */}
            <div className="event-date-hr">
              <div className="the-event-date">
                <div className="eve-time-date">
                  <div className="event-date">20 AUGUST 2024</div>
                  <div className="event-time">10:00AM</div>
                </div>
                <div className="event-desc-name">
                  <div className="event-name">25th Goolfs Anniversary</div>
                  <div className="event-descript">
                    Celebrating 25 years of tradition, our polo club has
                    fostered excellence, camaraderie, and a vibrant community of
                    equestrian enthusiasts.
                  </div>
                </div>
                <div className="event-button">
                  <button>BOOK TICKET</button>
                </div>
              </div>

              <hr style={{ background: "#e08f5c", borderColor: "#e08f5c" }} />
            </div>
            {/* Event three */}
            <div className="event-date-hr">
              <div className="the-event-date">
                <div className="eve-time-date">
                  <div className="event-date">20 AUGUST 2024</div>
                  <div className="event-time">10:00AM</div>
                </div>
                <div className="event-desc-name">
                  <div className="event-name">25th Goolfs Anniversary</div>
                  <div className="event-descript">
                    Celebrating 25 years of tradition, our polo club has
                    fostered excellence, camaraderie, and a vibrant community of
                    equestrian enthusiasts.
                  </div>
                </div>
                <div className="event-button">
                  <button>BOOK TICKET</button>
                </div>
              </div>

              <hr style={{ background: "#e08f5c", borderColor: "#e08f5c" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
