function ambilData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return callback(JSON.parse(this.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const tbody = document.querySelector("tbody");
ambilData("https://jsonplaceholder.typicode.com/users", (data) => {
  data.map((item) => {
    tbody.innerHTML += `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td>${item.address.street}, ${item.address.suite}, ${item.address.city}</td>
      <td>${item.company.name}</td>
    </tr>
    `;
  });
  console.log(data);
});
