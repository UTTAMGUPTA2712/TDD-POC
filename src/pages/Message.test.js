import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Message from "./Message";
describe(`<Message />`, () => {
    describe('clicking the send button', () => {
      async function sendMessage() {
        render(<Message />);
  
        await userEvent.type(
          screen.getByTestId('messageText'),
          'New message',
        );
        userEvent.click(screen.getByTestId('sendButton'));
      }
  
      it('clears the text field', async () => {
        await sendMessage();
        expect(screen.getByTestId('messageText').value).toEqual('');
      });
    });
  });