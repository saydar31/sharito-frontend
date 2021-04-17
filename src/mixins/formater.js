export default {
    methods: {
        formatPhone(str){
            let cleaned = ('' + str).replace(/\D/g, '');

            let match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{4})$/);

            if (match) {
                let intlCode = (match[1] ? '+7 ' : '');
                let last = match[4];
                last.substr(0, 2);
                return [intlCode, ' ', match[2], ' ', match[3], '-', last.substr(0, 2), '-', last.substr(2)].join('')
            }

            return null;
        },
        getDateStringFormat(order) {
            let orderDate = new Date(order.date);
            return [orderDate.getDate(), orderDate.getMonth() + 1, orderDate.getFullYear()]
                .map(n => n < 10 ? `0${n}` : `${n}`).join('.');
        },
    }
}