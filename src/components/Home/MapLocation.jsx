// src/components/MapLocation.jsx

export default function MapLocation() {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Map iframe */}
        <div className="w-full h-[400px] rounded-md overflow-hidden shadow">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.437356351906!2d-1.1418820236285476!3d52.6603469719731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761c24e647fdb%3A0x30cb3c24a8d9b3ed!2s3%20Wesley%20St%2C%20Leicester%20LE4%205QG%2C%20UK!5e0!3m2!1sen!2slk!4v1721703192461!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
