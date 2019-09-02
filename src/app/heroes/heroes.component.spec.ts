import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;
    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'IronMan', strength: 8 },
            { id: 2, name: 'Batman', strength: 8 },
            { id: 3, name: 'CaptainAmerica', strength: 7 },
            { id: 4, name: 'SuperMan', strength: 9 }
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        component = new HeroesComponent(mockHeroService);
    })
    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            //Arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            //Act
            component.delete(HEROES[2]);
            //Assert
            expect(component.heroes.length).toBe(3);
        })
        it('should call deleteHero in mockHeroService with the correct parameter', () => {
            //Arrange
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            //Act
            component.delete(HEROES[2]);
            //Assert
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })
})

describe('Heroes Component', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;
    @Component({
        selector: 'app-hero',
        template: '<div></div>'
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
        //@Output() delete = new EventEmitter();
    }
    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        HEROES = [
            { id: 1, name: 'IronMan', strength: 8 },
            { id: 2, name: 'Batman', strength: 8 },
            { id: 3, name: 'CaptainAmerica', strength: 7 },
            { id: 4, name: 'SuperMan', strength: 9 }
        ]
        TestBed.configureTestingModule({
            declarations: [HeroesComponent,
                FakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
            //  schemas:[NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    })
    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(4);
    })
    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(4);
    })
})