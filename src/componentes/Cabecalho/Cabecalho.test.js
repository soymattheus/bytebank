import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('It shall tender user name', () => {
    render(<Cabecalho userName="Matheus Silva" />);
    const userName = screen.getByText('Matheus Silva');
    expect(userName).toBeInTheDocument();
});
