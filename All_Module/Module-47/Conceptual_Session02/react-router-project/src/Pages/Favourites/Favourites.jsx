import { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const favoutiteItem = JSON.parse(localStorage.getItem("favourite"));
    if (favoutiteItem) {
      setFavourites(favoutiteItem);
    } else {
      setNofound("No Data Found");
    }
  }, [favourites]);

  const handleRemove = () => {
    localStorage.clear();
    setFavourites([]);
    setNofound("No Data Found");
  };

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {favourites.length > 0 && (
            <button
              onClick={handleRemove}
              className="px-5 bg-green-200 block mx-auto"
            >
              Delete All Favourites
            </button>
          )}
          <div className="grid grid-cols-2 gap-5">
            {isShow
              ? favourites.map((phone) => (
                  <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>
                ))
              : favourites
                  .slice(0, 2)
                  .map((phone) => (
                    <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>
                  ))}
          </div>
          <button
            onClick={() => setIsShow(!isShow)}
            className="px-5 bg-green-200 block mx-auto"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Favourites;
