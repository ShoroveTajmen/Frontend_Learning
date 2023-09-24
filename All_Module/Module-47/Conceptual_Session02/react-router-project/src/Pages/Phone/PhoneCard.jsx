import swal from "sweetalert";

const PhoneCard = ({ phone }) => {
  const { id, phone_name, brand_name, rating, price, image } = phone || {};

  const handleAddToFavourites = () => {
    const addedFavouritesArray = [];
    const favoutiteItem = JSON.parse(localStorage.getItem("favourite"));

    //jokhon localstorage e kisu nai tokhon if er vhitore dhukbe
    if (!favoutiteItem) {
      addedFavouritesArray.push(phone);
      localStorage.setItem("favourite", JSON.stringify(addedFavouritesArray));
      swal("Good job!", "Products added successfully", "success");
    } else {
      const isExit = favoutiteItem.find((phone) => phone.id === id);
      //jodi ei id ta already localstorage e na thake tahole add hobe
      if (!isExit) {
        addedFavouritesArray.push(...favoutiteItem, phone);
        localStorage.setItem("favourite", JSON.stringify(addedFavouritesArray));
        swal("Good job!", "Products added successfully", "success");
      }else{
        swal("Error!", "No duplicate", "error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <a className="inline-block" href="#">
            <button
              onClick={handleAddToFavourites}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Favourites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
