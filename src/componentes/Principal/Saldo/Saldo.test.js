import { render, screen } from '@testing-library/react';
import Saldo from './index';

test('It should render the formatted balance value', () => {
    render(<Saldo saldo={1000} />);
    const balance = screen.getByTestId('saldo');
    expect(balance).toHaveTextContent('R$ 1000');
});
