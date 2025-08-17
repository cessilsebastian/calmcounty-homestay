// filepath: src/WayanadTripPlanner.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import PlannerCSS from "./../Planner/Planner.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
function Planner({ title = "Wayanad Trip Planner - Calm County Homestay" }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const tripOptions = [
    {
      days: 1,
      destinations: [
        {
          name: "Kurumbalakotta",
          distance: "19 km",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kurumbalakotta_hillock_08.jpg",
          mapQuery: "Kurumbalakotta,Wayanad",
        },
        {
          name: "Edakkal Caves",
          distance: "30 km",
          image:
            "https://www.keralatourism.org/images/enchanting_kerala/large/edakkal_caves20210607111846_1087_1.jpg",
          mapQuery: "Edakkal+Caves,Wayanad",
        },
        {
          name: "Wayanad Heritage Museum",
          distance: "30 km",
          image:
            "https://www.wayanadhotels.com/wp-content/uploads/2017/10/Wayanad-Heritage-Museum.jpg",
          mapQuery: "Wayanad+Heritage+Museum,Ambalavayal",
        },
      ],
    },
    {
      days: 2,
      destinations: [
        {
          name: "Banasura Sagar Dam",
          distance: "25 km",
          image:
            "https://www.dtpcwayanad.com/uploads/picture_gallery/gallery_images/banasura-sagar-dam-wayanad-43-20230429183921377875.webp",
          mapQuery: "Banasura+Sagar+Dam",
        },
        {
          name: "Kuruva Island",
          distance: "5 km",
          image:
            "https://www.lanternstay.com/wp-content/uploads/2023/03/kuruvadweep-island-in-kerala-1920x800-1.jpg",
          mapQuery: "Kuruva+Island,Wayanad",
        },
        {
          name: "Pookode Lake",
          distance: "40 km",
          image:
            "https://www.wayanad.com/admin/userfiles/1494571003_pookode-lake1.jpg",
          mapQuery: "Pookode+Lake,Wayanad",
        },
      ],
    },
    {
      days: 3,
      destinations: [
        {
          name: "Tholpetty Wildlife Sanctuary",
          distance: "20 km",
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/08/44/d6/bd/wayanad-wildlife-sanctuary.jpg",
          mapQuery: "Tholpetty+Wildlife+Sanctuary,Wayanad",
        },
        {
          name: "Koodalkadavu",
          distance: "1.5 km",
          image:
            "https://trip2kerala.com/wp-content/uploads/2023/05/koodalkadav1.jpg",
          mapQuery: "koodalkadavu,Wayanad",
        },
        {
          name: "Nagarhole Tiger Reserve",
          distance: "14 km",
          image:
            "https://karnatakatourism.org/wp-content/uploads/2020/10/Nagarhole.jpg",
          mapQuery: "Nagarhole+Tiger+Reserve,Wayanad",
        },
      ],
    },
    {
      days: 4,
      destinations: [
        {
          name: "Soochipara Falls",
          distance: "45 km",
          image:
            "https://www.sterlingholidays.com/activities/vythiri/sterling-vythiri-wayanad-soochipara-falls.jpg.imgw.1280.1280.jpeg",
          mapQuery: "Soochipara+Falls,Wayanad",
        },
        {
          name: "Chembra Peak",
          distance: "50 km",
          image:
            "https://www.keralatourism.org/images/malabar/static-banner/large/Chembra_Peak-28022020105008.jpg",
          mapQuery: "Chembra+Peak,Wayanad",
        },
        {
          name: "Muthanga Wildlife Sanctuary",
          distance: "45 km",
          image:
            "https://blog.voyehomes.com/wp-content/uploads/2021/05/IMG_20210501_131848.jpg",
          mapQuery: "Muthanga+Wildlife+Sanctuary",
        },
      ],
    },
    {
      days: 5,
      destinations: [
        {
          name: "Lakkidi View Point",
          distance: "44 km",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ae/ee/8e/lakkidi-view-point-wayanad.jpg?w=1400&h=1400&s=1",
          mapQuery: "Lakkidi+View+Point",
        },
        {
          name: "Chain Tree",
          distance: "40 km",
          image:
            "https://touristplacesinwayanad.com/wp-content/uploads/2020/12/Chain-Tree-Thumb.jpg",
          mapQuery: "Chain+Tree,Wayanad",
        },
        {
          name: "Karlad Lake",
          distance: "30 km",
          image:
            "https://visit-wayanad.com/wp-content/uploads/2024/10/Karlad-lake-near-Banasura-768x512.jpg",
          mapQuery: "Karlad+Lake,Wayanad",
        },
      ],
    },
    {
      days: 6,
      destinations: [
        {
          name: "Kottiyoor Temple",
          distance: "32 km",
          image:
            "https://travelkannur.com/wp-content/uploads/2016/05/kottiyoor-temple-04.jpg",
          mapQuery: "Kottiyoor+Temple,Kannur",
        },
        {
          name: "Palchuram Waterfall",
          distance: "20 km",
          image:
            "https://www.trawell.in/admin/images/upload/210243696Palchuram-waterfall.jpg",
          mapQuery: "Palchuram+Waterfall,Wayanad",
        },
        {
          name: "Valliyoorkavu Temple",
          distance: "6 km",
          image:
            "https://wayanadtourism.co.in/images/places-to-visit/headers/valliyoorkavu-bhagavathy-temple-wayanad-header-wayanad-tourism.jpg.jpg",
          mapQuery: "Valliyoorkavu+Temple,Wayanad",
        },
      ],
    },
    {
      days: 7,
      destinations: [
        {
          name: "Neelimala View Point",
          distance: "45 km",
          image: "https://hiwayanad.in/tourism/neelimalaviewpoint/1.jpg",
          mapQuery: "Neelimala+View+Point",
        },
        {
          name: "Kanthanpara Waterfalls",
          distance: "45 km",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9c/Kanthanpara_Waterfalls%2C_Wayanad.jpg",
          mapQuery: "Kanthanpara+Waterfalls",
        },
        {
          name: "Wayanad Tea Museum",
          distance: "34 km",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f3/5d/99/wayanad-tea-museum.jpg?w=900&h=500&s=1",
          mapQuery: "Tea+Town+Wayanad,Wayanad",
        },
      ],
    },
    {
      days: 8,
      destinations: [
        {
          name: "Thirunelli Temple",
          distance: "20 km",
          image:
            "https://www.ktexplorer.com/banner/post/1544767828-Thirunelli01.jpg",
          mapQuery: "Thirunelli+Temple,Sulthan+Bathery",
        },
        {
          name: "Jain Temple, Sulthan Bathery",
          distance: "32 km",
          image:
            "https://thewoodsresorts.com/uploads/media/all-about-jain-temple646456420dc1a.jpg",
          mapQuery: "Jain+Temple,Sulthan+Bathery",
        },
        {
          name: "Pazhassi Raja Tomb",
          distance: "9.5 km",
          image:
            "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/14/ac30adacd416a47cad63bf1c729b9fdb_1000x1000.jpg",
          mapQuery: "Pazhassi+Raja+Tomb,Mananthavady",
        },
      ],
    },
    {
      days: 9,
      destinations: [
        {
          name: "Banasura Hill Trek",
          distance: "25 km",
          image:
            "https://we-dpms.com/treks-trails/wp-content/uploads/2020/07/Banasura-Sagar-Dam-1024x678.jpg",
          mapQuery: "Banasura+Hill,Wayanad",
        },
        {
          name: "Meenmutty Falls",
          distance: "30 km",
          image:
            "https://wayanadfort.com/images/meenmutty-water-falls-wayanad.jpg",
          mapQuery: "Meenmutty+Falls,Wayanad",
        },
        {
          name: "Phantom Rock",
          distance: "33 km",
          image:
            "https://www.lanternstay.com/wp-content/uploads/2023/03/PhantomRock04-1.jpg",
          mapQuery: "Phantom+Rock,Wayanad",
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Wayanad Trip Planner - Calm County Homestay</title>
        <meta
          name="description"
          content="Plan your Wayanad trip with our 9 day itineraries. Explore waterfalls, wildlife sanctuaries, temples, and serene nature while staying at Calm County Homestay."
        />
        <link rel="canonical" href="https://www.calmcounty.com/planner" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristTrip",
              name: "Wayanad Trip Planner",
              description:
                "Custom 9 day Wayanad itineraries with waterfalls, wildlife sanctuaries, temples, and cultural sites.",
              itinerary: [
                {
                  "@type": "TouristAttraction",
                  name: "Edakkal Caves",
                  url: "https://www.google.com/maps/search/?api=1&query=Edakkal+Caves,Wayanad",
                },
                {
                  "@type": "TouristAttraction",
                  name: "Kurumbalakotta",
                  url: "https://www.google.com/maps/search/?api=1&query=Kurumbalakotta,Wayanad",
                },
              ],
            }),
          }}
        />
      </Helmet>

      <div className={PlannerCSS.Container}>
        <div className={PlannerCSS.navbar}>
          <div className={PlannerCSS.navLeft}>
            <a href="/" className={PlannerCSS.logo}>
              CALM COUNTY
            </a>
          </div>
          <div className={PlannerCSS.navRight}>
            <a
              href="https://wa.me/917907756911"
              target="_blank"
              rel="noopener noreferrer"
              className={PlannerCSS.navButton}
            >
              Book Now
            </a>
          </div>
        </div>

        <div className={`${PlannerCSS.plannerContainer} section`}>
          <h1>{title}</h1>
          <p className={PlannerCSS.intro}>
            Imagine waking up to the serene beauty of lush, green paddy fields
            in Wayanad. At The Calm County Homestay, this is your daily reality.
            We've crafted these personalized Wayanad itineraries for up to 9
            days to help you explore the best of this enchanting district in
            Kerala, all from the comfort of your home-away-from-home. Discover
            the magic of Wayanad with our expert guidance.
          </p>
          <div className={PlannerCSS.tripGrid}>
            {tripOptions.map((option) => (
              <article key={option.days} className={PlannerCSS.tripCard}>
                <h2>Explore Wayanad - Day {option.days}</h2>
                <ul className={PlannerCSS.destinationList}>
                  {option.destinations.map((destination) => (
                    <li
                      key={destination.name}
                      className={PlannerCSS.destinationItem}
                    >
                      <div className={PlannerCSS.destinationInfo}>
                        <strong>{destination.name}</strong>
                        <span>
                          approx. {destination.distance} from Calm County
                        </span>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${destination.mapQuery}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={PlannerCSS.mapLink}
                        >
                          <FaMapMarkerAlt /> View on Map
                        </a>
                      </div>
                      <figure className={PlannerCSS.polaroid}>
                        <img src={destination.image} alt={destination.name} />
                        <figcaption>{destination.name}</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={PlannerCSS.ctaSection}>
            <h3>Ready for Your Wayanad Adventure?</h3>
            <p>
              Your perfect retreat amidst nature awaits. Book your stay at The
              Calm County Homestay and make these travel plans a reality.
            </p>
            <a
              href="https://wa.me/917907756911"
              target="_blank"
              rel="noopener noreferrer"
              className={PlannerCSS.ctaButton}
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planner;
