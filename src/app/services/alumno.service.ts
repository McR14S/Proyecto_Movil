import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, getDoc } from '@angular/fire/firestore';
import { getDocFromServer } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(
    private firestore: Firestore,
    ) { }

  //agrega
  editAlumno(alumno: Alumno){
    const placeRef = collection(this.firestore, 'alumno');
    return addDoc(placeRef, alumno);
  }

  //toma todos los alumnos
  getAlumno(): Observable<Alumno[]>{
    const placeRef = collection(this.firestore, 'alumno');
    return collectionData(placeRef, {idField: 'id'}) as Observable<Alumno[]>;
  }

  //actualiza
  updateAlumno(alumno: Alumno){
    const alumnoRef = doc(this.firestore,`alumno/${alumno.uid}`);
    console.log(alumno.uid);
    return updateDoc(alumnoRef, {
      name: `${alumno.name}`,
      lastName: `${alumno.lastName}`,
      image: `${alumno.image}`
    });
  }
  

}
