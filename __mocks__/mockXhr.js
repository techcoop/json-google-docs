export const createMockXHR = (data) => {
  return {
    open: jest.fn(),
    send: jest.fn(),
    readyState: 4,
    responseText: JSON.stringify(
        data || {}
    )
  }
}
