let saveFile = () => {
  // Get the data from each element on the form.
  const date = document.getElementById('txtDate');
  const brand = document.getElementById('txtBrand');
  const model = document.getElementById('txtModel');
  const licensePlate = document.getElementById('licensePlate');
  const priceParts = document.getElementById('priceParts');
  const priceWork = document.getElementById('priceWork');
  const description = document.getElementById('description');
  // document.querySelector('total').innerHTML = priceParts.value + priceWork.value

  // This variable stores all the data.
  let data =
    '\r Дата: ' +
    date.value +
    ' \r\n ' +
    'Марка: ' +
    brand.value +
    ' \r\n ' +
    'Модел: ' +
    model.value +
    ' \r\n ' +
    'Рег. номер: ' +
    licensePlate.value +
    ' \r\n ' +
    'Описание: ' +
    description.value +
    ' \r\n ' +
    'Цена резервни части: ' +
    priceParts.value + ' лв' +
    ' \r\n ' +
    'Цена за труд: ' +
    priceWork.value + ' лв'+
    ' \r\n ' +
    'Обща цена: ' +
    (Number(priceParts.value) +
    Number(priceWork.value)) + ' лв';

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = `${brand.value}-${model.value}.txt`; // The file to save the data.

  let newLink = document.createElement('a');
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = 'none';
    document.body.appendChild(newLink);
  }

  newLink.click();
};

// inputElement.addEventListener('click', () => {
//   calendarIcon.click();
// }
