// class Insan {
//   constructor(name, surname, yil) {
//     this.ad = name;
//     this.soyad = surname;
//     this.tevellud = yil;
//   }
//   yasiHesabla() {
//     const yas = new Date().getFullYear().toString() - this.tevellud;
//     console.log(yas);
//     return yas;
//   }
//   bilgilerigoster() {
//     console.log(` adi: ${this.ad}, soyadi: ${this.soyad}, yasi: ${this.yas}`);
//     console.log(this);
//   }
// }

// class Enterpenur extends Insan {
//   bilgilerigoster() {
//     console.log(`${this.ad} , ${this.soyad}, ${this.tevellud}`);
//   }
// }

// const hesen = new Enterpenur("hesen", "hesenov", 1919);

// const insan1 = new Insan("hesen", "hesennov", 20);
// insan1.tevellud = 21;
// insan1.bilgilerigoster();
// insan1.yasiHesabla();
// console.log(insan1.soyad);

class Person {
  firstname = "hesen";

  write() {
    console.log(this.firstname);
  }
}
const hesen = new Person()
hesen.write()

class Studnet extends Person {
    write(){
        console.log(this.firstname);
    }
}
//null
const student1 = new Studnet()

student1.write()