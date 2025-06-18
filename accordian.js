const menuItems = [
    {
      category: "Beverages",
      items: [
        { name: "Kulhad Chai", price: 50 },
        { name: "Hot Milk", price: 50 },
        { name: "Shikanji", price: 60 }
      ]
    },
    {
      category: "Sweets",
      items: [
        { name: "Gulab Jamun", price: 15 },
        { name: "Rasgulla", price: 15 },
        { name: "Kaju Katli", price: 30 }
      ]
    },
    {
      category: "Snacks",
      items: [
        { name: "Samosa", price: 20 },
        { name: "Kachori", price: 25 },
        { name: "Paneer Pakora", price: 50 }
      ]
    }
  ];
  
  const container = document.getElementById("menu-container");
  
  menuItems.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "menu-section";
  
    const heading = document.createElement("h2");
    heading.textContent = section.category;
    heading.classList.add("accordion-header");
  
    const itemList = document.createElement("div");
    itemList.className = "menu-items";
    itemList.style.display = "none";
  
    section.items.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";
      itemDiv.innerHTML = `<div>${item.name}</div><span>₹${item.price}</span>`;
      itemList.appendChild(itemDiv);
    });
  
    heading.addEventListener("click", () => {
      itemList.style.display = itemList.style.display === "none" ? "block" : "none";
    });
  
    sectionDiv.appendChild(heading);
    sectionDiv.appendChild(itemList);
    container.appendChild(sectionDiv);
  });
  