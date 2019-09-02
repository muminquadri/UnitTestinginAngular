import { HeroComponent } from "./hero.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });
    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperFunGuy', strength: 7 };

        expect(fixture.componentInstance.hero.name).toEqual('SuperFunGuy');
    })
    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperFunGuy', strength: 7 };
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperFunGuy');
        //expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperFunGuy');
    })
})