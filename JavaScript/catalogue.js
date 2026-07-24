// CATALOGUE PAGE
// Uses shared travelPackages data and createCardHTML() from app.js.

function initCatalogueModule() {
  const grid = document.getElementById("catalogue-grid");
  const search = document.getElementById("catalogue-search");
  const filters = document.getElementById("catalogue-filters");
  const sort = document.getElementById("catalogue-sort");
  if (!grid || !search || !filters || !sort) return;

  let term = "";
  let region = "All";
  let sortBy = "featured";

  // If Home sends a region in the URL, open Catalogue with that filter active.
  const requestedRegion = new URLSearchParams(window.location.search).get("region");
  const validRegions = ["Asia", "Europe", "North America", "South America", "Africa", "Oceania"];
  if (requestedRegion && validRegions.includes(requestedRegion)) {
    region = requestedRegion;
    filters.querySelectorAll(".filter-btn").forEach(button => {
      button.classList.toggle("active", button.dataset.filter === region);
    });
  }

  const render = () => {
    let matches = travelPackages.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(term) || p.country.toLowerCase().includes(term);
      const matchRegion = region === "All" || p.continent === region;
      return matchSearch && matchRegion;
    });

    if (sortBy === "price-asc") matches.sort((a, b) => a.packageOnlyPrice - b.packageOnlyPrice);
    else if (sortBy === "price-desc") matches.sort((a, b) => b.packageOnlyPrice - a.packageOnlyPrice);
    else if (sortBy === "alpha-az") {
      const getPackageName = (title) => title.replace(/^\d+D\d+N\s+/, "");
      matches.sort((a, b) => getPackageName(a.title).localeCompare(getPackageName(b.title)));
    }

    grid.innerHTML = matches.length ? matches.map(createCardHTML).join("") : `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
        <h3>No matches found!</h3>
        <p>Try searching for another destination.</p>
      </div>
    `;
  };

  search.addEventListener("input", (e) => { term = e.target.value.toLowerCase().trim(); render(); });
  filters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      filters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      region = e.target.dataset.filter;
      render();
    }
  });
  sort.addEventListener("change", (e) => { sortBy = e.target.value; render(); });

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  initCatalogueModule();
});
