const btn = document.getElementById("button-addon2");
let results = document.getElementById("results");
btn.addEventListener("click", function () {
  btn.querySelector("i").className = "fa fa-spinner fa-spin";
  hasil(results);
});

document.querySelector(".s-input").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    btn.querySelector("i").className = "fa fa-spinner fa-spin";
    hasil(results);
  }
});

function hasil(results) {
  results.innerHTML = `<div class="text-center display-3">tunggu sebentar...</div>`;
  let key = document.querySelector(".s-input").value;
  document.querySelector(".s-input").value = "";
  document.querySelector(".s-input").focus();

  setTimeout(() => {
    axios
      .get(
        `https://newsapi.org/v2/${
          key == "" ? "top-headlines?country=us&" : "everything?"
        }apiKey=9c6131f2202d4dafb822bc76564f80c4&q=${key}`
      )
      .then((res) => {
        results.innerHTML = "";
        if (res.data.articles.totalResults == 0) {
          results.innerHTML = "kosong";
        }
        res.data.articles.map((item) => {
          results.innerHTML += `
          <div class="col-lg-4 mb-3">
            <div class="card" style="width: 18rem">
              <img src="${
                item.urlToImage == null ? "" : item.urlToImage
              }" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.author} ${item.publishedAt}
                </p>
                <p class="card-text">${item.description}
                </p>
                <a href="${
                  item.url
                }" target="_blank" class="btn btn-primary">Lanjut baca...</a>
              </div>
            </div>
          </div>
          `;
        });
      })
      .catch((err) => console.log(err))
      .finally(function () {
        btn.querySelector("i").className = "fa fa-search";
      });
  }, 500);
}
hasil(results);
