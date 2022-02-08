import { Job } from 'bull';
import { Process, Processor } from '@nestjs/bull';
import { MailListService } from './mail-list.service';

@Processor('emails')
export class SendMailTweetsJob {
  constructor(private mailListService: MailListService) {}
  @Process()
  async handle(job: Job) {
    const MailList = await this.mailListService.findOne();
    console.log(MailList.emails);
    console.log('Kafka para enviar a mensagem para o Wesley');
  }
}