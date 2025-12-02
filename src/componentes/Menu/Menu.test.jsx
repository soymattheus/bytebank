import { render, screen } from "@testing-library/react";
import Menu from './index';

test('It shall render a link to hame page', () => {
    render(<Menu />)
    const link = screen.getByText('Inicial');
    expect(link).toBeInTheDocument();
});

test('It shall render a list of links', () => {
    render(<Menu />)
    const linksList = screen.getAllByRole('link');
    expect(linksList).toHaveLength(4);
});

test("It shan't render link to extract", () => {
    render(<Menu />)
    const extractLink = screen.queryByText('extrato');
    expect(extractLink).not.toBeInTheDocument();
});

test('It shall render a list of links with className link', () => {
    render(<Menu />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => expect(link).toHaveClass('link'))
    expect(links).toMatchSnapshot()
})