function generateCupcakeHTML(cupcake) {
  //   return `
  //       <div data-cupcake-id=${cupcake.id}>
  //         <li>
  //           ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
  //           <button class="delete-button">X</button>
  //         </li>
  //         <img class="Cupcake-img"
  //               src="${cupcake.image}"
  //               alt="(no image provided)">
  //       </div>`;
  return `
  <div data-cupcake-id=${cupcake.id}>
    <li class="list-inline-item mb-3">
      ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
      <button class="delete-button btn btn-danger ml-2">X</button>
    </li>
    <img class="Cupcake-img img-fluid"
          src="${cupcake.image}"
          alt="(no image provided)">
  </div>`;
}

async function showCupcakes() {
  const response = await axios.get("/api/cupcakes");

  for (let cupcakeData of response.data.cupcake) {
    let newCupcake = $(generateCupcakeHTML(cupcakeData));
    $(".cupcake-list").append(newCupcake);
  }
}

$("#new-cupcake-form").on("submit", async function (evt) {
  evt.preventDefault();
  let flavor = $("#form-flavor").val();
  let rating = $("#form-rating").val();
  let size = $("#form-size").val();
  let image = $("#form-image").val();

  const newCupcakeResponse = await axios.post("/api/cupcakes", {
    flavor,
    rating,
    size,
    image,
  });

  let newCupcake = $(generateCupcakeHTML(newCupcakeResponse.data.cupcake));
  $(".cupcake-list").append(newCupcake);
  $("#new-cupcake-form").trigger("reset");
});

$(showCupcakes);
