let rooms = [
    {
        "number": 101,
        "roomTypeId": 1,
        "priceNight": 50,
        "availability": true
    },
    {
        "number": 102,
        "roomTypeId": 2,
        "priceNight": 80,
        "availability": true
    }
]

console.log(rooms.some(({ number }) => number == 102))