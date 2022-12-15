import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Storage , ref, uploadBytes} from '@angular/fire/storage';
import { UserService } from 'src/app/services/user.service';
import { doc, getDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { getDownloadURL, listAll } from 'firebase/storage';


@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {

  alumno: Alumno[];
  formulario: FormGroup;
  images: string[];
  

  constructor(
    private firestore: Firestore,
    private userService: UserService,
    private alumnoService: AlumnoService,
    private storage: Storage,
  
  ) { 
    this.formulario = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      image: new FormControl()
    })
    this.alumno =[{
      name: 'Daniel',
      lastName: 'Arancibia',
      image: '...',
      description: 'Evolution',
      uid: '...'
    }],
    this.images = [];
  }

  //muestra los alumnos guardados
  ngOnInit(): void {
    this.alumnoService.getAlumno().subscribe(alumno =>{
      console.log(alumno);
    }),
    this.getImages();
    
  }

  //Sube imagen y la guarda en el firebase
  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  //recuperamos la imagen
  getImages(){
    const imageRef = ref(this.storage, 'images');
    listAll(imageRef)
    .then(async response =>{
      console.log(response);
      this.images = [];
      for (let item of response.items){
        const url = await getDownloadURL(item);
        console.log(url);
        this.images.push(url);
      }
    })
    .catch(error => console.log(error));
  }



  //actualiza el alumno (error en el ID)
  async onSubmit(alumno: Alumno){
    console.log(this.formulario.value)
    const response = await this.alumnoService.updateAlumno(this.formulario.value);
    console.log(response);
  }



 }
