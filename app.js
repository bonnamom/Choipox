let app = {
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    house: [],

    init: function () {
        let button = document.querySelector(".submit")
        button.addEventListener("click", app.handleform)

    },

    nameCheck: function () {
        let name = document.querySelector(".name");
        name = name.value.toUpperCase();
        console.log(name);

        if (!isNaN(name) == true) {
            let speech = document.querySelector(".speech");
            speech.textContent = "Ça ne fonctionne qu'avec un nom, pardi !";
        }
        else if (name.length > 8) {
            app.house = app.houses[3];
            app.showHouse();
        }
        else if (name.startsWith('L') || name.endsWith('X') == true) {
            app.house = app.houses[2];
            app.showHouse();
        }
        else if (name.length % 5 == 0 || name.length % 3 == 0) {
            app.house = app.houses[0];
            app.showHouse();
        } else {
            app.house = app.houses[1];
            app.showHouse();
        }
        console.log(app.house);
    },

    showHouse: function () {
        let speech = document.querySelector(".speech");
        speech.textContent = "";
        let img = document.createElement('img');
        img.className = 'img';
        img.src = './images/' + app.house + '.png';
        speech.append(img);
    },

    handleform: function (event) {
        event.preventDefault();
        app.nameCheck();
    },
}

document.addEventListener('DOMContentLoaded', app.init);
