import "./venue.css";

export default function Venue() {
  return (
    <section className="venue-section">

      <a
        href="https://maps.google.com/?q=22.5255,75.9200"
        target="_blank"
        rel="noopener noreferrer"
        className="venue-card"
      >

        <div className="venue-left">

          <span className="venue-tag">
            📍 OFFICIAL VENUE
          </span>

          <h2>IIT Indore</h2>

          <p>
            Simrol, Khandwa Road
            <br />
            Indore, Madhya Pradesh
          </p>

        </div>

        <div className="venue-right">

          <div className="coordinate">

            <span>Latitude</span>

            <strong>22.5255° N</strong>

          </div>

          <div className="coordinate">

            <span>Longitude</span>

            <strong>75.9200° E</strong>

          </div>

        </div>

      </a>

    </section>
  );
}