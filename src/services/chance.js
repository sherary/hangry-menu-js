const Chance = require('chance');

const generateUsers = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        data.push({
            name: chance.name(),
            email: chance.email(),
            phone: `628${chance.string({
                numeric: true,
                length: 10,
            })}`,
            password: chance.string({
                length: 10,
                symbols: true,
                alpha: true,
                numeric: true,
                casing: 'mixed',
            }),
            role: chance.integer({ min: 1, max: 2 }),
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
}

const generateOutlets = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        data.push({
            owner_id: chance.integer({ min: 1, max: 1000 }),
            name: chance.sentence({ words: 2}),
            type: chance.integer({ min: 1, max: 4 }),
            phone: `628${chance.string({
                numeric: true,
                length: 10,
            })}`,
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
}

const generateCustomerLocations = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        data.push({
            user_id: chance.integer({ min: 1, max: 1000 }),
            tag: chance.string({ words: 2 }),
            street_address: chance.address(),
            additional_info: chance.string({ words: 3}),
            postal_code: chance.string({ length: 6, pool: '0123456789' }),
            city: chance.city(),
            province: chance.province(),
            country: chance.country(),
            lat: parseFloat(chance.latitude()),
            // long: parseFloat(chance.longitude()),
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
}

const generateOutletLocations = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        data.push({
            outlet_id: chance.integer({ min: 1, max: 1000 }),
            tag: chance.string({ words: 2 }),
            street_address: chance.address(),
            additional_info: chance.string({ words: 3}),
            postal_code: chance.string({ length: 6, pool: '0123456789' }),
            city: chance.city(),
            province: chance.province(),
            country: chance.country(),
            lat: chance.latitude(),
            long: chance.longitude(),
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
}

const generateMenus = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        const randomSentence = chance.sentence();
        const description = randomSentence.slice(0, 100);

        data.push({
            outlet_id: chance.integer({ min: 1, max: 1000 }),
            name: chance.word(),
            description: description,
            price: chance.floating({ min: 1000.00, max: 100000, fixed: 2 }),
            availability: chance.integer({ min: 10, max: 100 }),
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
}

const generateCarts = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        data.push({
            customer_id: chance.integer({ min: 1, max: 1000 }),
            dish_id: chance.integer({ min: 1, max: 1000 }),
            qty: chance.integer({ min: 1, max: 100 }),
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
} 

const generateTransactions = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        data.push({
            type: chance.integer({ min: 1, max: 2}),
            customer_id: chance.integer({ min: 1, max: 1000 }),
            outlet_id: chance.integer({ min: 1, max: 1000 }),
            status: chance.integer({ min: 1, max: 6}),
            discount_ticket_id: chance.integer({ min: 5, max: 10}),
            discount_applied: chance.floating({ min: 10000.00, max: 20000.00, fixed: 2}),
            total_amount: chance.floating({ min: 100000.00, max: 200000.00, fixed: 2}),
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
}

const generateOrderItems = (total) => {
    let data = [];
    const chance = new Chance();

    for (let i = 0; i <= total; i++) {
        data.push({
            order_id: chance.integer({ min: 1, max: 1000 }),
            menu_item_id: chance.integer({ min: 1, max: 1000 }),
            qty: chance.integer({ min: 1, max: 10}),
            item_discount_ticket_id: chance.integer({ min: 11, max: 20}),
            applied_item_discount: chance.floating({ min: 0.00, max: 20000.00, fixed: 2}),
            subtotal: chance.floating({ min: 50000.00, max: 100000.00, fixed: 2}),
            added_at: new Date(),
            updated_at: new Date(),
        });
    }

    return data;
}

const generateConfigurations = (total) => {
    let data = [];
    const chance = new Chance();
    const platformData = {
        key: 'service_charge',
        value: 'Service Charge',
        description: "Derived 15% for service",
        total: 0.15,
        start_date: new Date(),
        end_date: new Date(),
    }
    const dates = {
        added_at: new Date(),
        updated_at: new Date(),
    }

    for (let i = 0; i <= 5; i++) {
        data.push({
            ...platformData,
            ...dates,
        })
    }

    for (let i = 0; i <= total; i++) {
        const variableName = chance.sentence({ words: 2 });
        const snakeCaseVariableName = variableName.toLowerCase().replace(/\s+/g, '_');

        data.push({
            key: snakeCaseVariableName,
            value: variableName,
            description: chance.sentence(),
            total: chance.floating({ min: 0.15, max: 0.99, fixed: 2}),
            start_date: new Date(),
            end_date: new Date(),
            ...dates,
        });
    }

    return data;
}

module.exports = {
    generateUsers, generateOutlets, generateCustomerLocations, generateOutletLocations,
    generateMenus, generateCarts, generateTransactions, generateOrderItems, generateConfigurations
}