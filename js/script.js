let bagItems;
onLoad();
function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItem');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(items => {
    innerHtml += `
    <div class="item-container">
      <img src="${items.image}" alt="item image" class="item-image">
      <div class="rating">${items.rating.stars}  🌟 | ${items.rating.count}</div>
      <div class="company-name">${items.company}</div>
      <div class="item-name">${items.item_name}</div>
      <div class="price">
          <span class="current-price">${items.current_price}</span>
          <span class="original-price">${items.original_price}</span>
          <span class="discount-price">(${items.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick = "addToBag(${items.id});">Add to bag</button>
    </div>
    `
  });
  itemsContainerElement.innerHTML = innerHtml;
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('baGItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}