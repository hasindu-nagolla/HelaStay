import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeaturedDestinations = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection af execeptional Properties around the world, offering unparalleled luxury and unforgettable experiences."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button>View All Destinations</button>
    </div>
  );
};

export default FeaturedDestinations;
