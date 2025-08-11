// Fetch local JSON file
fetch("./response.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched JSON:", data); // first log in console

    // Render JSON in browser (optional raw output)
    document.getElementById("output").textContent = JSON.stringify(
      data,
      null,
      2
    );

    // Call renderNews with fetched data
    renderNews(data);
  })
  .catch((err) => console.error("Error loading JSON:", err));

function renderNews(data) {
  const tableBody = document.querySelector("#news-table tbody");
  tableBody.innerHTML = ""; // Clear old rows

  data.articles.forEach((article) => {
    const row = document.createElement("tr");

    // Source
    const sourceCell = document.createElement("td");
    sourceCell.textContent = article.source?.name || "N/A";
    row.appendChild(sourceCell);

    // Author
    const authorCell = document.createElement("td");
    authorCell.textContent = article.author || "Unknown";
    row.appendChild(authorCell);

    // Title (clickable link)
    const titleCell = document.createElement("td");
    const titleLink = document.createElement("a");
    titleLink.href = article.url;
    titleLink.textContent = article.title;
    titleLink.target = "_blank";
    titleCell.appendChild(titleLink);
    row.appendChild(titleCell);

    // Description
    const descCell = document.createElement("td");
    descCell.textContent = article.description || "";
    row.appendChild(descCell);

    // Published date
    const dateCell = document.createElement("td");
    dateCell.textContent = new Date(article.publishedAt).toLocaleString();
    row.appendChild(dateCell);

    tableBody.appendChild(row);
  });
}
