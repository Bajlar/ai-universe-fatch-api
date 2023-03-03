// fetch all data
const fetchLoadData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayShowData(data.data.tools.slice(0, 6)))
    .catch(error => {
      console.log(error);
    })
}

// display show single data
const displayShowData = (tools) => {
  const featuresContainer = document.getElementById('features-container');
  featuresContainer.innerHTML = '';
  tools.forEach(tool => {
    const {id, name, image, features, published_in} = tool;
    console.log(tool);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 p-2">
      <img src="${image}" class="card-img-top" alt="">
      <div class="card-body">
        <h3 class="card-title fw-semibold">Features</h3>
        <ol>
          <li>${features[0]}</li>
          <li>${features[1]}</li>
          <li>${features[2] ? features[2] : 'Not Found'}</li>
        </ol>
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h3 class="card-title fw-semibold">${name}</h3>
            <div class="d-flex align-items-center gap-2">
              <i class="fa-regular fa-calendar-days"></i>
              <p class="p-0 m-0">${published_in}</p>
            </div>
          </div>
          <div>
            <i onclick="singleCategory('${id}')" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#categoriesModal"></i>
          </div>
        </div>
      </div>
    </div>
    `;
    featuresContainer.appendChild(div);
  });
}

fetchLoadData();

const showAllDataTogether = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayShowData(data.data.tools))
    .catch(error => {
      console.log(error);
    })
}