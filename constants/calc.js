const calc = (total_value, rate, qtd_portion) => {

    const valor_total = Math.round((total_value + (total_value * (rate / 100))) * 100) / 100;
    const valor_parcela = Math.round((valor_total / qtd_portion) * 100) / 100;

    return [valor_total, valor_parcela];
};

export default calc;
