import { NgModule } from '@angular/core';
import {MatCardModule , MatButtonModule , MatProgressBarModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    imports: [MatCardModule , MatButtonModule , MatProgressBarModule , MatRadioModule],
    exports: [MatCardModule , MatButtonModule , MatProgressBarModule , MatRadioModule],
})
export class MaterialPack {}