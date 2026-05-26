const cards = document.querySelectorAll(".food-card");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortPrice");

function filterCategory(category){
    cards.forEach(card=>{
        if(category==="all" || card.dataset.category===category){
            card.style.display="block";
        } else {
            card.style.display="none";
        }
    });
}

searchInput.addEventListener("keyup", ()=>{
    let value = searchInput.value.toLowerCase();
    cards.forEach(card=>{
        let name = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});

sortSelect.addEventListener("change", ()=>{
    let sorted = Array.from(cards).sort((a,b)=>{
        return sortSelect.value==="low"
        ? a.dataset.price - b.dataset.price
        : b.dataset.price - a.dataset.price;
    });

    const container = document.getElementById("foodContainer");
    container.innerHTML="";
    sorted.forEach(card=>container.appendChild(card));
});