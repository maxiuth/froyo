function froyoFlavors(froyos) {
  const froyosArray = froyos.split(",");

  let froyoOrder = {};

  for (let i = 0; i < froyosArray.length; i++) {
    // Get each flavor of the original order
    let flavor = froyosArray[i];

    // Check to see if the flavor is already in the order or not
    // If not, start assigning the first item for that flavor (=1)
    // If the flavor is already in the order, add 1 more to the number of items
    if (!(flavor in froyoOrder)) {
      froyoOrder[flavor] = 1;
    } else {
      froyoOrder[flavor]++;
    }
  }

  return froyoOrder;
}
