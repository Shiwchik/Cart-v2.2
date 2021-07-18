// const container = document.querySelector('.items');

// function renderItem(itemsArray, itemWrapper) {
//     let contentStr = '';
//     itemsArray.forEach(function(it) {
//         contentStr += `
//         <div class="item">
//             <img class="picture" src="img/${it.image.url}" alt="${it.name}">
//             <img class="removeProduct" src="img/times-circle-regular.svg" alt="remove">
//         <div class="infoProd">
//             <p class="nameOfProduct">${it.name}</p>
//             <p class="price">Цена: <span class="priceSpan">${it.price}</span> грн</p>
//         </div>
//         <div class="buttons">
//             <button class="minus">-</button>
//             <input class="pcs" type="text" value="1">
//             <button class="plus">+</button>
//             <p class="cost">Стоимость <span class="costSpan">20000</span> грн</p>
//         </div>
//     </div>`;
//     });
//     itemWrapper.innerHTML = contentStr;
// };
// renderItem(items, container);