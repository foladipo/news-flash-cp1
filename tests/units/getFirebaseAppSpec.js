import firebase from 'firebase';
import chai from 'chai';
import dotenv from 'dotenv';
import getFirebaseApp from '../../src/js/other/getFirebaseApp';

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

  it('should return a firebase app with name [DEFAULT]', () => {
    expect(app.name).to.equal('[DEFAULT]');
  });

  const appOptions = app.options;
  it(`should return a firebase app with API key: ${process.env.FIREBASE_API_KEY}`, () => {
    expect(appOptions.apiKey).to.equal(process.env.FIREBASE_API_KEY);
  });

  it(`should return a firebase app with project ID: ${process.env.FIREBASE_PROJECT_ID}`, () => {
    expect(appOptions.projectId).to.equal(process.env.FIREBASE_PROJECT_ID);
  });

  it(`should return a firebase app with DB url: ${process.env.FIREBASE_DB_URL}`, () => {
    expect(appOptions.databaseURL).to.equal(process.env.FIREBASE_DB_URL);
  });

  it(`should return a firebase app with storage bucket: ${process.env.FIREBASE_STORAGE_BUCKET}`, () => {
    expect(appOptions.storageBucket).to.equal(process.env.FIREBASE_STORAGE_BUCKET);
  });

  it(`should return a firebase app with auth domain: ${process.env.FIREBASE_AUTH_DOMAIN}`, () => {
    expect(appOptions.authDomain).to.equal(process.env.FIREBASE_AUTH_DOMAIN);
  });
});
