import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CollectionService} from '../collection.service';
import {Collection} from '../collection.model';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.css']
})
export class CollectionEditComponent implements OnInit {
  id: number;
  editMode = false;
  collectionForm: FormGroup;

  constructor(private route: ActivatedRoute, private service: CollectionService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.id = +params['id']; this.editMode = params['id'] != null; this.initForm(); });
  }

  onSubmit() {
    const newCollection =  new Collection(this.collectionForm.value['name'], this.collectionForm.value['description'], this.collectionForm.value['image'], this.collectionForm.value['funkos']);
    if (this.editMode) {
      this.service.updateCollection(this.id, this.collectionForm.value);
    } else {
      this.service.addCollection(this.collectionForm.value);
    }
    this.onCancel();
  }

  onAddFunko() {
    (<FormArray> this.collectionForm.get('funkos')).push(new FormGroup({ 'name': new FormControl(null, Validators.required),
      'price': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])}));
  }

  onDeleteFunko(index: number) {
    (<FormArray> this.collectionForm.get('funkos')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray> this.collectionForm.get('funkos')).controls;
  }

  private initForm() {
    let collectionName = '';
    let collectionImage = '';
    let collectionDescription = '';
    let collectionFunkos = new FormArray([]);

    if (this.editMode) {
      const collection = this.service.getCollect(this.id);
      collectionName = collection.name;
      collectionDescription = collection.description;
      collectionImage = collection.image;
      if (collection['funkos']) {
        for (let funko of collection.funkos) {
          collectionFunkos.push(new FormGroup({
            'name': new FormControl(funko.name, Validators.required),
            'price': new FormControl(funko.price, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.collectionForm = new FormGroup({
      'name': new FormControl(collectionName, Validators.required),
      'image': new FormControl(collectionImage, Validators.required),
      'description': new FormControl(collectionDescription, Validators.required),
      'funkos': collectionFunkos
    });
  }

}
