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

// unique category fetch by id
const singleCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => categoryDetails(data.data))
    .catch(erroe => {
      console.log(erroe);
    })
}

// category details
const categoryDetails = (category) => {
  console.log(category);
  const {description, features, integrations, input_output_examples, pricing, image_link} = category;
  const containerDetails = document.getElementById('container-details');
  containerDetails.innerHTML = `
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">${description}</h6>
          <div class="d-flex gap-2">
            <div class="text-success rounded-3 bg-light p-2">
              <p class="p-0 m-0">${pricing[0].plan ? pricing[0].plan : 'Free'}</p>
              <p class="p-0 m-0">${pricing[0].price ? pricing[0].price : 'of Cost'}</p>
            </div>
            <div class="text-warning rounded-3 bg-light p-2">
              <p class="p-0 m-0">${pricing[1].plan ? pricing[1].plan : 'Free'}</p>
              <p class="p-0 m-0">${pricing[1].price ? pricing[1].price : 'of Cost'}</p>
            </div>
            <div class="text-danger rounded-3 bg-light p-2">
              <p class="p-0 m-0">${pricing[2].plan ? pricing[2].plan : 'Free'}</p>
              <p class="p-0 m-0">${pricing[2].price ? pricing[2].price : 'of Cost'}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <div>
              <h5 class="card-title fw-semibold">Features</h5>
              <ol>
                <li>Value null</li>
                <li>Value null</li>
                <li>Value null</li>
              </ol>
            </div>
            <div>
              <h5 class="card-title fw-semibold">Integrations</h5>
              <ol>
                <li>${integrations[0] ? integrations[0] : 'Not found'}</li>
                <li>${integrations[1] ? integrations[1] : 'Not found'}</li>
                <li>${integrations[2] ? integrations[2] : 'Not found'}</li>
                <li>${integrations[3] ? integrations[3] : 'Not found'}</li>
                <li>${integrations[4] ? integrations[4] : 'Not found'}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card position-relative">
        <img src="${image_link[0] ? image_link[0] : 'https://itchronicles.com/wp-content/uploads/2020/09/How-Facebook-uses-Artificial-intelligence-1024x576.jpg'}" class="img-fluid p-3" alt="">
        <div class="card-body text-center">
          <h5 class="card-title">${input_output_examples[0].input ? input_output_examples[0].input : 'Can you give any example?'}</h5>
          <p class="card-text text-muted">${input_output_examples[0].output ? input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
      </div>
      <div>
        <button class="btn btn-danger position-absolute top-0 end-0">94% accuracy</button>
      </div>
    </div>
  </div>
  `;
}

fetchLoadData();

// display show the all card function
const showAllDataTogether = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayShowData(data.data.tools))
    .catch(error => {
      console.log(error);
    })
}