import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Transacoes from './index';
import estilos from '../Extrato.module.css';

test('It should render the same component with updated props.', () => {
    const transaction = {
        transacao: 'Depósito',
        valor: 100,
    };

    const { rerender } = render(
        <Transacoes estilos={estilos} transacao={transaction} />,
    );
    const typeTransaction = screen.getByTestId('tipoTransacao');
    const valueTransaction = screen.getByTestId('valorTransacao');

    expect(typeTransaction).toHaveTextContent('Depósito');
    expect(valueTransaction).toHaveTextContent('R$ 100');

    const newTransaction = {
        transacao: 'Transferência',
        valor: 50,
    };

    rerender(<Transacoes estilos={estilos} transacao={newTransaction} />);

    const newTypeTransaction = screen.getByTestId('tipoTransacao');
    const newValueTransaction = screen.getByTestId('valorTransacao');

    expect(newTypeTransaction).toHaveTextContent('Transferência');
    expect(newValueTransaction).toHaveTextContent('- R$ 50');
});
