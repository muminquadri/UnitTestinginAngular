import { HeroesComponent } from "./heroes.component";
import { ConstantPool } from "@angular/compiler";
import { of } from "rxjs";

describe('HeroesComponent', ()=>{
    let component : HeroesComponent;
    let HEROES;
    let mockHeroService;
    beforeEach(()=>{
        HEROES =[
            {id:1, name:'IronMan', strength:8},
            {id:2, name:'Batman', strength:8},
            {id:3, name:'CaptainAmerica', strength:7},
            {id:4, name:'SuperMan', strength:9}
        ]
        mockHeroService= jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);
        component = new HeroesComponent(mockHeroService);
    })
    describe('delete',()=>
    {
        it('should remove the indicated hero from the heroes list',()=>{
            //Arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes=HEROES;
            //Act
            component.delete(HEROES[2]);
            //Assert
            expect(component.heroes.length).toBe(3);
        })
        it('should call deleteHero in mockHeroService with the correct parameter',()=>{
            //Arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes=HEROES;
            //Act
            component.delete(HEROES[2]);
            //Assert
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })    
})