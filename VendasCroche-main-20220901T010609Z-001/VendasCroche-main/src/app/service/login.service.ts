import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private storage: Storage;;
  constructor() {
    this.storage = window.localStorage;
  }


  setLogin(objLogin: any) {
    this.storage.setItem("CzarLogin", JSON.stringify(objLogin));
  }

  setUsersTest(objUsers: any) {
    this.storage.setItem("CzarUsers", JSON.stringify(objUsers));
  }

  setRegisterTest(objRegister: any) {
    let dt = this.getUsersTest();
    dt.push(objRegister);
    this.storage.setItem("CzarUsers", JSON.stringify(dt));
  }

  getUsersTest(): any {
    if (this.storage) {
      let data = this.storage.getItem("CzarUsers")
      let store = JSON.parse(data as string);

      return store;
    }
    return null;
  }

  veryfiLoginUsersTest(dataLogin: any): any {
    let allUsers = this.getUsersTest();

    console.log(dataLogin)
    console.log(allUsers)


    for (const iterator of allUsers) {
      console.log(iterator);
      if (dataLogin.email == iterator.email && dataLogin.password == iterator.password) {
        this.setLogin(iterator);
        return true;
      } 

    }
    return false;
  }




  get(): any {
    if (this.storage) {
      let data = this.storage.getItem("CzarLogin")
      console.log(data)
      let store = JSON.parse(data as string);
      return store;
    }
    return null;
  }

  remove(): boolean {
    if (this.storage) {
      this.storage.removeItem("CzarLogin");
      return true;
    }
    return false;
  }

}
