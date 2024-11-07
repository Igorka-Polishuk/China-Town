let orderForm = document.getElementById('order-form');
let orderTable = document.getElementById('order-table');
let orders = [];

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let order = {
        dish: event.target['dish'].value,
        time: event.target['time'].value,
        adress: event.target['adress'].value,
        tel: event.target['tel'].value
    }

    event.target.reset();
    orders.push(order);

    drawOrder(order);
});

function drawOrder(order) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${order.dish}</td>
        <td>${order.time}</td>
        <td>${order.adress}</td>
        <td>${order.tel}</td>
    `;
    orderTable.appendChild(tr);
}

// function drawOrder2(order) {
//     let tr = document.createElement('tr');
//     let dish = document.createElement('td')
//     dish.innerHTML = order.dish;

//     let time = document.createElement('td')
//     time.innerHTML = order.time;

//     let adress = document.createElement('td')
//     adress.innerHTML = order.adress;

//     let tel = document.createElement('td')
//     tel.innerHTML = order.tel;

//     tr.appendChild(dish); tr.appendChild(time);
//     tr.appendChild(adress); tr.appendChild(tel);

//     orderTable.appendChild(tr);
// }