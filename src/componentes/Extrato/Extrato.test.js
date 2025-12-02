import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Extrato from './index';

test('It should render a list of transactions.', () => {
    const transactions = [
        {
            transacao: 'Depósito',
            valor: 100,
        },
    ];

    render(<Extrato transacoes={transactions} />);
    const list = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
});
