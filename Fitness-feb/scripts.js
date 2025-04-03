document.addEventListener('DOMContentLoaded', function() {
    const trainers = document.querySelectorAll('.trainer');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');
    const trainerName = document.getElementById('trainer-name');
    const trainerDescription = document.getElementById('trainer-description');
    const trainerPrice = document.getElementById('trainer-price');

    const trainerData = {
        trainer1: {
            name: 'Тренер 1',
            description: 'Описание тренера 1.',
            price: 'Стоимость тренировки: 1000 руб.'
        },
        trainer2: {
            name: 'Тренер 2',
            description: 'Описание тренера 2.',
            price: 'Стоимость тренировки: 1200 руб.'
        },
        trainer3: {
            name: 'Тренер 3',
            description: 'Описание тренера 3.',
            price: 'Стоимость тренировки: 1500 руб.'
        },
        trainer4: {
            name: 'Тренер 4',
            description: 'Описание тренера 4.',
            price: 'Стоимость тренировки: 1100 руб.'
        },
        trainer5: {
            name: 'Тренер 5',
            description: 'Описание тренера 5.',
            price: 'Стоимость тренировки: 1300 руб.'
        },
        trainer6: {
            name: 'Тренер 6',
            description: 'Описание тренера 6.',
            price: 'Стоимость тренировки: 1400 руб.'
        },
        trainer7: {
            name: 'Тренер 7',
            description: 'Описание тренера 7.',
            price: 'Стоимость тренировки: 1600 руб.'
        },
        trainer8: {
            name: 'Тренера 8',
            description: 'Описание тренера 8.',
            price: 'Стоимость тренировки: 1700 руб.'
        },
        trainer9: {
            name: 'Тренер 9',
            description: 'Описание тренера 9.',
            price: 'Стоимость тренировки: 1800 руб.'
        },
        trainer10: {
            name: 'Тренер 10',
            description: 'Описание тренера 10.',
            price: 'Стоимость тренировки: 1900 руб.'
        },
        trainer11: {
            name: 'Тренер 11',
            description: 'Описание тренера 11.',
            price: 'Стоимость тренировки: 2000 руб.'
        },
        trainer12: {
            name: 'Тренер 12',
            description: 'Описание тренера 12.',
            price: 'Стоимость тренировки: 2100 руб.'
        }
    };

    trainers.forEach(trainer => {
        trainer.addEventListener('click', function() {
            const trainerId = this.id;
            trainerName.textContent = trainerData[trainerId].name;
            trainerDescription.textContent = trainerData[trainerId].description;
            trainerPrice.textContent = trainerData[trainerId].price;
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
