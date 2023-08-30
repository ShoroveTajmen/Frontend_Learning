const loadPhone = async (searchText, isShowAll) => {
  //fetch data from server
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  //convert response to json formate
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);

  //call the displayPhone function and passing phones which is  stored all phones arrayy
  displayPhone(phones, isShowAll);
};

////////////////////////////////////////////////////////////////////////////
//for showing each of phone
const displayPhone = (phones, isShowAll) => {
  //1. get container element
  const phoneContainer = document.getElementById("phone-container");
  //clear phone container cards before adding new cards
  phoneContainer.textContent = "";

  //display show all button if there are more than 12 phones
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowAll　) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  //show only 12 phone cards when show all button is false that means show all buutton is not clicked
  if(!isShowAll){
    phones = phones.slice(0, 12);
  }

  //usinng forEach loop we can display all of phones and here we don't need to return anything so used forEach
  phones.forEach((phone) => {
    // console.log(phone);
    //2. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 shadow-xl p-4`;
    //3. set innerHTML
    phoneCard.innerHTML = `
        <figure>
              <img
                src="${phone.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button onclick="handleShowDetaiil('${phone.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>        
        `;
    //4. append child
    phoneContainer.appendChild(phoneCard);
  });
  //hide loading spinner
  toggleSpinner(false);
};


///////////////////////////////////////////////
//handdle show details button
const handleShowDetaiil = async(id) => {
  // console.log('clickkk', id);
  //load single phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone = data.data;

  showPhoneDetails(phone);
}

//////////////////////////////////////////////////////////
//show phone details using modal
const showPhoneDetails = (phone) => {
  console.log(phone);
  const showDetails = document.getElementById('show-details');
  showDetails.innerHTML = `
  <img src="${phone.image}" alt="">
  <h3 class="font-bold text-lg">${phone.name}</h3>
  <p class="py-4">${phone.mainFeatures.displaySize}</p>
  <p class="py-4"><span>GPS:</span>${phone?.others?.GPS || 'NO GPS'}</p>

  
  `
  //show the modal
  show_details_modal.showModal();
}

////////////////////////////////////////////////////////////////////////
//handle search button
const handleSearch = (isShowAll) => {
  //call toggleSpinner function for showing spinner before phone card loading
  toggleSpinner(true);

  //get the input field element
  const searchFiled = document.getElementById("search-filed");
  //get the search field value
  const searchText = searchFiled.value;
  //   console.log(searchText);
  loadPhone(searchText, isShowAll);
};

//////////////////////////////////////////////////////////////
//loading or spinner
const toggleSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  }else{
    loadingSpinner.classList.add("hidden");
  }
};

/////////////////////////////////////////////////////////
//handle show all button
const handleShowAll = () => {
  handleSearch(true);
}

// loadPhone();
