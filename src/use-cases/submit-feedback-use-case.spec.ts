import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

//spies
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy},
  { sendMail: sendMailSpy}
  )

describe('Submit feedback', ()=>{
    it('should be able to submit a feedback', async () => {
   
      await expect(submitFeedback.execute({
        type: 'example BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,auehoiauejoiuajeouage'
      })).resolves.not.toThrow();

      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();
    });


    it('should not be able to submit feedback without a type', async () => {
          await expect(submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,auehoiauejoiuajeouage'
      })).rejects.toThrow();
    });

    it('should not be able to submit feedback without a comment', async () => {
      await expect(submitFeedback.execute({
    type: 'example type',
    comment: '',
    screenshot: 'data:image/png;base64,auehoiauejoiuajeouage'
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback with a invalid screenshot', async () => {
    await expect(submitFeedback.execute({
  type: 'BUG',
  comment: 'tá tudo bugado',
  screenshot: '123'
  })).rejects.toThrow();
});

});