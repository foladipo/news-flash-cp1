import firebase from 'firebase';
import chai from 'chai';
import dotenv from 'dotenv';
import getFirebaseApp from '../../src/js/util/getFirebaseApp';

dotenv.config();
const expect = chai.expect;

describe('getFirebaseApp()', () => {
  it('should be defined', () => {
    expect(getFirebaseApp).to.not.equal(undefined);
  });
});

describe('When called, getFirebaseApp()', () => {
  const app = getFirebaseApp();
  it('should return an instance of firebase.app', () => {
    expect(app instanceof firebase.app.App).to.equal(true);
  });

  const initWith = 'should return a firebase app that was initialized with';
  it(`${initWith} the name: [DEFAULT]`, () => {
    expect(app.name).to.equal('[DEFAULT]');
  });

  const appOptions = app.options;
  it(`${initWith} an API key of: ${process.env.FIREBASE_API_KEY}`, () => {
    expect(appOptions.apiKey).to.equal(process.env.FIREBASE_API_KEY);
  });

  it(`${initWith} a project ID of: ${process.env.FIREBASE_PROJECT_ID}`, () => {
    expect(appOptions.projectId).to.equal(process.env.FIREBASE_PROJECT_ID);
  });

  it(`${initWith} a database url of: ${process.env.FIREBASE_DB_URL}`, () => {
    expect(appOptions.databaseURL).to.equal(process.env.FIREBASE_DB_URL);
  });

  it(`${initWith} a storage bucket address
     of: ${process.env.FIREBASE_STORAGE_BUCKET}`, () => {
    expect(appOptions.storageBucket).to.equal(process.env.FIREBASE_STORAGE_BUCKET);
  });

  it(`${initWith} an auth domain address
     of: ${process.env.FIREBASE_AUTH_DOMAIN}`, () => {
    expect(appOptions.authDomain).to.equal(process.env.FIREBASE_AUTH_DOMAIN);
  });
});
