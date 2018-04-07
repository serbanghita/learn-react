import {IUserData} from "./App";

export default class LocalStorage {

  private static instance: LocalStorage;

  constructor() {
    // Singleton.
  }

  static get Instance() {
    if (this.instance === null || typeof this.instance === "undefined") {
      this.instance = new LocalStorage();
    }
    return this.instance;
  }

  public syncProfile(userData: IUserData): LocalStorage {
    const dbResult = localStorage.getItem(`playerProfiles`);
    const profiles = dbResult ? JSON.parse(dbResult) : {};
    let profile: IUserData = profiles && profiles[userData.username] ? profiles[userData.username] : {};

    profile = Object.assign(profile, userData);
    profiles[userData.username] = profile;

    localStorage.setItem(`playerProfiles`, JSON.stringify(profiles));

    return this;
  }

  public getProfile(username: string): IUserData | undefined {
    const dbResult = localStorage.getItem(`playerProfiles`);
    const profiles = dbResult ? JSON.parse(dbResult) : {};

    if (profiles && profiles[username]) {
      return profiles[username];
    } else {
      return;
    }
  }

}
