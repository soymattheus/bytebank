import { render, screen } from '@testing-library/react';
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
