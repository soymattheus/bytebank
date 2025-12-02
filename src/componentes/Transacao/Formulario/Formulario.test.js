import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('It should render an input field', () => {
    test('In the document', () => {
        render(<Formulario />);
        const fieldText = screen.getByPlaceholderText('Digite um valor');
        expect(fieldText).toBeInTheDocument();
    });

    test('With number type', () => {
        render(<Formulario />);
        const fieldText = screen.getByPlaceholderText('Digite um valor');
        expect(fieldText).toHaveAttribute('type', 'number');
    });

    test('That can be filled in.', () => {
        render(<Formulario />);
        const fieldText = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(fieldText, '30');
        expect(fieldText).toHaveValue(30);
    });
});

test('It should call an onSubmit event when you click on perform transaction.', () => {
    const carryOutTransaction = jest.fn();

    render(<Formulario realizarTransacao={carryOutTransaction} />);
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(carryOutTransaction).toHaveBeenCalledTimes(1);
});

describe('Test select', () => {
    test('It should be possible to select a option', () => {
        const carryOutTransaction = jest.fn();

        render(<Formulario realizarTransacao={carryOutTransaction} />);
        const select = screen.getByTestId('select-opcoes');
        expect(select).toBeInTheDocument();

        userEvent.selectOptions(select, 'Depósito');
        expect(select).toHaveValue('Depósito');
    });
});
