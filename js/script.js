// Mengambil referensi ke elemen-elemen yang dibutuhkan
const celciusInput = document.getElementById('celcius-input');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const calculateOutput = document.getElementById('calculate-output');
const convertButton = document.getElementById('convert-button');
const resetButton = document.getElementById('reset-button');
const reverseButton = document.getElementById('reverse-button');

// Fungsi konversi Celcius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

// Fungsi konversi Fahrenheit ke Celcius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// Menambahkan event listener untuk tombol "Konversi"
convertButton.addEventListener('click', function() {
    if (celciusInput.value.trim() !== '') {
        // Ambil nilai dari textarea untuk Celcius
        let celciusValue = parseFloat(celciusInput.value.trim());
        if (isNaN(celciusValue)) {
            alert("Silakan masukkan nilai numerik yang valid untuk Celcius.");
            return;
        }
        // Lakukan konversi ke Fahrenheit
        let fahrenheitValue = celsiusToFahrenheit(celciusValue);
        // Tampilkan hasil konversi di textarea Fahrenheit
        fahrenheitOutput.value = fahrenheitValue.toFixed(2); // Menampilkan dua desimal
        // Tampilkan rumus yang digunakan di kolom "Conversion Calculate"
        calculateOutput.value = `${celciusValue.toFixed(2)} °C = ${fahrenheitValue.toFixed(2)} °F\nRumus: (°C * 1.8) + 32`;
    } else if (fahrenheitOutput.value.trim() !== '') {
        // Ambil nilai dari textarea untuk Fahrenheit
        let fahrenheitValue = parseFloat(fahrenheitOutput.value.trim());
        if (isNaN(fahrenheitValue)) {
            alert("Silakan masukkan nilai numerik yang valid untuk Fahrenheit.");
            return;
        }
        // Lakukan konversi ke Celcius
        let celciusValue = fahrenheitToCelsius(fahrenheitValue);
        // Tampilkan hasil konversi di textarea Celcius
        celciusInput.value = celciusValue.toFixed(2); // Menampilkan dua desimal
        // Tampilkan rumus yang digunakan di kolom "Conversion Calculate"
        calculateOutput.value = `${fahrenheitValue.toFixed(2)} °F = ${celciusValue.toFixed(2)} °C\nRumus: (°F - 32) / 1.8`;
    } else {
        alert("Silakan masukkan nilai di salah satu kolom.");
    }
});

// Menambahkan event listener untuk tombol "Reset"
resetButton.addEventListener('click', function() {
    // Mengosongkan textarea
    celciusInput.value = '';
    fahrenheitOutput.value = '';
    calculateOutput.value = '';
});

// Menambahkan event listener untuk tombol "Reverse"
reverseButton.addEventListener('click', function() {
    if (fahrenheitOutput.value.trim() !== '') {
        // Ambil nilai dari textarea untuk Fahrenheit
        let fahrenheitValue = parseFloat(fahrenheitOutput.value.trim());
        if (isNaN(fahrenheitValue)) {
            alert("Silakan masukkan nilai numerik yang valid untuk Fahrenheit.");
            return;
        }
        // Lakukan konversi ke Celcius
        let celciusValue = fahrenheitToCelsius(fahrenheitValue);
        // Tampilkan hasil konversi di textarea Celcius
        celciusInput.value = celciusValue.toFixed(2); // Menampilkan dua desimal
        // Tampilkan rumus yang digunakan di kolom "Conversion Calculate"
        calculateOutput.value = `${fahrenheitValue.toFixed(2)} °F = ${celciusValue.toFixed(2)} °C\nRumus: (°F - 32) / 1.8`;
    } else if (celciusInput.value.trim() !== '') {
        // Ambil nilai dari textarea untuk Celcius
        let celciusValue = parseFloat(celciusInput.value.trim());
        if (isNaN(celciusValue)) {
            alert("Silakan masukkan nilai numerik yang valid untuk Celcius.");
            return;
        }
        // Lakukan konversi ke Fahrenheit
        let fahrenheitValue = celsiusToFahrenheit(celciusValue);
        // Tampilkan hasil konversi di textarea Fahrenheit
        fahrenheitOutput.value = fahrenheitValue.toFixed(2); // Menampilkan dua desimal
        // Tampilkan rumus yang digunakan di kolom "Conversion Calculate"
        calculateOutput.value = `${celciusValue.toFixed(2)} °C = ${fahrenheitValue.toFixed(2)} °F\nRumus: (°C * 1.8) + 32`;
    } else {
        alert("Silakan masukkan nilai di salah satu kolom.");
    }
});
