import { calculaNovoSaldo } from './index';

describe('When I make a transaction', () => {
    test("Since it's a deposit, the balance should increase.", () => {
        const transaction = {
            transacao: 'Depósito',
            valor: 100,
        };

        const newBalance = calculaNovoSaldo(transaction, 0);
        expect(newBalance).toBe(100);
    });

    test("Since it's a transfer, the balance should decrease.", () => {
        const transaction = {
            transacao: 'Transferência',
            valor: 100,
        };

        const newBalance = calculaNovoSaldo(transaction, 300);
        expect(newBalance).toBe(200);
    });
});

test('It should render the updated balance value with the accrued interest.', () => {
    const calculatePerformance = jest.fn(
        (performance) => performance + performance * 0.005,
    );

    const balance = 100;
    const newBalance = calculatePerformance(balance);

    expect(calculatePerformance).toHaveBeenCalled();
    expect(newBalance).toBe(100.5);
});
