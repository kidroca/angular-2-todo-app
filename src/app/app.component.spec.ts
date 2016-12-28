/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {Todo} from './todo';

let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                AppComponent
            ],
        });
        TestBed.compileComponents();
    });

    beforeEach(() => fixture = TestBed.createComponent(AppComponent));

    it('should create the app', async(() => {
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app works!'`, async(() => {
        let app = fixture.debugElement.componentInstance;
        expect(app.newTodo).toEqual(jasmine.any(Todo));
    }));

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Todos');
    }));
});
