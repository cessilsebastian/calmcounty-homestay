import React from "react";
import roomsCSS from "./../Rooms/Room.module.css";
import { useScroll } from "../../ScrollContext";
import roomImg1 from "./../../assets/room/room1.webp";
import roomImg2 from "./../../assets/room/room2.webp";
import roomImg3 from "./../../assets/room/room3.webp";
import roomImg4 from "./../../assets/room/room4.webp";

function Rooms() {
  const { rooms } = useScroll();
  const roomData = [
    {
      img: roomImg1,
      title: "Non-AC Room 1",
      description:
        "Perfect for couples or solo travelers looking for peace and comfort.",
      features: [
        "Huge Glass Windows for the Best Views",
        "Comfortable Bed with Mattress",
        "Free Wi-Fi and TV",
        "24/7 Room Service",
        "Non-AC Room",
      ],
      price: "₹3,999",
    },
    {
      img: roomImg2,
      title: "Non-AC Room 2",
      description:
        "Perfect for couples or solo travelers looking for peace and comfort.",
      features: [
        "Huge Glass Windows for the Best Views",
        "Comfortable Bed with Mattress",
        "Free Wi-Fi and TV",
        "24/7 Room Service",
        "Non-AC Room",
      ],
      price: "₹3,999",
    },
    {
      img: roomImg3,
      title: "AC Room 1",
      description:
        "Perfect for couples or solo travelers looking for peace and comfort.",
      features: [
        "Huge Glass Windows for the Best Views",
        "Comfortable Bed with Mattress",
        "Free Wi-Fi and TV",
        "24/7 Room Service",
        "AC Room",
      ],
      price: "₹4,499",
    },
    {
      img: roomImg4,
      title: "AC Room 2",
      description:
        "Perfect for couples or solo travelers looking for peace and comfort.",
      features: [
        "Private Balcony with Huge Glass Windows for the Best Views",
        "Comfortable Bed with Mattress",
        "Free Wi-Fi and TV",
        "24/7 Room Service",
        "AC Room",
      ],
      price: "₹4,499",
    },
  ];

  return (
    <div className={roomsCSS.Rooms_container} ref={rooms}>
      <h2 className="section__Title" data-aos="slide-up">
        Our Best <span>Rooms</span>
      </h2>

      <div className={roomsCSS.rooms}>
        {roomData.map((room, index) => (
          <div className={roomsCSS.room_img} key={index} data-aos="slide-up">
            <img src={room.img} alt="room_image" />
            <div className={roomsCSS.room_overlay}>
              <div className={roomsCSS.room_text}>
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <br />
                {room.features.map((feature, i) => (
                  <p key={i}>- {feature}</p>
                ))}
                <div className={roomsCSS.price}>
                  <p>
                    From <span>{room.price}</span>/ Night
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={roomsCSS.entire_house}>
        <p>
          Contact Us directly to book the entire house for events and stays.
        </p>
      </div>
    </div>
  );
}

export default Rooms;
