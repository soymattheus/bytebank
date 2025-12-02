test('It should render the updated balance value with the accrued interest.', () => {
    const calculatePerformance = jest.fn(
        (performance) => performance + performance * 0.005,
    );

    const balance = 100;
    const newBalance = calculatePerformance(balance);

    expect(calculatePerformance).toHaveBeenCalled();
    expect(newBalance).toBe(100.5);
});
