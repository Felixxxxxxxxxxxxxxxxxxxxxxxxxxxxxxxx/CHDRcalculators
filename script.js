// База данных калькуляторов для поиска
const calculatorsDatabase = [
    // ФИЗИКА (6 калькуляторов)
    {
        id: 'resistance-calculator',
        title: 'Расчет сопротивления проводника',
        description: 'Рассчитайте сопротивление по удельному сопротивлению, длине и площади сечения',
        category: 'Физика',
        keywords: ['сопротивление', 'проводник', 'ом', 'электричество', 'физика'],
        url: 'physics.html#resistance-calculator'
    },
    {
        id: 'newton-second-law',
        title: 'Второй закон Ньютона',
        description: 'Расчет равнодействующей силы через массу и ускорение тела',
        category: 'Физика',
        keywords: ['ньютон', 'сила', 'ускорение', 'масса', 'динамика', 'механика', 'егэ'],
        url: 'physics.html#newton-second-law'
    },
    {
        id: 'energy-conservation',
        title: 'Закон сохранения энергии',
        description: 'Полная механическая энергия системы в замкнутой системе',
        category: 'Физика',
        keywords: ['энергия', 'сохранение', 'потенциальная', 'кинетическая', 'механика', 'егэ'],
        url: 'physics.html#energy-conservation'
    },
    {
        id: 'coulombs-law',
        title: 'Закон Кулона',
        description: 'Сила взаимодействия двух точечных электрических зарядов',
        category: 'Физика',
        keywords: ['кулон', 'заряд', 'электричество', 'сила', 'взаимодействие', 'егэ'],
        url: 'physics.html#coulombs-law'
    },
    {
        id: 'photon-energy',
        title: 'Энергия фотона',
        description: 'Энергия кванта электромагнитного излучения',
        category: 'Физика',
        keywords: ['фотон', 'энергия', 'квантовая', 'планк', 'егэ'],
        url: 'physics.html#photon-energy'
    },
    {
        id: 'kinematics-calculator',
        title: 'Кинематика: движение тела',
        description: 'Расчет пути, скорости и ускорения',
        category: 'Физика',
        keywords: ['кинематика', 'движение', 'скорость', 'ускорение', 'путь'],
        url: 'physics.html#kinematics-calculator'
    },

    // МАТЕМАТИКА (7 калькуляторов)
    {
        id: 'unit-converter',
        title: 'Конвертер единиц измерения',
        description: 'Перевод между различными системами единиц: длина, масса, объем, температура',
        category: 'Математика',
        keywords: ['конвертер', 'единицы', 'перевод', 'длина', 'масса', 'объем', 'температура', 'системы си'],
        url: 'math.html#unit-converter'
    },
    {
        id: 'percentage-calculator',
        title: 'Калькулятор процентов и скидок',
        description: 'Расчет процентов, скидок, наценок и изменений в процентах',
        category: 'Математика',
        keywords: ['проценты', 'скидки', 'наценки', 'процентное изменение', 'расчет процентов'],
        url: 'math.html#percentage-calculator'
    },
    {
        id: 'statistics-basic',
        title: 'Основные статистические показатели',
        description: 'Расчет среднего значения, медианы, моды и стандартного отклонения',
        category: 'Математика',
        keywords: ['статистика', 'среднее', 'медиана', 'мода', 'стандартное отклонение', 'анализ данных'],
        url: 'math.html#statistics-basic'
    },
    {
        id: 'geometry-areas',
        title: 'Площади геометрических фигур',
        description: 'Расчет площадей треугольника, круга, прямоугольника и других фигур',
        category: 'Математика',
        keywords: ['площадь', 'геометрия', 'треугольник', 'круг', 'прямоугольник', 'фигуры'],
        url: 'math.html#geometry-areas'
    },
    {
        id: 'linear-regression',
        title: 'Линейная регрессия',
        description: 'Построение линии регрессии и прогнозирование значений',
        category: 'Математика',
        keywords: ['линейная регрессия', 'корреляция', 'прогнозирование', 'тренд', 'анализ данных'],
        url: 'math.html#linear-regression'
    },
    {
        id: 'loan-calculator',
        title: 'Калькулятор кредитов',
        description: 'Расчет ежемесячного платежа и переплаты по кредиту',
        category: 'Математика',
        keywords: ['кредит', 'ипотека', 'заем', 'финансы', 'проценты', 'платеж'],
        url: 'math.html#loan-calculator'
    },
    {
        id: 'bmi-calculator',
        title: 'Калькулятор ИМТ',
        description: 'Индекс массы тела - оценка соответствия роста и веса',
        category: 'Математика',
        keywords: ['имт', 'вес', 'рост', 'здоровье', 'диета', 'похудение'],
        url: 'math.html#bmi-calculator'
    },

    // ХИМИЯ (3 калькулятора)
    {
        id: 'solution-preparation',
        title: 'Приготовление растворов',
        description: 'Расчет молярности, нормальности и приготовление растворов заданной концентрации',
        category: 'Химия',
        keywords: ['растворы', 'молярность', 'нормальность', 'концентрация', 'химия', 'лабораторные'],
        url: 'math.html#solution-preparation'
    },
    {
        id: 'dilution-calculator',
        title: 'Разведения и концентрации',
        description: 'Расчет серийных разведений и конечных концентраций',
        category: 'Химия',
        keywords: ['разведения', 'концентрации', 'серийные разведения', 'биология', 'химия'],
        url: 'math.html#dilution-calculator'
    },
    {
        id: 'ph-calculator',
        title: 'pH и буферные растворы',
        description: 'Расчет pH растворов и приготовление буферных систем',
        category: 'Химия',
        keywords: ['ph', 'буферные растворы', 'кислотность', 'химия', 'биология'],
        url: 'math.html#ph-calculator'
    },

    // ЭКОНОМИКА (2 калькулятора)
    {
        id: 'compound-interest',
        title: 'Сложные проценты',
        description: 'Расчет сложных процентов по вкладам и кредитам',
        category: 'Экономика',
        keywords: ['сложные проценты', 'вклады', 'кредиты', 'инвестиции', 'финансы', 'экономика'],
        url: 'math.html#compound-interest'
    },
    {
        id: 'break-even-point',
        title: 'Точка безубыточности',
        description: 'Расчет точки безубыточности для бизнес-планов',
        category: 'Экономика',
        keywords: ['точка безубыточности', 'бизнес-план', 'экономика', 'финансы', 'стартап'],
        url: 'math.html#break-even-point'
    }
];
console.log('StudentHelp сайт загружен!');

// Плавная прокрутка для навигационных ссылок
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Обработчик для выбора материала проводника
    const materialSelect = document.getElementById('material');
    const customMaterialGroup = document.getElementById('custom-material-group');
    
    if (materialSelect && customMaterialGroup) {
        materialSelect.addEventListener('change', function() {
            if (this.value === 'custom') {
                customMaterialGroup.style.display = 'block';
            } else {
                customMaterialGroup.style.display = 'none';
            }
        });
    }

    // Инициализация поиска
    setupSearch();
});

// Функция поиска калькуляторов
function searchCalculators(query) {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    
    return calculatorsDatabase.filter(calculator => {
        return calculator.title.toLowerCase().includes(searchTerm) ||
               calculator.description.toLowerCase().includes(searchTerm) ||
               calculator.keywords.some(keyword => 
                   keyword.toLowerCase().includes(searchTerm)
               );
    });
}

// Обработчик поля поиска
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value;
        const results = searchCalculators(query);
        
        displaySearchResults(results, searchResults);
    });
    
    // Скрываем результаты при клике вне поиска
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// Функция отображения результатов поиска
function displaySearchResults(results, container) {
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div class="search-result-category">${result.category}</div>
            <div class="search-result-title">${result.title}</div>
        `;
        
        resultItem.addEventListener('click', function() {
            window.location.href = result.url;
        });
        
        container.appendChild(resultItem);
    });
    
    container.style.display = 'block';
}

// Функция для расчета сопротивления проводника
function calculateResistance() {
    try {
        // Получаем значения
        const materialValue = document.getElementById('material').value;
        const length = parseFloat(document.getElementById('length').value);
        const area = parseFloat(document.getElementById('area').value);
        
        // Валидация
        if (!length && length !== 0) throw "Введите длину проводника";
        if (!area && area !== 0) throw "Введите площадь сечения";
        if (length <= 0) throw "Длина должна быть положительной";
        if (area <= 0) throw "Площадь сечения должна быть положительной";
        
        // Определяем удельное сопротивление
        let resistivity;
        if (materialValue === 'custom') {
            const customResistivity = parseFloat(document.getElementById('custom-resistivity').value);
            if (!customResistivity && customResistivity !== 0) throw "Введите удельное сопротивление для выбранного материала";
            if (customResistivity <= 0) throw "Удельное сопротивление должно быть положительным";
            resistivity = customResistivity;
        } else {
            resistivity = parseFloat(materialValue);
        }
        
        // Расчет
        const resistance = resistivity * (length / area);
        
        // Показываем результат
        document.getElementById('result-value').textContent = resistance.toFixed(4);
        document.getElementById('resistance-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}

// Функция для Второго закона Ньютона
function calculateNewton() {
    try {
        const massInput = document.getElementById('mass-newton');
        const accelerationInput = document.getElementById('acceleration');
        const mass = parseFloat(massInput.value);
        const acceleration = parseFloat(accelerationInput.value);
        
        // Валидация
        if (!massInput.value.trim()) throw "Введите массу тела";
        if (!accelerationInput.value.trim()) throw "Введите ускорение";
        if (isNaN(mass)) throw "Масса должна быть числом";
        if (isNaN(acceleration)) throw "Ускорение должно быть числом";
        if (mass <= 0) throw "Масса должна быть положительной";
        if (acceleration <= 0) throw "Ускорение должно быть положительным";
        
        // Расчет
        const force = mass * acceleration;
        
        // Показываем результат
        document.getElementById('force-value').textContent = force.toFixed(2);
        document.getElementById('newton-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}

// Функция для Закона сохранения энергии
function calculateEnergy() {
    try {
        const kineticInput = document.getElementById('kinetic-energy');
        const potentialInput = document.getElementById('potential-energy');
        const kinetic = parseFloat(kineticInput.value);
        const potential = parseFloat(potentialInput.value);
        
        // Валидация
        if (!kineticInput.value.trim()) throw "Введите кинетическую энергию";
        if (!potentialInput.value.trim()) throw "Введите потенциальную энергию";
        if (isNaN(kinetic)) throw "Кинетическая энергия должна быть числом";
        if (isNaN(potential)) throw "Потенциальная энергия должна быть числом";
        if (kinetic < 0) throw "Кинетическая энергия не может быть отрицательной";
        if (potential < 0) throw "Потенциальная энергия не может быть отрицательной";
        
        // Расчет
        const total = kinetic + potential;
        
        // Показываем результат
        document.getElementById('total-energy').textContent = total.toFixed(2);
        document.getElementById('energy-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}

// Функция для Закона Кулона
function calculateCoulomb() {
    try {
        const charge1Input = document.getElementById('charge1');
        const charge2Input = document.getElementById('charge2');
        const distanceInput = document.getElementById('distance-coulomb');
        const q1 = parseFloat(charge1Input.value);
        const q2 = parseFloat(charge2Input.value);
        const r = parseFloat(distanceInput.value);
        
        // Валидация
        if (!charge1Input.value.trim()) throw "Введите заряд q₁";
        if (!charge2Input.value.trim()) throw "Введите заряд q₂";
        if (!distanceInput.value.trim()) throw "Введите расстояние между зарядами";
        if (isNaN(q1)) throw "Заряд q₁ должен быть числом";
        if (isNaN(q2)) throw "Заряд q₂ должен быть числом";
        if (isNaN(r)) throw "Расстояние должно быть числом";
        if (r <= 0) throw "Расстояние должно быть положительным";
        
        // Расчет
        const k = 9e9; // постоянная Кулона
        const force = k * Math.abs(q1 * q2) / (r * r);
        
        // Показываем результат
        document.getElementById('coulomb-force').textContent = force.toFixed(6);
        document.getElementById('coulomb-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}

// Функция для Энергии фотона
function calculatePhoton() {
    try {
        const frequencyInput = document.getElementById('frequency');
        const frequency = parseFloat(frequencyInput.value);
        
        // Валидация
        if (!frequencyInput.value.trim()) throw "Введите частоту излучения";
        if (isNaN(frequency)) throw "Частота должна быть числом";
        if (frequency <= 0) throw "Частота должна быть положительной";
        
        // Расчет
        const h = 6.626e-34; // постоянная Планка
        const energy = h * frequency;
        
        // Показываем результат
        document.getElementById('photon-energy-value').textContent = energy.toFixed(10);
        document.getElementById('photon-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}
// Калькулятор кредитов
function calculateLoan() {
    try {
        const amount = parseFloat(document.getElementById('loan-amount').value);
        const term = parseFloat(document.getElementById('loan-term').value);
        const rate = parseFloat(document.getElementById('interest-rate').value);
        
        if (!amount || !term || !rate) throw "Заполните все поля";
        if (amount <= 0 || term <= 0 || rate <= 0) throw "Значения должны быть положительными";
        
        const monthlyRate = rate / 100 / 12;
        const monthlyPayment = amount * monthlyRate * Math.pow(1 + monthlyRate, term) / 
                             (Math.pow(1 + monthlyRate, term) - 1);
        const totalPayment = monthlyPayment * term;
        const totalOverpayment = totalPayment - amount;
        
        document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
        document.getElementById('total-overpayment').textContent = totalOverpayment.toFixed(2);
        document.getElementById('loan-result').style.display = 'block';
        
    } catch (error) {
        alert("Ошибка: " + error);
    }
}

// Калькулятор ИМТ
function calculateBMI() {
    try {
        const height = parseFloat(document.getElementById('height').value) / 100;
        const weight = parseFloat(document.getElementById('weight').value);
        
        if (!height || !weight) throw "Заполните все поля";
        if (height <= 0 || weight <= 0) throw "Значения должны быть положительными";
        
        const bmi = weight / (height * height);
        let category = "";
        
        if (bmi < 18.5) category = "Недостаточный вес";
        else if (bmi < 25) category = "Нормальный вес";
        else if (bmi < 30) category = "Избыточный вес";
        else category = "Ожирение";
        
        document.getElementById('bmi-value').textContent = bmi.toFixed(1);
        document.getElementById('bmi-category').textContent = category;
        document.getElementById('bmi-result').style.display = 'block';
        
    } catch (error) {
        alert("Ошибка: " + error);
    }
}

// Калькулятор кинематики
function calculateKinematics() {
    try {
        const v0 = parseFloat(document.getElementById('initial-velocity').value);
        const a = parseFloat(document.getElementById('acceleration-kin').value);
        const t = parseFloat(document.getElementById('time-kin').value);
        
        if (!v0 && v0 !== 0 || !a || !t) throw "Заполните все поля";
        if (t <= 0) throw "Время должно быть положительным";
        
        const distance = v0 * t + (a * t * t) / 2;
        const finalVelocity = v0 + a * t;
        
        document.getElementById('distance-traveled').textContent = distance.toFixed(2);
        document.getElementById('final-velocity').textContent = finalVelocity.toFixed(2);
        document.getElementById('kinematics-result').style.display = 'block';
        
    } catch (error) {
        alert("Ошибка: " + error);
    }
}
// Калькулятор кредитов
function calculateLoan() {
    try {
        const amount = parseFloat(document.getElementById('loan-amount').value);
        const term = parseFloat(document.getElementById('loan-term').value);
        const rate = parseFloat(document.getElementById('interest-rate').value);
        
        if (!amount || !term || !rate) throw "Заполните все поля";
        if (amount <= 0 || term <= 0 || rate <= 0) throw "Значения должны быть положительными";
        
        const monthlyRate = rate / 100 / 12;
        const monthlyPayment = amount * monthlyRate * Math.pow(1 + monthlyRate, term) / 
                             (Math.pow(1 + monthlyRate, term) - 1);
        const totalPayment = monthlyPayment * term;
        const totalOverpayment = totalPayment - amount;
        
        document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
        document.getElementById('total-overpayment').textContent = totalOverpayment.toFixed(2);
        document.getElementById('loan-result').style.display = 'block';
        
    } catch (error) {
        alert("Ошибка: " + error);
    }
}

// Калькулятор ИМТ
function calculateBMI() {
    try {
        const height = parseFloat(document.getElementById('height').value) / 100;
        const weight = parseFloat(document.getElementById('weight').value);
        
        if (!height || !weight) throw "Заполните все поля";
        if (height <= 0 || weight <= 0) throw "Значения должны быть положительными";
        
        const bmi = weight / (height * height);
        let category = "";
        
        if (bmi < 18.5) category = "Недостаточный вес";
        else if (bmi < 25) category = "Нормальный вес";
        else if (bmi < 30) category = "Избыточный вес";
        else category = "Ожирение";
        
        document.getElementById('bmi-value').textContent = bmi.toFixed(1);
        document.getElementById('bmi-category').textContent = category;
        document.getElementById('bmi-result').style.display = 'block';
        
    } catch (error) {
        alert("Ошибка: " + error);
    }
}

// Калькулятор кинематики
function calculateKinematics() {
    try {
        const v0 = parseFloat(document.getElementById('initial-velocity').value);
        const a = parseFloat(document.getElementById('acceleration-kin').value);
        const t = parseFloat(document.getElementById('time-kin').value);
        
        if (!v0 && v0 !== 0 || !a || !t) throw "Заполните все поля";
        if (t <= 0) throw "Время должно быть положительным";
        
        const distance = v0 * t + (a * t * t) / 2;
        const finalVelocity = v0 + a * t;
        
        document.getElementById('distance-traveled').textContent = distance.toFixed(2);
        document.getElementById('final-velocity').textContent = finalVelocity.toFixed(2);
        document.getElementById('kinematics-result').style.display = 'block';
        
    } catch (error) {
        alert("Ошибка: " + error);
    }
}
// Функции для математических калькуляторов

// Конвертер единиц измерения
const unitConversions = {
    length: {
        meters: 1,
        centimeters: 100,
        millimeters: 1000,
        kilometers: 0.001,
        inches: 39.3701,
        feet: 3.28084,
        yards: 1.09361,
        miles: 0.000621371
    },
    mass: {
        kilograms: 1,
        grams: 1000,
        milligrams: 1000000,
        pounds: 2.20462,
        ounces: 35.274
    },
    volume: {
        liters: 1,
        milliliters: 1000,
        cubic_meters: 0.001,
        gallons: 0.264172,
        pints: 2.11338,
        cups: 4.22675
    },
    temperature: {
        celsius: 'celsius',
        fahrenheit: 'fahrenheit',
        kelvin: 'kelvin'
    }
};

function updateUnitOptions() {
    const category = document.getElementById('converter-category').value;
    const fromSelect = document.getElementById('converter-from');
    const toSelect = document.getElementById('converter-to');
    
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    
    Object.keys(unitConversions[category]).forEach(unit => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        
        option1.value = unit;
        option1.textContent = getUnitName(unit);
        option2.value = unit;
        option2.textContent = getUnitName(unit);
        
        fromSelect.appendChild(option1);
        toSelect.appendChild(option2);
    });
    
    // Устанавливаем разумные значения по умолчанию
    if (category === 'length') {
        fromSelect.value = 'meters';
        toSelect.value = 'centimeters';
    } else if (category === 'mass') {
        fromSelect.value = 'kilograms';
        toSelect.value = 'grams';
    } else if (category === 'volume') {
        fromSelect.value = 'liters';
        toSelect.value = 'milliliters';
    } else {
        fromSelect.value = 'celsius';
        toSelect.value = 'fahrenheit';
    }
}

function getUnitName(unit) {
    const names = {
        meters: 'Метры (м)',
        centimeters: 'Сантиметры (см)',
        millimeters: 'Миллиметры (мм)',
        kilometers: 'Километры (км)',
        inches: 'Дюймы (in)',
        feet: 'Футы (ft)',
        yards: 'Ярды (yd)',
        miles: 'Мили (mi)',
        kilograms: 'Килограммы (кг)',
        grams: 'Граммы (г)',
        milligrams: 'Миллиграммы (мг)',
        pounds: 'Фунты (lb)',
        ounces: 'Унции (oz)',
        liters: 'Литры (л)',
        milliliters: 'Миллилитры (мл)',
        cubic_meters: 'Кубические метры (м³)',
        gallons: 'Галлоны (gal)',
        pints: 'Пинты (pt)',
        cups: 'Чашки (cups)',
        celsius: 'Цельсий (°C)',
        fahrenheit: 'Фаренгейт (°F)',
        kelvin: 'Кельвин (K)'
    };
    return names[unit] || unit;
}

function convertUnits() {
    try {
        const category = document.getElementById('converter-category').value;
        const value = parseFloat(document.getElementById('converter-value').value);
        const fromUnit = document.getElementById('converter-from').value;
        const toUnit = document.getElementById('converter-to').value;
        
        if (!value && value !== 0) throw "Введите значение для конвертации";
        if (isNaN(value)) throw "Значение должно быть числом";
        
        let result;
        
        if (category === 'temperature') {
            result = convertTemperature(value, fromUnit, toUnit);
        } else {
            // Конвертация через базовую единицу
            const baseValue = value / unitConversions[category][fromUnit];
            result = baseValue * unitConversions[category][toUnit];
        }
        
        document.getElementById('converter-original').textContent = 
            `${value} ${getUnitName(fromUnit)}`;
        document.getElementById('converter-converted').textContent = 
            `${result.toFixed(4)} ${getUnitName(toUnit)}`;
        document.getElementById('converter-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    
    // Конвертация через Цельсий
    let celsius;
    
    if (fromUnit === 'celsius') {
        celsius = value;
    } else if (fromUnit === 'fahrenheit') {
        celsius = (value - 32) * 5/9;
    } else if (fromUnit === 'kelvin') {
        celsius = value - 273.15;
    }
    
    if (toUnit === 'celsius') {
        return celsius;
    } else if (toUnit === 'fahrenheit') {
        return celsius * 9/5 + 32;
    } else if (toUnit === 'kelvin') {
        return celsius + 273.15;
    }
}

// Калькулятор процентов
function updatePercentageFields() {
    const type = document.getElementById('percentage-type').value;
    const newGroup = document.getElementById('percentage-new-group');
    const valueLabel = document.getElementById('percentage-value-group').querySelector('label');
    
    if (type === 'percentage-change') {
        newGroup.style.display = 'block';
        valueLabel.textContent = 'Новое число:';
    } else {
        newGroup.style.display = 'none';
        valueLabel.textContent = 'Процент:';
    }
}

function calculatePercentage() {
    try {
        const type = document.getElementById('percentage-type').value;
        const base = parseFloat(document.getElementById('percentage-base').value);
        const value = parseFloat(document.getElementById('percentage-value').value);
        
        if (!base && base !== 0) throw "Введите исходное число";
        if (isNaN(base)) throw "Исходное число должно быть числом";
        
        let result, resultText;
        
        switch (type) {
            case 'percent-of':
                if (!value && value !== 0) throw "Введите процент";
                if (isNaN(value)) throw "Процент должен быть числом";
                result = (base * value) / 100;
                resultText = `${value}% от ${base} = ${result.toFixed(2)}`;
                break;
                
            case 'percentage-change':
                const newValue = parseFloat(document.getElementById('percentage-new').value);
                if (!newValue && newValue !== 0) throw "Введите новое число";
                if (isNaN(newValue)) throw "Новое число должно быть числом";
                result = ((newValue - base) / base) * 100;
                resultText = `Изменение от ${base} до ${newValue} = ${result.toFixed(2)}%`;
                break;
                
            case 'discount':
                if (!value && value !== 0) throw "Введите процент скидки";
                if (isNaN(value)) throw "Процент скидки должен быть числом";
                result = base - (base * value / 100);
                resultText = `Цена со скидкой ${value}%: ${result.toFixed(2)} (экономия ${(base * value / 100).toFixed(2)})`;
                break;
                
            case 'markup':
                if (!value && value !== 0) throw "Введите процент наценки";
                if (isNaN(value)) throw "Процент наценки должен быть числом";
                result = base + (base * value / 100);
                resultText = `Цена с наценкой ${value}%: ${result.toFixed(2)}`;
                break;
        }
        
        document.getElementById('percentage-result-text').textContent = resultText;
        document.getElementById('percentage-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}

// Статистические расчеты
function calculateStatistics() {
    try {
        const dataInput = document.getElementById('statistics-data').value;
        if (!dataInput.trim()) throw "Введите данные для анализа";
        
        const numbers = dataInput.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
        
        if (numbers.length === 0) throw "Введите корректные числа";
        if (numbers.length < 2) throw "Для анализа нужно минимум 2 числа";
        
        const mean = numbers.reduce((a, b) => a + b) / numbers.length;
        const sorted = [...numbers].sort((a, b) => a - b);
        const median = sorted.length % 2 === 0 
            ? (sorted[sorted.length/2 - 1] + sorted[sorted.length/2]) / 2
            : sorted[Math.floor(sorted.length/2)];
        
        // Мода
        const frequency = {};
        numbers.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
        const maxFreq = Math.max(...Object.values(frequency));
        const mode = Object.keys(frequency).filter(num => frequency[num] === maxFreq).map(Number);
        
        // Стандартное отклонение
        const variance = numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / numbers.length;
        const stdDev = Math.sqrt(variance);
        
        document.getElementById('stat-mean').textContent = mean.toFixed(2);
        document.getElementById('stat-median').textContent = median.toFixed(2);
        document.getElementById('stat-mode').textContent = mode.join(', ');
        document.getElementById('stat-stddev').textContent = stdDev.toFixed(2);
        document.getElementById('statistics-result').style.display = 'block';
        
    } catch (error) {
        alert("Некорректные данные: " + error);
    }
}


// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('converter-category')) {
        updateUnitOptions();
        updatePercentageFields();
    }
});