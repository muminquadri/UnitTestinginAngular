import { MessageService } from "./message.service";

describe('Message Service', ()=>{
    let service : MessageService;
    it('should have no messages to start',()=>{
        //Arrange
        service = new MessageService();
        //Act
        let val = service.messages.length;
        //Assert
        expect(val).toBe(0);
    })
    it('should add a message on calling add',()=>{
        //Arrange
        service = new MessageService();
        service.add('newMessage');
        //Act
        let val = service.messages.length;
        //Assert
        expect(val).toBe(1);
    })
    it('should remove all messages when clear is called',()=>{
        //Arrange
        service = new MessageService();
        service.add('newMessage');
        //Act
        service.clear();
        //Assert
        expect(service.messages.length).toBe(0);
    })
})