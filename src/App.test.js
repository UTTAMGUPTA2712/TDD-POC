import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Message from "./pages/Message";
describe(`<Message />`, () => {
  describe('clicking the send button', () => {
    async function sendMessage() {
      render(<Message />);

      await userEvent.type(
        waitFor(() => screen.getByTestId('messageText')),
        'New message',
      );
      const cleanButton = await waitFor(() => screen.getByTestId('sendButton'))
      userEvent.click(cleanButton);
    }

    it('clears the text field', async () => {
      await sendMessage(); 
      expect(screen.getByTestId('messageText').value).toBe('')
    });
  });
});