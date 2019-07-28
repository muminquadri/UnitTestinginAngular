import { StrengthPipe } from "./strength.pipe";

describe('Strength Pipe', () => {
    it('should display weak if strength is 3', () => {
        //Arrange
        let pipe = new StrengthPipe();
        //Act
        let val = pipe.transform(3);
        //Assert
        expect(val).toEqual('3 (weak)');

    })
    it('should display strong if strength is 12', () => {
        //Arrange
        let pipe = new StrengthPipe();
        //Act
        let val = pipe.transform(12);
        //Assert
        expect(val).toEqual('12 (strong)');

    })
})