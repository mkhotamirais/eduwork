class dataTable {
  constructor(name) {
    this.name = name;
  }
}

const data = new dataTable({
  rowHead: ["No", "Nama", "Umur", "Asal"],
  rowData: [
    [1, "ahmad", 20, "jakarta"],
    [2, "abdul", 25, "bandung"],
    [3, "siti", 24, "garut"],
    [4, "ayu", 26, "tasik"],
    [5, "iis", 23, "banten"],
    [6, "budi", 19, "jogja"],
  ],
});

const rowHead = document.getElementById("rowHead");
for (const dt of data.name.rowHead) {
  const th = document.createElement("th");
  th.append(dt);
  rowHead.appendChild(th);
}
const rowBody = document.getElementById("rowBody");
const row = data.name.rowData;
row.map((item) => {
  rowBody.innerHTML += `
  <td>${item[0]}</td>
  <td>${item[1]}</td>
  <td>${item[2]}</td>
  <td>${item[3]}</td>
  `;
});
