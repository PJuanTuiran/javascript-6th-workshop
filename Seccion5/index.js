(async () => {
    try {
        const theData = await loadFile();
        const theReservations = [];
        let id = 1;

        while (true) {
            console.log(theData);
            console.log(theReservations);
            let option = getOption();

            if (option == 5) {
                break;
            }

            if (option == 1) {
                id += makeReservation(theData, theReservations, id);
            }

            if (option == 2) {
                getReservations(theData, theReservations);
            }

            if (option == 3) {
                editReservation(theReservations, theData);
            }

            if (option == 4) {
                deleteReservation(theReservations, theData);
            }
        }
    } catch (error) {
        alert(error);
    }
})()




async function loadFile() {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("Couldn't find the file in the specified URL.");
        }
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(`Something unexpected ocurred during the file retrieval -${error.message}-`);
    }
}

function callPrompt(msg, callback) {
    while (true) {
        let val = prompt(msg);

        if (callback(val)) {
            return val
        } else {
            alert("The inserted value isn't valid.")
        }
    }
}

function getOption() {
    let opt = callPrompt("Insert the number of the option you want to do:\n\n" +
        "1. Make a Reservation\n" +
        "2. Visualize Reservations\n" +
        "3. Edit a Reservation\n" +
        "4. Cancel a Reservation\n", (value) => 1 <= value && value <= 5);

    return opt;
}

function makeReservation(data, reservations, i) {
    let numPeople = callPrompt("Insert the number of people that will use the room (Max. 6):", (value) => 1 <= value && value <= 6);
    let filteredRooms = data.rooms.
        filter(({ roomTypeId, availability }) => data.roomTypes.find(({ id }) => id == roomTypeId).capacity >= numPeople && availability == true);

    let resNum = callPrompt(`ROOMS AVAILABLE FOR RESERVATION\n\n${filteredRooms.
        map((value) => `Room Number: ${value.number}\nType: ${data.roomTypes.find(({ id }) => id == value.roomTypeId).name}\nPrice/Night: ${value.priceNight}`).join('\n\n')}
                    \nInsert the number of the room you want to reserve:`, (value) => filteredRooms.some(({ number }) => number == value));

    let customer = prompt("Insert your name for the reservation:").toUpperCase();

    let regexDate = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    let begDate = callPrompt("Insert the beginning date of the reservation in the format 'DD/MM/YYYY':", (value) => regexDate.test(value));
    let endDate = callPrompt("Insert the end date of the reservation in the format 'DD/MM/YYYY':", (value) => regexDate.test(value));
    let typeId = data.roomTypes.find(({ id }) => id == data.rooms.find(({ number }) => number == resNum).roomTypeId).id;

    reservations.push({
        id: i,
        typeId,
        customer,
        room: resNum,
        beginningDate: begDate,
        endDate
    })
    data.rooms.find(({ number }) => number == resNum).availability = false;
    let reservedRoom = data.rooms.find(({ number }) => number == resNum);
    alert(`FOUND ROOM\n\nRoom Number: ${reservedRoom.number}\nType: ${data.roomTypes.find(({ id }) => id == reservedRoom.roomTypeId).name}\n` +
        `Price/Night: ${reservedRoom.priceNight}\n\nThe room has been reserved succesfully!`);

    return i++;
}

function getReservations(data, reservations) {
    let name = callPrompt("Insert the name of the customer that made the reservation:", (value) => Boolean(value)).toUpperCase();

    let custReservations = reservations.filter(({ customer }) => customer == name)

    if (custReservations.length == 0) {
        alert("There's no reservation in our database with the inserted customer name!");
    } else {
        alert(foundReservations(name, custReservations, data));
    }
}

function foundReservations(search, thisArray, bigArray) {
    return `FOUND RESERVATIONS OF ${search}\n\n${thisArray.map((value) => `Reservation ID: ${value.id}\n` +
        `Room Number: ${value.room}\nRoom Type: ${bigArray.roomTypes.find(({ id }) => id == value.typeId).name}\n` +
        `Beginning Date: ${value.beginningDate}\nEnd Date: ${value.endDate}`).join('\n\n')}`;
}

function editReservation(reservations, data) {
    let name = callPrompt("Insert the name of the customer that made the reservation:", (value) => Boolean(value)).toUpperCase();
    if (reservations.find(({ customer }) => customer == name)) {
        let custReservations = reservations.filter(({ customer }) => customer == name);
        let pickedRes = callPrompt(`${foundReservations(name, custReservations, data)}\n\nInsert the reservation's ID you want to Edit`, (value) =>
            reservations.find(({ id }) => id == value)
        );

        let regexDate = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
        let editRes = reservations.find(({ id }) => id == pickedRes);

        editRes.beginningDate = callPrompt(`Insert the new Beginning Date of the reservation (Current Date: ${editRes.beginningDate}):`,
            (value) => regexDate.test(value));

        editRes.endDate = callPrompt(`Insert the new End Date of the reservation (Current Date: ${editRes.endDate}):`,
            (value) => regexDate.test(value));

        alert("The reservations has been updated correctly!")
    } else {
        alert("There's no reservations made with this name!")
    }
}

function deleteReservation(reservations, data) {
    let name = callPrompt("Insert the name of the customer that made the reservation:", (value) => Boolean(value)).toUpperCase();
    if (reservations.find(({ customer }) => customer == name)) {
        let custReservations = reservations.filter(({ customer }) => customer == name);
        let pickedRes = callPrompt(`${foundReservations(name, custReservations, data)}\n\nInsert the reservation's ID you want to Edit`, (value) =>
            reservations.find(({ id }) => id == value)
        );
        let editRes = reservations.find(({ id }) => id == pickedRes);

        data.rooms[data.rooms.indexOf(data.rooms.find(({ number }) => editRes.room == number))].availability = true;
        reservations.splice(reservations.indexOf(reservations.find(({ id }) => id == pickedRes)), 1);
        alert("The reservation has been successfully deleted!");
    } else {
        alert("There's no reservations made with this name!");
    }
}