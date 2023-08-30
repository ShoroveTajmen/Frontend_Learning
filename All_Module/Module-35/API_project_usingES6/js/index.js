const handleCategory = async () => {
  //fetch data from server
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  const trimeData = data.data.news_category.slice(0, 3);
  //dynamically accessing the news category
  const tabContainer = document.getElementById("tab-container");
  //using for each loop to accessing the category
  trimeData.forEach((category) => {
    // console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>      
        `;
    tabContainer.appendChild(div);
  });
};

//load category news info
const handleLoadNews = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await res.json();

  //showing category details in a card using for each loop
  const dataa = data.data;
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";
  dataa.forEach((news) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="${news?.image_url}"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${news.title.slice(0, 40)}</h2>
          <p>${news.details.slice(0, 40)}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">${news?.rating?.badge}</button>
          </div>
        </div>
        <div class="w-14 rounded-full mb-8">
        <img
        src="${news?.author?.img}"
        alt="Shoes"
      />
      </div>
      <div>
         <h6>${news?.author?.name}</h6>
      </div>
      </div>
        `;
    cardContainer.appendChild(div);
  });
};

handleCategory();
handleLoadNews('01');
